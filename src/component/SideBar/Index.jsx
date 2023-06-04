import { Menu } from "antd";
import { AppstoreOutlined, MoneyCollectFilled, MoneyCollectOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SideBar() {
    const navigate = useNavigate();
    return (
        <div className="DashboardSidebar">
            <Menu
                className="SideMenuVertical"
                onClick={(item) => {
                    console.log(item);
                    navigate(item.key);
                }}
                items={[
                    {
                        label: "Dashboard",
                        icon: <AppstoreOutlined />,
                        key: "/"
                    },
                    {
                        label: "Deposit",
                        icon: <MoneyCollectFilled />,
                        key: "/deposit"
                    },
                    {
                        label: "Withdraw",
                        icon: <MoneyCollectOutlined />,
                        key: "/withdraw"
                    },
                    {
                        label: "Notification",
                        key: "/notification"
                    },
                    {
                        label: "Settings",
                        key: "/settings"
                    },
                ]}
            />
        </div>
    );
}

export default SideBar;
