import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const TimeAndDate = ({ time }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(time);
  }, [time]);

  // Check if time is a valid date string or a valid timestamp
  const isValidTime = currentTime && !isNaN(new Date(currentTime).getTime());

  if (!isValidTime) {
    return <Text>Error: Invalid time value</Text>; // Use <Text> instead of <span>
  }

  const prevTime = new Date(currentTime).getTime();
  const currentTimeStamp = new Date().getTime();
  const expire_time = prevTime < currentTimeStamp;

  const createdAtString = String(currentTime);
  const createdAtDate = new Date(createdAtString);

  // Format the date
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(createdAtDate);

  return (
    <Text style={{ color: expire_time ? "red" : "green" }}>
      {expire_time ? "Offer Expired" : formattedDate}
    </Text>
  );
};

const FormatDate = ({ time }) => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    setCurrentTime(time);
  }, [time]);

  // Check if time is a valid date string or a valid timestamp
  const isValidTime = currentTime && !isNaN(new Date(currentTime).getTime());

  if (!isValidTime) {
    return <Text>Error: Invalid time value</Text>; // Use <Text> instead of <span>
  }

  const prevTime = new Date(currentTime).getTime();
  const currentTimeStamp = new Date().getTime();
  const expire_time = prevTime < currentTimeStamp;

  const createdAtString = String(currentTime);
  const createdAtDate = new Date(createdAtString);

  // Format the date
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(createdAtDate);

  return <Text>{formattedDate}</Text>;
};
export { TimeAndDate, FormatDate };
