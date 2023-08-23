import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import UsersList from "./components/UsersList";
import ModalForm from "./components/ModalForm";
import ModalConfirmDelete from "./components/ModalConfirmDelete";
import ModalSuccessToCreateUser from "./components/ModalSuccessToCreateUser";
import { EMPTY_FORM_VALUES } from "./shared/constants.js";
import { useForm } from "react-hook-form";

const BASE_URL = "https://users-crud.academlo.tech/users/";

function App() {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const [editUser, setEditUser] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalSuccessUser, setShowModalSuccessUser] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const showEditUserModal = (user) => {
    setEditUser(!editUser);
    setShowModal(!showModal);
    setUserSelected(user);
  };

  const handleChange = (e) => {
    setUserSelected({
      ...userSelected,
      [e.target.name]: e.target.value,
    });
  };

  const changeShowModal = () => {
    setShowModal(!showModal);
    setShowModalEdit(!showModalEdit);
    setEditUser(false);
    setUserSelected(null);
  };

  const getAllUsers = () => {
    axios
      .get(BASE_URL)
      .then(({ data }) => {
        setCurrentUsers(data)
      })
      .catch((err) => console.log(err));
  };

  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL, newUser)
      .then(() => {
        getAllUsers();
        reset(EMPTY_FORM_VALUES),
          setShowModal(false),
          setShowModalSuccessUser(true);
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (idUser) => {
    axios
      .delete(BASE_URL + idUser + "/")
      .then(({ data }) => {
        // La Api no me devuelve el ID del dato eliminado
        setCurrentUsers(currentUsers.filter((e) => idUser !== e.id));
        setShowModalDelete(!showModalDelete);
        reset(EMPTY_FORM_VALUES);
      })
      .catch((err) => console.log(err));
  };

  const putUser = (reset) => {
    axios
      .put(BASE_URL + userSelected?.id + "/", userSelected)
      .then(({ data }) => {
        const newUsers = currentUsers.map((e) => {
          if (data.id === e.id) {
            return data;
          } else {
            return e;
          }
        });
        reset(EMPTY_FORM_VALUES);
        setCurrentUsers(newUsers);
        setShowModal(!showModal),
          setUserSelected(null),
          setShowModalSuccessUser(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-white">
      <ModalForm
        changeShowModal={changeShowModal}
        showModal={showModal}
        editUser={editUser}
        createUser={createUser}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
        putUser={putUser}
        handleChange={handleChange}
        deleteUser={deleteUser}
        handleSubmit={handleSubmit}
        register={register}
        reset={reset}
        errors={errors}
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
        setUserSelected={setUserSelected}
        setShowModalDelete={setShowModalDelete}
        showModalDelete={showModalDelete}
        showEditUserModal={showEditUserModal}
        deleteUser={deleteUser}
      />

      <ModalConfirmDelete
        showModalDelete={showModalDelete}
        setShowModalDelete={setShowModalDelete}
        currentUsers={currentUsers}
        deleteUser={deleteUser}
        setUserSelected={setUserSelected}
        userSelected={userSelected}
        reset={reset}
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
