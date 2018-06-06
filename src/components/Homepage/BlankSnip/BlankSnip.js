import React from 'react';

export default function BlankSnip() {
  return (
      <li>
        <div class="snip-header">
          <div>
            <input type="text" name="snip_title"></input>
          </div>
          <div>
            <button>X</button>
          </div>
        </div>
        <div class="snip-body">
          <textarea name="snip_body"></textarea>
        </div>
        <div class="snip-footer">
          <div class="submit-controls">
            <button>Done</button>
          </div>
        </div>
      </li>
  );
};