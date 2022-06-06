import * as React from 'react';

const Cont = (props) => {
  const [user, setUser] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  //console.log(props);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  const keys = ['name', 'email'];

  const renderList = user
    .filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchTerm))
    )
    .map((x, i) => (
      <tr key={x.i}>
        <td>{x.id}</td>
        <td>{x.name}</td>
        <td>{x.email}</td>
      </tr>
    ));

  return (
    <>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody className="table table-danger table-hover">{renderList}</tbody>
      </table>
    </>
  );
};

export default Cont;
