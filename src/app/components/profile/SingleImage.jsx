import Image from 'next/image';
import React from 'react'

function SingleImage() {
  return (
    <>
      <div className="w-64">
        <Image
          src="https://as1.ftcdn.net/v2/jpg/03/91/19/22/1000_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
          width={1000}
          height={1000}
          objectFit="cover"
          objectPosition="center"
          draggable={false}
          className='w-full h-full'
        />
      </div>
    </>
  );
}

export default SingleImage