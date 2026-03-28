
document.addEventListener("DOMContentLoaded", async () => {
	const figures = document.getElementsByTagName('figure');
	let n = 1;
	for (let f=0; f<figures.length; f++) {
		const id = figures[f].id;
		const captions = document.querySelectorAll('#' + id + ' figcaption');
		if (!!captions) {
			const caption = captions[0];
			caption.innerHTML = "Figure " + n '. ' + caption.innerHTML;
			const links = document.querySelectorAll('a[href="#' + id + '"]');
			links.forEach(link => {
				link.innerHTML = "Figure " + n;
			});
			n++;
		}
	}
});
