// import Typography from 'antd/es/typography/Typography'
import React from 'react'
import { BellFilled, MailOutlined } from '@ant-design/icons'
import {Space, Typography, Badge} from "antd";
function Index() {
  return (
    <div className="DasboardHeader">
        <h2>Logo</h2>
        <Typography.Title>User Dashboard</Typography.Title>
        <Space>
            <Badge count={5} dot>
                <MailOutlined style={{fontSize: "20px"}}/>
            </Badge>
            <Badge count={5}>
                <BellFilled style={{fontSize: "20px"}}/>
            </Badge>
        </Space>
    </div>
  )
}

export default Index