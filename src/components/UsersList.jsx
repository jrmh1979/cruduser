
const UsersList = ({ usersList, deleteUser, selectUser}) => {


    return (
        <div className="users-list">
            <h1>Usuarios</h1>
            <div className="container">
            
                {
                    usersList?.map( user => (
                        <li className="users-items" key={user.id}>
                            <h2>{user.first_name} {user.last_name}</h2>
                            <p>
                            <b>Correo:</b><br /> {user.email}
                            </p>
                            <p>
                            <b>Contraseña:</b><br /> {user.password}
                            </p>
                                                      
                            <p>
                            <b>Fecha de Nacimiento:</b><br /> {user.birthday}
                            </p>
                            <button className="button-1" onClick={() => deleteUser(user.id)}>Eliminar</button>
                            <button className="button-2" onClick={() => selectUser(user.id) }>Editar</button>
                        </li>
                    ))
                }
           

            </div>
            
            
        </div>
    );
};

export default UsersList;