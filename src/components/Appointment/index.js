import React from "react";
import "components/Appointment/styles.scss"
import Empty from "./Empty";
import Show from "./Show";

export default function Appointment(props) {
  return (
    <article className="appointment">
      <header>{props.time}</header>
      {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />}
    </article>
  );
};