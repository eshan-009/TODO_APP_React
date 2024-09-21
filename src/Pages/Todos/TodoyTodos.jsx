import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../../components/Card';

const TodoyTodos = () => {
  const data = useSelector((state)=>state.Todos);
  const todayData = data.filter((item)=>new Date(item.dueDate).getDate() === new Date().getDate());


  return (
    <div className='w-svw h-full  flex flex-wrap justify-center items-center gap-3'>
     {
     todayData.length>0 ? todayData.map((item,index)=> <Card key={index} data={item}></Card>) : <p className='text-5xl'>No Data</p>
     }
    </div>
  )
}

export default TodoyTodos
