import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Slider from "react-slick";
import moment from "moment";

import { OneDay } from "..";

import "react-tabs/style/react-tabs.scss";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Days.scss";
import { Day } from "../../API/types";
import { useDataContext } from "../../Context/DataContext";
import { useReservationActionsContext } from "../../Context/ReservationContext";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <i
      onClick={onClick}
      className="bi bi-arrow-right-circle position-absolute slider-arrows slider-right-arrow"
    ></i>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <i
      onClick={onClick}
      className="bi bi-arrow-left-circle position-absolute slider-arrows slider-left-arrow"
    ></i>
  );
}

const Days: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const { data } = useDataContext();
  const { setDay } = useReservationActionsContext();

  const thisWeek = data.slice(0, 5);
  const nextWeek = data.slice(5, 10);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const handleSelect = (i: number): void => {
    setDay(moment(data.find((day: Day) => day.tabIndex === i)?.date).toDate());
    setTabIndex(i);
  };

  return (
    <>
      {data && (
        <Slider {...settings} className="slider-tabs d-flex  position-relative">
          <div style={{ border: "2px solid red" }}>
            <div
              className={
                "calender d-flex justify-content-center align-items-start bg-gray"
              }
            >
              <div className="col-10">
                <Tabs
                  selectedIndex={tabIndex}
                  onSelect={handleSelect}
                  key={tabIndex}
                >
                  <TabList>
                    {thisWeek.map((day: Day) => (
                      <Tab key={day.id}>{day.dayName}</Tab>
                    ))}
                  </TabList>

                  {thisWeek.map((day: Day) => (
                    <TabPanel key={day.id} tabIndex={day.tabIndex}>
                      <OneDay data={day} key={day.id} />
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
          <div>
            <div
              className={
                "calender d-flex justify-content-center align-items-start bg-gray"
              }
            >
              <div className="col-10">
                <Tabs
                  selectedIndex={tabIndex}
                  onSelect={handleSelect}
                  key={tabIndex}
                >
                  <TabList>
                    {nextWeek.map((day: Day) => (
                      <Tab key={day.id}>{day.dayName}</Tab>
                    ))}
                  </TabList>

                  {nextWeek.map((day: Day) => (
                    <TabPanel key={day.id} tabIndex={day.tabIndex}>
                      <OneDay data={day} key={day.id} />
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </Slider>
      )}
    </>
  );
};

export default Days;
