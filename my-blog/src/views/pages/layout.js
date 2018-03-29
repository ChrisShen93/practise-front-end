import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd'

const { Header, Content } = Layout
// const { SubMenu } = Menu

export default class Frame extends Component {
  render () {
    return (
      <Layout className="blog">
        <Header className="blog-header">
          <div className="blog-logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            className="blog-header"
          >
            <Menu.Item>nav 1</Menu.Item>
          </Menu>
        </Header>
        <Content className="blog-container">
          <Breadcrumb className="blog-breadcrumb">
            <Breadcrumb.Item>test</Breadcrumb.Item>
          </Breadcrumb>
        </Content>
      </Layout>
    )
  }
}
