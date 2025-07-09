import './App.css';
const list = [
  { "firstname": "Adam", "lastname": "Kowalski", "age": "33"},
  { "firstname": "Izabela", "lastname": "Makowska", "age": "25"},
  { "firstname": "Jan", "lastname": "Urbański", "age": "46"}
];

function App() {
  return (
    <div className="App">
      <table cellPadding="0" cellSpacing="0">
        <tr>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Wiek</th>
        </tr>
        <tr>
          <td>{list[0].firstname}</td>
          <td>{list[0].lastname}</td>
          <td>{list[0].age}</td>
        </tr>
        <tr>
          <td>{list[1].firstname}</td>
          <td>{list[1].lastname}</td>
          <td>{list[1].age}</td>
        </tr>
        <tr>
          <td>{list[2].firstname}</td>
          <td>{list[2].lastname}</td>
          <td>{list[2].age}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
