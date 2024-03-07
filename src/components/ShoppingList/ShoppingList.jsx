// CSS Imports
import './ShoppingList.css'


import React from 'react';
import Header from '../Header/Header';
import InputItem from '../InputItem/InputItem';
import './ShoppingList.css'
const ShoppingList = () => {
    return (
        <div>
            <Header/>
            <div className='current-shopping-list'>
                <InputItem/>
            </div>
        </div>
    );
}

export default ShoppingList;
