import React from "react";
import UserCard from "./UserCard";

const UsersList = ({
  currentUsers,
  deleteUserSelected,
  setUserSelected,
  setShowModalDelete,
  showModalDelete,
  showEditUserModal,
  deleteUser
}) => {

  return (
    <section>
      {currentUsers.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          deleteUserSelected={deleteUserSelected}
          setUserSelected={setUserSelected}
          setShowModalDelete={setShowModalDelete}
          showModalDelete={showModalDelete}
          showEditUserModal={showEditUserModal}
          deleteUser={deleteUser}
        />
      ))}
    </section>
  );
};

export default UsersList;
