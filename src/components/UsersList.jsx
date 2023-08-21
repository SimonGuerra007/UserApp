import React from "react";
import UserCard from "./UserCard";

const UsersList = ({
  currentUsers,
  setEditUser,
  editUser,
  setShowModal,
  showModal,
  deleteUserSelected,
  setUserSelected,
  setShowModalDelete,
  showModalDelete,
  editUserSelected
}) => {

  return (
    <section>
      {currentUsers.map((user) => (
        <UserCard
          key={user.id}
          user={user}
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
      ))}
    </section>
  );
};

export default UsersList;
