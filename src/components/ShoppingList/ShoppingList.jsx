// CSS Imports
import './ShoppingList.css'
import 'react-toastify/dist/ReactToastify.css';

import React, {  useReducer } from 'react';
import Header from '../Header/Header';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';

import { ToastContainer } from "react-toastify";

// reducers import 
import itemReducer from '../../reducers/itemReducer';


const ShoppingList = () => {

    // const[shoppingItems, setShoppingItems] = useState([]);
    const[shoppingItems, dispatch] = useReducer(itemReducer, []);// it returns 2 value a state value and a dispatch method

    function handleAddItem(name){
        dispatch({
            type : 'add_item',
            itemName : name,
        });
    }

    function handleAddQuantity(id){
        dispatch({
            type : 'increament_item',
            itemId : id,
        });
    }

    function handleDecQuantity(itemId){
        dispatch({
            type : 'decreament_item',
            itemId : id,
        });
    }

    return (
        <div>
            <Header/>
            <ToastContainer/>
            <div className='current-shopping-list'>
                <InputItem
                    addItem = {handleAddItem}
                />
                <ItemList
                    shoppingItems={shoppingItems}
                    addQuantity = {handleAddQuantity}
                    decQuantity = {handleDecQuantity}
                />
            </div>
        </div>
    );
}

export default ShoppingList;
