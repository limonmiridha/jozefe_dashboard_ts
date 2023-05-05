import { TitleHeader } from "@/components/Headers";
import { Fragment } from "react";
type Props = {};

const meetings = (props: Props) => {
  return (
    <Fragment>
      <TitleHeader
        pageIcon="/images/messages/message_ic.svg"
        headerText="Lorem Ipsum is a dummy text for placeholder"
      />
    </Fragment>
  );
};

export default meetings;
