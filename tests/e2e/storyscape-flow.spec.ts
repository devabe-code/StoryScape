import { expect, test } from "@playwright/test";

test("reader can browse, start Dracula, use soundscape, and return to continue reading", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "StoryScape" })).toBeVisible();
  await page.getByRole("link", { name: /browse library/i }).click();

  await expect(page.getByRole("heading", { name: /curated classics/i })).toBeVisible();
  await page.getByRole("link", { name: /view dracula/i }).click();

  await expect(page).toHaveURL(/\/books\/dracula$/);
  await expect(page.locator("h1", { hasText: "Dracula" })).toBeVisible();
  await page
    .getByRole("main")
    .getByRole("link", { name: /episode 1/i })
    .click();

  await expect(page.getByRole("heading", { name: "Jonathan Harker's Journal" })).toBeVisible();
  await page.getByRole("button", { name: /play soundscape/i }).click();
  await expect(page.getByRole("button", { name: /pause soundscape/i })).toBeVisible();

  await page.getByRole("link", { name: "StoryScape" }).click();
  await expect(page.getByRole("heading", { name: /continue reading/i })).toBeVisible();
  await expect(page.getByText("18% complete")).toBeVisible();
});
