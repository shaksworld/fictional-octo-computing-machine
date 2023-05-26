import {Button, Space, Typography} from 'antd'
import React from 'react'

function index() {
  return (
    <div>
        <Typography.Title level={2}>User</Typography.Title>

        <Space direction='horizontal' className="space-main">
            <Mine
                title={"Bank Transfer"}
                content={"Usually it take us 1-2 days to process your request"}
                paymentType={"Bank Transfer"}
                amount={"$0.00"}
                status={"Pending"}
                date={"2021-09-01"}
            />
            {/*<Button variant="contained">View</Button>*/}
        </Space>

    </div>
  )
}
function Mine(title, content, paymentType, amount, status, date) {
    return {
        title: title,
        content: content,
        paymentType: paymentType,
        amount: amount,
        status: status,
        date: date
    }


}


export default index