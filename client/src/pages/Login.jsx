import React from 'react';
import { Link } from 'react-router-dom';


function Login() {

    return (
        <main className='container mx-auto px-16 py-11 '>
            <section className='flex flex-col gap-5 items-center justify-center '>
                <h1 className='font-semibold text-3xl md:text-5xl'>Sign in </h1>
                <form action="/login" method="post">
                    <div>
                        <label>Email</label>
                        <input 
                            className="border-2 rounded-md block px-3 py-2 mt-2 mb-5 w-[280px] sm:w-[320px] md:w-[480px] h-14 " 
                            type='text'
                            name="email" 
                            required aria-required="true" 
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input 
                            className="border-2 rounded-md block px-3 py-2 mt-2 mb-5  w-[280px] sm:w-[320px] md:w-[480px] h-14" 
                            type='password'
                            name="password" 
                            required aria-required="true" 
                        />
                    </div>
                    <button 
                        className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-500 w-[280px] sm:w-[320px] md:w-[480px] h-14" 
                        type="submit"
                    >
                        LOGIN
                    </button>
                    </form>
                    <span>
                        Don't have an account? 
                        <Link to="/account/register " className='underline  hover:text-gray-500 transition-colors ml-1 font-medium' >
                            Create one
                        </Link>
                    </span>
            </section>
        </main>
    )
}

export default Login;