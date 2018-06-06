import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnips, postSnip, createSnip } from '../../actions/snips';
import Markdown from 'markdown-to-jsx';
import BlankSnip from './BlankSnip/BlankSnip';

export function Snip(props) {
  return <li key={props.index}>
              <div class="snip-header">
                <div>
                  <h1>{props.title}</h1>
                </div>
                <div>
                  <button>X</button>
                </div>
              </div>
              <div class="snip-body">
                <textarea name="snip_body">{props.content}</textarea>
              </div>
              <div class="snip-footer">
                <div class="submit-controls">
                  <button>Done</button>
                </div>
              </div>
            </li>
}

export class Homepage extends Component {
  
  componentDidMount() {
    return this.props.dispatch(fetchSnips());
  }
  
  render() {
    let snips = this.props.snips.map((snip, index) => {
      return <Snip index={index} title={snip.title} content={snip.content}/>
    })

    return (
      <section>
        <button
          className="new-snip-btn"
          onClick={() => this.props.dispatch(createSnip())}>
          New Snip
        </button>
        <ul className="snips-list">
          {this.props.creatingNew ? <BlankSnip /> : ''}
          {snips}
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