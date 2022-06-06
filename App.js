import * as React from 'react';
import Cont from './components/Cont';
import './style.css';

export default function App() {
  return (
    <div>
      <nav class="navbar navbar-light bg-warning darken-100">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Quinzo!</span>
          <span class=" mb-0 ">Search & Filter</span>
        </div>
      </nav>
      <Cont />
    </div>
  );
}
