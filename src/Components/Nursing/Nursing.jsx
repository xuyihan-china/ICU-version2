import React, { Component } from 'react';
import './Nursing.css'
class Nursing extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>护理等级参照表格</h1>
                <h2 className="Top1">特级护理</h2>
                <h3 className="subTitle">适用对象</h3>
                <p className="nus-ant">用于生命垂危、病情多变，随时需要进行应急抢救的病员以及大面积灼伤，大手术后病人，24小时专人守护。</p>
                <h3 className="subTitle">护理要求</h3>
                <p className="nus-ant">1、制订出切实可行的护理计划。</p>
                <p className="nus-ant">2、随时观察和记录体温、脉搏、呼吸、血压、意识、瞳孔、尿量的变化；</p>
                <p className="nus-ant">3、按护理计划完成各项治疗和护理：</p>
                <p className="nus-ant">（1）完成静脉输液和静脉给药。<br></br>
（2）保持各种引流管通畅，观察并记录引流液的色、量和性质，有异常时留取标本。<br></br>
（3）做好晨、晚间护理，保持床铺清洁，干燥，舒适，保持病员皮肤清洁，及时清理呕吐物、排泄物。<br></br>
（4）每2-3小时帮助病员更换体位，按摩受压部位，拍背，预防并发症。<br></br>
（5）每日两次口腔护理。<br></br>
（6）昏迷病人每5-10分钟吸痰一次。<br></br>
（7）用氧帐疗法者，按时检查氧的浓度、流量和温湿度。<br></br>
（8）定期抽动脉血检测氧分压和二氧化碳分压。<br></br>
（9）用电动呼吸者，严密观察机器效能，每日4-6次湿化痰液，定期消毒螺旋管。<br></br>
（10）用三腔管止血者，定时进行气囊减压。<br></br>
（11）准确完成各项治疗，如透析、脱水剂的应用等。</p>
                <h3 className="subTitle">4、做好对症护理。</h3>
                <p className="nus-ant">（1）根据病情留取各种标本及时送检，负责取回化验报告。<br />
（2）完成床边心电图、X光线等各项检查。<br />
（3）高烧病人要采取有效的降温措施。<br />
（4）昏迷病人及时清除呕吐物。<br />
（5）休克病人一方面有效的输液补充血流量，另一方面严密注意血压、脉搏的变化，记每小时的尿量。<br />
（6）必要时给病人电除颤、气管插管、心肺复苏、三腔管止血等。</p>
                <h3 className="subTitle">5、营养护理</h3>
                <p className="nus-ant">（1）能进食者给予喂饭，原则少吃多餐。随时喂水。<br />
（2）昏迷病人行鼻饲供给营养。特护人员按病员标准体重每日的总热量和液体量及每日所需要的营养成份，配制成流质，每日六次由胃管注入。</p>
                <h2 className="Top1">一级护理</h2>
                <h3 className="subTitle">适用对象</h3>
                <p className="nus-ant">用于病情重或较大手术后病情不稳定的病员，生活完全不能自理，护理比较繁琐。</p>
                <h3 className="subTitle">护理要求</h3>
                <p className="nus-ant">1、根据病情制订出护理计划，各班按护理计划护理。<br />
2、每1h巡回观察一次病人，严密观察体温、脉搏、呼吸、血压、瞳孔、意识等变化。做好特别记录。<br />
3、保持引流管的畅通，注意引流物的色、量、性质。按规定时间和操作要求更换引流装置。<br />
4、准备好各种抢救药品、仪器、用物。<br />
5、熟练掌握并及时应用三腔管止血、电除颤、气管插管、心肺脑复苏。<br />
6、认真做好基础护理。</p>
                <h2 className="Top1">二级护理</h2>
                <h3 className="subTitle">适用对象</h3>
                <p className="nus-ant">1、病重期急性症状消失，大手术后病情稳定，但生活不能自理者；<br />
2、年老体弱或慢性病患者；<br />
3、普通手术后或轻型子痫等。</p>
                <h3 className="subTitle">护理要求</h3>
                <p className="nus-ant">1、注意观察病情，观察特殊治疗或特殊用药后的反应及效果，每2h巡视一次。<br />
2、根据病情可在床上或室内轻度活动。<br />
3、协助病人做好晨、晚间护理。<br />
4、针对不同疾病做好卫生宣教及出院指导。</p>
                <h3 className="Top1">三级护理</h3>
                <h3 className="subTitle">适用对象</h3>
                <p className="nus-ant">1、一般慢性病、轻症、术前检查准备阶段的病人，正常孕妇等；<br />
2、各种疾病或术后恢复期的病人；<br />
3、能下床活动，生活自理者。</p>
                <h3 className="subTitle">护理要求</h3>
                <p className="nus-ant">1、每日巡视2次（新标准是3个小时巡视一次），掌握病人病情及思想情况，注意病人饮食及休息。每日测体温、脉搏2次。<br />
2、督促遵守法规，做好卫生宣教。<br />
3、参加力所能及的轻微活动。</p>

            </div>
        );
    }
}

export default Nursing;