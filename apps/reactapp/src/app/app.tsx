import * as React from 'react';
import { Component } from 'react';

import './app.css';

export class App extends Component {
  render() {
    const title = 'reactapp';
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <nxdemo-greeting title={title} />
        </div>
        <div style={{ marginTop: '150px', textAlign:'center' }}>
        <img alt="Nx_Image" width="300" src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" />
        <h2>This is an React app built with <a href="https://nx.dev">Nx</a>.</h2>
        <h2>🔎 **Nx is a set of Angular CLI power-ups for modern development.**</h2>
      </div>
      </div >
    );
  }
}
