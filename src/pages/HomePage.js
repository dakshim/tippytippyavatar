import {
  AppstoreAddOutlined ,
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DownloadOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Button, Drawer, Space } from 'antd';
import React, { useState } from 'react';
import Avatar from 'components/Avatar';
const { Header, Content, Footer, Sider } = Layout;


const HomePage = () => {
  const [isCustomize, setIsCustomize] = useState(false);
  const [activeCustomization, setActiveCustomization] = useState('skincolor');
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [triggerDownload, setTriggerDownload] = useState(false);

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Space align="right" direction="horizontal" style={{ width: '100%', justifyContent: 'right', paddingRight: '30px' }}>
            <Button type="primary" shape="round" icon={<AppstoreAddOutlined />} onClick={() => {setDrawerVisible(!drawerVisible)}} >
              Select Customization
            </Button>
          </Space>
        </Header>

        <Drawer title="Customize" placement="right" onClose={() => setDrawerVisible(false)} visible={drawerVisible}>
          <Button id='skincolor' onClick={()=> setActiveCustomization('skincolor')} type={activeCustomization == 'skincolor' ? 'primary':'default'}  className='tippy-tippy-btn' block>SKIN COLOR</Button>
          <Button id='eyes' onClick={()=> setActiveCustomization('eyes')} type={activeCustomization == 'eyes' ? 'primary':'default'}  className='tippy-tippy-btn' block>EYES</Button>
          <Button id='eyebrows' onClick={()=> setActiveCustomization('eyebrows')} type={activeCustomization == 'eyebrows' ? 'primary':'default'}  className='tippy-tippy-btn' block>EYEBROWS</Button>
          <Button id='mouth' onClick={()=> setActiveCustomization('mouth')} type={activeCustomization == 'mouth' ? 'primary':'default'}  className='tippy-tippy-btn' block>MOUTH</Button>
          <Button id='hairstyles' onClick={()=> setActiveCustomization('hairstyles')} type={activeCustomization == 'hairstyles' ? 'primary':'default'}  className='tippy-tippy-btn' block>HAIR STYLES</Button>
          <Button id='haircolors' onClick={()=> setActiveCustomization('haircolors')} type={activeCustomization == 'haircolors' ? 'primary':'default'}  className='tippy-tippy-btn' block>HAIR COLOR</Button>
          <Button id='facialhairs' onClick={()=> setActiveCustomization('facialhairs')} type={activeCustomization == 'facialhairs' ? 'primary':'default'}  className='tippy-tippy-btn' block>FACIAL HAIR</Button>
          <Button id='clothes' onClick={()=> setActiveCustomization('clothes')} type={activeCustomization == 'clothes' ? 'primary':'default'}  className='tippy-tippy-btn' block>CLOTHES</Button>
          <Button id='fabriccolors' onClick={()=> setActiveCustomization('fabriccolors')} type={activeCustomization == 'fabriccolors' ? 'primary':'default'}  className='tippy-tippy-btn' block>FABRIC COLOR</Button>
          <Button id='glasses' onClick={()=> setActiveCustomization('glasses')} type={activeCustomization == 'glasses' ? 'primary':'default'}  className='tippy-tippy-btn' block>GLASSES</Button>
          <Button id='glassopacity' onClick={()=> setActiveCustomization('glassopacity')} type={activeCustomization == 'glassopacity' ? 'primary':'default'}  className='tippy-tippy-btn' block>GLASS OPACITY</Button>
          <Button id='accesories' onClick={()=> setActiveCustomization('accesories')} type={activeCustomization == 'accesories' ? 'primary':'default'}  className='tippy-tippy-btn' block>ACCESORIES</Button>
          <Button id='tattoos' onClick={()=> setActiveCustomization('tattoos')} type={activeCustomization == 'tattoos' ? 'primary':'default'}  className='tippy-tippy-btn' block>TATTOOS</Button>
          <Button id='backgroundcolors' onClick={()=> setActiveCustomization('backgroundcolors')} type={activeCustomization == 'backgroundcolors' ? 'primary':'default'}  className='tippy-tippy-btn' block>BACKGROUND COLOR</Button>
        </Drawer>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Avatar activeCustomization={activeCustomization} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Tippy Tippy Avatar ©2022 Created by Dakshim
        </Footer>
      </Layout>
    </Layout>
  );
};

export default HomePage;
