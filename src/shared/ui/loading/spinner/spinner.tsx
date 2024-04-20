import Image from 'next/image';
import SpinnerSvg from '/public/spinner.svg';

export const Spinner = () => {
  return <Image src={SpinnerSvg} alt="" width={200} height={200} />;
};
