
const colourTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'auto');

document.documentElement.setAttribute('data-bs-theme', colourTheme);

const urlQuery = window.location.search;

const urlQueryParams = new URLSearchParams(urlQuery);

const overrideTheme = urlQueryParams.get('theme');

if (!!overrideTheme) {
	
	switch (overrideTheme) {
			
		case 'dark':
			document.documentElement.setAttribute('data-bs-theme', 'dark');
			break;
			
		case 'light':
			document.documentElement.setAttribute('data-bs-theme', 'light');
			break;
			
	}
	
}
