import React, { Component } from 'react';
import { Column } from '@antv/g2plot';
import './DocSay.css'
class DocSay extends Component{
    constructor(props){
        super(props)
        this.state={}
    }
    componentDidMount(){
        const data = [
            { type: '1床', value: 79 },
            { type: '2床', value: 60 },
            { type: '3床', value: 80 },
            { type: '4床', value: 79 },
            { type: '5床', value: 79 },
            { type: '6床', value: 82 },
            { type: '7床', value: 80 },
            { type: '8床', value: 79 },
            { type: '9床', value: 79 },
            { type: '9床', value: 80 },
          ];
          
          const paletteSemanticRed = '#F4664A';
          const brandColor = '#5B8FF9';
          const columnPlot = new Column('container', {
            data,
            xField: 'type',
            yField: 'value',
            seriesField: 'value',
            color: ({ value }) => {
              if (value>83) {
                return paletteSemanticRed;
              }
              return brandColor;
            },
            legend: false,
          });
          
          columnPlot.render();
          setInterval(() => {
            columnPlot.changeData(data.map((d) => ({ ...d, value: d.value + Math.random()*4 })));
          }, 1000);
    }
    render(){
        return(
        <div>
            <h2>心率检测</h2>
            <div id="container"></div>

        </div>
        )
        
    }
}
export default DocSay