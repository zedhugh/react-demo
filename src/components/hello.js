import React from 'react';
import styleA from './a.css';
import styleB from './b.css';

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
          const table = document.createElement('table');
          table.className = styleB.italic;
          Object.keys(d).forEach((k) => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            td1.textContent = k;
            td2.textContent = d[k];
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
          });
          node.appendChild(table);
        });
    }, 1000);
  }

  render() {
    return (
      <div ref={this.myRef}>
        <span className={`${styleB.bold} ${styleA.italic}`}>Good</span>
      </div>
    );
  }
}

export default Hello;
