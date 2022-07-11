import React from "react";

export const Chart14 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>类型</th>
          <th>单数</th>
          <th>总计</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowSpan={4} className="selected">
            入室盗窃
          </td>
          <td className="selected">翻窗入室</td>
          <td className="selected">10</td>
          <td rowSpan={4} className="selected">
            80
          </td>
        </tr>
        <tr>
          <td className="selected">撬门入室</td>
          <td className="selected">20</td>
        </tr>
        <tr>
          <td className="selected">技术开锁</td>
          <td className="selected">20</td>
        </tr>
        <tr>
          <td className="selected">撬防护栏</td>
          <td className="selected">30</td>
        </tr>
        <tr>
          <td rowSpan={2} className="unselected">
            抢夺
          </td>
          <td className="unselected">摩托车飞车抢夺</td>
          <td className="unselected">22</td>
          <td rowSpan={2} className="unselected">
            44
          </td>
        </tr>
        <tr>
          <td className="unselected">徒手抢夺</td>
          <td className="unselected">22</td>
        </tr>
        <tr>
          <td rowSpan={3} className="selected">
            扒窃
          </td>
          <td className="selected">公交车扒窃</td>
          <td className="selected">40</td>
          <td rowSpan={3} className="selected">
            68
          </td>
        </tr>
        <tr>
          <td className="selected">车站扒窃</td>
          <td className="selected">22</td>
        </tr>
        <tr>
          <td className="selected">街面扒窃</td>
          <td className="selected">45</td>
        </tr>
        <tr>
          <td rowSpan={2} className="unselected">
            诈骗
          </td>
          <td className="unselected">甩票子诈骗</td>
          <td className="unselected">32</td>
          <td rowSpan={2} className="unselected">
            102
          </td>
        </tr>
        <tr>
          <td className="unselected">买手机诈骗</td>
          <td className="unselected">80</td>
        </tr>
      </tbody>
    </table>
  );
};
