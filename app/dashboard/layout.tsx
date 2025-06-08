"use client"
import { link } from "fs";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";

const linkData = [
    { name: "About",path: "/dashboard/about" },
    { name: "Settings",path: "/dashboard/settings" },
];

export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  console.log(pathname)
  const [count, setCount] = useState(0)
  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto mt-10">
        <h1>我是dashboard layout</h1>
        <div className="flex gap-4 font-bold text-lg mb-4 text-yellow-500">
            {
              linkData.map((link) => (
                 <Link key={link.path} className={pathname === link.path ? "text-purple-500" : " "} href={link.path}>{link.name}</Link>
              ))
            }
        </div>
        <h2>dashboard Layout 总数量 {count}</h2>
        <button className="bg-black text-white p-2 my-4 rounded-md" 
        onClick={()=> setCount(count + 1)}>
          Increment dashboard layout增加数量+1</button>
        {children}
    </div>      
    
  );
}