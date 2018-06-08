import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnips, postSnip, createSnip, deleteSnip } from '../../actions/snips';
import BlankSnip from './BlankSnip/BlankSnip';
import Snip from './Snip/Snip';
import './Homepage.css';

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
    return this.props.dispatch(deleteSnip(id));
  }
  
  render() {
    let snips = this.props.snips.map((snip, index) => {
      return <Snip id={snip.id} key={index} title={snip.title} content={snip.content} deleteSnip={(id) => this.deleteSnip(id)}/>
    })

    return (
      <section className="snip-section">
        <div className="new-snip-btn-container">
          <button
            className="new-snip-btn"
            onClick={() => this.props.dispatch(createSnip())}>
            &#43; New Snip
          </button>
        </div>
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

