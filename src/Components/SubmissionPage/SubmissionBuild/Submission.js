import React from "react";

export default function Comment(props) {
  const { remark, time } = props.recommendation;

  return (
    <div className="media mb-3">

{/* to add an image, replace the src of the code below */}

      {/* <img
        className="mr-3 bg-light rounded"
        width="48"
        height="48"
        src={`https://api.adorable.io/avatars/48/${name.toLowerCase()}@adorable.io.png`}
        alt={name}
      /> */}

      <img
        className="comment-avatar" alt=''
      />

      <div className="comment-box">
        <small className="float-right text-muted">{time}</small>
        <h6 className="mt-0 mb-1 text-muted">{remark}</h6>    
      </div>
    </div>
  );
  }