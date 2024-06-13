import React from 'react';
import { CardInfo } from './components/CardInfo/CardInfo'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'

function App() {
  const state = useSelector((state: RootState) => state.cardSlice);
  return (
    <div className="App">
     <CardInfo info={state}/>
    </div>
  );
}

export default App;
