import React from 'react'
import { Outlet } from 'react-router-dom'
import './dashboard.scss'
import { favorites } from '../../constants'
import { Layout, Menu, Input, Col, Row, Button, Typography, Divider, Badge, Avatar } from 'antd';
import {
  HomeOutlined,
  BookOutlined,
  FileTextOutlined,
  HeartOutlined,
  CalendarOutlined,
  HistoryOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  CloseOutlined,
  SearchOutlined
} from '@ant-design/icons';

const { Sider } = Layout;
const { Text } = Typography;

const Dashboard = () => {
  const menuItems = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: '2',
      icon: <BookOutlined />,
      label: 'Library',
    },
    {
      key: '3',
      icon: <FileTextOutlined />,
      label: 'Annales',
    },
    {
      key: 'divider1',
      type: 'divider',
      backgroundColor: '#404040'
    },
    {
      key: '4',
      icon: <HeartOutlined />,
      label: 'Playlists',
    },
    {
      key: '5',
      icon: <CalendarOutlined />,
      label: 'Planner',
    },
    {
      key: '6',
      icon: <HistoryOutlined />,
      label: 'History',
    },
    {
      key: '7',
      icon: <QuestionCircleOutlined />,
      label: 'Help',
    },
    {
      key: '8',
      icon: <LogoutOutlined />,
      label: 'Log out',
    },
  ]

  const FavoriteItem = ({ icon, badge, title }) => (
    <div
      className='flex itemCenter mb-10 pl-10 fav-item textCenter'
    >
      <div className='flex itemsCenter'>
        <div className='mr-15'>
          {icon && (
            <Avatar
              style={{
                backgroundColor: 'transparent',
                fontSize: '24px',
              }}
            >
              {icon}
            </Avatar>
          )}
          {badge && (
            <Badge
              count={badge}
              style={{
                backgroundColor: '#f0f0f0',
                color: '#000',
                borderRadius: '12px',
                boxShadow: '0 0 0 1px #d9d9d9 inset',
              }}
            />
          )}
        </div>
        <div>
          <Text strong>{title}</Text>
        </div>
        <div className='ml-12 fav-close-icon'> <CloseOutlined /></div>
      </div>
    </div>
  )

  const FavoritesContainer = () => (
    <div
      className='favorites-container'
    >
      {favorites.map((item) => (
        <FavoriteItem key={item.key} {...item} />
      ))}
    </div>
  )


  return (
    <Row className='dash-main'>
      <Col span={5}>
        <Sider
          width={264}
          className='dashboard-container flex flexCol justifyBetween p-14'
        >
          <div>
            <div className='textCenter mb-24'>
              <div className='dash-heading'>SUPEX</div>
            </div>
            <Input
              prefix={<SearchOutlined />}
              value="Search"
              className='mb-20 search-input'
              suffix="+"
            />
            <Menu
              mode="inline"
              defaultSelectedKeys={['2']}
              theme='dark'
              style={{ backgroundColor: '#1f1f1f', color: '#fff', borderRight: 0 }}
              items={menuItems.slice(0, 4)}
            />
            <Divider style={{ backgroundColor: '#404040' }} />
            <Menu
              mode="inline"
              theme='dark'
              style={{ backgroundColor: '#1f1f1f', color: '#fff', borderRight: 0 }}
              items={menuItems.slice(4, 7)}
            />
            <Divider style={{ backgroundColor: '#404040' }} />
            <div className='textCenter mb-20'>
              <Button className='custom-btn' shape="round">Custom test</Button>
            </div>
            <Text style={{ color: '#85868E' }} className='semiBold'>FAVORITES</Text>
            <FavoritesContainer />
          </div>
          <Menu
            mode="inline"
            theme='dark'
            style={{ backgroundColor: '#1f1f1f', color: '#fff', borderRight: 0 }}
            items={menuItems.slice(7)}
          />
        </Sider>
      </Col>
      <Col span={19}>
        <Outlet />
      </Col>
    </Row>
  )
}

export default Dashboard