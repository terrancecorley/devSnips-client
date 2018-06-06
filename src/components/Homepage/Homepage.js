import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnips, postSnip, createSnip } from '../../actions/snips';
import Markdown from 'markdown-to-jsx';
import BlankSnip from './BlankSnip/BlankSnip';

export class Homepage extends Component {

  
  componentDidMount() {
    this.props.dispatch(fetchSnips());
  }

  insertBlankSnip() {
    const isCreatingSnip = this.props.creatingNew;
    if (isCreatingSnip) {
      return <BlankSnip />
    }
  }
  
  render() {
    return (
      <section>
        <button
          className="new-snip-btn"
          onClick={() => this.props.dispatch(createSnip())}>
          New Snip
        </button>
        <ul className="snips-list">
          {this.insertBlankSnip()}
        </ul>
      </section>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    snips: state.snipReducer.snips,
    creatingNew: state.snipReducer.creatingNew
  }
};

export default connect(mapStateToProps)(Homepage);

 // now that we have blank notes we need to...
    // capture the input data
    // make a post and save the data in the db
    // upon success display the notes
      // converted md into html