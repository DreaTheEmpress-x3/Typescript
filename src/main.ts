import './style.scss'
// import data from '../assets/json/data.json'
// import View from './View'
import PlayGround from './PlayGround';

// Ensure your TypeScript config allows JSON imports and View is implemented
( async() => {

  new PlayGround();

  // const response = await fetch('../assets/json/data.json');

  // if (!response.ok) throw new Error('HTTP error~ status:${response.status}');

  // const data =await response.json();

  // if (data) new View(data);
})();
