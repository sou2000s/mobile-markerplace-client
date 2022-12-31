import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Cart = () => {
    const {} = useContext(AuthContext)
    return (
        <div>
            <h1>Cart</h1>
       
        </div>
    );
};

export default Cart;