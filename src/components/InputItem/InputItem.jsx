// CSS IMports
import './InputItem.css'

import React from 'react';

const InputItem = () => {
    return (
        <div className='item-input-wrapper'>
            <input 
                className='item-input'
                type="text"
                placeholder='Add an Item...' />

            <button className='add-item-button'>
                Add
            </button>
        </div>
    );
}

export default InputItem;
