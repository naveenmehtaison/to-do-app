"use client"
import { Fragment, useEffect, useState } from "react";
import Todo from "@/component/Todo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


export default function Home() {
  const [formdata,setformdata] = useState({title:'',description:''})
  const onchangehandler=(e)=>{
    e.preventDefault()
    
    const name = e.target.name
    const value = e.target.value
    console.log(name,value)
    setformdata(form=>({...form,[name]:value}))

    console.log(formdata)

  }
  const [Tododata,setTododata] = useState([])
  const fetchtodo=async ()=>{
    const data = await axios('/api')
    setTododata(data.data.todos)
  }
  const Deletetodo = async (id)=>{
    console.log(id)
    const response = await axios.delete('/api',{
      params:{
        mongoId:id
      }
    })
    // toast.success(response.data.message)
    fetchtodo()
   

  }
  async function Updateodo(id){
    const res = await axios.put('/api',{},{
      params:{
        mongoId:id
      }

    })
    toast.success(res.data.message)
    fetchtodo()
  }
  useEffect(()=>{
    fetchtodo()
  },[])
  const onSubmithandler= async (e)=>{
    e.preventDefault()
    try{
      const response = await  axios.post('/api',formdata)
      toast.success( response.data.message)
      setformdata({title:'',description:''})
      await fetchtodo()

    }
    catch{
      toast.error('error')

    }
    console.log(e)


  }
  return (
    <>
      <ToastContainer theme="dark"/>
      <form  onSubmit={onSubmithandler}className="flex flex-col items-start gap-2 width-[80%] max-w-[600px] mt-10 px-2 mx-auto">
        <input value={formdata.title}
        onChange={onchangehandler}
          type="text "
          name="title"
          placeholder="entertitle"
          className="px-3 py-2 border-2 w-full"
        ></input>
        <textarea
          value={formdata.description}
          onChange={onchangehandler}
          name="description"
          placeholder="description"
          className="px-3  py-2 border-2 w-full "
        ></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
          Add To-do
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Tododata.map((ele,index)=>{
              return (<Todo Updateodo={Updateodo} Deletetodo={Deletetodo} key={index} item={index} title={ele.title} description = {ele.description} isCompleted={ele.isCompleted} mongoid={ele._id}></Todo>)
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
