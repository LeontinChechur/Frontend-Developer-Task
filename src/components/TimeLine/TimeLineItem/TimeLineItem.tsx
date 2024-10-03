import { useEffect, useRef } from "react";
import classnames from "classnames";

import {
  getLabelFromCode,
  getUniqueLabels,
} from "../../../shared/helpers/timeLine.helper";
import LabelIcon from "../../../assets/labelIcon.svg";
import { Item } from "../../../shared/interfaces/interfaces";

interface TimelineItemProps {
  data: Item;
  className?: string;
}

export const TimelineItem = ({ data, className = "" }: TimelineItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const uniqueLabels = getUniqueLabels(data?.code, getLabelFromCode);
  const expence = data.allowed >= 5000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <>
      <div ref={itemRef} className={classnames("timeline-item", className)}>
        <div className="timeline-item-content">
          <div className="timeline-item-price">
            <div
              className={classnames("timeline-item-price__notification", {
                "high-price": expence,
                "low-price": !expence,
              })}
            >
              {expence ? "High" : "Low"} expense
            </div>
            <div
              className={classnames("timeline-item-allowed", {
                "price-warning": expence,
              })}
            >
              <strong>Spent: </strong>
              <div>$ {data.allowed}</div>
            </div>
          </div>
          <strong>Codes:</strong>
          <div className="timeline-item-codes">
            {data?.code?.map((code: string, i: number) => (
              <a
                key={i}
                href={`https://www.aapc.com/codes/cpt-codes/${code}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {code}
              </a>
            ))}
          </div>
          <strong>Diagnostics:</strong>
          <div className="timeline-item-dx">
            {data.dx1?.map((code: string, index: number) => (
              <span key={index}>{code}</span>
            ))}
            {data.dx2?.map((code: string, index: number) => (
              <span key={index}>{code}</span>
            ))}
          </div>
          {uniqueLabels?.length && (
            <div className="timeline-item-labels">
              <img
                className="timeline-item-labelIcon"
                src={LabelIcon}
                alt="Label icon"
              />
              {uniqueLabels?.map((code: string) => (
                <span key={code}>{code}</span>
              ))}
            </div>
          )}
          <span className="circle" />
          <time>{data.dos_from}</time>
        </div>
      </div>
      <div className="timeline-item"></div>
    </>
  );
};
