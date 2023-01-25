import { useState } from 'react'
import './App.css'
import OptionsSelection from './components/OptionSelection';
import { arrayItems } from './AIOptions/index';


export default function App() {
  console.log(arrayItems);
  return (
    <div className="App">
     <OptionsSelection />
    </div>
  )
}