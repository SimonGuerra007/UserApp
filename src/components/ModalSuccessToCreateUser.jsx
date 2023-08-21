import React, { useState } from "react";

const ModalSuccessToCreateUser = ({ showModalSuccessUser, setShowModalSuccessUser, showModalEdit, setEditUser, editUser }) => {

  const isShowModalSuccessUser = () => {
    setShowModalSuccessUser(false);
    setEditUser(false)
  };

  return (
    <div
      className={`h-screen w-full bg-white/60 fixed flex justify-center items-center top-0 ${showModalSuccessUser ? 'right-[0]' : 'right-[200%]'} transition-all`}
    >
      <div className="flex flex-col gap-5 bg-[#3C3C3D] px-[100px] py-[50px] rounded-[15px] text-[14px]">
        <h3 className="text-2xl">User has been {editUser ?  'edited' : 'created'} successfully</h3>
        <div className="flex flex-col justify-center items-center gap-3">
          <button
            onClick={isShowModalSuccessUser}
            className="bg-[#ff5757] rounded-[5px] py-2 px-9 shadow-[4px_4px_10px_-4px_rgb(0,0,0,0.6)]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSuccessToCreateUser;
