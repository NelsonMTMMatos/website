'use client';

import FormEmailInput from '@/components/forms/FormEmailInput';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <main className=" bg-white">
      <header>
        <Header />
      </header>
      <div className=" flex justify-between items-center container">
        <img src="./images/image.png" alt="No image" />
        <div className=" w-full h-full  px-10">
          <FormEmailInput />
        </div>
      </div>
    </main>
  );
}
