import React, { Component } from "react";
import { WordCloud } from "@antv/g2plot";
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
      { year: "2010", population: 41.8 },
      { year: "2011", population: 38 },
      { year: "2012", population: 33.7 },
      { year: "2013", population: 30.7 },
      { year: "2014", population: 25.8 },
      { year: "2015", population: 31.7 },
      { year: "2016", population: 33 },
      { year: "2017", population: 46 },
      { year: "2018", population: 38.3 },
      { year: "2019", population: 28 },
      { year: "2020", population: 42.5 },
      { year: "2021", population: 30.3 },
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

    function getTypeColor(type) {
      if (type === "科室床位平均使用率") {
        return "#1890ff";
      }
      if (type === "平均住院率") {
        return "#2fc25b";
      }
      if (type === "接诊人数") {
        return "#facc14";
      }
    }

    const data3 = [
      { class: "科室床位平均使用率", country: "内科", type: "1", value: 10.8 },
      { class: "科室床位平均使用率", country: "内科", type: "2", value: 89.2 },
      { class: "科室床位平均使用率", country: "外科", type: "1", value: 72.9 },
      { class: "科室床位平均使用率", country: "外科", type: "2", value: 27.1 },
      { class: "科室床位平均使用率", country: "儿科", type: "1", value: 2.8 },
      { class: "科室床位平均使用率", country: "儿科", type: "2", value: 97.2 },
      { class: "科室床位平均使用率", country: "妇科", type: "1", value: 49.1 },
      { class: "科室床位平均使用率", country: "妇科", type: "2", value: 50.9 },
      { class: "科室床位平均使用率", country: "骨科", type: "1", value: 11.6 },
      { class: "科室床位平均使用率", country: "骨科", type: "2", value: 88.4 },
      {
        class: "科室床位平均使用率",
        country: "耳鼻喉科",
        type: "1",
        value: 23.8,
      },
      {
        class: "科室床位平均使用率",
        country: "耳鼻喉科",
        type: "2",
        value: 76.2,
      },
      { class: "科室床位平均使用率", country: "呼吸科", type: "1", value: 2.9 },
      {
        class: "科室床位平均使用率",
        country: "呼吸科",
        type: "2",
        value: 97.1,
      },
      { class: "科室床位平均使用率", country: "心内科", type: "1", value: 2.7 },
      {
        class: "科室床位平均使用率",
        country: "心内科",
        type: "2",
        value: 97.3,
      },
      { class: "科室床位平均使用率", country: "皮肤科", type: "1", value: 3.6 },
      {
        class: "科室床位平均使用率",
        country: "皮肤科",
        type: "2",
        value: 96.4,
      },
      { class: "科室床位平均使用率", country: "产科", type: "1", value: 1.3 },
      { class: "科室床位平均使用率", country: "产科", type: "2", value: 98.7 },
      { class: "平均住院率", country: "内科", type: "1", value: 175.4 },
      { class: "平均住院率", country: "内科", type: "2", value: 24.6 },
      { class: "平均住院率", country: "外科", type: "1", value: 165.2 },
      { class: "平均住院率", country: "外科", type: "2", value: 34.8 },
      { class: "平均住院率", country: "儿科", type: "1", value: 108.4 },
      { class: "平均住院率", country: "儿科", type: "2", value: 91.6 },
      { class: "平均住院率", country: "妇科", type: "1", value: 73.2 },
      { class: "平均住院率", country: "妇科", type: "2", value: 126.8 },
      { class: "平均住院率", country: "骨科", type: "1", value: 46.9 },
      { class: "平均住院率", country: "骨科", type: "2", value: 153.1 },
      { class: "平均住院率", country: "耳鼻喉科", type: "1", value: 38.6 },
      { class: "平均住院率", country: "耳鼻喉科", type: "2", value: 161.4 },
      { class: "平均住院率", country: "呼吸科", type: "1", value: 22 },
      { class: "平均住院率", country: "呼吸科", type: "2", value: 178 },
      { class: "平均住院率", country: "心内科", type: "1", value: 12.1 },
      { class: "平均住院率", country: "心内科", type: "2", value: 187.9 },
      { class: "平均住院率", country: "皮肤科", type: "1", value: 5.5 },
      { class: "平均住院率", country: "皮肤科", type: "2", value: 194.5 },
      { class: "平均住院率", country: "产科", type: "1", value: 1.8 },
      { class: "平均住院率", country: "产科", type: "2", value: 198.2 },
      { class: "接诊人数", country: "内科", type: "1", value: 62 },
      { class: "接诊人数", country: "内科", type: "2", value: 938 },
      { class: "接诊人数", country: "外科", type: "1", value: 441 },
      { class: "接诊人数", country: "外科", type: "2", value: 559 },
      { class: "接诊人数", country: "儿科", type: "1", value: 26 },
      { class: "接诊人数", country: "儿科", type: "2", value: 974 },
      { class: "接诊人数", country: "妇科", type: "1", value: 67 },
      { class: "接诊人数", country: "妇科", type: "2", value: 33 },
      { class: "接诊人数", country: "骨科", type: "1", value: 247 },
      { class: "接诊人数", country: "骨科", type: "2", value: 75.3 },
      { class: "接诊人数", country: "耳鼻喉科", type: "1", value: 616 },
      { class: "接诊人数", country: "耳鼻喉科", type: "2", value: 384 },
      { class: "接诊人数", country: "呼吸科", type: "1", value: 132 },
      { class: "接诊人数", country: "呼吸科", type: "2", value: 868 },
      { class: "接诊人数", country: "心内科", type: "1", value: 224 },
      { class: "接诊人数", country: "心内科", type: "2", value: 776 },
      { class: "接诊人数", country: "皮肤科", type: "1", value: 657 },
      { class: "接诊人数", country: "皮肤科", type: "2", value: 343 },
      { class: "接诊人数", country: "产科", type: "1", value: 73 },
      { class: "接诊人数", country: "产科", type: "2", value: 27 },
    ];

    const chart3 = new Chart({
      container: "container3",
      autoFit: true,
      height: 500,
      padding: [20, 20, 20, 70],
    });

    chart3.data(data3);
    chart3.legend(false);
    chart3.tooltip({
      showMarkers: false,
    });
    chart3.facet("rect", {
      fields: ["class"],
      columnTitle: {
        offsetY: -15,
        style: {
          fontSize: 14,
          fontWeight: 300,
          fill: "#8d8d8d",
        },
      },
      eachView: (view, facet) => {
        view.coordinate().transpose();

        if (facet.columnIndex === 0) {
          view.axis("country", {
            tickLine: null,
            line: null,
          });
          view.axis("value", false);
        } else {
          view.axis(false);
        }
        const color = getTypeColor(facet.columnValue);
        view
          .interval()
          .adjust("stack")
          .position("country*value")
          .color("type", [color, "#ebedf0"])
          .size(20)
          .label("value*type", (value, type) => {
            if (type === "2") {
              return null;
            }
            const offset = value < 30 ? 10 : -4;
            return {
              offset,
            };
          });
        view.interaction("element-active");
      },
    });
    chart3.render();

    ////////////////////////////////////////////////////
    
    fetch('127.0.0.1:3000/data.json')
    .then((res) => res.json())
    .then((data) => {
    data =[
        { "value": 9, "name": "肺癌" },
        { "value": 9, "name": "乳腺癌" },
      
        { "value": 8, "name": "中风" },
        { "value": 8, "name": "缺血性心脏病" },
        { "value": 8, "name": "气管癌" },
        { "value": 8, "name": "慢性阻塞性肺病" },
        { "value": 8, "name": "肝癌" },
        { "value": 8, "name": "胃癌" },
        { "value": 8, "name": "高血压性心脏病" },
        { "value": 8, "name": "阿尔兹海默症" },
       { "value": 8, "name": "糖尿病" },
       { "value": 8, "name": "高血压" },
       { "value": 8, "name": "脑卒中" },
      
        { "value": 6, "name": "帕金森病" },
        { "value": 6, "name": "高胆固醇血症" },
        { "value": 6, "name": "脑卒中" },
        { "value": 6, "name": "食管癌" },
        { "value": 6, "name": "结直肠癌" },
        { "value": 6, "name": "心肌梗塞" },
        { "value": 6, "name": "系统性红斑狼疮" },
        { "value": 6, "name": "类风湿性关节炎" },
        { "value": 6, "name": "脑癌" },
        { "value": 6, "name": "脂肪肝" },
        { "value": 6, "name": "胰岛素血症" },
        { "value": 6, "name": "淋巴癌" },
        { "value": 6, "name": "膀胱癌" },
        { "value": 6, "name": "数据" },
        { "value": 6, "name": "前列腺癌" },
      
        { "value": 4, "name": "宫颈癌" },
        { "value": 4, "name": "呼吸道结核" },
        { "value": 4, "name": "寄生虫病" },
        { "value": 4, "name": "红细胞疾病" },
        { "value": 4, "name": "甲状腺癌" },
        { "value": 4, "name": "中毒" },
        { "value": 4, "name": "子宫癌" },
        { "value": 4, "name": "下肢血管病" },
        { "value": 4, "name": "哮喘" },
        { "value": 4, "name": "脑癌" },
        { "value": 4, "name": "脑动脉损伤" },
        { "value": 4, "name": "尿毒症" },
        { "value": 4, "name": "脑动静脉瘘" },
        { "value": 4, "name": "脑栓塞" },
        { "value": 4, "name": "重型再生障碍性贫血" },
        { "value": 4, "name": "植物人" },
        { "value": 4, "name": "原发性心肌病" },
      
        { "value": 3, "name": "坏死性筋膜炎" },
        { "value": 3, "name": "胰腺癌" },
        { "value": 3, "name": "淋病" },
        { "value": 3, "name": "淋巴瘤" },
        { "value": 3, "name": "艾滋病" },
        { "value": 3, "name": "病毒性肝炎" },
        { "value": 3, "name": "脑血管瘤" },
        { "value": 3, "name": "急慢性肺炎" },
        { "value": 3, "name": "肺结核" },
        { "value": 3, "name": "脑出血" },
        { "value": 3, "name": "蛛网膜下腔出血" },
        { "value": 3, "name": "白血病" },
        { "value": 3, "name": "冠心病" },
        { "value": 3, "name": "心包炎" },
      
        { "value": 3, "name": "痛风" },
        { "value": 3, "name": "骨质疏松" },
        { "value": 3, "name": "肥胖症" },
        { "value": 3, "name": "尿崩症" },
        { "value": 3, "name": "甲状腺炎" },
        { "value": 3, "name": "甲状腺功能亢进" },
        { "value": 3, "name": "巴特氏综合征" },
        { "value": 3, "name": "胰升糖素瘤" },
        { "value": 3, "name": "胃泌素瘤" },
        { "value": 3, "name": "生长抑素瘤" },
        { "value": 3, "name": "肾素瘤" },
        { "value": 3, "name": "甲状腺功能衰退症" },
        { "value": 3, "name": "库欣综合征" },
        { "value": 3, "name": "嗜铬细胞瘤" },
        { "value": 3, "name": "营养代谢性疾病" },
       
        { "value": 3, "name": "胰腺癌" },
        { "value": 3, "name": "急慢性胰腺炎" },
        { "value": 3, "name": "胆道蛔虫病" },
        { "value": 3, "name": "胆管炎" },
        { "value": 3, "name": "胆石症" },
        { "value": 3, "name": "胆囊炎" },
        { "value": 3, "name": "肝脓肿" },
        { "value": 3, "name": "肝寄生虫病" },
        { "value": 3, "name": "肝硬化" },
        { "value": 3, "name": "结肠炎" },
        { "value": 3, "name": "痢疾" },
        { "value": 3, "name": "克罗恩病" },
        { "value": 3, "name": "肠吸收不良综合征" },
        { "value": 3, "name": "肠结核" },
        { "value": 3, "name": "急性肠炎" },
        { "value": 3, "name": "胃肾经官能症" },
        { "value": 3, "name": "十二指肠炎" },
        { "value": 3, "name": "食管肿瘤" },
        { "value": 3, "name": "消化道溃疡" },
      
        { "value": 3, "name": "大细胞癌" },
        { "value": 3, "name": "小细胞癌" },
        { "value": 3, "name": "急性上呼吸道感染" },
        { "value": 3, "name": "急性气管炎" },
        { "value": 3, "name": "支气管炎" },
        { "value": 3, "name": "气胸" },
        { "value": 3, "name": "肺心病" },
        { "value": 3, "name": "肺动脉高压" },
      
        { "value": 3, "name": "先天畸形" },
        { "value": 3, "name": "染色体异常" },
      
        { "value": 2, "name": "小舞蹈病" },
        { "value": 2, "name": "肝豆状核变性疾病" },
        { "value": 2, "name": "肌张力障碍" },
        { "value": 2, "name": "癫痫" },
        { "value": 2, "name": "脊髓压迫症" },
        { "value": 2, "name": "急性脊髓炎" },
        { "value": 2, "name": "脊髓血管病" },
        { "value": 2, "name": "三叉神经痛" },
        { "value": 2, "name": "雷诺病" },
        { "value": 2, "name": "格林巴利综合征" },
        { "value": 2, "name": "皮肌炎" },
        { "value": 2, "name": "红斑性肢痛症" },
        { "value": 2, "name": "不安腿综合征" },
        { "value": 2, "name": "前列腺增生" },
        { "value": 2, "name": "前列腺结石" },
        { "value": 2, "name": "睾丸炎" },
        { "value": 2, "name": "囊性纤维化" },
      
        { "value": 2, "name": "尿石症" },
        { "value": 2, "name": "急性肾炎综合征" },
        { "value": 2, "name": "肾小球病" },
        { "value": 2, "name": "肌肉和结缔组织疾病" },
        { "value": 2, "name": "风湿热" },
        { "value": 2, "name": "子宫肌瘤" },
        { "value": 2, "name": "膀胱炎" },
        { "value": 2, "name": "外阴炎" },
        { "value": 2, "name": "妊娠分娩产褥期并发症" }
      ]
    data = data.json()
    const wordCloud = new WordCloud('container4', {
      data,
      wordField: 'name',
      weightField: 'value',
      colorField: 'name',
      wordStyle: {
        fontFamily: 'Verdana',
        fontSize: [14, 52],
        rotation: 0,
      },
      // 返回值设置成一个 [0, 1) 区间内的值，
      // 可以让每次渲染的位置相同（前提是每次的宽高一致）。
      random: () => 0.5,
    });

    wordCloud.render();
  });
        
      
  };
  render() {
    return (
      <div>
        <h1>年度就诊人数</h1>
        <div id="container"></div>
        <h1>接诊医师人次</h1>
        <div id="container2"></div>
        <h1>科室床位使用率及平均住院日</h1>
        <div id="container3"></div>
        <h1>大数据词图云</h1>
        <div id="container4"></div>
      </div>
    );
  }
}

export default RemoteChat;
