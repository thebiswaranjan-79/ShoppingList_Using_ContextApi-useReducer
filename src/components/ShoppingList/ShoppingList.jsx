// CSS Imports
import './ShoppingList.css'

import React from 'react';
import Header from '../Header/Header';
import InputItem from '../InputItem/InputItem';
import './ShoppingList.css'
import ItemList from '../ItemList/ItemList';

const shoppingItems = [
    {id:1, name:'Apples', quantity:2},
    {id:2, name:'Rice', quantity:4},
];

const ShoppingList = () => {

    return (
        <div>
            <Header/>
            <div className='current-shopping-list'>
                <InputItem/>
                <ItemList
                    shoppingItems={shoppingItems}
                />
            </div>
        </div>
    );
}

export default ShoppingList;
