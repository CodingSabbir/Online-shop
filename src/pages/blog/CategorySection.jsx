import React from 'react';

const CategorySection = ({onSelectCategory,activecategory}) => {
    const categories=['Startups','AI','Security','Apps','Tech']
    return (
        
        <div className='px-4 lg:space-x-16 mb-8 flex flex-wrap text-gray-900 items-center border-b-2 py-5 font-semibold'> 
            <button onClick={()=>onSelectCategory(null)} className={`lg:ml-12 ${activecategory ? '' : 'active-button'}`}>All </button>
            {
              categories.map((category)=>(
                <button
                onClick={()=>onSelectCategory(category)}
                className={`mr-2 space-x-16  ${activecategory  === category ? 'active-button' : ''}`} 
                key={category.id}
                >
                    {category}
                </button>
              ))  
            }
        </div>
    );
};

export default CategorySection;