import React from "react";
import Submission from "./Submission";

export default function SubmissionList(props) {
  return (
    <div className="submissionList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.submissions.length}</span>{" "}
        Submission{props.submissions.length > 0 ? "s" : ""}
      </h5>

      {props.submissions.length === 0 && !props.loading ? (
        <div className="alert text-center alert-info">
          Be the first to submit
        </div>
      ) : null}

      {props.submissions.map((submission, index) => (
        <Submission key={index} submission={submission} />
      ))}
    </div>
  );
}