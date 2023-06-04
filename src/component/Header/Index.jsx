// import Typography from 'antd/es/typography/Typography'
import React from 'react'
// import { BellFilled, MailOutlined } from '@ant-design/icons'
import {Space, Typography, Badge} from "antd";
import Profile from "../profile"
function Index() {
  return (
    <div className="DasboardHeader">
        <h2>Logo</h2>
        <Typography.Title>User Dashboard</Typography.Title>
        <Space>
            <Profile />
        </Space>
    </div>
  )
}

export default Index