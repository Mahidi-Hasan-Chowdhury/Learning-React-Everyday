export default function ToDO({tasks, isDone}){
    if(isDone){
        return (
            <div>
                <h1>Done ToDO List</h1>
                <li>{tasks}</li>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Not Finished ToDO List</h1>
                <li>Pending: {tasks}</li>
            </div>
        )
    }
}

// Conditional Rendering Option 3 With Ternary Operator
export function Task({completed, work}) {
    return (
        <> 
            <h1>Task Component</h1>
            <p>This is a task component that can be used to display individual tasks in a to-do list.</p>
            <p>{completed ? 'Completed' : 'Pending'}: {work}</p>
        </>
    )
}  

// Conditional Rendering Option 4 With Logical && Operator
export function ToDos({children}){
    return (
        <>
            <h1>ToDos Component</h1>
            <p>This is a ToDos component that can be used to display a list of tasks in a to-do list.</p>
            {children}
            // complete this conditional rendering with && operator
            {children && <p>There are tasks to display.</p>}
            // complete this conditional rendering with && operator
            {!children && <p>No tasks to display.</p>}
                     

        </>
    )
}  

// Conditional Rendering Option 5 With Switch Statement
export function SwitchStatement({value}) {
    switch(value) {
        case 'option1':
            return <p>Option 1 selected</p>;
        case 'option2':
            return <p>Option 2 selected</p>;
        case 'option3':
            return <p>Option 3 selected</p>;
        default:
            return <p>No option selected</p>;
    }
}

// Conditional Rendering Option 6 With If-Else Statement
export function IfElseStatement({value}) {
    if(value === 'option1') {
        return <p>Option 1 selected</p>;
    } else if(value === 'option2') {
        return <p>Option 2 selected</p>;
    } else if(value === 'option3') {
        return <p>Option 3 selected</p>;
    } else {
        return <p>No option selected</p>;
    }
}


// Conditional Rendering Option 7 With Element Variables
export function ElementVariables({value}) {
    let element;
    if(value === 'option1') {
        element = <p>Option 1 selected</p>;
    } else if(value === 'option2') {
        element = <p>Option 2 selected</p>;
    } else if(value === 'option3') {
        element = <p>Option 3 selected</p>;
    } else {
        element = <p>No option selected</p>;
    }
    return (
        <>
            <h1>Element Variables</h1>
            <p>This is an example of using element variables for conditional rendering in React.</p>
            {element}
        </>
    )
}




// Rendering Lists of Users Using Map Function
export function UserList({users}) {
    return (
        <>
            <h1>User List</h1>
            <p>This is an example of rendering a list of users using the map function in React.</p>
            {users.map(user => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </>
    )
}
