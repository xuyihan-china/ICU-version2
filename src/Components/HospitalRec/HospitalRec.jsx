import React, { Component } from 'react';
import { Chart, Util} from '@antv/g2';
import { Column, G2 } from '@antv/g2plot';
import './HospitalRec.css'
class HospitalRec extends Component{
    componentDidMount=()=>{
        const data = [
            { type: '上呼吸道感染', value: 0.19 },
            { type: '高血压', value: 0.21 },
            { type: '糖尿病', value: 0.27 },
            { type: '妊娠反应', value: 0.33 },
            { type: '呼吸道感染', value: 0.59 },
            { type: '糖尿病', value: 0.41 },
            { type: '屈光不正', value: 0.17 },
            { type: '支气管炎', value: 0.4 },
            { type: '急性肠炎', value: 0.2 },
            { type: '胃窦炎', value: 0.39 },
          ];
          const chart = new Chart({
            container: 'container',
            autoFit: true,
            height: 500,
            padding:[20,20,20,20]
          });
          chart.data(data);
          
          chart.coordinate('theta', {
            radius: 0.75
          });
          chart.tooltip({
            showMarkers: true
          });
          // eslint-disable-next-line
          const interval = chart
            .interval()
            .adjust('stack')
            .position('value')
            .color('type', ['#063d8a', '#1770d6', '#47abfc', '#38c060','#cf1322','#871400','#612500','#a0d911','#ffadd2','#08979c'])
            .style({ opacity: 0.4 })
            .state({
              active: {
                style: (element) => {
                  const shape = element.shape;
                  return {
                    matrix: Util.zoom(shape, 1.1),
                  }
                }
              }
            })
            .label('type', (val) => {
              const opacity = val === '四线及以下' ? 1 : 0.5;
              return {
                offset: -30,
                style: {
                  opacity,
                  fill: 'white',
                  fontSize: 12,
                  shadowBlur: 2,
                  shadowColor: 'rgba(0, 0, 0, .45)',
                },
                content: (obj) => {
                  return obj.type + '\n' + obj.value + '%';
                },
              };
            });
          
          chart.interaction('element-single-selected');
          
          chart.render();

          /////////////////////////////////
          G2.registerInteraction('element-link', {
            start: [{ trigger: 'interval:mouseenter', action: 'element-link-by-color:link' }],
            end: [{ trigger: 'interval:mouseleave', action: 'element-link-by-color:unlink' }],
          });
          
          fetch('https://gw.alipayobjects.com/os/antfincdn/jSRiL%26YNql/percent-column.json')
            .then((data) => data.json())
            .then((data) => {
              data = [
                { "year": "1月", "type": "24/48h", "value": 92.1 },
                { "year": "1月", "type": "VAP预防", "value": 145.1 },
                { "year": "1月", "type": "VAP发病", "value": 110.6 },
                { "year": "1月", "type": "血流感染", "value": 39.4 },
                { "year": "1月", "type": "泌尿感染", "value": 21.0 },
                { "year": "1月", "type": "呼吸道感染", "value": 48.3 },
                { "year": "1月", "type": "重症死亡", "value": 47.2 },
                { "year": "1月", "type": "压疮发生", "value": 29.7 },
                { "year": "2月", "type": "24/48h", "value": 91.8 },
                { "year": "2月", "type": "VAP", "value": 140.9 },
                { "year": "2月", "type": "VAP发病", "value": 99.0 },
                { "year": "2月", "type": "血流感染", "value": 33.2 },
                { "year": "2月", "type": "泌尿感染", "value": 18.5 },
                { "year": "2月", "type": "呼吸道感染", "value": 53.9 },
                { "year": "2月", "type": "重症死亡", "value": 51.4 },
                { "year": "2月", "type": "压疮发生", "value": 32.8 },
                { "year": "3月", "type": "24/48h", "value": 87.1 },
                { "year": "3月", "type": "VAP预防", "value": 139.4 },
                { "year": "3月", "type": "VAP发病", "value": 103.9 },
                { "year": "3月", "type": "血流感染", "value": 30.0 },
                { "year": "3月", "type": "泌尿感染", "value": 20.2 },
                { "year": "3月", "type": "呼吸道感染", "value": 56.5 },
                { "year": "3月", "type": "重症死亡", "value": 84.6 },
                { "year": "3月", "type": "压疮发生", "value": 36.8 },
                { "year": "4月", "type": "24/48h", "value": 80.0 },
                { "year": "4月", "type": "VAP预防", "value": 134.8 },
                { "year": "4月", "type": "VAP发病", "value": 100.0 },
                { "year": "4月", "type": "血流感染", "value": 45.2 },
                { "year": "4月", "type": "泌尿感染", "value": 20.8 },
                { "year": "4月", "type": "呼吸道感染", "value": 49.3 },
                { "year": "4月", "type": "重症死亡", "value": 77.8 },
                { "year": "4月", "type": "压疮发生", "value": 37.5 }
              ]
              const columnPlot = new Column('container2', {
                data,
                xField: 'year',
                yField: 'value',
                seriesField: 'type',
                isPercent: true,
                isStack: true,
                meta: {
                  value: {
                    min: 0,
                    max: 1,
                  },
                },
                label: {
                  position: 'middle',
                  content: (item) => {
                    return `${(item.value * 100).toFixed(2)}%`;
                  },
                  style: {
                    fill: '#fff',
                  },
                },
                tooltip: false,
                interactions: [{ type: 'element-highlight-by-color' }, { type: 'element-link' }],
              });
          
              columnPlot.render();
            });
    }
    render(){
        return(
            <div>
                <h2 className="para">就诊疾病top10</h2>
                <div id="container"></div>
                <h2 className="para">
                    重症医学ICU质量检测
                </h2>
                <div id="container2">
                </div>
            </div>
        )
    }
}
export default HospitalRec