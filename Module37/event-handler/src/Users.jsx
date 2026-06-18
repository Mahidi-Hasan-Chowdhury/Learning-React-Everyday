import { useEffect, useState } from "react";

export default function Users() {
    // 1. Declare state to hold the list of users (starts as an empty array)
    const [users, setUsers] = useState([]);

    // 2. Declare a state to track whether data is currently loading
    const [loading, setLoading] = useState(true);

    // 3. Use the useEffect hook to fetch user data when the component mounts (loads)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false); // Disable loading state
            })
            .catch(err => {
                console.error("Failed to fetch users:", err);
                setLoading(false);
            });
    }, []); // Empty dependency array [] ensures this runs only once upon mounting

    const userStyle = {
        border: '2px solid #fd7e14',
        margin: '15px 0',
        padding: '15px',
        borderRadius: '8px',
        backgroundColor: '#fff9db', // Light warm yellow background
        color: '#d9480f',
        fontFamily: 'sans-serif'
    };

    return (
        <div style={userStyle}>
            <h3>Users: {users.length} (API Fetch Example)</h3>
            
            {/* 4. Display a loading message or render the fetched users */}
            {loading ? (
                <p>Loading data from API...</p>
            ) : (
                <ul style={{ textAlign: 'left', lineHeight: '1.6' }}>
                    {users.map(user => (
                        <li key={user.id}>
                            <strong>{user.name}</strong> ({user.email})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}