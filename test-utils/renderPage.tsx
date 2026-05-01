import { render } from "@testing-library/react";
import type { ReactElement } from "react";

export async function renderPage(page: Promise<ReactElement> | ReactElement) {
  render(await page);
}
