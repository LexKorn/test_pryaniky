import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AuthStore from './store/AuthStore';
import NotesStore from './store/NotesStore'

import './style/style.sass';

type RootStateContextValue = {
  auth: AuthStore;
  notes: NotesStore;
};

export const Context = createContext<RootStateContextValue>({} as RootStateContextValue);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
    auth: new AuthStore(),
    notes: new NotesStore()
  }}>
    <App />
  </Context.Provider>
);