// Supposed to Called when the user clicks on the browser action icon.

// chrome.browserAction.onClicked.addListener((tab) => {
// 	browser.extension.getBackgroundPage().console.log('hello');
// });

// chrome.tabs.query({ active: true, currentWindow: true }).then(([tab]) => {
// 	chrome.scripting.executeScript({
// 		target: { tabId: tab.id },
// 		function: () => {
// 			chrome.storage.sync.get(['msg'], ({ msg }) => {
// 				console.log(`${msg}`);
// 				alert(`Command: ${msg}`);
// 			});
// 		},
// 	});
// });

// chrome.action.onClicked.addListener(function(tab) {
// 	chrome.tabs.executeScript(tab.ib, {
// 		file: 'get-images.js',
// 	});
// });
