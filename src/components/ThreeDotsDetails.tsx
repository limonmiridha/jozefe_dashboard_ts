import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Popover } from 'react-tiny-popover';

const ThreeDotsDetails = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <Popover
      isOpen={isPopoverOpen}
      positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
      content={<div>Hi! I'm popover content.</div>}
    >
      <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        <BsThreeDotsVertical className="text-xl" />
      </div>
    </Popover>
  );
};

export default ThreeDotsDetails;
