'use client'


import { useRef } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { MdOutlineArrowRight } from 'react-icons/md';
import { ZodType, z } from 'zod';
import { Toaster, toast } from 'sonner';
import emailjs from '@emailjs/browser';

export type FormData = {
    user_email: string;
    message: string;
}

export default function Form() {

    const form: any = useRef();

    const schema: ZodType<FormData> = z.object({
        user_email: z.string().email({ message: "Invalid email address" }),
        message: z.string().min(20, { message: "The query must contain at least 20 character(s)." }).max(500, { message: "The query must have a maximum of 500 characters" })
    });


    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const submitData = () => {
        toast.promise(
            emailjs.sendForm('service_u8e10ad', 'template_ao7vv8s', form.current, 'NzdOOQuatMXE7PrQn'),
            {
                loading: 'Sending email...',
                success: (result) => {
                    console.log(result.text);
                    return 'Email sent successfully!';
                },
                error: (error) => {
                    console.log(error.text);
                    return 'Oops! Something went wrong';
                },
            }
        );
        reset();
    };


    return (
        <div className="w-full h-full">
            <form
                ref={form} // corroborar type
                className="flex flex-col max-w-xl p-5 mx-auto mb-10 border rounded shadow md:mb-0 md:p-10 border-zinc-800 rounded-2xl cristalForm"
                onSubmit={handleSubmit(submitData)}
            >
                <label htmlFor="email" className='text-zinc-400'>Email Address: </label>
                <input
                    type="email"
                    id="email"
                    placeholder="example@example.com"
                    className="p-1 mt-3 mb-3 text-white border rounded bg-[rgba(214,251,252,.057)] placeholder:px-1 placeholder:opacity-50 border-zinc-800"
                    {...register("user_email")}
                />
                {
                    errors.user_email &&
                    <span className='p-1 text-xs text-red-600 rounded xl:text-sm bg-red-400/20'>
                        {errors.user_email.message}
                    </span>
                }
                <label htmlFor="consulta" className='mt-5 text-zinc-400'>How can we assist you?</label>
                <textarea
                    id="consulta"
                    placeholder="Enter your query here"
                    className="h-32 mt-3 p-1 mb-3 text-white border rounded resize-none bg-[rgba(214,251,252,.057)] placeholder:px-1 placeholder:opacity-50 border-zinc-800"
                    {...register("message")}
                />
                {
                    errors.message &&
                    <span className='p-1 text-xs text-red-600 rounded xl:text-sm bg-red-400/20'>
                        {errors.message.message}
                    </span>
                }
                <button
                    type="submit"
                    className="flex items-center inline-block gap-1 py-2 pl-2 mt-5 font-semibold text-black rounded bg-zinc-300 me-auto"
                >
                    Send
                    <MdOutlineArrowRight className='text-2xl' />
                </button>
            </form>
            <Toaster />
        </div>
    )
}
