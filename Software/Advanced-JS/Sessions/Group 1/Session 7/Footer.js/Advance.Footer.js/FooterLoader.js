// FooterLoader.js – invokes FooterComponent.load on DOM ready

document.addEventListener('DOMContentLoaded', function () {
  if (window.FooterComponent && typeof window.FooterComponent.load === 'function') {
    window.FooterComponent.load();
  } else {
    console.error('FooterComponent not found. Did you include FooterComponent.js?');
  }
});