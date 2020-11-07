import React, { Component } from 'react';
import { Chart } from '@antv/g2';
import './photo.css'
class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount = () => {
        const data = [
            { type: '男性', value: 56.4 },
            { type: '女性', value: 43.6 }
        ];
        const chart = new Chart({
            container: 'container',
            autoFit: true,
            height: 400,
            
        });
        chart.data(data);
        chart.legend(false);
        chart.tooltip({
            showMarkers: true
        });
        chart.facet('rect', {
            fields: ['type'],
            padding: 20,
            showTitle: false,
            eachView: (view, facet) => {
                const data = facet.data;
                let color;
                if (data[0].type === '男性') {
                    color = '#0a9afe';
                } else {
                    color = '#f0657d';
                }
                data.push({ type: '其他', value: 100 - data[0].value });
                view.data(data);
                view.coordinate('theta', {
                    radius: 0.8,
                    innerRadius: 0.5
                });
                view
                    .interval()
                    .adjust('stack')
                    .position('value')
                    .color('type', [color, '#eceef1'])
                    .style({
                        opacity: 1,
                    });
                view.annotation().text({
                    position: ['50%', '50%'],
                    content: data[0].type,
                    style: {
                        fontSize: 12,
                        fill: '#8c8c8c',
                        fontWeight: 300,
                        textBaseline: 'bottom',
                        textAlign: 'center'
                    },
                    offsetY: -12,
                });

                view.annotation().text({
                    position: ['50%', '50%'],
                    content: data[0].value,
                    style: {
                        fontSize: 18,
                        fill: '#000',
                        fontWeight: 500,
                        textAlign: 'center'
                    },
                    offsetY: 10,
                });

                view.interaction('element-active');
            }
        });
        chart.render();

        const data2 = [
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
        const chart2 = new Chart({
            container: 'container2',
            autoFit: true,
            height: 500,
        });

        chart2.data(data2);
        chart2.scale({
            year: {
                range: [0, 1],
            },
            value: {
                min: 0,
                nice: true,
            },
        });

        chart2.tooltip({
            showCrosshairs: true, // 展示 Tooltip 辅助线
            shared: true,
        });

        chart2.line().position('year*value').label('value');
        chart2.point().position('year*value');

        chart2.render();

        const data3 = [
            { item: '0-20', count: 23, percent: 0.05 },
            { item: '20-40', count: 89, percent: 0.19 },
            { item: '40-60', count: 98, percent: 0.21 },
            { item: '60-80', count: 143, percent: 0.31 },
            { item: '80以上', count: 100, percent: 0.22 },
          ];
          const chart3 = new Chart({
            container: 'container3',
            autoFit: true,
            height: 500,
          });
          chart3.data(data3);
          chart3.scale('percent', {
            formatter: (val) => {
              val = val * 100 + '%';
              return val;
            },
          });
          chart3.coordinate('theta', {
            radius: 0.75,
            innerRadius: 0.6,
          });
          chart3.tooltip({
            showTitle: false,
            showMarkers: false,
            itemTpl: '<li class="g2-tooltip-list-item"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>',
          });
          // 辅助文本
          chart3
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
          chart3
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
          
          chart3.interaction('element-active');
          
          chart3.render();
          
    }
    render() {
        return (
            <div>
              <section>
                <h1>患者画像模块说明</h1>
                <p className='para'>此模块可以根据后台的数据分析：入院男女比例分布、治愈率分析、住院人群年龄分布三个指标。并以可视化的方式展示在医护人员面前。</p>
              </section>
                <h2  className='Photo2'>入院男女比例分布</h2>
                <div id="container"></div>
                <h2 className='Photo2'>治愈率分析</h2>
                <div id="container2"></div>
                <h2 className='Photo2'>
                    住院人群年龄分布
                </h2>
                <div id="container3"></div>
            </div>
        );
    }
}

export default Photo;