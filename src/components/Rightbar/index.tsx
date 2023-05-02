import React, { ReactNode } from 'react';

const Rightbar = ({ children }: RightbarProps) => {
  return <div>{children}</div>;
};

export default Rightbar;
type RightbarProps = {
  children: React.ReactNode;
};
