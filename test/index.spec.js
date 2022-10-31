import {
  getByLabelText,
  getByText,
  getByTestId,
  queryByTestId,
  // Tip: all queries are also exposed on an object
  // called "queries" which you could import here as well
  waitFor,
  fireEvent,
  findByText,
} from "@testing-library/dom";

import { describe, test, expect } from "vitest";
import { readFile } from "fs/promises";

/**
 * @param {string} string
 * @returns
 */
function getDom(string) {
  const html = document.createElement("html");
  html.innerHTML = string.replace("<!DOCTYPE html>", "");

  return html;
}

describe("test", () => {
  test("read html", async () => {
    const dom = await readFile(`${__dirname}/../index.html`, "utf8");
    const container = getDom(dom);
    const div = getByText(container, "14");
  });
});
