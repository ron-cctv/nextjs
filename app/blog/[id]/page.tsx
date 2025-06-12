import React from 'react'
import { Card } from 'antd'
import { data } from '@/app/date'
import { title } from 'process'

interface IParams { params: { id: string }}     /* 设置数据类型 */

export async function generateMetadata({ params }:IParams) {   /* 接收上一个链接的变量,设置title */
  return {
    title: `Blog 博客详情-${params.id}`
  }
}

export default function Page({ params }: IParams) {        /* 接收上一个链接的变量 */
    const item = data.find(item => item.id === +params.id)!

  return (
    <div>
      <Card title={item.id}>
      <p>{item.body}</p>
    </Card>
    </div>
  )
}
