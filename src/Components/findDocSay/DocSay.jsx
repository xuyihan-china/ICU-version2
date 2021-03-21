import React, { Component } from "react";
import { Line } from "@antv/g2plot";
import { Column } from "@antv/g2plot";
import { Gauge } from "@antv/g2plot";
import "./DocSay.css";
class DocSay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const data = [
      { type: "1床", value: 79 },
      { type: "2床", value: 64 },
      { type: "3床", value: 80 },
      { type: "4床", value: 97 },
      { type: "5床", value: 40 },
      { type: "6床", value: 72 },
      { type: "7床", value: 80 },
      { type: "8床", value: 59 },
      { type: "9床", value: 79 },
      { type: "10床", value: 102 },
    ];

    const paletteSemanticRed = "#F4664A";
    const brandColor = "#5B8FF9";
    let columnPlot = new Column("container", {
      data,
      xField: "type",
      yField: "value",
      seriesField: "value",
      color: ({ value }) => {
        if (value > 100 || value < 60) {
          return paletteSemanticRed;
        }
        return brandColor;
      },
      legend: false,
    });

    columnPlot.render();
    setInterval(() => {
      columnPlot.changeData(
        data.map((d) => ({
          ...d,
          value: d.value + Math.random() * 4 + Math.random() * 4,
        }))
      );
    }, 1000);
    ///////////////////////////////////////
    function getData() {
      // generate an array of random data
      const data = [];
      const time = new Date().getTime();

      for (let i = -19; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random() + 0.2,
        });
      }
      return data;
    }

    const line = new Line("container2", {
      data: getData(),
      padding: "auto",
      xField: "x",
      yField: "y",
      xAxis: {
        type: "time",
        mask: "HH:MM:ss",
      },
      yAxis: {
        min: 36.3,
      },
      smooth: true,
      point: {},
    });

    line.render();

    setInterval(() => {
      const x = new Date().getTime(), // current time
        y = Math.random() * 0.7 + 36.3;
      const newData = line.options.data.slice(1).concat({ x, y });
      line.changeData(newData);
    }, 1000);
    ////////////////////////////////////////////////////////////////////
    const color = ["#F4664A", "#FAAD14", "#30BF78"];
    const getColor = (percent) => {
      return percent < 0.4 ? color[0] : percent < 0.6 ? color[1] : color[2];
    };
    const gauge = new Gauge("container3", {
      percent: 0.2,
      range: {
        color: getColor(0.2),
      },
      indicator: {
        pointer: {
          style: {
            stroke: "#D0D0D0",
          },
        },
        pin: {
          style: {
            stroke: "#D0D0D0",
          },
        },
      },
      axis: {
        label: {
          formatter(v) {
            return Number(v) * 100;
          },
        },
        subTickLine: {
          count: 3,
        },
      },
      statistic: {
        content: {
          formatter: ({ percent }) =>
            `血氧饱和度: ${(percent * 100).toFixed(0)}%`,
        },
        style: {
          fontSize: 60,
        },
      },
      animation: false,
    });

    gauge.render();

    let data3 = 0.96;
    const interval = setInterval(() => {
      if (data3 >= 0.99) {
        clearInterval(interval);
      } else {
        data3 -= Math.random() / 800;
        data3 += Math.random() / 1000;
        gauge.changeData(data3);
        gauge.update({ range: { color: getColor(data3) } });
      }
    }, 100);
    ///////////////////////////
    
  }
  render() {
    return (
      <div>
        <h2 className="para">心率监测</h2>
        <div id="container"></div>
        <h2 className="para">体温监测</h2>
        <div id="container2"></div>
        <h2 className="para">血氧监测</h2>
        <div id="container3"></div>
      </div>
    );
  }
}
export default DocSay;
