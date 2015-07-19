import React from 'react';
import LinkInput from './comp-linkInput';
import BucketActions from '../../actions/actions-buckets';
import { Navigation,  } from 'react-router';

class BucketCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	title: '',
    	description: '',
    	links: [{
    		title: '',
    		url: '',
    		type: ''
    	}]
    };
  }

  render() {
    return (
        <div className="row">
          <div className="col-xs-12">
            <button className="lb-button-minor" onClick={() => this.context.router.transitionTo('/buckets')}>← Back</button>
          </div>
          <form className="col-xs-12 lb-form">
            <input type="text" placehoder="Title" onChange={() => this.handleTitleChange()}/>
            <input type="text" placeholder="Description" onChange={() => this.handleDescriptionChange()}/>
            {this.LinkInputs()}
            <button className="lb-button-minor" onClick={() => this.addLinkSpot()}>+ New link</button>
            <button type="submit" onClick={() => this.handleSubmit()}>Create Bucket</button>
          </form>
        </div>
    );
  }

  addLinkSpot() {
  	this.state.links.push({
			title: '',
			url: '',
			type: ''
		});
  	this.setState({
  		links: this.state.links
  	});
    console.log("Added: ", this.state.links);
  }

  removeLinkSpot(e) {
    console.log(e.target);
  }

  LinkInputs() {
  	let linkInputs = this.state.links.map((link, index) => {
  		return (
  			<LinkInput
          key={index}
          index={index}
          onTitleChange={() => this.handleLinkTitleChange(index)}
          onUrlChange={() => this.handleLinkUrlChange(index)}
          onTypeChange={() => this.handleTypeChange(index)}
          onRemoveClick={() => this.handleLinkRemove(index)} />
  		);
  	});

  	return linkInputs;
  }

  handleTitleChange() {
    this.state.title = event.target.value
    this.setState({
      title: this.state.title
    });
  }

  handleDescriptionChange() {
    this.state.description = event.target.value
    this.setState({
      description: this.state.description
    });
  }

  handleLinkTitleChange(index) {
    this.state.links[index].title = event.target.value
    this.setState({
      links: this.state.links
    });
  }

  handleLinkUrlChange(index) {
    this.state.links[index].url = event.target.value
    this.setState({
      links: this.state.links
    });
  }

  handleTypeChange(index) {
    this.state.links[index].type = event.target.value
    this.setState({
      links: this.state.links
    });
  }

  handleLinkRemove(index) {
    this.state.links.splice(index, 1);
    this.setState({
      links: this.state.links
    });
  }

  handleSubmit() {
    BucketActions.addBucket(this.state);
    this.context.router.transitionTo('/buckets');
  }
}

BucketCreation.PropTypes = {
  className: React.PropTypes.object
};

BucketCreation.defaultProps = {
  className: {}
};

BucketCreation.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default BucketCreation;
