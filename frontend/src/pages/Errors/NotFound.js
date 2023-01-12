import React from "react";
import { Result, Button } from "antd";

const NotFound = (props) => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={() => props.history.push("/boards/")} type="primary">
          Go Back
        </Button>
      }
    />
  );
};

export default NotFound;
