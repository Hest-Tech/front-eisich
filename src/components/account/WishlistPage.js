import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../NavBar';


class WishlistPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="profile-container">
                <NavBar/>
                <h1>Wishlist Page</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authentication: state.authentication,
    resMessages: state.resMessages
});

export default connect(mapStateToProps)(WishlistPage);