import React from 'react'     /* 导入 react库 支持*/
import Image from 'next/image'   /* 导入 Image */
import reliabilitySrc from '../../img/lingcage3.jpg'  /* 定义homeSrc变量和值 */
import Hero from '../../src/components/hero'   /* 1导入封装文件 hero.tsx */

import type { Metadata } from 'next'  /* 导入Metadata元数据  */

export const metadata: Metadata = {   /* 导出Metadata元数据 向路由添加title */
  title: 'Reliability',  
}


export default function Page() {      /* 定义react函数组件*/
  return (
   <Hero imgUrl={reliabilitySrc} altTxt='Reliability' content='Reliability...'/> /* 2使用封装文件 hero.tsx ，传入变量*/

  )
}
