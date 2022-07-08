import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "城关区公安局", 2020: 2, 2021: 3 },
    { name: "七里河区公安局", 2020: 2, 2021: 3 },
    { name: "西固区公安局", 2020: 2, 2021: 3 },
    { name: "安宁区公安局", 2020: 2, 2021: 3 },
    { name: "红古区公安局", 2020: 2, 2021: 3 },
    { name: "永登县公安局", 2020: 2, 2021: 3 },
    { name: "皋兰县公安局", 2020: 2, 2021: 3 },
    { name: "榆中县公安局", 2020: 2, 2021: 3 },
    { name: "新区公安局", 2020: 2, 2021: 3 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        {
          name: "城关区公安局",
          2020: Math.random() * 10,
          2021: Math.random() * 10,
        },
        { name: "七里河区公安局", 2020: 2, 2021: Math.random() * 10 },
        { name: "西固区公安局", 2020: 2, 2021: Math.random() * 10 },
        { name: "安宁区公安局", 2020: 2, 2021: 3 },
        { name: "红古区公安局", 2020: 2, 2021: Math.random() * 10 },
        { name: "永登县公安局", 2020: 2, 2021: 3 },
        { name: "皋兰县公安局", 2020: 2, 2021: 3 },
        { name: "榆中县公安局", 2020: 2, 2021: 3 },
        { name: "新区公安局", 2020: 2, 2021: Math.random() * 10 },
      ];
      x(newData);
    }, 3000);
  }, []);

  //对第一次渲染进行封装
  const x = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false },
        },

        yAxis: {
          type: "category",
          data: data.map((i) => i.name),
          axisTick: { show: false },
          axisLabel: {
            formatter(val) {
              return val.replace("公安局", "\n公安局");
            },
          },
        },
        series: [
          {
            name: "2020年",
            type: "bar",
            data: data.map((i) => i[2020]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#2034f9", // 0% 处的颜色
                    },

                    {
                      offset: 1,
                      color: "#04a1ff", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
            },
          },
          {
            name: "2021年",
            type: "bar",
            data: data.map((i) => i[2021]),
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#b92ae8", // 0% 处的颜色
                    },

                    {
                      offset: 1,
                      color: "#6773e7", // 100% 处的颜色
                    },
                  ],
                  false
                ),
              },
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
    <div className="bordered 破获排名">
      <h2>案件破获排名</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" />
        破案排名1
        <span className="second" />
        破案排名2
      </div>
    </div>
  );
};
