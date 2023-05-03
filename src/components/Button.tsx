import Image from 'next/image';
import React from 'react';

const Button = ({ text, cls, img, children }: any) => {
  return (
    <button
      className={`flex justify-center items-center gap-3 rounded-lg ${cls}`}
    >
      {img && <Image src={img} width={24} height={24} alt="" />}
      {text} {children}
    </button>
  );
};

export default Button;
