import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";

export const Chart2 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const data = [
    { name: "其他", 2020: 2, 2021: 3 },
    { name: "行政", 2020: 2, 2021: 3 },
    { name: "经济", 2020: 2, 2021: 3 },
    { name: "刑事", 2020: 2, 2021: 3 },
    { name: "民事", 2020: 2, 2021: 3 },
  ];
  useEffect(() => {
    setInterval(() => {
      const newData = [
        { name: "其他", 2020: 2, 2021: Math.random() * 10 },
        { name: "行政", 2020: 2, 2021: Math.random() * 10 },
        { name: "经济", 2020: 2, 2021: 3 },
        {
          name: "刑事",
          2020: Math.random() * 10,
          2021: Math.random() * 10,
        },
        { name: "民事", 2020: 2, 2021: 3 },
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
                      color: "#01315c", // 0% 处的颜色
                    },

                    {
                      offset: 1,
                      color: "#00649f", // 100% 处的颜色
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
                      color: "#3b3937", // 0% 处的颜色
                    },

                    {
                      offset: 1,
                      color: "#907a48", // 100% 处的颜色
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
      <h2>案件类别环比上升</h2>
      <div ref={divRef} className="chart" />
      <div className="legend">
        <span className="first" />
        环比上升
        <span className="second" />
        环比下降
      </div>
    </div>
  );
};
