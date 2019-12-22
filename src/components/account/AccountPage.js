import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../NavBar';
import AccountMenu from './AccountMenu';
import AccountOverview from './AccountOverview';


class AccountPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="account-page-container account-background">
                <div className="nav-bar-wrapper">
                    <NavBar />
                </div>
                <div className="account-container">
                    <div className="account-menu-sec acc-sec">
                        <AccountMenu />
                    </div>
                    <span></span>
                    <AccountOverview />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

export default connect(mapStateToProps)(AccountPage);