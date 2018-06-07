import React from 'react';
import Markdown from 'markdown-to-jsx';

export default function Snip(props) {
  const snipBody = props.content;

  return <li id={props.id} key={props.index}>
              <div className="snip-header">
                <div>
                  <h1>{props.title}</h1>
                </div>
                <div>
                  <button onClick={() => {
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
                <div className="submit-controls">
                  <button>Done
                  </button>
                </div>
              </div>
            </li>
};