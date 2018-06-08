import React from 'react';
import './BlankSnip.css';

export default function BlankSnip(props) {
  let titleInput;
  let contentInput;

  return (
    <li className="new-snip">
      <div className="new-snip-header">
        <div className="new-snip-title-container">
          <input className="new-snip-title" placeholder="Snip title..." type="text" name="snip_title" ref={(input) => titleInput = input}>
          </input>
        </div>
        <div className="new-delete-snip-btn-container">
          <button className="new-delete-snip-btn">X</button>
        </div>
      </div>
      <div className="new-snip-body-container">
        <textarea className="new-snip-body" placeholder="Snip content goes here..." name="snip_body" ref={(input) => contentInput = input}></textarea>
      </div>
      <div className="new-snip-footer">
        <div className="new-snip-submit-controls">
          <button className="new-snip-submit-btn" onClick={() => {
            props.createSnip(titleInput.value, contentInput.value)}
          }>Done
          </button>
        </div>
      </div>
    </li>
  );
};