import Image from 'next/image';
import React from 'react'
import ImageSection from '../components/profile/ImageSection';

function page() {
  return (
    <>
      <div className='w-full h-full flex flex-col gap-10'>
        <div className="w-56 h-64 bg-blue-500 flex rounded-none p-2 relative">
          <Image
            src="https://as1.ftcdn.net/v2/jpg/03/91/19/22/1000_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
            width={1000}
            height={100}
            objectFit="cover"
            objectPosition="center"
            draggable={false}
          />
        </div>

        <ImageSection />
      </div>
    </>
  );
}

export default page