import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnips, postSnip, createSnip, deleteSnip } from '../../actions/snips';
import Markdown from 'markdown-to-jsx';
import BlankSnip from './BlankSnip/BlankSnip';
import Snip from './Snip/Snip';

export class Homepage extends Component {
  
  componentDidMount() {
    return this.props.dispatch(fetchSnips());
  }

  createSnip(title, content) {
    let newSnip = {
      title,
      content
    };
    return this.props.dispatch(postSnip(newSnip));
  }

  deleteSnip(id) {
    console.log('this rannnnnnnnnnnnnn')
    return this.props.dispatch(deleteSnip(id));
  }
  
  render() {
    let snips = this.props.snips.map((snip, index) => {
      return <Snip id={snip.id} key={index} title={snip.title} content={snip.content} deleteSnip={(id) => this.deleteSnip(id)}/>
    })

    return (
      <section>
        <button
          className="new-snip-btn"
          onClick={() => this.props.dispatch(createSnip())}>
          New Snip
        </button>
        <ul className="snips-list">
          {this.props.creatingNew ? <BlankSnip createSnip={(title, content) => this.createSnip(title, content)}/> : ''}
          {snips}
        </ul>
      </section>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    snips: state.snipReducer.snips,
    creatingNew: state.snipReducer.creatingNew,
    deleting: state.snipReducer.deleting
  }
};

export default connect(mapStateToProps)(Homepage);

