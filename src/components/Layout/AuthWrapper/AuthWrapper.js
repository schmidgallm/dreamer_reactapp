import React from 'react'
import AuthNav from '../AuthNav'
const AuthWrapper = (props) => {
    return (
        <div>
            <AuthNav />
            {props.children}
        </div>
    )
}

export default AuthWrapper
