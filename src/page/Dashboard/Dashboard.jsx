import "./Dashboard.css"
import { Space } from 'antd';
import Header from "../../component/Header/Index"
import Sidebar from "../../component/SideBar/Index"
import Content from "../../component/Content/index"
import Footer from "../../component/Footer/Index"

function dashboard() {
    return (
        <div className="Dashboard">
            <Header />
            <Space className="SideMenuAndContent">
                <Sidebar />
                <Content />
            </Space>
            <Footer />
        </div>
    )
}
export default dashboard