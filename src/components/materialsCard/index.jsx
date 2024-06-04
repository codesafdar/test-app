import React,{useState} from 'react';
import { Card, Progress, Button, Row, Col, Divider } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import './materials.scss'
import { GiProgression } from "react-icons/gi";
import { PiListChecksFill } from "react-icons/pi";
import Details from './Details';
import TableComp from './TableComp';

const MaterialsCard = () => {
  const [open, setOpen] = useState(false)
  return (
    <Card
      className='material-card-main mb-10'>
      <Row align="middle" justify="space-between">
        <Col span={14}>
          <Row justify='center'>
            <Col>
              <HeartOutlined style={{ fontSize: '24px', color: '#eb2f96' }} />
            </Col>
            <Col span={23}>
              <span style={{ marginLeft: '10px', fontSize: '16px' }}>Cardiologie</span>
              <Progress size="small" percent={87} showInfo={false} />
            </Col>
          </Row>
        </Col>
        <Divider type='vertical' className='h-3' />
        <Col span={9}>
          <Row>
            <Col span={8}>
              <div className='flex flexCol itemsCenter'>
                <GiProgression color='#C8C9CE' />
                <div className='fs-12'>87 %</div>
                <div className='textColor'>completed</div>
              </div>
            </Col>
            <Divider type='vertical' className='h-3' />
            <Col span={8}>
              <div className='flex flexCol itemsCenter'>
                <PiListChecksFill color='#C8C9CE' />
                <div className='fs-12'>12</div>
                <div className='textColor'>questions</div>
              </div>
            </Col>
            <Col>
              <Button className='start-btn' type="primary" shape="round">Start</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='detail-comp mt-24'>
        <Col span={24}>
        <Details setOpen={setOpen} open={open} />
        </Col>
        <Col >
       {
        open &&  <TableComp span={24}/>
       }
        </Col>
      </Row>
    </Card>
  )
}

export default MaterialsCard;
