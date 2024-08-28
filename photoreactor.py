import json
import shutil
import time

from playwright.sync_api import Page, expect
from playwright.sync_api import sync_playwright


APP_LOCAL_URL = "http://localhost:5173/"
APP_REMOTE_URL = "https://photoreactor.redpapr.com/"


def record_screencast(script_json, resolution, screenshot_file_path):
	with sync_playwright() as playwright:
		browser = playwright.chromium.launch(headless=True)
		context = browser.new_context(viewport=resolution)
		print("\tCreated browser context")

		page = context.new_page()
		t1 = time.time()
		print("\tCreated new page")
		page.set_default_timeout(0)
		page.goto(APP_REMOTE_URL)
		t2 = time.time()
		td = round(t2-t1, 1)
		print(f"\tOpened photoreactor in {td} seconds")

		page.locator("#inputTextArea").fill(script_json)
		page.locator("#renderButton").click()
		page.wait_for_timeout(1000) # ensures that renderer has started
		page.screenshot(path=screenshot_file_path);

		page.close()
		context.close()
		browser.close()

		print(f"\t\tSaved screenshot: {screenshot_file_path}")


def main():
	script = {
		"title":"Example",
		"height":"1080px",
		"width":"1080px",
		"padding":"200px 100px",
		"backgroundColor":"#dc2626",
		"color":"#eee",
		"fontFamily":"Ubuntu",
		"fontWeight":"700",
		"borderColor":"#ef4444",
		"borderWidth":"10px",
		"borderStyle":"solid",
		"nodes":[
			{"text":"Photoreactor","fontSize":"120px"},
			{"text":"Taking Screenshots with Python","fontSize":"48px", "padding": "80px 0px"},
			{"text":"Created by Ankur Seth", "fontSize":"32px", "padding": "400px 0px 0px 0px"}
		]
	}

	script_json = json.dumps(script)
	resolution = {
		'height': 1080,
		'width': 1080
	}
	screenshot_file_path = "screenshot.png"

	record_screencast(script_json, resolution, screenshot_file_path)


if __name__ == '__main__':
	main()
