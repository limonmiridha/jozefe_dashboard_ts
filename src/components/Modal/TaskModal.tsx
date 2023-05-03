import React from 'react';
import Image from 'next/image';
import ReactModal from 'react-modal';
import Input from '../Input';
import SelectInput from '../SelectInput';
import Button from '../Button';

const TaskModal = (props: any) => {
  const { isOpen, onClose } = props;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className=""
    >
      <div className="justify-betweens mb-3">
        <div className="flexs gap-3">
          <Image
            src="/images/tasks/list-view.svg"
            width={34}
            height={34}
            alt=""
          />
          <div>
            <h2 className="text-xl font-bold">Add Task</h2>
            <p className="text-slate-500">Add upcoming tasks and maintenance</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <Image src="/images/closeBtn.svg" width={14} height={14} alt="" />
        </button>
      </div>
      <div>
        <Input img="/images/inputIcon/pen.svg" name="Task Title" />
      </div>
      <div className="grid xs:grid-cols-2 gap-4 mt-4">
        <SelectInput data={''} />
        <SelectInput data={''} />
      </div>
      <div className="grid xs:grid-cols-2 gap-4 mt-4">
        <Input name="Task Date" type="date" />
        <Input name="Recurring Days" type="name" />
      </div>
      <div className="mt-4">
        <Input
          img="/images/inputIcon/priority.svg"
          name="Task Priority"
          type="name"
        />
      </div>
      <div className="mt-4">
        <div className="relative my-3">
          <span className="flexs gap-2 absolute top-2 pl-4 text-gray-600">
            <Image
              src="images/inputIcon/content.svg"
              width={20}
              height={20}
              alt=""
            />
            Task Content
          </span>
          <textarea
            className="w-full h-32 p-4 pt-8 bg-gray-50 rounded"
            placeholder="Type content here......"
          />
        </div>
      </div>
      <div className="grid xs:grid-cols-2 gap-3">
        <Button
          text="Cancel"
          cls=" bg-[#edf3fa] w-full py-2 px-4 border-none"
        />
        <Button
          text="Create Task"
          cls=" bg-[#017efb] w-full py-2 px-4  text-white"
        />
      </div>
    </ReactModal>
  );
};

export default TaskModal;
