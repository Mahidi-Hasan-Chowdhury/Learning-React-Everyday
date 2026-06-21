import { useState } from 'react';

export default function ProductSearch() {
    // 1. Static mock data list of products
    const initialProducts = [
        { id: 1, name: 'React Development Book', category: 'Books', price: '$29.99' },
        { id: 2, name: 'Vite Sticker Pack', category: 'Accessories', price: '$4.99' },
        { id: 3, name: 'JavaScript Mug', category: 'Kitchenware', price: '$12.99' },
        { id: 4, name: 'CSS Flexbox Cheat Sheet', category: 'Books', price: '$9.99' },
        { id: 5, name: 'Wireless Mechanical Keyboard', category: 'Electronics', price: '$89.99' },
        { id: 6, name: 'Developer Cotton T-Shirt', category: 'Apparel', price: '$19.99' }
    ];

    // 2. State variables for inputs
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // 3. Event handler to capture search input queries
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // 4. Event handler to capture category selection dropdown changes
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    // 5. Derived State: Filtered items computed on-the-fly during render.
    //    We avoid creating a separate "filteredProducts" state variable to prevent synchronization bugs.
    const filteredProducts = initialProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const containerStyle = {
        border: '2px solid #6f42c1',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#f3ebff', // Light purple background
        color: '#4a148c',
        fontFamily: 'sans-serif'
    };

    const flexContainer = {
        display: 'flex',
        gap: '10px',
        marginBottom: '15px'
    };

    return (
        <div style={containerStyle}>
            <h3>Product Search & Filter (Derived State Example)</h3>
            
            {/* Input fields container */}
            <div style={flexContainer}>
                {/* Search Text Input */}
                <input 
                    type="text" 
                    placeholder="Search by name..." 
                    value={searchQuery}
                    onChange={handleSearchChange}
                    style={{ 
                        padding: '8px', 
                        flex: 1, 
                        borderRadius: '4px', 
                        border: '1px solid #ccc' 
                    }}
                />
                
                {/* Category Selector Dropdown */}
                <select 
                    value={selectedCategory} 
                    onChange={handleCategoryChange}
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                    <option value="All">All Categories</option>
                    <option value="Books">Books</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Kitchenware">Kitchenware</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Apparel">Apparel</option>
                </select>
            </div>

            {/* Conditionally render result count or fallback message */}
            {filteredProducts.length === 0 ? (
                <p>No products matches your query.</p>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #6f42c1' }}>
                            <th style={{ padding: '8px 0' }}>Name</th>
                            <th style={{ padding: '8px 0' }}>Category</th>
                            <th style={{ padding: '8px 0' }}>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map(product => (
                            <tr key={product.id} style={{ borderBottom: '1px solid #e1d5f2' }}>
                                <td style={{ padding: '8px 0' }}>{product.name}</td>
                                <td style={{ padding: '8px 0' }}>{product.category}</td>
                                <td style={{ padding: '8px 0' }}>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
