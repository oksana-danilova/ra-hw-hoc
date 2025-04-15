/* eslint-disable prefer-const */
import { useState } from 'react';
import SelectTask from './components/selectTask/SelectTask';
import './App.css';
import Time from './components/time/Time';
import Highlight from './components/highlight/Highlight';


function App() {
  let [ curTask, setCurTask ] = useState('AGGREGATION');
  const tasks = [
    { taskName: 'Форматирование даты публикации', solving: <Time key={'TIME'} /> },
    { taskName: 'Популярное и новое', solving: <Highlight key={'HIGHLIGHT'} /> },
  ];

  return (
    <>
      <SelectTask tasks={tasks} setTask={(task: string) => setCurTask(curTask = task)} curTask={curTask} />      
      <div>        
        { tasks.filter(task => task.taskName === curTask).map(task => task.solving) }
      </div>
    </>
  )
}

export default App;
