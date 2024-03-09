// CSS IMports
import './InputItem.css'
import 'react-toastify/dist/ReactToastify.css';

// Context Import 
import { ShoppingDispatchContext } from '../../providers/ShoppingContext';

// Utils Import
import { showError, showSuccess } from '../../utils/showToast';
import {useForm} from 'react-hook-form';
import { useContext } from 'react';
// import { useEffect } from 'react';

const InputItem = () => {

    const{register, handleSubmit, formState : {errors}} = useForm();
    const dispatch = useContext(ShoppingDispatchContext);


   
    const handleFormSubmission = (data) => {

        console.log(data, errors);
        // addItem(data.item);
        dispatch({
            type : 'add_item',
            itemName : data.item,
        });
        showSuccess('Successfully Added the Item')
    }


    return (
        <div className='item-input-wrapper'>

            <form onSubmit={handleSubmit(handleFormSubmission)}>
                <input 
                    className='item-input'
                    type="text"
                    placeholder='Add an Item...'
                    name='item'
                    {...register("item", {required : true, minLength:3 })}
                    />
                   
                <button className='add-item-button'>
                    Add
                </button>
            </form>
            <div>
                        {errors.item && errors.item.type =='required' && <p>Item is Missing</p>}
                        {errors.item && errors.item.type =='minLength' && <p>Item Name Can't be less than 3</p>}
            </div>
        </div>
    );
}

export default InputItem;
