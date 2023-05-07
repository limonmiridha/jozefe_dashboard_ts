import { Fragment } from "react";
import { TitleHeader } from "@/components/Headers";
import InfoCards from "@/components/InfoCards";
import { messagesCards } from "@/data/CardsData";
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
    </Fragment>
  );
};

export default meetings;
