import React from "react";
import { TitleHeader } from "@/components/Headers";
import { incidentsCards } from "@/data/CardsData";
import { incidentColumn, incidentData } from "@/data/TableData";
import GlobalDataTable from "@/components/GlobalDataTable";
import InfoCards from "@/components/InfoCards";

const incidents = () => {
  return (
    <div>
      <TitleHeader
        pageIcon="/images/incidents/incidents.svg"
        headerText="Lorem Ipsum is a dummy text for placeholder"
      />
      <div className="mb-6">
        <InfoCards cards={incidentsCards} />
      </div>
      <div className="my-4 bg-white rounded-lg">
        <GlobalDataTable
          data={incidentData}
          column={incidentColumn}
          tableTitle="Incidents"
          titleImg="/images/incidents/incidentsBg.svg"
          capsuleBtn
          tableHeader={true}
        />
      </div>
    </div>
  );
};

export default incidents;
