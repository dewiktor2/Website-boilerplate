if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('./service-worker.js')
        // eslint-disable-next-line no-console
            .then(() => console.log('service worker registered'))
        // eslint-disable-next-line no-console
            .catch((err) => console.log('service worker not registered', err));
    });
}

// Test import of a JavaScript module
import { example } from '@/js/page';

// Test import of an asset
import webpackLogo from '@/images/webpack-logo.svg';

// Test import of styles
import '@/styles/index.scss';

// Appending to the DOM
const logo = document.createElement('img');
logo.src = webpackLogo;

const heading = document.createElement('h1');
heading.textContent = example();

const app = document.querySelector('#root');
app.append(logo, heading);
