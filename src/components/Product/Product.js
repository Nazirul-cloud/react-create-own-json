import { buildQueries } from '@testing-library/react';
import React from 'react';
import { addToDb, deleteFromDb } from '../../utilites/fakedb';

const Product = (props) => {
const {index, gender, balance, _id} = props.product
const handlerPurchase = id =>{
    //set to local storage
    // console.log(id);
    addToDb(id);
}
const handleRemove = id =>{
    deleteFromDb(id);
}
    return (
        <div style ={{backgroundColor: 'skyblue', border: '2px solid black',  margin: '10px' }}>
            <p>{index}</p>
            <p>{gender}</p>
            <p>$ {balance}</p>
           
            <button onClick={ () => handlerPurchase(_id)}>Purchase</button>
            <button onClick={ () => handleRemove(_id)}>Delete</button>
        </div>
    );
};

export default Product;