const MENU_ITEM_ID = 'cevio-read-it';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ITEM_ID,
    title: 'CeVIO read it',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener((item) => {
  if (item.menuItemId === MENU_ITEM_ID) {
    fetch(`http://localhost:50080/talk?text=${item.selectionText}`, {
      method: 'GET',
      mode: 'no-cors',
    });
  }
});
