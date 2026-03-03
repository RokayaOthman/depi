const UserList = () => {
    const users =   [
        {id: 1, name: "rezq" , age: 23},
        {id: 2, name: "ahmed" , age: 24},
        {id: 3, name: "mohammed" , age: 26},
        {id: 4, name: "kareem" , age: 31},
        {id: 5, name: "refaat" , age: 70}
    ]
    return (
        <div className="list-container">
            <h2 className="list-title">
                list
            </h2>
            <ul className="user-list">
                {
                    users.map((user) => 
                        <li key={user.id} className="user-item">
                            {user.name} - {user.age} years old
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default UserList