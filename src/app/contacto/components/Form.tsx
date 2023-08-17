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
        user_email: z.string().email({ message: "Dirección de correo electrónico inválida" }),
        message: z.string().min(20, { message: "La consulta debe contener al menos 20 carácter(es)" }).max(500, { message: "La consulta debe contener un máximo de 500 caracteres" })
    });


    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const submitData = () => {
        toast.promise(
            emailjs.sendForm('service_u8e10ad', 'template_ao7vv8s', form.current, 'NzdOOQuatMXE7PrQn'),
            {
                loading: 'Enviando correo...',
                success: (result) => {
                    console.log(result.text);
                    return '¡Correo enviado con éxito!';
                },
                error: (error) => {
                    console.log(error.text);
                    return '¡Ups! Algo salió mal.';
                },
            }
        );
        reset();
    };


    return (
        <div className="w-full h-full">
            <form
                ref={form} // corroborar type
                className="flex flex-col max-w-xl p-5 mx-auto border rounded shadow md:p-10 border-zinc-800 rounded-2xl bg-black/50 cristal"
                onSubmit={handleSubmit(submitData)}
            >
                <label htmlFor="email" className='text-zinc-400'>Dirección de Email: </label>
                <input
                    type="email"
                    id="email"
                    placeholder="ejemplo@ejemplo.com"
                    className="p-1 mt-3 mb-3 text-white border rounded bg-[rgba(214,251,252,.057)] placeholder:px-1 placeholder:opacity-50 border-zinc-800"
                    {...register("user_email")}
                />
                {
                    errors.user_email &&
                    <span className='p-1 text-red-600 rounded bg-red-400/20'>
                        {errors.user_email.message}
                    </span>
                }
                <label htmlFor="consulta" className='mt-5 text-zinc-400'>¿En qué podemos ayudarte? </label>
                <textarea
                    id="consulta"
                    placeholder="Ingresa tu consulta aquí"
                    className="h-32 mt-3 p-1 mb-3 text-white border rounded resize-none bg-[rgba(214,251,252,.057)] placeholder:px-1 placeholder:opacity-50 border-zinc-800"
                    {...register("message")}
                />
                {
                    errors.message &&
                    <span className='p-1 text-red-600 rounded bg-red-400/20'>
                        {errors.message.message}
                    </span>
                }
                <button
                    type="submit"
                    className="flex items-center inline-block gap-1 px-3 py-2 mt-5 font-semibold text-black rounded bg-zinc-300 me-auto"
                >
                    Enviar
                    <MdOutlineArrowRight className='text-2xl' /></button>
            </form>
            <Toaster  />
        </div>
    )
}
