import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-teal-800 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h5 className='bg-rose-800 w-12 px-2 py-.5 rounded mt-1 items-center'>new</h5>
            <h2 className='mt-4  text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-4'>
                {data.taskDescription}
            </p>
            <div className='mt-9'>
                <button className='bg-blue-500 rounded font-medium py-2 px-2 text-sm hover:bg-green-500'>Accept Task</button>
            </div>
        </div>
    )
}

export default NewTask