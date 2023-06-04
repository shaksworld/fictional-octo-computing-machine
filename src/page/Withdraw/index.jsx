import React from 'react'
import {Card, Space, Statistic, Typography} from "antd";

function index() {
  return (
    <div className="dashboard-main">
        <Typography.Title level={2}>Welcome User</Typography.Title>
        <div className='dashboard-space'>
          <div className='dashboard-main-one'>
            <Space direction='horizontal' className="space-main">
              <Dashboard title={"Account Balance"} text={"USDT"} value={0.00}/>
                <Dashboard title={"Bitcoin"} text={"BTC/USDT"} value={0.00}/>
                <Dashboard title={"Ethereum"} text={"ETH/USDT"} value={0.00}/>
                <Dashboard title={"USDT"} text={"ETH/USDT"} value={0.00}/>
            </Space>
            
            <div className='deposit-main-blog'>
              <div className='deposit-usdt'>
                <h3>what should I post here </h3>
              </div>
              <div className='deposit-btc'>
                <h3>what should I post here </h3>
              </div>
              <div className='deposit-eth'>
                <h3>what should I post here </h3>
              </div>
            </div>
            
          </div>
        </div>
        <div className='dashboard-main-two'></div>
    </div>
  )
}


function Dashboard({title, text, value}) {
  return(
    <Card>
          <Space direction='horizontal'>
              {/* <DollarOutlined 
              style={{fontSize: 36, color: '#3f8600'}}
              /> */}
              <Statistic title={title} text={text} value={value} precision={4} />
          </Space>
    </Card>
  )
}


export default index