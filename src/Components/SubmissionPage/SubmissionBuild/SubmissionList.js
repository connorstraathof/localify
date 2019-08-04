import React from "react";
import Comment from "./Submission";

export default function CommentList(props) {
  return (
    <div className="commentList">
      <h5 className="text-muted mb-4">
        <span className="badge badge-success">{props.recommendations.length}</span>{" "}
        Comment{props.recommendations.length > 0 ? "s" : ""}
      </h5>

      {props.recommendations.length === 0 && !props.loading ? (
        <div className="alert text-center alert-info">
          Be the first to comment
        </div>
      ) : null}

      {props.recommendations.map((recommendation, index) => (
        <Comment key={index} recommendation={recommendation} />
      ))}
    </div>
  );
}