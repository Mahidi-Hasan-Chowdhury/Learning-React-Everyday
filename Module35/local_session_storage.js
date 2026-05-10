const handleAddToStorage =() => {
    const id = document.getElementById('idInput').value;
    const name = document.getElementById('nameInput').value;
    console.log('ID to add:', id);
    console.log('Name to add:', name);
    //localStorage.setItem(id, name);

    const data = {id, name};
    console.log('Data to add to sessionStorage:', data);

    localStorage.setItem(id, JSON.stringify(data));
    console.log(`Data with ID ${id} added to localStorage.`);
}

const storedItem = localStorage.getItem(123);
console.log('Retrieved item with ID 123 from localStorage:', storedItem);
console.log(JSON.parse(storedItem));


const handleClearStorage = () => {
    localStorage.clear();
    console.log('localStorage cleared.');
}