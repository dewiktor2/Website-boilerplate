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

// eslint-disable-next-line no-unused-vars
function navigate(link) {
  // eslint-disable-next-line no-undef
  if (BASE_URL) {
    // eslint-disable-next-line no-undef
    window.location = `${BASE_URL}/${link}`;
  } else {
    window.location = link;
  }
}
window.navigate = navigate;
