import { useGetClientDataQuery } from "../../store/apiSlice";
import { TimelineItem } from "./TimeLineItem/TimeLineItem";
import {
  getGenderLabel,
  calculateAge,
  processData,
  convertToDate,
} from "../../shared/helpers/timeLine.helper";

import { Item } from "../../shared/interfaces/interfaces";

import "./TimeLine.scss";

export const Timeline = () => {
  const {
    data: clientData = [],
    isLoading,
  } = useGetClientDataQuery(undefined);

  const sortedArray = processData(clientData).sort((a: Item, b: Item) => {
    const timeA = convertToDate(a.dos_from);
    const timeB = convertToDate(b.dos_from);
    return timeA - timeB;
  });

  return (
    <div className="timeline">
      {isLoading && <p>Loading...</p>}
      {clientData.length > 0 ? (
        <>
          <div className="timeline-header">
            <span>Patient:</span>
            <strong>{clientData[0]?.patient_id}</strong>
            <span>{` (${getGenderLabel(clientData[0]?.gender)}, ${calculateAge(
              clientData[0]?.dob
            )} year-old)`}</span>
          </div>
          <div className="timeline-container">
            {sortedArray.length > 0 ? (
              sortedArray.map((data) => (
                <TimelineItem data={data} key={data.id} />
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </>
      ) : (
        <p>No client data available</p>
      )}
    </div>
  );
};
