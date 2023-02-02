import React, { useState } from "react";
import Name from "./Name";
import SortingData from "./SortingData";
import SortingLow from "./SortingLow";
import Price from "./Price";
import BestSelling from "./BestSelling";

function Admin() {
  const [selectedSort, setSelectedSort] = useState("high");
  return (
    <div>
      <Name />
      <div style={{ marginTop: 50 }}>
        <Price />
      </div>
      <SortingData />

    </div>
  );
}

export default Admin;
