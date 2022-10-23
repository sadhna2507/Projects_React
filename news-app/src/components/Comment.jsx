import React, { useState } from 'react';
// import CommentList from '/CommentList.jsx';
// import '/CommentApp.css'


const ToDoApp = () => {
    const [inputList, setInputList] = useState('')
    const [Items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value)
    }
    const listOfItem = () => {
        setItems((prevItems) => {
            return [...prevItems, inputList]
        });
        setInputList('');
        // making it empty
    };


    const deleteItems = (id) => {
        alert("Delete comment?")

        setItems((prevItems) => {
            return prevItems.filter((arrElem, index) => {
                return index !== id
            })
        })
    }



    return (
        <>
            <div className='main_div'>
                <div className="center_div">
                    <input className='inputText' type="text" onChange={itemEvent} value={inputList} />
                    <button className='comment' onClick={listOfItem}>Comment</button>

                    <ol>
                        {/* <li>{inputList}</li> */}

                        {Items.map((itemval, index) => {
                            // return <li>{itemval}</li>
                            return <CommentList key={index} id={index} text={itemval} onSelect={deleteItems} />
                        })}
                    </ol>
                </div>

            </div>
        </>
    )
}
export default ToDoApp;