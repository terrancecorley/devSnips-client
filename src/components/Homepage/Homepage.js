import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSnips } from '../../actions/snips';

export class Homepage extends Component {

  /* Potential dynamic code for snips */
    /* Input ==> div > textarea (md)... output ==> div > div (html)*/
  
  componentDidMount() {
    this.props.dispatch(fetchSnips());
  }

  
  render() {
    return (
      <section>
        <button>Add Note</button>
        <ul className="js-snips-list">
          {/* snips need to be dynamically created */}
        </ul>
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