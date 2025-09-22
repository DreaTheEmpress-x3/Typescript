import './style.scss'
import data from '../assets/json/data.json'
import View from './View'

// Ensure your TypeScript config allows JSON imports and View is implemented
(() => {
  console.log(data);
  new View(data);
})();
