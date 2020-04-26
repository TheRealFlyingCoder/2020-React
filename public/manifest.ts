import { ManifestOptions } from "webpack-pwa-manifest";
import path from 'path';

const Manifest: ManifestOptions = {
	name: 'DD APAC React',
	short_name: 'DDAPACReact',
	start_url: '/',
	display: 'standalone',
	orientation: 'portrait',
	background_color: '#121212',
	theme_color: '#86BC25',
	'theme-color': '#86BC25',
  description: 'The perfect react boilerplate for you.',
  icons: [
    {
      src: path.resolve('public/icons/icon.png'),
      destination: 'icons',
      sizes: [48, 96, 128, 192] // multiple sizes
    },
  ]
};

export default Manifest;