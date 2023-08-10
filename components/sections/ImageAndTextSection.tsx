import Image from 'next/image';
import TextSection from './TextSection';

type Props = {
  direction: string;
  image: string;
};

export default function ImageAndTextSection({ direction, image }: Props) {
  return (
    <div
      className={` container flex ${
        direction === 'left' && 'flex-row-reverse'
      } justify-between items-center gap-10`}
    >
      <div className="basis-1/2">
        <TextSection />
      </div>
      <div className=" basis-1/2">
        <img src={image} alt="No image" />
      </div>
    </div>
  );
}
