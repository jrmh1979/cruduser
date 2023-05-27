import { useForm } from 'react-hook-form'
import { useEffect } from 'react'




function UsersForm ({ addUser, userSelected, editUser, closeModal }) {

    


    const { register, handleSubmit, reset } = useForm()

    const emptyUser = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
    }

    useEffect( () => {
        if( userSelected ){
            
            reset( userSelected )

        }else{
            
            reset( emptyUser )
        }
    }, [userSelected] )


    const submit = data => {
        if( userSelected ){
          
            editUser( data )
        }else{
           
            addUser( data )
            reset( emptyUser )
        }
    }
    
    return (
        <form onSubmit={ handleSubmit( submit ) } >
            <h1>{ userSelected ? "Editar" : "Crear" } Usuarios</h1>

            <div className="input-wrapper">
                <label htmlFor="email">Correo</label>
                <input 
                type="text"
                placeholder='correo@dominio.com' 
                id="email" 
                { ...register( "email" ) }
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Contraseña</label>
                <input 
                type="text" 
                placeholder='********'
                id="password" 
                { ...register( "password" ) }
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="first_name">Primer Nombre</label>
                <input 
                type="text" 
                placeholder='Nombres'
                id="first_name" 
                { ...register( "first_name" ) }
                />
            </div>

            <div className="input-wrapper">
                <label htmlFor="last_name">Apellidos</label>
                <input 
                type="text" 
                placeholder='Apellidos'
                id="last_name" 
                { ...register( "last_name" ) }
                />
            </div>

            <div className="input-wrapper">
                <label htmlFor="birthday">Fecha de Nacimiento</label>
                <input 
                type="text" 
                placeholder='aaaa/mm/dd'
                id="birthday" 
                { ...register( "birthday" ) }
                />
            </div>
          

            <button  className="button-65" type="submit"> { userSelected ? "Guardar" : "Crear Usuario" }</button>
            <button className="button-65" onClick={closeModal}>Cerrar</button>       
        </form>
    );

}
export default UsersForm;