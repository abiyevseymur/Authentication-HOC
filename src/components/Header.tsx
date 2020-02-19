import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';

class Header extends Component {
    renderLinks() {
        const { authenticated }: any = this.props
        if (authenticated) {
            return <div>
                <Link to="/feature">Feature</Link>
                <Link to="/signout">Sign Out</Link>
            </div>
        }
        else {
            return <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
            </div>
        }
    }
    render() {
        return (
            <div className="header">
                <Link to="/" >Redux Auth</Link>
                {this.renderLinks()}
            </div>
        )
    }
}
function mapStateToProps(state: any) {
    return { authenticated: state.auth.authenticated }
}
export default connect(mapStateToProps)(Header);