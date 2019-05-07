import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      const node = this.myRef.current;
      fetch("http://zedhugh.me/data.json")
        .then(r => r.json())
        .then((d) => {
          const ul = document.createElement('ul');
          Object.keys(d).forEach((k) => {
            const li = document.createElement('li');
            li.textContent = `${k}: ${d[k]}`;
            ul.appendChild(li);
          });
          node.appendChild(ul);
        });
    }, 1000);
  }

  render() {
    return (
      <div ref={this.myRef}>
        Good
      </div>
    );
  }
}

export default hot(module)(Hello);
