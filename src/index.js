import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      const node = this.myRef.current;
      fetch("http://zedhugh.me/config")
        .then(r => r.text())
        .then((d) => {
          node.textContent = d;
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

ReactDOM.render(
  <Hello />,
  document.getElementById("app")
);
