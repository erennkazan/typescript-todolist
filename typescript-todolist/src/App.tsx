import React,{FC} from 'react';
import './App.css';

const App : FC = () => {
  return (
    <div className="App">
      <div>
        <input type="text" placeholder='Taskınızı Giriniz...' />
        <input type="number" placeholder='Kaç Günde Tamamlamalısınız?' />

      </div>
    </div>
  );
}

export default App;
