import React, { Component } from 'react';
import { Menu } from 'antd';
import '../layout/css/navbar-style.css';
import {
  BarChartOutlined,
  PicLeftOutlined,
  SolutionOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'calc',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
    <nav className="menuBar">
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="calc">
          <BarChartOutlined />
          <Link to="/">Food Calculator</Link> 
        </Menu.Item>
        <Menu.Item key="news">
          <PicLeftOutlined />
          <Link to="/news">Health News</Link>
        </Menu.Item>
        <Menu.Item key="kms">
          <SolutionOutlined />
          <Link to="/kms">Data Anak KMS</Link>
        </Menu.Item>
        <Menu.Item key="github">
          <a href="https://github.com/mentarie/beritagizi_API" color = "#7e6752" target="_blank" rel="noopener noreferrer">
            Repositori Github
          </a>
        </Menu.Item>
      </Menu>
    </nav>
    );
  }
}

export default Navbar;
