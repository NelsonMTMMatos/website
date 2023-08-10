'use client';

import FormSection from '@/components/forms/FormSection';
import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <main className=" bg-white">
      <header>
        <Header />
      </header>
      <div className=" flex justify-between items-center container mt-20 mb-20">
        <img src="./images/image.png" alt="No image" />
        <div className=" w-full h-full px-10">
          <FormSection />
        </div>
      </div>
    </main>
  );
}
