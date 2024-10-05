"use client";
import { Layout, Typography, List, Button } from "antd";
import Card from "antd/es/card/Card";
import PlaidButton from "../components/PlaidButton";

const { Content } = Layout;
const { Title } = Typography;

const data = [
  {
    title: "Connect Accounts",
    content: <PlaidButton />,
  },
];

export default function Home() {
  return (
    <Layout>
      <Content style={{ margin: "0px 16px 0" }}>
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>{item.content}</Card>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
}
