import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnips, postSnip } from '../../actions/snips';
import Markdown from 'markdown-to-jsx';

export class Homepage extends Component {

  
  componentDidMount() {
    this.props.dispatch(fetchSnips());
  }

  generateBlankSnipHTML() {
    return `
      <li>
        <div class="snip-header">
          <div>
            <input type="text" name="snip_title"></input>
          </div>
          <div>
            <button>X</button>
          </div>
        </div>
        <div class="snip-body">
          <textarea name="snip_body"></textarea>
        </div>
        <div class="snip-footer">
          <div class="submit-controls">
            <button>Done</button>
          </div>
        </div>
      </li>
    `
  }

  insertSnipHTML() {
    const btn = document.querySelector('.new-snip-btn');
    const blankSnip = this.generateBlankSnipHTML();
    const snipsList = document.querySelector('.snips-list');
    snipsList.insertAdjacentHTML('afterbegin', blankSnip)
  }

  
  render() {
    // const md = '# testing';
    return (
      <section>
        <button
          className="new-snip-btn"
          onClick={() => this.insertSnipHTML()}>
          New Snip
        </button>
        <ul className="snips-list">
          {/* snips need to be dynamically created */}
        </ul>

        {/* testing md */}
        {/* <Markdown options={{ forceBlock: true }}>
          {md}
        </Markdown> */}
      </section>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    snips: state.snipReducer.snips
  }
};

export default connect(mapStateToProps)(Homepage);