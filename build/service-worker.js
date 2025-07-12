// service-worker.js
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .then(() => console.log("Extension loaded"))
  .catch((error) => console.error(error));
