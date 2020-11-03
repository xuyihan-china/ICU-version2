import React, { Component } from 'react';
import { Chart } from '@antv/g2';
class TrendAnalysis extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount=()=>{
        const data = [
            { genre: '出院人数', sold: 275 },
            { genre: '在住人数', sold: 115 },
            { genre: '剩余床位', sold: 120 },
            { genre: '本周收治', sold: 350 },
            { genre: '本周出院', sold: 150 },
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
          chart.interval().position('genre*sold');
    
          // Step 4: 渲染图表
          chart.render();
    }
    render() { 
        return ( 
            <div>
                <h1>Hello TrendAnalysis</h1>
                <div id="c1">
                </div>
            </div>
         );
    }
}
 
export default TrendAnalysis;