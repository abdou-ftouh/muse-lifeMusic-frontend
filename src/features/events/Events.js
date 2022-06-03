import "./style.css";
import { addDays, addHours, format } from "date-fns";
import { bands } from "../../seeds";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import DisplayCard from "../displayCard/DisplayCard";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

let allEventsArray = [];

let newEvent = {};

// --------------- DATE FORMATING --------------------

export const getFullDate = (x) => {
  return format(new Date(x), "eee, LLL d h:mm a");
};
export const getShortDate = (x) => {
  return format(new Date(x), "eee, LLL dd");
};
export const getDate = (x) => {
  return format(new Date(x), "dd");
};
export const getDay = (x) => {
  return format(new Date(x), "eee");
};
export const getTime = (x) => {
  return format(new Date(x), "h:mm a");
};

const Events = () => {

    bands?.map((band) => {
        band.events?.map((event, i) => {
            let location = event.location;
            let startTime = event.startTime;
            let endTime = event.endTime;
            newEvent = { band, startTime, endTime, location };

            allEventsArray.push(newEvent);
        });
    });
  console.log(allEventsArray);

  return (
    <div className="eventsContainer">
      {allEventsArray.map((event) => (
        <DisplayCard key={nanoid()} type="event" event={event} />
      ))}
    </div>
  );
};

export default Events;
