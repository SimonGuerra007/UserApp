import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UsersList from "./components/UsersList";
import ModalForm from "./components/ModalForm";
import ModalConfirmDelete from "./components/ModalConfirmDelete";
import ModalSuccessToCreateUser from "./components/ModalSuccessToCreateUser";
import { EMPTY_FORM_VALUES } from "./shared/constants.js";

const BASE_URL = "https://users-crud.academlo.tech/users/";

function App() {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [userSelected, setUserSelected] = useState("");
  const [editUser, setEditUser] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalSuccessUser, setShowModalSuccessUser] = useState(false);

  // console.log(userSelected);

  const deleteUserSelected = (e) => {
    e.target.parentElement.id;
  };

  const editUserSelected = () => {
    e.target.parentElement.id;
  };

  const idUser = userSelected.id;

  const changeShowModal = () => {
    setShowModal(!showModal);
    setShowModalEdit(!showModalEdit);
    setEditUser(false)
  };

  const changeCreateToEdit = () => {
    editUser ? deleteUser() : putUser();
  };

  const getAllUsers = () => {
    axios
      .get(BASE_URL)
      .then(({ data }) => setCurrentUsers(data))
      .catch((err) => console.log(err));
  };

  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL, newUser)
      .then(
        ({ data }) => (
          getAllUsers(),
          reset(EMPTY_FORM_VALUES),
          setShowModal(false),
          setShowModalSuccessUser(true)
        )
      )
      .catch((err) => console.log(err));
  };

  const deleteUser = () => {
    axios
      .delete(BASE_URL + idUser + "/")
      .then(({ data }) => getAllUsers())
      .catch((err) => console.log(err));
  };

  const putUser = () => {
    axios
      .put(BASE_URL + idUser + "/")
      .then(({ data }) => getAllUsers())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers()
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
      <ModalForm
        changeShowModal={changeShowModal}
        showModal={showModal}
        editUser={editUser}
        createUser={createUser}
        changeCreateToEdit={changeCreateToEdit}
        userSelected={userSelected}
      />
      <h2 className="text-[#8EFF8B] font-bold text-2xl mt-[100px] mb-8">
        List of user
      </h2>
      <button
        onClick={changeShowModal}
        className="bg-[#CBFFDA] hover:bg-[#85ff85] transition-all text-[#302F2F] p-2 w-[300px] rounded-[5px]"
      >
        Create user
      </button>

      <UsersList
        currentUsers={currentUsers}
        setEditUser={setEditUser}
        editUser={editUser}
        setShowModal={setShowModal}
        showModal={showModal}
        deleteUserSelected={deleteUserSelected}
        setUserSelected={setUserSelected}
        setShowModalDelete={setShowModalDelete}
        showModalDelete={showModalDelete}
        editUserSelected={editUserSelected}
      />

      <ModalConfirmDelete
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        currentUsers={currentUsers}
        deleteUser={deleteUser}
      />

      <ModalSuccessToCreateUser
        showModalSuccessUser={showModalSuccessUser}
        setShowModalSuccessUser={setShowModalSuccessUser}
        showModalEdit={showModalEdit}
        setEditUser={setEditUser}
        editUser={editUser}
      />
    </main>
  );
}

export default App;
