import React from 'react';

const Rightbar = ({ children }: RightbarProps) => {
  return (
    <div className={` xl:block`}>
      <div className="p-4 bg-white">{children}</div>
    </div>
  );
};

export default Rightbar;
type RightbarProps = {
  mobile?: boolean;
  children: React.ReactNode;
};
