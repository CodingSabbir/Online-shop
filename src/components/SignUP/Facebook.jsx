import React from 'react';
import auth from '../../../frebase.Config';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
const Facebook = () => {
    const [signInWithFacebook] = useSignInWithFacebook(auth);
   
return (

    <button
    onClick={() => signInWithFacebook()}
    className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
    <div className="relative flex items-center space-x-4 justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
            className="absolute left-0 w-5" alt="Facebook logo" />
        <span
            className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
            Continue with Facebook
        </span>
    </div>
</button>

);
};

export default Facebook;
