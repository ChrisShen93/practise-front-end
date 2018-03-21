import * as React from 'react';
import './App.less';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false
  };
  onCollapse = (collapsed: Boolean) => {
    this.setState({collapsed});
  }
  render() {
    return (
      <Layout className="app-blog">
        <Sider
          collapsible={true}
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="blog-logo">
            Chris
          </div>
          <Menu
            theme="dark"
          >
            <Menu.Item key="1">
              <span>Test</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header className="blog-header"/>
          <Content style={{ height: '100%' }}>
            <Breadcrumb>
              <Breadcrumb.Item>TEST</Breadcrumb.Item>
            </Breadcrumb>
            <div className="blog-container"/>
          </Content>
          <Footer className="blog-footer">
            Chris
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
