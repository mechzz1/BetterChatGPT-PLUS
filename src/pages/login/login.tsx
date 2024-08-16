import React, { useEffect, useState } from 'react'
import styles from './login.module.css'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
    userName: z.string().min(3, { message: "User Name is required" }),
    password: z.string().min(3, { message: "Password is required" }),
})
type FormData = z.infer<typeof schema>;

function login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });
    const navigate = useNavigate();
    const onSubmit = (data: FieldValues) => {

        console.log(data);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:14000/users/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        const fethUsers = async () => {
            // try {
            //     const res = await axios.request(config);
            //     const userDataString = JSON.stringify(res.data);
            //     sessionStorage.setItem('user', userDataString);
            //     setUser(res.data)
            //     toast.success("Success " + `${res.data.message}`)
            //     navigate('/dashboard/main');
            // } catch (error) {
            //     // toast.error("Error " + `${error}`)
            // }
        }

        fethUsers();
    };

    interface userData {
        id: number,
        name: string
    }

    const [user, setUser] = useState<userData[]>([]);
    return (
        <>


            <div className={`${styles.secBg}`}>
                <div className={styles.midCon}>
                    <div className="container p-5">
                        <h4 className={`text-center text-xl font-bold  dark:text-white ${styles.txtColor}`}>
                            Log in
                        </h4>
                        <p className={`mb-0 text-center ${styles.txtColor}`}>
                            Please enter your details
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                            <div className="flex flex-col items-center">
                                <div className="w-full pt-3">
                                    <label htmlFor="userName" className={`block text-sm font-medium ${styles.inputLabel}`}>
                                        UserName
                                    </label>
                                    <input
                                    
                                        id="userName"
                                        type="text"
                                        className={`w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 ${styles.inputField}`}
                                        {...register('userName')}
                                    />
                                    {errors.userName && <p className="text-red-500 text-sm mt-1">{errors.userName.message}</p>}
                                </div>
                                <div className="w-full pt-3">
                                    <label htmlFor="password" className={`block text-sm font-medium ${styles.inputLabel}`}>
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        className={`w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400 ${styles.inputField}`}
                                        {...register('password')}
                                    />
                                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                                </div>
                                <div className="w-full pt-5">
                                    <button
                                        type="submit"
                                        className={`w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md  focus:outline-none ${styles.btnLogin}`}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default login