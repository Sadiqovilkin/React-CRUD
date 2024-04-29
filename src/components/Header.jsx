import React from 'react'
import Welcome from './Welcome'
import Login from './Login'
import Logout from './Logout'

const Header = () => {
    return (
        <header>
            <div className="container py-4">
                <div className="row">
                    <div className="col-3">
                        <Welcome/>
                    </div>
                    <div className="col-lg-9 d-flex justify-content-center gap-3">
                        <Login/>
                        <Logout/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header