import React from 'react';
import HeartButton from './components/HeartButton';
import { ReactionProvider } from './ReactionContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactionProvider>
        <HeartButton />
      </ReactionProvider>
    </div>
  );
}

export default App;
