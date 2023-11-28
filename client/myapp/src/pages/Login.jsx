import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
// import { TbSocial } from "react-icons/tb";
import { GiAgave } from "react-icons/gi";
import { BsGear, BsShare } from "react-icons/bs";
import { AiOutlineInteraction } from "react-icons/ai";
import { ImConnection } from "react-icons/im";
import { CustomButton, Loading, TextInput } from "../components";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {};

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6 bg-cover'style={{
            backgroundImage:
              "url('./images/bg.jpg')",
             
          }}>
            <div className=' backdrop-blur-md bg-white/30 ... w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-blue bg-opacity-10  rounded-xl overflow-hidden shadow-xl'>
        {/* LEFT */}
        <div className='w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center '>
          <div className='w-full flex gap-2 items-center mb-6'>
            <div className='p-2  rounded text-white'>
              {/* <TbSocial /> */}
              <GiAgave />
            </div>
            <span className='text-2xl text-[#e03e6f] font-semibold'>
              ShareFun
            </span>
          </div>

          <p className='text-ascent-1 text-base font-semibold'>
            Log in to your account
          </p>
          <span className='text-xxl mt-2 text-ascent-2'>Welcome back</span>

          <form
            className='py-8 flex flex-col gap-5'
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextInput
            className="bg"
              name='email'
              placeholder='email@example.com'
              label='Email Address'
              type='email'
              register={register("email", {
                required: "Email Address is required",
              })}
              styles='w-full '
              labelStyle='ml-2'
              error={errors.email ? errors.email.message : ""
            }
            />

            <TextInput 
              name='password'
              label='Password'
              placeholder='Password'
              type='password'
              styles='w-full rounded'
              labelStyle='ml-2'
              register={register("password", {
                required: "Password is required!",
              })}
              error={errors.password ? errors.password?.message : ""}
            />

            <Link
              to='/reset-password'
              className=' text-[#da474f] text-md text-right font-semibold'
            >
              Forgot Password ?
            </Link>

            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status == "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type='submit'
                containerStyles={`bg-[#da474f] inline-flex justify-center rounded-md  px-8 py-3 text-sm font-large text-white outline-none`}
                title='Login'
              />
            )}
          </form>

          <p className=' text-md text-center'>
            Don't have an account?
            <Link
              to='/register'
              className='text-[#da474f] font-semibold ml-2 cursor-pointer'
            >
              Create Account
            </Link>
          </p>
        </div>
        {/* RIGHT */}
        <div className='hidden w-1/2 h-full lg:flex flex-col items-center justify-center '>
          <div className='relative w-full flex items-center justify-center'>
            <img
              src="./images/Group 77 (1).png"
              alt='Bg Image'
              className=' p-8 m-8 object-cover rounded-xl'
            /> 

            <div className='absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full'>
              <BsShare size={20} />
              <span className='text-xs font-large'>Share</span>
            </div>

            <div className='absolute flex items-center gap-1 bg-white left-10 top-6 py-2 px-5 rounded-full'>
              <ImConnection />
              <span className='text-xs font-medium'>Connect</span>
            </div>

            <div className='absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full'>
              <AiOutlineInteraction />
              <span className='text-xs font-medium'>Interact</span>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <p className='text-black text-base text-sm'>
              Connect with friends & have share for fun
            </p>
            <span className='text-sm text-black/80'>
              Share memories with friends and the world.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;