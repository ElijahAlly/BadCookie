// console.log('options:::');

// console.log('popup:::');

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

// document.addEventListener('DOMContentLoaded', () => {
// 	const images = findAllImages();
// 	console.log('Image Count: ', images.length);
// 	const imageSources = extractImageSources(images);

// 	populateUL(imageSources);

// 	console.log('Finished gathering images!');
// });
