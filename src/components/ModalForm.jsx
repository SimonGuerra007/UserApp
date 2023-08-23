import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
import { EMPTY_FORM_VALUES } from "../shared/constants";

const ModalForm = ({
  changeShowModal,
  showModal,
  editUser,
  createUser,
  userSelected,
  setUserSelected,
  putUser,
  handleChange,
  deleteUser,
  handleSubmit,
  register,
  reset,
  errors,
}) => {
  

  const submit = (data) => {
    editUser ? putUser(reset) : createUser(data, reset);
  };

  const resetInputWhenCancel = () => {
    changeShowModal();
    reset(EMPTY_FORM_VALUES);
    setUserSelected(null);
  };

  useEffect(() => {
    if (userSelected) {
      reset(userSelected);
    }
  }, [userSelected]);

  return (
    <div
      className={`h-screen w-full bg-white/60 fixed flex justify-center items-center top-0 ${
        showModal ? "left-[0]" : "left-[200%]"
      } transition-all`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className=" flex flex-col gap-1 sm:gap-5 bg-[#3C3C3D] p-[50px] rounded-[15px] text-[14px]"
      >
        <h2 className="text-[#8EFF8B] font-bold text-2xl mb-2 sm:mb-8 text-center">
          {editUser ? "Editar Usuario" : "Crear Usuario"}
        </h2>
        <div className="flex flex-col">
          <label className="text-[14px] text-[#8EFF8B]" htmlFor="first_name">
            First name:{" "}
          </label>
          <input
            className="text-white border-[1px] border-white rounded-[5px] bg-[#3C3C3D] py-1 px-4 placeholder:text-white min-w-[300px]"
            id="first_name"
            name="first_name"
            type="text"
            placeholder="Enter name"
            {...register("first_name", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs">{errors.first_name?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="text-[14px] text-[#8EFF8B]" htmlFor="last_name">
            Last name:{" "}
          </label>
          <input
            className="text-white border-[1px] border-white rounded-[5px] bg-[#3C3C3D] py-1 px-4 placeholder:text-white"
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Enter last name"
            {...register("last_name", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs">{errors.last_name?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="text-[14px] text-[#8EFF8B]" htmlFor="email">
            Email:{" "}
          </label>
          <input
            className="text-white border-[1px] border-white rounded-[5px] bg-[#3C3C3D] py-1 px-4 placeholder:text-white"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            {...register("email", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="text-[14px] text-[#8EFF8B]" htmlFor="password">
            Password:{" "}
          </label>
          <input
            className="text-white border-[1px] border-white rounded-[5px] bg-[#3C3C3D] py-1 px-4 placeholder:text-white"
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            {...register("password", {
              required: {
                value: true,
                message: "this field is required",
              },
              minLength: {
                value: 8,
                message: "must contain at least 8 characters",
              },
              pattern: {
                value: /(?=.*[A-Z])/,
                message: "must contain at least a capital letter characters",
              },
            })}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs">{errors.password?.message}</p>
        </div>
        <div className="flex flex-col">
          <label className="text-[14px] text-[#8EFF8B]" htmlFor="birthday">
            Birthday:{" "}
          </label>
          <input
            className="text-white border-[1px] border-white rounded-[5px] bg-[#3C3C3D] py-1 px-4"
            id="birthday"
            name="birthday"
            type="date"
            {...register("birthday", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
            onChange={handleChange}
          />
          <p className="text-red-500 text-xs">{errors.birthday?.message}</p>
        </div>
        <button className="bg-[#CBFFDA] hover:bg-[#85ff85] transition-all text-[#302F2F] mt-[20px] rounded-[5px] py-2">
          {editUser ? "Save changes" : "Create user"}
        </button>
        <button
          type="Button"
          onClick={resetInputWhenCancel}
          className="text-[#CBFFD9] hover:text-[#85ff85] transition-all"
        >
          or cancel
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
