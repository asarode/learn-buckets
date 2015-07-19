import React from 'react';

class LinkItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let {
			title,
			url,
			type
		} = this.props;

		return (
			<div>
				<span>{type} <a href={url}>{title}</a></span>
			</div>
		)
	}
}

LinkItem.PropTypes = {
	className: React.PropTypes.object,
	title: React.PropTypes.string,
	url: React.PropTypes.string,
	type: React.PropTypes.string
}

LinkItem.defaultProps = {
	className: {},
	title: "",
	url: "",
	type: ""
}

export default LinkItem;