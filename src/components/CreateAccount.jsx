import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../frebase.Config';
import { Link } from 'react-router-dom';
import Google from './SignUP/Google';
import Facebook from './SignUP/Facebook';
import GitHub from './SignUP/GitHub';

const CreateAccount = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const messageDiv=document.querySelector('.message-div')
const [
createUserWithEmailAndPassword,
user,
loading,
error,
] = useCreateUserWithEmailAndPassword(auth);

if (error) {
messageDiv.innerHTML=error
}

if (loading) {
messageDiv.innerHTML='Loading...'
}

if (user) {

messageDiv.innerHTML='User Registered Successfully'

}

return (
<div className="mt-28 ">
    <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="rounded-xl bg-white shadow-xl">
                    <div className="p-6 sm:p-16">
                        <div className="space-y-4">
                            <img src="https://tailus.io/sources/blocks/social/preview/images/icon.svg" loading="lazy"
                                className="w-10" alt="tailus logo" />
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">
                                        SignUp Form
                                    </h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div
                                        className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input value={email} onChange={(e)=> setEmail(e.target.value)}
                                            autoComplete="off"
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Email address"
                                            />
                                            <label htmlFor="email"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                Email Address
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input value={password} onChange={(e)=> setPassword(e.target.value)}
                                            autoComplete="off"
                                            id="password"
                                            name="password"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                            placeholder="Password"
                                            />
                                            <label htmlFor="password"
                                                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                                                Password
                                            </label>
                                            <div className='flex justify-between'>
                                                <div className=' message-div'></div>
                                                <p class="mt-2 text-center text-sm text-gray-600 max-w">
                                                    
                                                    <Link to={'/signIn'}> <a href="#"
                                                        class="mt-2 text-center text-sm text-gray-600 max-w font-medium text-blue-600 hover:text-blue-500">
                                                        Sign in Here
                                                    </a></Link>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <button type='submit' onClick={()=>
                                                createUserWithEmailAndPassword(email, password)
                                                }
                                                className="bg-black text-white rounded-md px-2 py-1 w-full"
                                                >
                                                SignUp
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid space-y-4">
                            
                            <Google/>
                            <GitHub/>
                            <Facebook/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
);
};

export default CreateAccount;
