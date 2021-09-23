// chrome.browserAction.onClicked.addListener((tab) => {
// 	chrome.extension.getBackgroundPage().console.log(tab.html);
// });

chrome.runtime.onMessage.addListener(function (request, sender) {
    if (request.action === 'getSource') {
        let imagesUL = document.querySelector('#images-list');
        let imagesArr = JSON.parse(request.source);
        let li;
        let img;

        imagesArr.forEach(src => {
            li = document.createElement('li');
            img = document.createElement('img');
            img.src = src;

            if (img.width !== 0 && img.height !== 0) {
                li.append(img);
                imagesUL.append(li)
            }
        })
	}
});

function onWindowLoad() {
	let imagesUL = document.querySelector('#images-list');

	chrome.tabs.executeScript(
		null,
		{
			file: 'get-images.js',
		},
		function () {
			// If you try and inject into an extensions page or the webstore/NTP you'll get an error
			if (chrome.runtime.lastError) {
                let li = document.createElement('li');
				li.innerText =
					'There was an error injecting script : \n' +
					chrome.runtime.lastError.message;
                imagesUL.append(li)
			}
		}
	);
}

window.onload = onWindowLoad;
