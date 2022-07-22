import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createContext } from 'react';
export const UserVisible = createContext('true');
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserVisible.Provider value={'false'}>
      <App />
    </UserVisible.Provider>
  </StrictMode>
);
