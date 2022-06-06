import * as React from 'react'; 
import './style.css'; 
export default function App() { 
  const [count, setCount] = React.useState([]); 
  React.useEffect(() => { 
    fetch('https://jsonplaceholder.typicode.com/todos') 
      .then((response) => response.json()) 
      .then((json) => setCount(json)); 
  }); 
  return ( 
    <div> 
      <h1>Hello StackBlitz!</h1> 
      <table className="table table-dark table-hover"> 
        <thead> 
          <tr> 
            <td>userId</td> 
            <td>id</td> 
            <td>title</td> 
            <td>completed</td> 
          </tr> 
        </thead> 
        <tbody className="table table-danger table-hover"> 
          {count.map((x, i) => ( 
            <tr key={i}> 
              <td>{x.userId}</td> 
              <td>{x.id}</td> 
              <td>{x.title}</td> 
              <td>{x.completed}</td> 
            </tr> 
          ))} 
        </tbody> 
      </table> 
    </div> 
  ); 
}