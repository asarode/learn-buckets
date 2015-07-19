import React from 'react';

class LinkInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let { 
			index,
			onTitleChange,
			onUrlChange,
			onTypeChange,
			onRemoveClick
		} = this.props

		return (
			<div>
					<input type="text" placeholder="Link title" onChange={() => onTitleChange(index)} />
					<input type="text" placeholder="http://link-to-resource" onChange={() => onUrlChange(index)}/>
					<select onChange={() => onTypeChange(index)}>
						<option value="article">Article</option>
						<option value="video">Video</option>
  					<option value="source">Source Code</option>
					</select>
					<button className="lb-button-minor" type="button" onClick={() => onRemoveClick(index)}>✕ Remove</button>
			</div>
		);
	}
}

LinkInput.PropTypes = {
  className: React.PropTypes.object,
  index: React.PropTypes.number,
  onTitleChange: React.PropTypes.func,
  onUrlChange: React.PropTypes.func,
  onTypeChange: React.PropTypes.func,
  onRemoveClick: React.PropTypes.func
};

LinkInput.defaultProps = {
  className: {},
  index: 0,
  onClickDelete: () => {},
  onTitleChange: () => {},
  onUrlChange: () => {},
  onTypeChange: () => {},
  onRemoveClick: () => {}
};

export default LinkInput;