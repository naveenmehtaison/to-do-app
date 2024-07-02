import axios from "axios";
import React from "react";

const Todo = ({  id,title,description,isCompleted, mongoid ,Deletetodo,Updateodo}) => {


  return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          1
        </th>
        <td className="px-6 py-4">{title}</td>
        <td className="px-6 py-4">{description}</td>
        <td className="px-6 py-4">{isCompleted?'Completed':'Pending'}</td>
        <td className="px-6 py-4 flex gap-1">
          <button className="py-2 px-4 bg-red-500 text-white" onClick={()=>Deletetodo(mongoid)}>Delete</button>
          <button className="py-2 px-4 bg-green-500 text-white" onClick={()=>Updateodo(mongoid)}>Done</button>
        </td>
      </tr>
  );
};

export default Todo;
