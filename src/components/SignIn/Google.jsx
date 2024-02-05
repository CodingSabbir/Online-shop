import React from 'react';
import auth from '../../../frebase.Config';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const Google = () => {
const [signInWithGoogle] = useSignInWithGoogle(auth);

return (
<div>
    <a  onClick={() => signInWithGoogle()}
        class="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
        <img class="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" alt="" />
    </a>
</div>

);
};

export default Google;
