import "./App.css";
import UsersForm from "./components/UsersForm";
import axios from "axios";
import { useState, useEffect } from "react";
import UsersList from "./components/UsersList";
import Modal from 'react-modal';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);


  //modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


 
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((resp) => setUsersList(resp.data))
      .catch((error) => console.error(error));
  };

  const addUser = (user) => {
    axios
      .post("https://users-crud.academlo.tech/users/", user)
      .then(() => {
        getData();
        setUserSelected(null);
      })
      .catch((error) => console.error(error));
  };

  
  const deleteUser = (idUser) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${idUser}/`)
      .then(() => getData())
      .catch((error) => console.error(error));
  };

  const selectUser = (idUser) => {
    axios
      .get(`https://users-crud.academlo.tech/users/${idUser}/`)
      .then((resp) => setUserSelected(resp.data))
        openModal ()
      .catch((error) => console.error(error));
  };


  const editUser = async (user) => {
    try {
      const respuesta = await axios.put(
        `https://users-crud.academlo.tech/users/${user.id}/`,
        user
      );
      
      getData();
      setUserSelected(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="general-container">
      <div>

      </div>
      <button className="button-65" onClick={openModal}>Crear Usuario</button>
      
      <div>
      
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <UsersForm 
        addUser={addUser}
        userSelected={userSelected}
        editUser={editUser}
        closeModal={closeModal} 
        openModal ={openModal}
        />
      </Modal>
      
    </div>

    
      <UsersList
        usersList={usersList}
        deleteUser={deleteUser}
        selectUser={selectUser}
               
      />
    </div>
  );
}

export default App;
