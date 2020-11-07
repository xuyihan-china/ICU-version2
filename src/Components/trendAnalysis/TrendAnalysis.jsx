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
        
    }
    render() { 
        return ( 
            <div>
                <section>
                  <h1>趋势分析模块介绍</h1>
                  <p className="para">&nbsp;&nbsp;&nbsp;&nbsp;采用数据可视化方案,利用交互性较高的ant-V建立图表,主要分析：出院人数，在住人数，剩余床位，本月收治，本月出院 5个指标。包括本周趋势分析，月度趋势分析。</p>
                </section>
                <h1 >本周趋势分析</h1>
                <div id="c1" className="chatPage">
                </div>
                <h1>月度趋势分析</h1>
                <div id="c2" className="chatPage"></div>
            </div>
         );
    }
}
 
export default TrendAnalysis;