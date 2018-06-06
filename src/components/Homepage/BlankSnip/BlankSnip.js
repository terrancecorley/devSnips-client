import React from 'react';

export default function BlankSnip(props) {
  return (
    <li>
      <div className="snip-header">
        <div>
          <input type="text" name="snip_title"></input>
        </div>
        <div>
          <button>X</button>
        </div>
      </div>
      <div className="snip-body">
        <textarea name="snip_body"></textarea>
      </div>
      <div className="snip-footer">
        <div className="submit-controls">
          <button onClick={() => props.createSnip()}>Done</button>
        </div>
      </div>
    </li>
  );
};