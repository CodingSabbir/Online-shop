import React from 'react';
import auth from '../../../frebase.Config';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { FaGithub } from "react-icons/fa";
const GitHub = () => {
    const [signInWithGithub] = useSignInWithGithub(auth);
   
return (

    <div>
    <a  onClick={() => signInWithGithub()}
        class="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
       <FaGithub className='h-5 w-5'/>
    </a>
</div>

);
};

export default GitHub;
