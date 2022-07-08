import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart4 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { hour: 0, percent: 0.15 },
    { hour: 2, percent: 0.13 },
    { hour: 4, percent: 0.11 },
    { hour: 6, percent: 0.13 },
    { hour: 8, percent: 0.14 },
    { hour: 10, percent: 0.15 },
    { hour: 12, percent: 0.16 },
    { hour: 14, percent: 0.18 },
    { hour: 16, percent: 0.21 },
    { hour: 18, percent: 0.19 },
    { hour: 20, percent: 0.17 },
    { hour: 22, percent: 0.16 },
    { hour: 24, percent: 0.15 },
  ];
  useEffect(() => {
    setInterval(() => {
      const number = (num) => {
        if (num > 0.25) {
          num = num / 2;
        } else if (num < 0.15) {
          num = num * 2;
        } else {
          return num;
        }
        return num;
      };
      const newData = [
        { hour: 0, percent: number(Math.random()) },
        { hour: 2, percent: number(Math.random()) },
        { hour: 4, percent: number(Math.random()) },
        { hour: 6, percent: number(Math.random()) },
        { hour: 8, percent: number(Math.random()) },
        { hour: 10, percent: number(Math.random()) },
        { hour: 12, percent: number(Math.random()) },
        { hour: 14, percent: number(Math.random()) },
        { hour: 16, percent: number(Math.random()) },
        { hour: 18, percent: number(Math.random()) },
        { hour: 20, percent: number(Math.random()) },
        { hour: 22, percent: number(Math.random()) },
        { hour: 24, percent: number(Math.random()) },
      ];
      x(newData);
    }, 5000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.map((i) => i.hour),
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#073E78" } },
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
                {
                  offset: 0,
                  color: "#414a9f",
                },
                {
                  offset: 1,
                  color: "#1b1d52",
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
    <div className="bordered 案发时段">
      <h2>案发时段分析</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
