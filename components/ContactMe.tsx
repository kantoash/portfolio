"use client"

import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

function ContactMe() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:kentoashketchum@gmail?subject=${data.subject}&body= Hi, my name is ${data.name}. ${data.message} from (${data.email})`  
    };
  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl mx-auto px-10 justify-evenly items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
            Contact
        </h3>
        <div className='flex flex-col space-y-10 justify-center'>
            <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
            </h4>

            <div className='space-y-10'>
                <div className=' flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>88447239142</p>
                </div>
                <div className=' flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>kentoashketchum@gmail.com</p>
                </div>
                <div className=' flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-2xl'>delhi, India</p>
                </div>
            </div>

            <form  
                onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto'>
                <div>
                    <input {...register('name')} placeholder='Name' className='ContactInput' type="text" />
                    <input {...register('email')} placeholder='Email' className='ContactInput' type="email"/>
                </div>
                <input {...register('subject')} placeholder='Subject' className='ContactInput' type="text"/>
                <textarea {...register('message')} placeholder='Message' className='ContactInput'/>
                <button
                    type='submit'
                className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe