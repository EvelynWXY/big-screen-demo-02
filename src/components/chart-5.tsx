import React from "react";

export const Chart5 = () => {
  return (
    <div className="战果">
      <h2>往年战果数对比</h2>
      <table>
        <thead>
          <tr>
            <th>年份</th>
            <th>破案数</th>
            <th>抓获嫌疑人</th>
            <th>并串案件</th>
            <th>现勘录入</th>
            <th>视侦录入</th>
            <th>合成案件</th>
            <th>合计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="selected">2019</td>
            <td className="selected">2</td>
            <td className="selected">3</td>
            <td className="selected">4</td>
            <td className="selected">5</td>
            <td className="selected">6</td>
            <td className="selected">7</td>
            <td className="selected">8</td>
          </tr>
          <tr>
            <td className="unselected">2020</td>
            <td className="unselected">2</td>
            <td className="unselected">3</td>
            <td className="unselected">4</td>
            <td className="unselected">5</td>
            <td className="unselected">6</td>
            <td className="unselected">7</td>
            <td className="unselected">8</td>
          </tr>
          <tr>
            <td className="selected">2021</td>
            <td className="selected">2</td>
            <td className="selected">3</td>
            <td className="selected">4</td>
            <td className="selected">5</td>
            <td className="selected">6</td>
            <td className="selected">7</td>
            <td className="selected">8</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
