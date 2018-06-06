import React from 'react';

export default function Snip(props) {
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
};