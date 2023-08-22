import React from "react";
import { EMPTY_FORM_VALUES } from "../shared/constants";

const ModalConfirmDelete = ({
  showModalDelete,
  setShowModalDelete,
  deleteUser,
  userSelected,
  setUserSelected,
  reset
}) => {
  const changeShowModalDelete = () => {
    setShowModalDelete(!showModalDelete);
    setUserSelected(null);
    reset(EMPTY_FORM_VALUES)
  };

  const deleteUserSelected = () => {
    deleteUser(userSelected.id);
  };

  return (
    <div
      className={`h-screen w-full bg-white/60 fixed flex justify-center items-center top-0 transition-all ${
        showModalDelete ? "right-[0]" : "right-[-200%]"
      }`}
    >
      <div className="flex flex-col gap-5 bg-[#3C3C3D] px-[100px] py-[50px] rounded-[15px] text-[14px]">
        <h3 className="text-2xl">are you sure you want to delete this user?</h3>
        <div className="flex flex-col justify-center items-center gap-3">
          <button
            onClick={deleteUserSelected}
            className="bg-[#ff5757] rounded-[5px] py-2 px-9 shadow-[4px_4px_10px_-4px_rgb(0,0,0,0.6)]"
          >
            Yes, delete
          </button>
          <button onClick={changeShowModalDelete}>or cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmDelete;
