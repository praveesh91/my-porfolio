import React, { useEffect, useState } from "react";
import countapi from "countapi-js";

function VisitorCount() {
  const [count, setCount] = useState();
  useEffect(() => {
    countapi.visits("global").then((result) => {
      setCount(result.value);
    });
  }, []);
  return <div class="count">{`Visitor count   ${count}`}</div>;
}

export default VisitorCount;
