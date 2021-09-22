/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
//Prettier - Code formatte
import './App.css';
import { DatePicker, Input, Menu, Row, Col} from 'antd';
import 'antd/dist/antd.css';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
function App() {
  return (
    <div className="App">
      <div class="top">
      <Row align='middle' >
      <Col>
      <h1><a id="logo">Ant Design</a></h1></Col>
      <Col flex="2" ><Input id="input" placeholder="搜索"/></Col>
      <Col flex="1" ><Menu mode="horizontal">
        <Menu.Item>设计</Menu.Item>
        <Menu.Item>文档</Menu.Item>
        <Menu.Item>组件</Menu.Item>
        <Menu.Item>资源</Menu.Item>
        <Menu.Item>国内镜像</Menu.Item>
        </Menu></Col>
        </Row>
        <Row>
          <div class="biglogo">
            Ant Design
          </div>
        </Row>
        </div>
    </div>
  );
}

export default App;
