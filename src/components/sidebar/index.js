import React, { memo } from 'react'
import useUser from '../../hooks/use-user'
import User from './user';
import Suggestions from './suggestions';
const Sidebar = () => {
    const { user: { fullName, username, userId, following } } = useUser(); 
    
    return (
        <div className="p-4">
            <User username={username} fullName={fullName}/>
            <Suggestions userId={userId} following={following}/>
        </div>
    )
}
export default memo(Sidebar);
Sidebar.whyDidYouRender = true