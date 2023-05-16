import Image from 'next/image';
import React from 'react';

const Input = ({ img, type, name, cls }: any) => {
  return (
    <div className="relative text-gray-600 focus-within:text-gray-400">
      {img && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Image src={img} width={19} height={22} alt="a" />
        </span>
      )}

      <input
        type={type}
        name="q"
        className={`p-3 w-full bg-[#fafafa] rounded-md ${
          img ? 'pl-12' : 'pl-4'
        } focus:outline-none focus:text-gray-900 ${cls}`}
        placeholder={name}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
