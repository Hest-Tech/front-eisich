import React, { Fragment } from 'react';


export default class Scroll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            intervalId: 0,
            delayInMs: 16.66,
            scrollStepInPx: 50
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.state.scrollStepInPx);
    }

    scrollToTop() {
        let intervalId = setInterval(this.scrollStep.bind(this), this.state.delayInMs);

        this.setState({ intervalId });
    }

    render() {
        return (
			<div
				className="mobile-scroll"
				onClick={() => this.scrollToTop()}
                // style={{marginTop:'9rem'}}
			>
				<i className="fas fa-chevron-up"></i><br/>
				<small>BACK TO TOP</small>
			</div>
        );
    }
}