import React,{useEffect} from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';

const Dashboard = () => {
    useEffect(() => {
        document.title = 'Instagram'
    }, [])
    return (
        <div className="bg-gray-background">
            <Header/>
            <div className="grid">
                <Timeline/>
                <Sidebar/>
            </div>
        </div>
    )
}

export default Dashboard
