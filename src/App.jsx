import './App.css'
import OptionsSelection from './components/OptionSelection';
import { arrayItems } from './AIOptions/index';

export default function App() {
  const selectOption = (option) => {
    console.log(option);
  }
  return (
    <div className="App">
     <OptionsSelection arrayItems={arrayItems} selectOption={selectOption}/>
    </div>
  );
}

