import './panel.js';

const panelEle = document.querySelector('sh-panel');
panelEle.title = 'Custom Panel Title';
panelEle.addEventListener('toggle', event => console.log(event));

document
  .querySelector('#toggle-panel-btn')
  .addEventListener('click', () => panelEle.togglePanel());
