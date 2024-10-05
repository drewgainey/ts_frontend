"use client";
import {
  LineChartOutlined,
  ClockCircleOutlined,
  AuditOutlined,
  FileSearchOutlined,
  FolderOpenOutlined,
  CheckSquareOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { Metadata } from "next/types";
import * as React from "react";
import GlobalHeader from "../components/GlobalHeader";
import "./globals.css";

const { Content, Sider } = Layout;

const siderItems: MenuProps["items"] = [
  { icon: LineChartOutlined, label: <Link href="/">Home</Link> },
  {
    icon: ClockCircleOutlined,
    label: <Link href="/time-entry">Banks</Link>,
  },
  {
    icon: FileSearchOutlined,
    label: <Link href="/transactions">Transactions</Link>,
  },
  { icon: CheckSquareOutlined, label: "Forecasting" },
  { icon: AuditOutlined, label: "Bank Reconciliation" },
  { icon: FolderOpenOutlined, label: "Payments" },
].map((icon, index) => {
  const key = String(index + 1);

  return {
    key: `sub${key}`,
    icon: React.createElement(icon.icon),
    label: icon.label,
  };
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <GlobalHeader />
          <Content style={{ padding: "16px 32px" }}>
            <Layout
              style={{
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <Sider
                style={{ background: colorBgContainer, minHeight: "100vh" }}
                width={208}
              >
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{
                    height: "100%",
                  }}
                  items={siderItems}
                />
              </Sider>
              {children}
            </Layout>
          </Content>
        </Layout>
      </body>
    </html>
  );
}
