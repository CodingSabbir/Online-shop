import React from 'react';
import zaraLogo from "/src/assets/img/images/zara-logo.png"
const Collection = () => {
return (
<div>
    <div
        class="bg-[url('/src/assets/img/images/collection-bg.png')] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20">
        <div className='h-[580px] flex  md:flex-row justify-between items-center'>
            <div className='md:w-1/2'></div>
            <div className='md:w-1/2'>
                <img src={zaraLogo} alt="" />
                <p className='text-lg leading-[32px] md:w-2/3 text-white capitalize my-8'>Lustrous yet understated. The new evening
                    wear collection exclusively offered at the
                    reopened Giorgio Armani boutique in Los
                    Angeles.</p>
                    <button className='px-6 py-2 bg-white text-black font-semibold rounded-sm'>see collection</button>
            </div>

        </div>
    </div>
</div>
);
};

export default Collection;
