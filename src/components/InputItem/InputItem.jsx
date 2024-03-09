// CSS IMports
import './InputItem.css'
import 'react-toastify/dist/ReactToastify.css';

// Components import
import React, { useState } from 'react';

// Utils Import
import { showSuccess } from '../../utils/showToast';


const InputItem = ({addItem}) => {

    const[itemName, setItemName] = useState('');

    return (
        <div className='item-input-wrapper'>
            <input 
                className='item-input'
                type="text"
                placeholder='Add an Item...'
                value={itemName}
                onChange={(e) => setItemName(e.target.value)} />

            <button className='add-item-button' 
                     onClick={() => {
                        addItem(itemName);
                        setItemName('');
                        showSuccess('Successfully Added Items');
                        
                    }}   
            >
                Add
            </button>
        </div>
    );
}

export default InputItem;
