import {
  getLabelFromCode,
  getUniqueLabels,
} from "../../../shared/helpers/timeLine.helper";

import LabelIcon from "../../../assets/labelIcon.svg";

import "./TimeLineItem.scss";
import { Item } from "../../../shared/interfaces/interfaces";

interface TimelineItem {
  data: Item;
}

export const TimelineItem = ({ data }: TimelineItem) => {
  const uniqueLabels = getUniqueLabels(data?.code, getLabelFromCode);

  return (
    <div className="timeline-item">
      <div
        className={`timeline-item-content ${
          data.allowed >= 5000 ? "warning-border" : "normal-border"
        }`}
      >
        <p className="timeline-item-allowed">
          <strong>Spent: </strong>
          <div>$ {data.allowed}</div>
        </p>
        <strong>Codes:</strong>
        <div className="timeline-item-codes">
          {data?.code?.map((code: string) => (
            <a
              key={code}
              href={`https://www.aapc.com/codes/cpt-codes/${code}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {code}
            </a>
          ))}
        </div>
        <strong>Diagnistics:</strong>
        <div className="timeline-item-codes">
          {data.dx1?.map((code: string) => (
            <span>{code} </span>
          ))}
          {data.dx2?.map((code: string) => (
            <span>{code} </span>
          ))}
        </div>
        {uniqueLabels?.length && (
          <div className="timeline-item-labels">
            <img className="timeline-item-labelIcon" src={LabelIcon} alt="" />
            {uniqueLabels?.map((code: string) => (
              <span key={code}>{code}</span>
            ))}
          </div>
        )}
        <span className="circle" />
        <time>{data.dos_from}</time>
      </div>
    </div>
  );
};
