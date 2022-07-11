import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart11 = () => {
  const divRef = useRef(null);
  const colors = [
    "#F46064",
    "#F38E1C",
    "#ff9568",
    "#1CDB7C",
    "#8D70F8",
    "#33A4FA",
    "#61f9b3",
    "#7c21ff",
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        color: colors,
        xAxis: { show: false },
        yAxis: { show: false },
        legend: { show: false },
        series: [
          {
            startAngle: -20,
            type: "pie",
            radius: ["25%", "90%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "outside",
              textStyle: { color: "white", fontSize: px(20) },
              distanceToLabelLine: 0,
              formatter(options) {
                return (options.value * 100).toFixed(0) + "%";
              },
            },
            labelLine: { show: true, length: 0 },
            roseType: "area",
            itemStyle: {
              shadowBlur: px(200),
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            data: [
              { value: 0.12, name: "民事" },
              { value: 0.2, name: "行政" },
              { value: 0.18, name: "经济" },
              { value: 0.24, name: "刑事" },
              { value: 0.36, name: "其他" },
            ],
          },
        ],
      })
    );
  }, []);

  return (
    <div className="chart11">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
      <div className="legend">
        <span style={{ background: colors[0] }} />
        民事
        <span style={{ background: colors[1] }} />
        行政
        <span style={{ background: colors[2] }} />
        经济
        <span style={{ background: colors[3] }} />
        刑事
        <span style={{ background: colors[4] }} />
        其他
      </div>
    </div>
  );
};
