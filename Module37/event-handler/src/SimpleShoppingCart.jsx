import { useState } from 'react';

export default function SimpleShoppingCart() {
    // Database of mock items available for purchase
    const products = [
        { id: 1, name: 'Apple 🍎', price: 1.50 },
        { id: 2, name: 'Banana 🍌', price: 0.80 },
        { id: 3, name: 'Orange 🍊', price: 1.20 },
        { id: 4, name: 'Grape 🍇', price: 2.50 }
    ];

    // 1. Declare state variable to hold array of items in the cart
    const [cart, setCart] = useState([]);

    // 2. Add product item to cart (increments quantity if already exists)
    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    // 3. Decrement item quantity (removes completely if quantity drops to 1)
    const handleDecrementQuantity = (productId) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === productId);
            if (existingItem.quantity === 1) {
                return prevCart.filter((item) => item.id !== productId);
            }
            return prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    // 4. Increment item quantity directly inside cart view
    const handleIncrementQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // 5. Remove item completely from cart list
    const handleRemoveFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // 6. Reset cart state array to empty
    const handleClearCart = () => {
        setCart([]);
    };

    // 7. Derived state values calculated automatically on render
    const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalCartCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

    const containerStyle = {
        border: '2px solid #0b7285',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#e2f9fb', // Light cyan background
        color: '#0b7285',
        fontFamily: 'sans-serif',
        textAlign: 'center'
    };

    const panelsGrid = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '15px',
        marginTop: '15px'
    };

    const cardPanelStyle = {
        backgroundColor: 'white',
        border: '1px solid #c5f2f7',
        borderRadius: '6px',
        padding: '12px',
        color: '#343a40',
        textAlign: 'left'
    };

    return (
        <div style={containerStyle}>
            <h3>Simple Shopping Cart (Object Array State Example)</h3>
            
            <p style={{ fontSize: '14px', color: '#15aabf', margin: '5px 0' }}>
                Add items to cart, modify quantity counts, and see totals calculate dynamically.
            </p>

            <div style={panelsGrid}>
                {/* Available Products Selection */}
                <div style={cardPanelStyle}>
                    <h4 style={{ color: '#0b7285', margin: '0 0 12px 0', borderBottom: '2px solid #c5f2f7', paddingBottom: '4px' }}>
                        Products List
                    </h4>
                    {products.map((product) => (
                        <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', paddingBottom: '4px', borderBottom: '1px solid #f1f3f5' }}>
                            <span style={{ fontSize: '14px' }}>
                                {product.name} - <strong>${product.price.toFixed(2)}</strong>
                            </span>
                            
                            <button 
                                onClick={() => handleAddToCart(product)}
                                style={{
                                    padding: '4px 8px',
                                    backgroundColor: '#0b7285',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Add
                            </button>
                        </div>
                    ))}
                </div>

                {/* Shopping Cart Summary */}
                <div style={cardPanelStyle}>
                    <h4 style={{ color: '#0b7285', margin: '0 0 12px 0', borderBottom: '2px solid #c5f2f7', paddingBottom: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>Cart List ({totalItemsCount})</span>
                        {cart.length > 0 && (
                            <button 
                                onClick={handleClearCart} 
                                style={{
                                    fontSize: '11px',
                                    backgroundColor: '#fa5252',
                                    color: 'white',
                                    border: 'none',
                                    padding: '3px 6px',
                                    borderRadius: '3px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                Clear All
                            </button>
                        )}
                    </h4>

                    {cart.length === 0 ? (
                        <p style={{ color: '#868e96', fontSize: '13px', fontStyle: 'italic', margin: '15px 0', textAlign: 'center' }}>
                            Your cart is empty.
                        </p>
                    ) : (
                        <div>
                            {cart.map((item) => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', paddingBottom: '4px', borderBottom: '1px dotted #e9ecef' }}>
                                    <div>
                                        <span style={{ fontWeight: 'bold', fontSize: '13px' }}>{item.name}</span>
                                        <span style={{ fontSize: '11px', display: 'block', color: '#868e96' }}>
                                            ${item.price.toFixed(2)} each
                                        </span>
                                    </div>
                                    
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <button 
                                            onClick={() => handleDecrementQuantity(item.id)} 
                                            style={{ padding: '2px 6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
                                        >
                                            -
                                        </button>
                                        <span style={{ fontSize: '13px', fontWeight: 'bold', minWidth: '15px', textAlign: 'center' }}>
                                            {item.quantity}
                                        </span>
                                        <button 
                                            onClick={() => handleIncrementQuantity(item.id)} 
                                            style={{ padding: '2px 6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
                                        >
                                            +
                                        </button>
                                        
                                        <button 
                                            onClick={() => handleRemoveFromCart(item.id)} 
                                            style={{ 
                                                border: 'none', 
                                                background: 'none', 
                                                color: '#fa5252', 
                                                cursor: 'pointer', 
                                                fontSize: '12px', 
                                                marginLeft: '6px' 
                                            }}
                                            title="Remove Item"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </div>
                            ))}
                            
                            <div style={{ marginTop: '12px', textAlign: 'right', fontWeight: 'bold', fontSize: '16px', color: '#0b7285' }}>
                                Total Cost: ${totalCartCost}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
