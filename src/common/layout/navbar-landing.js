import React, { Component } from 'react';
import { Menu } from 'antd';
import '../layout/css/navbar-style.css';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
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
        <Menu.Item key="mail">
          <MailOutlined />
          <Link to="/">Profile</Link> 
        </Menu.Item>
        <Menu.Item key="app">
          <AppstoreOutlined />
          <Link to="/portofolio">Portofolio</Link>
        </Menu.Item>

        <Menu.Item key="alipay">
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
