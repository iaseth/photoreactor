
# Photoreactor
Photoreactor is a `React` webapp that allows you to specify document structure
using JSON scripts, and renders it as HTML in the browser.

The combination of Photoreactor and Playwright can be useful for
creating Thumbnails/Screenshots programmatically.

![First Example](png/first-example.png)

The above image was rendered using the following JSON script.

```json
{
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
    "children":[
        {"text":"Photoreactor","fontSize":"120px"},
        {"text":"Taking Screenshots with Python","fontSize":"48px", "padding": "80px 0px"},
        {"text":"Created by Ankur Seth", "fontSize":"32px", "padding": "400px 0px 0px 0px"}
    ]
}
```


## What is supported
Currently, all rendered elements are `div` and they can contain any number of children
and/or a single `text` node inside them.

The following CSS properties are supported on each element:

| Property          | CSS Name           |
| ----------------- | ------------------ |
| `backgroundColor` | `background-color` |
| `color`           | `color`            |
| `width`           | `width`            |
| `height`          | `height`           |
| `padding`         | `padding`          |
| `margin`          | `margin`           |
| `fontFamily`      | `font-family`      |
| `fontSize`        | `font-size`        |
| `fontWeight`      | `font-weight`      |
| `lineHeight`      | `line-height`      |
| `textAlign`       | `text-align`       |
| `borderColor`     | `border-color`     |
| `borderWidth`     | `border-width`     |
| `borderStyle`     | `border-style`     |
| `outlineColor`    | `outline-color`    |
| `outlineWidth`    | `outline-width`    |
| `outlineStyle`    | `outline-style`    |
| `position`        | `position`         |
| `top`             | `top`              |
| `right`           | `right`            |
| `bottom`          | `bottom`           |
| `left`            | `left`             |
| `zIndex`          | `z-index`          |



## What is not supported yet
The following features are not yet supported in Photoreact
but will be supported in future:

* Support for Tailwind classes (atleast the background/text/border color related ones)
* More CSS properties
* Images (uploaded/URLs)
* Videos (uploaded)
* Custom Fonts (especially Google Fonts)



## Capturing Screenshots Programmatically
The below script captures Screenshots using Python and Playwright.

```py
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
        "children":[
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

```


