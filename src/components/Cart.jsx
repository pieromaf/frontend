import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cartItems, getTotal, removeItem, decrementItem, incrementItem } = useContext(CartContext);

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-full max-w-xs">
            <h2 className="text-xl font-bold mb-4">Carrito</h2>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">El carrito está vacío</p>
            ) : (
                <>
                    <ul className="divide-y divide-gray-200">
                        {cartItems.map((item, index) => (
                            <li key={index} className="py-2 flex justify-between items-center">
                                <div className="flex items-center">
                                    <img 
                                        src={item.imageUrl || 'https://via.placeholder.com/150'}
                                        alt={item.title} 
                                        className="w-12 h-12 object-cover rounded mr-4" 
                                    />
                                    <div>
                                        <span className="block font-semibold">{item.title}</span>
                                        <span className="text-sm text-gray-500 font-semibold">${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    {item.quantity === 1 ? (
                                        <>
                                            <button 
                                                onClick={() => removeItem(item)} 
                                                className="text-red-500 hover:text-red-700 mr-2"
                                            >
                                                🗑️
                                            </button>
                                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                                {item.quantity}
                                            </span>
                                            <button 
                                                onClick={() => incrementItem(item)} 
                                                className="bg-slate-800 hover:bg-slate-700 text-white rounded-full h-8 w-8 flex items-center justify-center transition-all"
                                            >
                                                +
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button 
                                                onClick={() => decrementItem(item)} 
                                                className="text-red-500 hover:text-red-700 mr-2"
                                            >
                                                -
                                            </button>
                                            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                                {item.quantity}
                                            </span>
                                            <button 
                                                onClick={() => incrementItem(item)} 
                                                className="bg-slate-800 hover:bg-slate-700 text-white rounded-full h-8 w-8 flex items-center justify-center transition-all"
                                            >
                                                +
                                            </button>
                                        </>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold">Total: ${getTotal().toFixed(2)}</h3>
                        <button 
                            className="mt-4 w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 rounded"
                            onClick={() => alert("Proceso de pago iniciado")}
                        >
                            Pagar
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
