"use client"
import {useState} from "react";

export default function dashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0)
  return (
    <div className="border-2 border-dashed border-black p-4 mx-auto mt-10">
        <h1>我是dashboard Template</h1>        
        <h2>dashboard Template 总数量 {count}</h2>
        <button className="bg-black text-white p-2 my-4 rounded-md" 
        onClick={()=> setCount(count + 1)}>
          Increment dashboard Template增加数量+1</button>
        {children}
    </div>      
    
  );
}