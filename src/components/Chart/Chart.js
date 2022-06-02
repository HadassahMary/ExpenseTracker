import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const datapointvalues = props.months.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...datapointvalues);
  return (
    <div className="chart">
      {props.months.map((datapoint) => (
        <ChartBar
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
          key={datapoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
