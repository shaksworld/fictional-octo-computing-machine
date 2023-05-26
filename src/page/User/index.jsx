import React from 'react'
import {Card, Space, Statistic, Typography} from "antd";
import { DollarOutlined} from '@ant-design/icons';
import CoinMarkets from "../../component/Table/CoinMarkets";

function index() {
  return (
    <div className="dashboard-main">
      <Typography.Title level={2}>User</Typography.Title>
      <Space direction='horizontal' className="space-main">
        <Dashboard title={"Account Balance"} value={0.0}/>
          <Dashboard title={"Amount Deposited"} value={0.0}/>
          <Dashboard title={"Amount Withdraw"} value={0.0}/>
      </Space>
        <CoinMarkets />
    </div>
  )
}

function Dashboard({title, value}) {
  return(
    <Card>
          <Space direction='horizontal'>
              <DollarOutlined 
              style={{fontSize: 36, color: '#3f8600'}}
              />
              <Statistic title={title} value={value} precision={2} />
          </Space>
    </Card>
  )
}


export default index