import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <div>
        <h1>Landing Page</h1>
        <div className="list-group">
            <ul>
                <li><Link to="/Welcome">
                    Welcome Page
                </Link></li>
                <li><Link to="/SignIn">
                    Sign In
                </Link></li>
            </ul>
        </div>
    </div>