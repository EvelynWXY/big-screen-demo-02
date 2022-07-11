import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart15 = () => {
  const divRef = useRef(null);
  //   const colors = ["#86cbaf", "#da7c5e", "#cd1420", "#94bbff", "#55a2aa"];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
          bottom: 0,
          right: px(15),
        },
        color: ["#f18a68", "#2b4353", "#bc121d", "#55a2aa", "#93dfc1"],
        legend: {
          data: ["民事", "行政", "刑事", "经济", "其他"],
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },

        series: [
          {
            name: "预期",
            type: "funnel",
            top: "20%",
            left: "20%",
            width: "60%",
            height: "80%",
            label: {
              formatter: "{b}预期",
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              opacity: 0.7,
            },
            emphasis: {
              label: {
                position: "inside",
                formatter: "{b}预期: {c}%",
              },
            },
            data: [
              { value: 60, name: "民事" },
              { value: 40, name: "刑事" },
              { value: 20, name: "经济" },
              { value: 80, name: "行政" },
              { value: 100, name: "其他" },
            ],
          },
          {
            name: "实际",
            type: "funnel",
            top: "20%",
            left: "20%",
            width: "60%",
            height: "80%",
            maxSize: "80%",
            label: {
              show: true,
              position: "inside",
              textStyle: { color: "white", fontSize: px(15) },
              formatter: "{c}%",
              color: "#fff",
            },
            itemStyle: {
              opacity: 0.5,
              borderColor: "#fff",
              borderWidth: 2,
            },
            emphasis: {
              label: {
                position: "inside",
                formatter: "{b}实际: {c}%",
              },
            },
            data: [
              { value: 30, name: "民事" },
              { value: 10, name: "刑事" },
              { value: 5, name: "经济" },
              { value: 50, name: "行政" },
              { value: 80, name: "其他" },
            ],
          },
        ],
      })
    );
  }, []);

  return (
    <div className="chart15">
      <div className="chart">
        <div className="main" ref={divRef} />
      </div>
      {/* <div className="legend">
        <span style={{ background: colors[0] }} />
        民事1
        <span style={{ background: colors[1] }} />
        行政1
        <span style={{ background: colors[2] }} />
        经济1
        <span style={{ background: colors[3] }} />
        刑事1
        <span style={{ background: colors[4] }} />
        其他1
      </div> */}
    </div>
  );
};
