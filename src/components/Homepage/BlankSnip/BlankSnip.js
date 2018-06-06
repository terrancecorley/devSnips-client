import React from 'react';

export default function BlankSnip(props) {
  let titleInput;
  let contentInput;

  return (
    <li>
      <div className="snip-header">
        <div>
          <input type="text" name="snip_title" ref={(input) => titleInput = input}></input>
        </div>
        <div>
          <button>X</button>
        </div>
      </div>
      <div className="snip-body">
        <textarea name="snip_body" ref={(input) => contentInput = input}></textarea>
      </div>
      <div className="snip-footer">
        <div className="submit-controls">
          <button onClick={() => {
            props.createSnip(titleInput.value, contentInput.value)}
          }>Done
          </button>
        </div>
      </div>
    </li>
  );
};