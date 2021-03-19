import React, { Component } from 'react';
import { Chart } from '@antv/g2';
import './Trend.css'
class TrendAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount=()=>{
        const data = [
            { genre: '出院人数', 人数: 275 },
            { genre: '在住人数', 人数: 115 },
            { genre: '剩余床位', 人数: 120 },
            { genre: '本周收治', 人数: 350 },
            { genre: '本周出院', 人数: 150 },
          ];
    
          // Step 1: 创建 Chart 对象
          const chart = new Chart({
            container: 'c1', // 指定图表容器 ID
            width: 600, // 指定图表宽度
            height: 300, // 指定图表高度
          });
    
          // Step 2: 载入数据源
          chart.data(data);
    
          // Step 3：创建图形语法，绘制柱状图
          chart.interval().position('genre*人数');
    
          // Step 4: 渲染图表
          chart.render();
///2222222222222
          const data2 = [
            { genre: '出院人数', 人数: 5754 },
            { genre: '在住人数', 人数: 2155 },
            { genre: '剩余床位', 人数: 1202 },
            { genre: '本月收治', 人数: 3354 },
            { genre: '本月出院', 人数: 4153 },
          ];
    
          // Step 1: 创建 Chart 对象
          const chart2 = new Chart({
            container: 'c2', // 指定图表容器 ID
            width: 600, // 指定图表宽度
            height: 300, // 指定图表高度
          });
    
          // Step 2: 载入数据源
          chart2.data(data2);
    
          // Step 3：创建图形语法，绘制柱状图
          chart2.interval().position('genre*人数');
    
          // Step 4: 渲染图表
          chart2.render();
//////////////////////////////////////////////////////////////////
const data3 = [
  { year: '2020.12', value: 0.95 },
  { year: '2020.11', value: 0.88 },
  { year: '2020.10', value: 0.88 },
  { year: '2020.9', value: 0.91 },
  { year: '2020.8', value: 0.88 },
  { year: '2020.7', value: 0.73 },
  { year: '2020.6', value: 0.89 },
  { year: '2020.5', value: 0.86 },
  { year: '2020.4', value: 0.82 },
];
const chart3= new Chart({
  container: 'container3',
  autoFit: true,
  height: 500,
});

chart3.data(data3);
chart3.scale({
  year: {
      range: [0, 1],
  },
  value: {
      min: 0,
      nice: true,
  },
});

chart3.tooltip({
  showCrosshairs: true, // 展示 Tooltip 辅助线
  shared: true,
});

chart3.line().position('year*value').label('value');
chart3.point().position('year*value');

chart3.render();
/////////////////////////////////////////////////////////
const data4 = [
  { item: '0-20', count: 23, percent: 0.05 },
  { item: '20-40', count: 89, percent: 0.19 },
  { item: '40-60', count: 98, percent: 0.21 },
  { item: '60-80', count: 143, percent: 0.31 },
  { item: '80以上', count: 100, percent: 0.22 },
];
const chart4 = new Chart({
  container: 'container4',
  autoFit: true,
  height: 500,
});
chart4.data(data4);
chart4.scale('percent', {
  formatter: (val) => {
    val = val * 100 + '%';
    return val;
  },
});
chart4.coordinate('theta', {
  radius: 0.75,
  innerRadius: 0.6,
});
chart4.tooltip({
  showTitle: false,
  showMarkers: false,
  itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
});
// 辅助文本
chart4
  .annotation()
  .text({
    position: ['50%', '50%'],
    content: '总人数',
    style: {
      fontSize: 14,
      fill: '#8c8c8c',
      textAlign: 'center',
    },
    offsetY: -20,
  })
  .text({
    position: ['50%', '50%'],
    content: '453',
    style: {
      fontSize: 20,
      fill: '#8c8c8c',
      textAlign: 'center',
    },
    offsetX: -10,
    offsetY: 20,
  })
  .text({
    position: ['50%', '50%'],
    content: '人',
    style: {
      fontSize: 14,
      fill: '#8c8c8c',
      textAlign: 'center',
    },
    offsetY: 20,
    offsetX: 20,
  });
chart4
  .interval()
  .adjust('stack')
  .position('percent')
  .color('item')
  .label('percent', (percent) => {
    return {
      content: (data) => {
        return `${data.item}: ${percent * 100}%`;
      },
    };
  })
  .tooltip('item*percent', (item, percent) => {
    percent = percent * 100 + '%';
    return {
      name: item,
      value: percent,
    };
  });

chart4.interaction('element-active');

chart4.render();
/////////////////////////////////////////////////////////        
    }
    render() { 
        return ( 
            <div>
                <section>
                  <h1>趋势分析模块介绍</h1>
                  <p className="para">&nbsp;&nbsp;&nbsp;&nbsp;采用数据可视化方案,利用交互性较高的ant-V建立图表,主要分析：出院人数，在住人数，剩余床位，本月收治，本月出院 5个指标。包括本周趋势分析，月度趋势分析。</p>
                </section>
                <h1 >医院本周趋势分析</h1>
                <div id="c1" className="chatPage">
                </div>
                <h1>医院月度趋势分析</h1>
                <div id="c2" className="chatPage"></div>
                <h1>医院治愈率分析</h1>
                <div id="container3"></div>
                <h1>住院年龄分布</h1>
                <div id="container4"></div>
            </div>
         );
    }
}
 
export default TrendAnalysis;