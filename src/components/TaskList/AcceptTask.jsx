import React from 'react'

const AcceptTask = ({data}) => {
    console.log();
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gray-700 rounded-lg'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-orange-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-9 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-4'>
                {data.taskDescription}
            </p>
            <div className='flex justify-between mt-10'>
                <button className='bg-green-500 hover:bg-green-700 rounded font-medium py-1 px-2 py-3 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 hover:bg-red-700  rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
  )
}

export default AcceptTask