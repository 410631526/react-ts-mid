import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

const SideBar: React.FC = () => {
    return (
        <div className="sidebar">
            <h2>功能選單</h2>
            <ul>
                <li><Link to="/insert">新增學生</Link></li>
                <li><Link to="/home">學生列表</Link></li>
            </ul>
        </div>
    );
};

export default SideBar;
