"use client"  /* 定义一些包可以在客户端使用 */
import React from 'react';
import Link from "next/link";  /* 导入包 link */
import { usePathname } from 'next/navigation';   /* 导入包 usepathname */
const linkData = [                        /* 定义数组linkData  */
  { name: 'Performance', href: '/performance' },
  { name: 'Reliability', href: '/reliability' },
  { name: 'Scale', href: '/scale' },
];

export default function Header() {
  const pathname = usePathname() /* 定义变量pathname=当前路由 */
  return (
    <div className="absolute w-full z-10">
        <div className="flex justify-between container mx-auto text-white p-8 items-center">
           <Link href="/" className="text-3xl font-bold">home</Link>
           <div className="text-xl space-x-4"> 
            {
              linkData.map((link) => (
               <Link
                 key={link.name}
                 className={pathname === link.href ? "text-purple-500" : "" }
                  href={link.href}
               >  
                 {link.name}                  
               </Link>
              ))
            }
           </div>
        </div>
    </div>
  )
}
