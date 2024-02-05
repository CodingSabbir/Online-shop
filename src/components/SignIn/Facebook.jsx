import React from 'react';
import auth from '../../../frebase.Config';
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
const Facebook = () => {
    const [signInWithFacebook] = useSignInWithFacebook(auth);
   
return (

    <div className='cursor-pointer'>
        
    <a onClick={() => signInWithFacebook()}
        class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
        <img class="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
            alt=""/>
    </a>
    
</div> 

);
};

export default Facebook;
