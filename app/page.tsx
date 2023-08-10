'use client';

import FormSection from '@/components/sections/FormSection';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=" bg-white">
      <div className=" flex justify-between items-center container mt-20 mb-20">
        <Image
          src="/images/image.png"
          alt="No image"
          width={600}
          height={300}
        />
        <div className=" w-full h-full px-10">
          <FormSection />
        </div>
      </div>
      <div className=" flex justify-between items-center container mt-20 mb-20">
        <Image
          src="/images/image.png"
          alt="No image"
          width={600}
          height={300}
        />
        <div className=" w-full h-full px-10">
          <FormSection />
        </div>
      </div>
      <div className=" flex justify-between items-center container mt-20 mb-20">
        <Image
          src="/images/image.png"
          alt="No image"
          width={600}
          height={300}
        />
        <div className=" w-full h-full px-10">
          <FormSection />
        </div>
      </div>
      <div className=" flex justify-between items-center container mt-20 mb-20">
        <Image
          src="/images/image.png"
          alt="No image"
          width={600}
          height={300}
        />
        <div className=" w-full h-full px-10">
          <FormSection />
        </div>
      </div>
      <div className=" flex justify-between items-center container mt-20 mb-20">
        <Image
          src="/images/image.png"
          alt="No image"
          width={600}
          height={300}
        />
        <div className=" w-full h-full px-10">
          <FormSection />
        </div>
      </div>
    </main>
  );
}
