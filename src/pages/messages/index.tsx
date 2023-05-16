import { Fragment } from "react";
import { TitleHeader } from "@/components/Headers";
import InfoCards from "@/components/InfoCards";
import { messagesCards } from "@/data/CardsData";
import GlobalDataTable from "@/components/GlobalDataTable";
import { messagesColumn, messagesData } from "@/data/TableData";
import Card from "@/components/GlobalCard";
import Image from "next/image";
import Button from "@/components/Button";
type Props = {};

const meetings = (props: Props) => {
  return (
    <Fragment>
      <TitleHeader
        pageIcon="/images/messages/message_ic.svg"
        headerText="Lorem Ipsum is a dummy text for placeholder"
      />
      <div className="mb-6">
        <InfoCards cards={messagesCards} />
      </div>

      <div className="my-4 bg-white rounded-lg">
        <GlobalDataTable
          data={messagesData}
          column={messagesColumn}
          tableTitle="Messages"
          titleImg="/images/messages/Group 38017.svg"
          tableHeader={true}
        />
      </div>
      <Card cls="px-4 py-4">
        <div className="flex items-center justify-between border-b-2 border-inherit">
          <div className="flex items-center gap-4">
            <Image
              src="/images/messages/Group 38017.svg"
              width={30}
              height={30}
              alt="message"
            />
            <p className="text-lg font-semibold">
              Chatting with{" "}
              <span className="text-[#5671FF]">Harper Stevens</span>
            </p>
          </div>
          <Button className="px-3 py-2 text-sm border">
            <Image
              src="/images/messages/close.svg"
              width={15}
              height={15}
              alt="close"
            />{" "}
            close chat
          </Button>
        </div>
      </Card>
    </Fragment>
  );
};

export default meetings;
