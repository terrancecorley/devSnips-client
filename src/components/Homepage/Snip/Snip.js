import React from 'react';
import Markdown from 'markdown-to-jsx';
import './Snip.css';

export default function Snip(props) {
  const snipBody = props.content;

  return <li className="snip" id={props.id} key={props.index}>
              <div className="snip-header">
                <div className="snip-title-container">
                  <h1 className="snip-title">{props.title}</h1>
                </div>
                <div className="delete-snip-btn-container">
                  <button className="delete-snip-btn" onClick={() => {
                    props.deleteSnip(props.id)}
                  }>X
                  </button>
                </div>
              </div>
              <div className="snip-body-container">
                <Markdown className="snip-body">
                  {snipBody}
                </Markdown>
              </div>
              <div className="snip-footer">
                <div className="snip-submit-controls">
                  <button className="snip-submit-btn">Edit
                  </button>
                </div>
              </div>
            </li>
};