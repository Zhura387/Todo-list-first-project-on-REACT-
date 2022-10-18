import React from 'react';


const Form = ({ setTask, task }) => {
  const [text, setText] = React.useState('');
  const hendleClick = () => {
    setTask([...task, { id: task.length + 1, title: text }]);
    setText("");
  };
  return (
    <div className='impotBtn'>
      <input placeholder='Enter the text' onChange={(e) => setText(e.target.value)} value={text} />
      <button className='btnSub' onClick={() => hendleClick()}>add</button>

    </div>
  );
}

export default Form;