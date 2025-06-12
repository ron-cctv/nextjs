'use client'
import React from 'react'
import { List ,Avatar } from 'antd'
import { data } from '../../date'
import Link from 'next/link'

export default function Bloglist() {
  return (
    <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => ( /* 遍历 data */
      <List.Item>
        <List.Item.Meta className='!items-center'
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<Link href={`../blog/${item.id}`}>{item.title}</Link>}
        /* description={item.body} */
        />
      </List.Item>
    )}
    />
  )
}
