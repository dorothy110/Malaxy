import React from "react";

import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";
import styles from "./post.module.css";

const FollowUp = (props) => {
  const clean = DOMPurify.sanitize(props.content);
  return (
    <div className="panel panel-default p-3">
      <div className="panel-body">
        <div className="row">
          <div className="col-7">
            <p className={`mb-1 ${styles.name}`}>{props.name}</p>
            <div className={styles.text}>{ReactHtmlParser(clean)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUp;
