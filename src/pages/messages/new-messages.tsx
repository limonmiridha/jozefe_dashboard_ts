import Card from "@/components/GlobalCard";
import { InnerHeader, TitleHeader } from "@/components/Headers";
import TextEditor from "@/components/TextEditor";
import Input from "@/components/Input";
import Button from "@/components/Button";
import React, { Fragment } from "react";
import Image from "next/image";
import SelectInput from "@/components/SelectInput";

type Props = {};

const Index = (props: Props) => {
  return (
    <Fragment>
      <TitleHeader
        pageIcon="/images/messages/message_ic.svg"
        headerText="Lorem Ipsum is a dummy text for placeholder"
      />
      <Card cls="px-4 pb-3">
        <InnerHeader>Create Message</InnerHeader>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <SelectInput
            data={[
              {
                value: "Member Type",
                label: "Member Type",
                image: "/images/inputIcon/manInput.svg",
              },
            ]}
          />
          <Input img="/images/inputIcon/email.svg" name="Email" type="name" />
          <SelectInput
            data={[
              {
                value: "To",
                label: "To",
              },
            ]}
          />
          <SelectInput
            data={[
              {
                value: "Message Template",
                label: "Message Template",
              },
            ]}
          />
        </div>
        <Input name="Subject" type="name" />
        <div className="mt-3 h-72">
          <TextEditor />
        </div>
        <div className="flex gap-4 ">
          <Button cls="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            send
          </Button>
          <Button cls="bg-gray-200 px-6 py-2 rounded-md">
            <Image
              width={15}
              height={10}
              src="/images/messages/file-upload.svg"
              alt=""
            />
          </Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default Index;
