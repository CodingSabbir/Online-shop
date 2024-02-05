import { useState } from 'react';
import { useSignInWithEmailAndPassword  } from 'react-firebase-hooks/auth';
import auth from '../../frebase.Config';
import { Link } from 'react-router-dom';
import Facebook from './SignIn/Facebook';
import GitHub from './SignIn/GitHub';
import Google from './SignIn/Google';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const messageDiv=document.querySelector('.message-div')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  if (error) {
    messageDiv.innerHTML=error
  }

  if (loading) {
    messageDiv.innerHTML='Loading...'
  }

  if (user) {
   
        messageDiv.innerHTML='Sign in Successfully'
    
  }
    return (
    <div className='mt-28'>
            <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
            </h2>
           
        </div>
    
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <div class="mt-1">
                            <input 
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                             id="email" name="email" type="email" autocomplete="email" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your email address"/>
                        </div>
                    </div>
    
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div class="mt-1">
                            <input
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
                             id="password" name="password" type="password" autocomplete="current-password" required
                                class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your password"/>
                        </div>
                    </div>
    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <p class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"></p>
                                
                            <div  class=" message-div ml-2 block text-sm text-gray-900">  
                            </div>
                        </div>
    
                        <div class="text-sm">
                        <p class="mt-2 text-center text-sm text-gray-600 max-w">
                        New User?
               <Link to={'/signUp'}> <a href="#" class="mt-2 text-center text-sm text-gray-600 max-w font-medium text-blue-600 hover:text-blue-500">
               Reg Here
                </a></Link>
            </p>
                        </div>
                    </div>
    
                    <div>
                        <button type="submit"
                            onClick={() => signInWithEmailAndPassword(email, password)}
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    
                            Sign in
                        </button>
                    </div>
                </div>
                <div class="mt-6">
    
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300"></div>
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-gray-100 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>
    
                    <div class="mt-6 grid grid-cols-3 gap-3">
                       
                        <Facebook/>
                        <GitHub/>
                        <Google/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
};

export default SignIn;