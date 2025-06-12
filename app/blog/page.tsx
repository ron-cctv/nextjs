import React from 'react'

import type { Metadata } from 'next'  
import Bloglist from '../src/components/blogList'
export const metadata: Metadata = {
  title: 'My Blog 博客列表',
  description: '...',
}
 
export default function Page() {
  return (
    <Bloglist/>
  )
}
