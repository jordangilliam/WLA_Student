(function () {
  var yearNode = document.getElementById('year');
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
  // Basic smoke test
  if (typeof console !== 'undefined' && console.log) {
    console.log('WLA App: GitHub Pages bootstrap is ready.');
  }
})();


