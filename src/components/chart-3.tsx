import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart3 = () => {
  const divRef = useRef(null);
  const data = [
    {
      date: 2010,
      抢劫: 0.01,
      醉驾: 0.02,
      盗窃: 0.03,
      故意杀人: 0.04,
      故意伤人: 0.05,
    },
    {
      date: 2011,
      抢劫: 0.02,
      醉驾: 0.03,
      盗窃: 0.04,
      故意杀人: 0.05,
      故意伤人: 0.06,
    },
    {
      date: 2012,
      抢劫: 0.03,
      醉驾: 0.04,
      盗窃: 0.05,
      故意杀人: 0.06,
      故意伤人: 0.07,
    },
    {
      date: 2013,
      抢劫: 0.04,
      醉驾: 0.05,
      盗窃: 0.06,
      故意杀人: 0.07,
      故意伤人: 0.08,
    },
    {
      date: 2014,
      抢劫: 0.05,
      醉驾: 0.02,
      盗窃: 0.03,
      故意杀人: 0.04,
      故意伤人: 0.05,
    },
    {
      date: 2015,
      抢劫: 0.06,
      醉驾: 0.02,
      盗窃: 0.03,
      故意杀人: 0.04,
      故意伤人: 0.05,
    },
    {
      date: 2016,
      抢劫: 0.07,
      醉驾: 0.04,
      盗窃: 0.04,
      故意杀人: 0.04,
      故意伤人: 0.04,
    },
    {
      date: 2017,
      抢劫: 0.08,
      醉驾: 0.02,
      盗窃: 0.03,
      故意杀人: 0.04,
      故意伤人: 0.05,
    },
    {
      date: 2018,
      抢劫: 0.09,
      醉驾: 0.02,
      盗窃: 0.03,
      故意杀人: 0.04,
      故意伤人: 0.05,
    },
  ];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        legend: {
          bottom: px(5),
          textStyle: { color: "white" },
          itemWidth: px(30),
          itemHeight: px(16),
        },
        grid: {
          x: px(20),
          x2: px(20),
          y: px(20),
          y2: px(70),
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: data.map((i) => i.date),
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { interval: 1 },
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
            name: "抢劫",
            type: "line",
            data: data.map((i) => i.抢劫).reverse(),
          },
          {
            name: "醉驾",
            type: "line",
            data: data.map((i) => i.醉驾).reverse(),
          },
          {
            name: "盗窃",
            type: "line",
            data: data.map((i) => i.盗窃).reverse(),
          },
          {
            name: "故意杀人",
            type: "line",
            data: data.map((i) => i.故意杀人).reverse(),
          },
          {
            name: "故意伤人",
            type: "line",
            data: data.map((i) => i.故意伤人).reverse(),
          },
        ].map((obj) => ({
          ...obj,
          symbol: "circle",
          symbolSize: px(12),
          lineStyle: { width: px(2) },
        })),
      })
    );
  }, []);

  return (
    <div className="bordered 发案趋势">
      <h2>发案趋势分析</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
