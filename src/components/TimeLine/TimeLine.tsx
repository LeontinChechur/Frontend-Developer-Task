import classnames from "classnames";

import { BaseButton } from "../UI/BaseButton/BaseButton";
import { toggleViewButton } from "../../store/viewButton/viewButton.slice";
import { useGetClientDataQuery } from "../../store/apiSlice";
import { useAppDispatch, useAppSelector } from "../../shared/types/hooks";
import { TimelineItem } from "./TimeLineItem/TimeLineItem";
import {
  getGenderLabel,
  calculateAge,
  processData,
  convertToDate,
  isOdd,
} from "../../shared/helpers/timeLine.helper";
import { Item } from "../../shared/interfaces/interfaces";

import "./TimeLine.scss";

export const Timeline = () => {
  const { data: clientData = [] } = useGetClientDataQuery(undefined);
  const dispatch = useAppDispatch();
  const isHorizontal = useAppSelector((state) => state.viewButton.isHorizontal);

  const sortedArray = processData(clientData).sort((a: Item, b: Item) => {
    const timeA = convertToDate(a.dos_from);
    const timeB = convertToDate(b.dos_from);
    return timeA - timeB;
  });

  return (
    <div className={classnames("timeline", { horizontal: isHorizontal, vertical: !isHorizontal })}>
      {clientData.length ? (
        <>
          <div className="timeline-header">
            <span>Patient:</span>
            <strong>{clientData[0]?.patient_id}</strong>
            <span>{` (${getGenderLabel(clientData[0]?.gender)}, ${calculateAge(
              clientData[0]?.dob
            )} year-old)`}</span>
            <BaseButton
              title={`Switch to ${isHorizontal ? "vertical" : "horizontal"}`}
              className="timeline-header__button"
              onClick={() => dispatch(toggleViewButton())}
            />
          </div>
          <div className="timeline-container">
            <div className="timeline-list">
              {sortedArray.length ? (
                sortedArray.map((data, index) => (
                  <TimelineItem
                    data={data}
                    key={data.id}
                    className={classnames({ left: isOdd(index), right: !isOdd(index) })}
                  />
                ))
              ) : (
                <p>No data available</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>No client data available</p>
      )}
    </div>
  );
};
