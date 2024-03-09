// CSS IMports
import './InputItem.css'
import 'react-toastify/dist/ReactToastify.css';

// Utils Import
import { showError, showSuccess } from '../../utils/showToast';
import {useForm} from 'react-hook-form';
// import { useEffect } from 'react';

const InputItem = ({addItem}) => {

    const{register, handleSubmit, formState : {errors}} = useForm();

    console.log(errors);
    const handleFormSubmission = (data) => {

        console.log(data);
        addItem(data.item);
        showSuccess('Successfully Added the Item')
    }

    // useEffect(()=>{
    //     console.log(errors);
    //     if(errors.item && errors.item.type == 'required'){
    //         showError('Item cannot be Empty');
    //     }
    //     if(errors.item && errors.item.type == 'minLength'){
    //         showError('Item cannot be of less than 3 Length');
    //     }

    // }, [errors.item && errors.item.type]);

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
