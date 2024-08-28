/**
 * imports
 */
export function background() {
  return "background";
}

// replace with your own welcome page url
const onInstallUrl = "https://www.sebastian-gomez.com";

// this runs when the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    chrome.tabs.create({ url: onInstallUrl });
  }
});
