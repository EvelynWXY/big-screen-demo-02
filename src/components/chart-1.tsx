import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { baseEchartOptions } from "../shared/base-echart-options";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "安宁区", number: 10 },
    { name: "兰州新区", number: 20 },
    { name: "兰州新区", number: 36 },
    { name: "兰州新区", number: 41 },
    { name: "兰州新区", number: 15 },
    { name: "兰州新区", number: 26 },
    { name: "兰州新区", number: 37 },
    { name: "兰州新区", number: 18 },
    { name: "兰州新区", number: 29 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "安宁区", number: Math.random() * 20 },
        { name: "兰州新区", number: Math.random() * 20 },
        { name: "兰州新区", number: Math.random() * 20 },
        { name: "兰州新区", number: Math.random() * 20 },
        { name: "兰州新区", number: Math.random() * 20 },
        { name: "兰州新区", number: 26 },
        { name: "兰州新区", number: Math.random() * 30 },
        { name: "兰州新区", number: Math.random() * 20 },
        { name: "兰州新区", number: 29 },
      ];
      x(newData);
    }, 3000);
  }, []);
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          data: data.map((i) => i.name),
          axisTick: { show: false },
          axisLine: {
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            fontSize: px(12),
            formatter(val: string) {
              if (val.length > 2) {
                const array = val.split("");
                array.splice(2, 0, "\n");
                return array.join("");
              } else {
                return val;
              }
            },
          },
        },

        yAxis: {
          splitLine: { show: false },
          axisLine: {
            show: true,
            lineStyle: { color: "#083B70" },
          },
          axisLabel: {
            fontSize: px(12),
          },
        },
        series: [
          {
            type: "bar",
            data: data.map((i) => i.number),
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
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
