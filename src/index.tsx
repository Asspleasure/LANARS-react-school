import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Storage from 'core/services/back-end/Storage';
import { firstInit } from 'core/services/fistInit';
import { BrowserRouter } from 'react-router-dom';
import store from './shared/store';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from 'styles/themes/generalTheme';

(async () => {
  await Storage.createObjectStore(['albums', 'photos']);
  firstInit();
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <App />
            </CssBaseline>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
})();
