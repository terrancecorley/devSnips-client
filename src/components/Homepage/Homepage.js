import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnips, postSnip, createSnip } from '../../actions/snips';
import Markdown from 'markdown-to-jsx';
import BlankSnip from './BlankSnip/BlankSnip';

export class Homepage extends Component {
  
  componentDidMount() {
    // let snips = null;

    return this.props.dispatch(fetchSnips())
    // .then(() => snips = this.props.snips)
    // .then((snips) => {

    // });
  }

  insertSnips() {
    let snipsInState = this.props.snips;
    console.log(snipsInState);

    let snips = snipsInState.map((snip, index) => {
      return <li key={index}>
        <div class="snip-header">
          <div>
            <h1>{snip.title}</h1>
          </div>
          <div>
            <button>X</button>
          </div>
        </div>
        <div class="snip-body">
          <textarea name="snip_body">{snip.content}</textarea>
        </div>
        <div class="snip-footer">
          <div class="submit-controls">
            <button>Done</button>
          </div>
        </div>
      </li>
    })
    console.log(snips);

    return [snips];
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
          {this.insertSnips()}
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


// PRIORITIES
// view, add snips
// posting, viewing new snips