import Image from 'next/image';

export default function PhotosSection() {
  return (
    <div className=" container grid grid-cols-4 gap-2 text-white">
      {Array(8)
        .fill(null)
        .map((data: any, index: number) => (
          <div
            className={`bg-slate-600 h-[300px] flex justify-center items-center hover:scale-125 transition-all duration-500`}
            key={index}
          >
            {'Image ' + (index + 1)}
          </div>
        ))}
    </div>
  );
}
