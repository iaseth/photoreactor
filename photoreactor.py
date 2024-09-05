import json
import os
import shutil
import sys
import time

from playwright.sync_api import Page, expect
from playwright.sync_api import sync_playwright


APP_LOCAL_URL = "http://localhost:5173/"
APP_REMOTE_URL = "https://photoreactor.redpapr.com/"


def record_screencast(script_json, resolution, screenshot_file_path):
	with sync_playwright() as playwright:
		browser = playwright.chromium.launch(headless=True)
		context = browser.new_context(viewport=resolution)
		print(f"\tCreated a {resolution['width']}x{resolution['height']} browser context")

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
	args = sys.argv[1:]
	if len(args) < 2:
		print(f"Usage:\n\tpython3 photoreactor.py script.json screenshot.png")
		return

	script_json_path = args[0]
	screenshot_file_path = args[1]

	if not script_json_path.endswith('.json'):
		print(f"Script must be a JSON file: '{script_json_path}'")
		return
	elif not os.path.isfile(script_json_path):
		print(f"Script not found: '{script_json_path}'")
		return

	with open(script_json_path) as f:
		script_json = f.read()
		script = json.loads(script_json)

	if not screenshot_file_path.endswith('.png'):
		print(f"Screenshot must be a PNG file: '{screenshot_file_path}'")
		return
	elif os.path.isfile(screenshot_file_path):
		print(f"Screenshot exists: '{screenshot_file_path}'")
		response = input(f"Do you want to overwrite? (y/n) ")
		if response != "y": return

	try:
		height = int(script['height'][:-2])
		width = int(script['width'][:-2])
	except Exception as e:
		height = 1080
		width = 1080

	resolution = {
		'height': height,
		'width': width
	}

	record_screencast(script_json, resolution, screenshot_file_path)


if __name__ == '__main__':
	main()
