import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './notFound.css';

export default class NotFound extends Component {
    render() {
        return (
            <>
                <h1 className="error-url">Page Not Found (Error 404)</h1>
                <Link to="/">
                    <button 
                        className="error-btn mt-3" >
                            Return to main page
                    </button>
                </Link>
            </>
        )
    }
}