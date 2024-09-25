import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card';

const UpcomingTodos = () => {

  const data = useSelector((state)=>state.Todos);
  const upcomingData = data.filter((item) => new Date(item.dueDate) > new Date());

  return (
    <div className='w-svw h-full  flex flex-wrap justify-center items-center gap-3'>
     {
          upcomingData.length>0 ? upcomingData.map((item,index)=> <Card key={index} data={item}></Card>) : <p className='text-5xl'>No Data</p>
     }
    </div>
  )
}

export default UpcomingTodos
