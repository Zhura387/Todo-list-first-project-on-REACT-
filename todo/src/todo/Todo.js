import React from 'react';


const Todo = ({ handleDelete, handleEdit, item }) => {
    const [isEdit, setIsEdit] = React.useState(false)
    const [text, setText] = React.useState(item.title)

    const toggle = () => {
        if (isEdit) {
            handleEdit(item.id, text)
            setIsEdit(!isEdit)
        } else {
            setIsEdit(!isEdit)
        }
    }
    return (

        <div className='taskPlace'>
            {isEdit ? (<input className='inputEdit' onChange={(e) => setText(e.target.value)} value={text} />) : (<p className='task'>{item.title}</p>)}
            <div className='taskBtn'>
                <button onClick={() => handleDelete(item.id)}><img src='/1.png' alt='delete.png' /></button>
                <button onClick={() => toggle()}>{isEdit ? 'save' : <img src='/2.png' alt='edit.png' />}</button>
            </div>
        </div>
    )
}

export default Todo;