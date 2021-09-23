function DOMtoString(document_root) {
	let images = document.getElementsByTagName('img');
	let srcList = [];
	for (let i = 0; i < images.length; i++) {
		srcList.push(images[i].src);
	}
    console.log(srcList)

    return JSON.stringify(srcList);
	// let html = '';
	// let node = document_root.firstChild;
	// const imagesArr = document_root.images.attributeSrc;
	// console.log('images', document_root.images);
	// return imagesArr;

	// while (node) {
	// 	switch (node.nodeType) {
	// 		case Node.:
	//             console.log('node',node)
	// 			html += node.outerHTML;
	// 			break;
	// 		case Node.TEXT_NODE:
	// 			html += node.nodeValue;
	// 			break;
	// 		case Node.CDATA_SECTION_NODE:
	// 			html += '<![CDATA[' + node.nodeValue + ']]>';
	// 			break;
	// 		case Node.COMMENT_NODE:
	// 			html += '<!--' + node.nodeValue + '-->';
	// 			break;
	// 		case Node.DOCUMENT_TYPE_NODE:
	// 			// (X)HTML documents are identified by public identifiers
	// 			html +=
	// 				'<!DOCTYPE ' +
	// 				node.name +
	// 				(node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') +
	// 				(!node.publicId && node.systemId ? ' SYSTEM' : '') +
	// 				(node.systemId ? ' "' + node.systemId + '"' : '') +
	// 				'>\n';
	// 			break;
	// 	}
	// 	node = node.nextSibling;
	// }
	// return html;
}

chrome.runtime.sendMessage({
	action: 'getSource',
	source: DOMtoString(document),
});

// console.log('in get images');
// Array.prototype.map.call(document.images, function (i) {
// 	console.log('image', i.src);
// });

// const findAllImages = () => {
// 	const images = Array.from(document.getElementsByTagName('img'));
// 	return images;
// };

// const extractImageSources = (images) => {
// 	const sources = [];

// 	for (let i = 0; i < images.length; i++) {
// 		sources.push(images[i].src);
// 	}

// 	return sources;
// };

// const populateUL = (imageSources) => {
// 	const imagesUL = document.getElementById('images-list');

// 	let img = null;

// 	for (let i = 0; i < imageSources; i++) {
// 		img = document.createElement('img');
// 		img.src = imageSources[i];
// 		imagesUL.append(img);
// 	}
// };

// const images = findAllImages();
// console.log('images:::', images);
// const imageSources = extractImageSources(images);

// populateUL(imageSources);

// console.log('Finished gathering images!');
