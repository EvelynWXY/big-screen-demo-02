import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart9 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { age: 0, percent: 0.19 },
    { age: 18, percent: 0.2 },
    { age: 28, percent: 0.26 },
    { age: 38, percent: 0.35 },
    { age: 48, percent: 0.26 },
    { age: 58, percent: 0.2 },
    { age: 68, percent: 0.08 },
    { age: 78, percent: 0.06 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { age: 0, percent: Math.random() / 2 },
        { age: 18, percent: 0.2 },
        { age: 28, percent: Math.random() / 2 },
        { age: 38, percent: 0.35 },
        { age: 48, percent: 0.24 },
        { age: 58, percent: Math.random() / 2 },
        { age: 68, percent: 0.08 },
        { age: 78, percent: Math.random() / 2 },
      ];
      x(newData);
    }, 3000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        color: "#F7A110",
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.map((i) => i.age),
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: { color: "#073E78" },
          },
          axisLabel: {
            formatter(val) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            type: "line",
            data: data.map((i) => i.percent),
            symbol: "circle",
            symbolSize: px(12),
            lineStyle: { width: px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#F7A110" },
                {
                  offset: 1,
                  color: "#1B1D52",
                },
              ]),
            },
          },
        ],
      })
    );
  };
  useEffect(() => {
    myChart.current = echarts.init(divRef.current);
    x(data);
  }, []);

  return (
    <div className="年龄段-图3">
      <h3>犯罪年龄趋势图</h3>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
