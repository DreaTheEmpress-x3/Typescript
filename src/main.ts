import './style.scss'
import data from '../assets/json/data.json'
import View from './View'

(()=>{
  console.log(data)
  new View(data)
})
