import React from "react";
import '../App.css';

import Weather from "./info";
import { Manager, Reference, Popper } from 'react-popper';



export default class TopSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return ( <div className="top-container">
			<div className="title">Weather Widget</div>
				<Weather {...this.props} />
			<button className="btn btn-select-location">Select Location</button>

			
		</div>
		);
	}
}