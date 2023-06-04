import React from 'react'
import {Card, Space, Statistic, Typography} from "antd";
import PendingIcon from '@mui/icons-material/Pending';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
// import { DollarOutlined} from '@ant-design/icons';
import CoinMarkets from "../../component/Table/CoinMarkets";
// import Copy from "../../component/Copy"

function index() {
  return (
     <div className="dashboard-main">
      <Typography.Title level={2}>User</Typography.Title>
      <div className='dashboard-space'>
        <div className='dashboard-main-one'>
          <Space direction='horizontal' className="space-main">
            <Dashboard title={"Account Balance"} text={"USDT"} value={0.00}/>
              <Dashboard title={"Bitcoin"} text={"BTC/USDT"} value={0.00}/>
              <Dashboard title={"Ethereum"} text={"ETH/USDT"} value={0.00}/>
              <Dashboard title={"USDT"} text={"ETH/USDT"} value={0.00}/>
          </Space>
          <CoinMarkets />
        </div>
        <div className='dashboard-main-two'>
          <h3>Your Transactions</h3>
          <div className='dasboard-transaction-main'>
            <div className="pending">
            <div className="pending-icon">
              <PendingIcon />
              </div>
              <div className="pending-one">
                <h3>Pending Transaction</h3>
                <h4>0</h4>
              </div>
              
            </div>
            <div className="active">
            <div className="active-icon">
              <PauseCircleFilledIcon />
            </div>
            <div className="active-one">
              <h3>Active Transaction</h3>
              <h4>0</h4>
              </div>
            </div>
            <div className="approve">
            <div className="approve-icon">
              <CheckCircleIcon />
            </div>
            <div className="approve-one">
              <h3>Approved Transaction</h3>
              <h4>0</h4>
            </div>
            </div>
            <div className="decline">
            <div className="decline-icon">
              <CancelIcon />
            </div>
            <div className="decline-one">
              <h3>Decline Transaction</h3>
              <h4>0</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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