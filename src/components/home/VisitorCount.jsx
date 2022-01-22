import React, { useEffect, useState } from "react";
import countapi from "countapi-js";

function VisitorCount() {
  const [count, setCount] = useState();
  useEffect(() => {
    countapi.visits("global").then((result) => {
      setCount(result.value);
    });
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        width: "40px!important",
        bottom: "20px",
        right: "20px",
        zIndex: 999,
        padding: "5px",
      }}>
      {`Visitor count ${count}`}
    </div>
  );
}

export default VisitorCount;
