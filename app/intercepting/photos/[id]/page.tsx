import React from 'react'
import Image from 'next/image'
import { photos } from '../../date/date'

export default function Page({ params }: { params: {  id: string } }) {
      const photo = photos.find(item => item.id === params.id)
    return (
    <div className='container bg-amber-400 mx-auto pt-8'>
      <Image src={photo?.src} width={400} height={400} alt={photo?.name} className='rounded-lg block mx-auto' />  
      <div className='border-2 border-dashed'>
      </div>    
    </div>
  )
}
