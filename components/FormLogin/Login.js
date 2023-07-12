import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Form({ handleOpenLogin}) {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) => {
        console.log(data);
    };
    
  
    return (
      <div className="flex items-center justify-center fixed top-0 left-0 bg-[#00000099] right-0 bottom-0">
        <AiFillCloseCircle
          onClick={handleOpenLogin}
          className="absolute hover:cursor-pointer top-0 right-0 m-4 text-white"
          size={30}
        />
        <form
          className="  animate-jump-in flex flex-col bg-white justify-center items-center gap-12 w-64 h-[40rem] rounded-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
   
          <input
            className="bg-blue-500 p-2 rounded-2xl shadow-lg text-center text-white placeholder-white"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            className="bg-blue-500 p-2 rounded-2xl shadow-lg text-center text-white placeholder-white"
            type="tel"
            placeholder="Password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
   
          <input
            className="bg-white border border-blue-500 p-2 rounded-2xl shadow-lg text-center text-[blue]"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    );
  }
  