import React, { Component } from "react";
import { Chart } from "@antv/g2";
import "./RemoteChat.css";
//import { Input } from 'antd';
class RemoteChat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    const data = [
      { year: "2010", population: 6180 },
      { year: "2011", population: 3800 },
      { year: "2012", population: 6370 },
      { year: "2013", population: 3077 },
      { year: "2014", population: 7870 },
      { year: "2015", population: 3170 },
      { year: "2016", population: 6300 },
      { year: "2017", population: 4600 },
      { year: "2018", population: 7830 },
      { year: "2019", population: 8800 },
      { year: "2020", population: 4250 },
      { year: "2021", population: 3030 },
    ];

    const chart = new Chart({
      container: "container",
      autoFit: true,
      height: 500,
    });
    chart.data(data);
    chart.coordinate("polar");
    chart.legend("year", {
      position: "right",
    });
    chart.axis(true);
    chart.tooltip({
      showMarkers: true,
    });
    chart.interaction("element-highlight");
    chart.interval().position("year*population").color("year").style({
      lineWidth: 2,
      stroke: "#fff",
    });
    chart.render();

    const data2 = [
      { item: "普通门诊", count: 401, percent: 0.4 },
      { item: "主任医师", count: 213, percent: 0.21 },
      { item: "急诊", count: 170, percent: 0.17 },
      { item: "副主任医师", count: 134, percent: 0.13 },
      { item: "专家门诊", count: 96, percent: 0.09 },
    ];
    const chart2 = new Chart({
      container: "container2",
      autoFit: true,
      height: 500,
    });
    chart2.data(data2);
    chart2.scale("percent", {
      formatter: (val) => {
        val = val * 100 + "%";
        return val;
      },
    });
    chart2.coordinate("theta", {
      radius: 0.75,
      innerRadius: 0.6,
    });
    chart2.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl:
        '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
    });
    // 辅助文本
    chart2
      .annotation()
      .text({
        position: ["50%", "50%"],
        content: "接诊医师人次",
        style: {
          fontSize: 14,
          fill: "#8c8c8c",
          textAlign: "center",
        },
        offsetY: -20,
      })
      .text({
        position: ["50%", "50%"],
        content: "3202",
        style: {
          fontSize: 20,
          fill: "#8c8c8c",
          textAlign: "center",
        },
        offsetX: -10,
        offsetY: 20,
      })
      .text({
        position: ["50%", "50%"],
        content: "人",
        style: {
          fontSize: 14,
          fill: "#8c8c8c",
          textAlign: "center",
        },
        offsetY: 20,
        offsetX: 20,
      });
    chart2
      .interval()
      .adjust("stack")
      .position("percent")
      .color("item")
      .label("percent", (percent) => {
        return {
          content: (data) => {
            return `${data.item}: ${percent * 100}%`;
          },
        };
      })
      .tooltip("item*percent", (item, percent) => {
        percent = percent * 100 + "%";
        return {
          name: item,
          value: percent,
        };
      });

    chart2.interaction("element-active");

    chart2.render();
    ////////////////////////////////////////////////////////

    

    ////////////////////////////////////////////////////
    
    
        
      
  };
  render() {
    return (
      <div>
        <h1>ICU年度就诊人数</h1>
        <div id="container"></div>
        <h1>接诊医师人次</h1>
        
        <div id="container2"></div>
        <h1>患者患病大数据词图云</h1>
        <img src={require('./cty.png')} alt="" style={{width:'100%'}}/>
      </div>
    );
  }
}

export default RemoteChat;
