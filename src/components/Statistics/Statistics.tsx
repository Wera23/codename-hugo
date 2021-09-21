import React from "react";
import classnames from "classnames";
import { PieChart } from "react-minimal-pie-chart";

import styles from "./Statistics.module.scss";
import { HomeAnimation } from "..";

interface IStatistic {
  workOffice: number;
  workHome: number;
  freeDesks: number;
}

const Statistics: React.FC<IStatistic> = ({
  workOffice,
  workHome,
  freeDesks,
}) => {
  function renderHomeWork(): any {
    return (
      <div className="d-flex flex-column align-items-center mt-3">
        <p
          className={classnames(
            styles.statisticInformation,
            "text-align font-weight-light"
          )}
        >
          Dziś wszyscy pracują w domu, biuro jest puste
        </p>

        <HomeAnimation />
      </div>
    );
  }

  function renderOfficeWork(): any {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center row">
          <PieChart
            paddingAngle={0}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
            className="col-5"
            data={[
              {
                title: "Zdalnie",
                value: workHome,
                color: "#e6e3e7",
              },
              {
                title: "Biuro",
                value: workOffice,
                color: "#c7f032",
              },
            ]}
            labelStyle={() => ({
              fill: "#212529",
              fontSize: "6px",
            })}
            center={[50, 50]}
          />
          <div className="d-flex flex-column col-5">
            <div className="d-flex align-items-center ml-3">
              <div
                className={classnames(styles.statisticsPoint, "bg-green")}
              ></div>
              <p
                className={classnames(
                  styles.statisticsLabel,
                  "font-weight-light ml-2 mb-0"
                )}
              >
                Praca z biura
              </p>
            </div>

            <div className="d-flex align-items-center ml-3">
              <div
                className={classnames(styles.statisticsPoint, "bg-silver")}
              ></div>
              <p
                className={classnames(
                  styles.statisticsLabel,
                  "font-weight-light ml-2 mb-0"
                )}
              >
                Praca z domu
              </p>
            </div>
          </div>
        </div>

        <div
          className={classnames(
            styles.statisticInformation,
            "text-align font-weight-light mt-5"
          )}
        >
          Na wybrany dzień pozostało
          <span className="font-weight-bold">{freeDesks}</span> wolnych biurek.
        </div>
      </>
    );
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center pb-5 col-12">
      {workOffice <= 0 ? renderHomeWork() : renderOfficeWork()}
    </div>
  );
};

export default Statistics;
