import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-gray-700 rounded-lg'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-rose-700 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-9 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-4'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button className='w-full bg-green-500 hover:bg-green-700 mt-4 rounded font-medium py-3  px- text-xs'>Completed</button>
            </div>
        </div>
  )
}

export default CompleteTask