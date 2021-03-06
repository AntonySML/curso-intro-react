import React from 'react';
import './TodoItem.css';
import { AiOutlineCheckCircle } from "react-icons/ai"
import { RiDeleteBin6Line } from "react-icons/ri"

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <AiOutlineCheckCircle/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <RiDeleteBin6Line/>
      </span>
    </li>
  );
}

export { TodoItem };