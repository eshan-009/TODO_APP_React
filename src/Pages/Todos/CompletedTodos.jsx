import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../../components/Card';

const CompletedTodos = () => {
  const data = useSelector((state)=>state.Todos);
  const completedData = data.filter((item)=>item.completed===true);
  return (
    <div className='w-svw h-full  flex flex-wrap justify-center items-center gap-3'>
    {
    completedData.length>0 ? completedData.map((item,index)=> <Card key={index} data={item}></Card>) : <p className='text-5xl'>No Data</p>
    }
   </div>
  )
}

export default CompletedTodos
