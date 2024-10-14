"use client";
import { Card, Layout, Typography } from "antd";

const { Content } = Layout;
const { Title } = Typography;

export default function TransactionsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Content style={{ margin: "0px 16px 0" }}>
        <Card>
          <Title level={3} style={{ margin: "10px" }}>
            Transactions
          </Title>
          {children}
        </Card>
      </Content>
    </Layout>
  );
}
