import React from 'react';
import LinkItem from './comp-linkItem';

class BucketCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		let {
			title,
			description,
			links,
			stargazers
		} = this.props

		return (
			<div>
				<h3>{title}</h3>
				<p>{description}</p>
				{this.Links}
			</div>
		);
	}

	get Links() {
		let linkItems = this.props.links.map((link, index) => {
			return (
				<LinkItem
					key={index}
					title={link.title}
					url={link.url}
					type={link.type} />
			);
		});

		return linkItems;
	}
}

BucketCard.PropTypes = {
	className: React.PropTypes.object,
	title: React.PropTypes.string,
	description: React.PropTypes.string,
	links: React.PropTypes.object,
	stargazers: React.PropTypes.array
}

BucketCard.defaultProps = {
	className: {},
	title: "",
	description: "",
	links: {},
	stargazers: []
}

export default BucketCard;