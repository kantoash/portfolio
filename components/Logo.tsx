import Image from 'next/image';
import React from 'react'

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className='flex items-center space-x-2 p-1'>
        <Image src={`https://cdn.sanity.io/images/54o3nk6f/production/12ba7120331b2ecca22d42fde1bfd0ab2f5f7e97-474x296.jpg`} className="rounded-full object-cover" width={60} height={60} alt="logo" />
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo