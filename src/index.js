import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';

import 'roboto-npm-webfont';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <div>
    {routes}
  </div>,
  document.getElementById('root')
);
