import React from 'react';


function SideBarWokout() {

    const exerciesCategory = [
        {category: 'Chest', id: 1},
        {category: 'Shoulders', id: 2},
        {category: 'Legs', id: 3},
        {category: 'Abs', id: 4},
        {category: 'Back', id: 5},

    ]

  return (
    <div className='bg-slate-800 w-[15%] flex flex-col gap-5 h-screen items-center justify-center absolute left-20'>
        
        <div className="exercise-category flex flex-col gap-10">
            {
                exerciesCategory.map( (exerciesCategory) => (
                    <h3 className='text-white hover:text-blue-500 duration-200 font-semibold text-[24px] cursor-pointer '>{exerciesCategory.category}</h3>
                ))
            }
        </div>
        
    </div>
  )
}

export default SideBarWokout