// CSS Imports
import './ItemList.css'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import Item from '../Item/Item';
import { showError } from '../../utils/showToast';

const ItemList = ({shoppingItems, addQuantity,decQuantity}) => {
    
    return (
        <div className='shopping-items-wrapper'>
            {
                shoppingItems && shoppingItems.map(item => {
                    return (
                       <div key={item.id} className='items-list'>
                         <div className='change-quantity add-item' 
                         
                            onClick={()=>addQuantity(item.id)}>
                            <FontAwesomeIcon icon = {faPlus}/>
                         </div>  
                          <Item
                            itemName={item.name}
                            quantity={item.quantity}
                         />
                        <div className='change-quantity remove-item' 
                        
                            onClick={() => {
                                if(item.quantity == 1) showError('Youa are trying to Remove it ')
                                decQuantity(item.id)
                            }}>
                            <FontAwesomeIcon icon = {faMinus}/>
                        </div>
                       </div>
                    )
                })
            }
        </div>
    );
}

export default React.memo(ItemList);

