import * as React from 'react';
import { Component } from 'react';

import './app.css';

export class App extends Component {
  counter: number;
  // myCallback = (dataFromChild) => {
  //   debugger
  //     console.log("hiii" +dataFromChild.details)
  // }
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      name: 'React',
      newDetails : 0
    };
    this.changeDetail = this.changeDetail.bind(this);
  }

  changeDetail(data) {
    console.log(data);
    this.setState({newDetails : ++this.counter})
  }
  render() {
    const title = 'reactapp';
    
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <happynrwl-greeting title={title} callbackFromParent={this.changeDetail}/>
          <img
            width="300"
            src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
          />
        </div>
        <p>
          This is a React app built with <a href="https://nx.dev">Nx</a>.
        </p>
        <p>
          🔎 **Nx is a set of Angular CLI power-ups for modern development.**
        </p>
        <h2>Quick Start & Documentation</h2>
        <ul>
          <li>
            <a href="https://nx.dev/getting-started/what-is-nx">
              30-minute video showing all Nx features
            </a>
          </li>
          <li>
            <a href="https://nx.dev/tutorial/01-create-application">
              Interactive tutorial
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
