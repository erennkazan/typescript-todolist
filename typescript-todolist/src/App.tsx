import React,{ChangeEvent, FC} from 'react';
import './App.css';
import { useState } from 'react';
const App : FC = () => {
  const [task, setTask] = useState<string>('');
  const [workDay, setWorkDay] = useState<number>(0);

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "task"){
      setTask(event.target.value);
    }
    else {
      setWorkDay(Number(event.target.value));
    }
  };
  return (
    <div className="App">
      <div>
        <input 
        type="text" 
        value={task} 
        name="task"
        placeholder='Taskınızı Giriniz...'
        onChange={handleChange} />
        <input 
        type="number" 
        value={workDay} 
        name="workDay"
        placeholder='Kaç Günde Tamamlamalısınız?' 
        onChange={handleChange}/>
        <button>Yeni Task Ekle</button>
      </div>
    </div>
  );
}

export default App;
