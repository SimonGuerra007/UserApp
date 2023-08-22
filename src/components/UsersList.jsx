import React from "react";
import UserCard from "./UserCard";

const UsersList = ({
  currentUsers,
  deleteUserSelected,
  setUserSelected,
  setShowModalDelete,
  showModalDelete,
  showEditUserModal,
  deleteUser,
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

      {/* {currentUsers.length === 0 && <p>hola mundo</p> } */}

      <div className={`flex flex-col justify-center items-center text-[#AFAEAE]`}>
        {currentUsers.length === 0 && <div className="bg-[#d9d9d9] rounded-full w-[150px] border-[5px] border-black mt-[100px]"><img src="../public/usuario.png" alt="" /></div>}
        {currentUsers.length === 0 && <h3 className="text-center">You don't have any users on your list.</h3>}
        {currentUsers.length === 0 && <h3>Create a new user</h3>}
      </div>
    </section>
  );
};

export default UsersList;
