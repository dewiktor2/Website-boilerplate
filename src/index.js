// // Test import of styles
import '@/styles/index.scss';
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('./service-worker.js')
        // eslint-disable-next-line no-console
            .then(() => console.log('service worker registered'))
        // eslint-disable-next-line no-console
            .catch((err) => console.log('service worker not registered', err));
    });
}
