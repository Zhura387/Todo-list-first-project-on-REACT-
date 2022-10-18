import React from 'react';
import './App.css';
import Form from './form/Form';
import Todo from './todo/Todo';


function App() {
  const [task, setTask] = React.useState([]);


  const handleDelete = (id) => {
    const henDel = task.filter((item) => item.id !== id);
    setTask([...henDel]);
  }
  const handleEdit = (id, text) => {
    const arr = task.map(item => item.id === id ? { ...item, title: text } : item)
    setTask([...arr]);
  }
  return (
    <div className="wrapp">
      <div className='content'>
        <div className='nameList'>
          <h1>task:{task.length}</h1>
        </div>
        <div className='f-inpt'>
          <Form setTask={setTask}
            task={task}
          />
        </div>
        <div className='f-task'>
          {task.map(item => (
            <Todo
              key={item.id}
              item={item}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
