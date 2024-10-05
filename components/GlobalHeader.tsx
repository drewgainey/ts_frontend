"use client";
import { Button, Layout } from "antd";
import { Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

function GlobalHeader() {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Title level={2} style={{ color: "#ffffff" }}>
        {" "}
        Treasury Software
      </Title>
      <Button type="text" style={{ color: "#ffffff" }}>
        Sign Out
      </Button>
    </Header>
  );
}

export default GlobalHeader;
