import React from 'react';

export default function Snip(props) {
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
              <div className="snip-body">
                <textarea name="snip_body" defaultValue={props.content}></textarea>
              </div>
              <div className="snip-footer">
                <div className="submit-controls">
                  <button>Done
                  </button>
                </div>
              </div>
            </li>
};