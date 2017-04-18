import React from 'react';
import ReactDOM from 'react-dom';
import AutoTooltip from './components/AutoTooltip';
import tooltips from './components/test-tooltips';
import './index.css';

ReactDOM.render(
  <div
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <div style={{ width: '100%', maxWidth: 600 }}>
      <AutoTooltip tooltips={tooltips}>
        Hello World Damn this is working ?? Holy Damn God Hello hey! Alright, so we're talking about some werid stuff here, because in the end, nothing really matters, even though the lord is around here. If the need of superpowers becomes more important than resurrection, then we will and should be happy about that.
      </AutoTooltip>
    </div>
  </div>,
  document.getElementById('root'),
);
