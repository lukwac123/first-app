import './App.css';

function isAdult(age) {
  if (age>=18) {
    return "TAK";
  } else {
    return "NIE";
  }
}

function formatting(text) {
  return text.toLowerCase().charAt().toUpperCase() + text.slice(1).toLowerCase()
};

const list = [
  { "firstname": "aDAM", "lastname": "kowalski", "age": "10"},
  { "firstname": "IZabela", "lastname": "MAKOWSKA", "age": "15"},
  { "firstname": "Jan", "lastname": "UrBański", "age": "46"}
];

function App() {
  return (
    <div className="App">
      <table cellPadding="0" cellSpacing="0">
        <tr>
          <th>Imię</th>
          <th>Nazwisko</th>
          <th>Wiek</th>
          <th>Pełnoletni?</th>
        </tr>
        <tr>
          <td>{formatting(list[0].firstname)}</td>
          <td>{formatting(list[0].lastname)}</td>
          <td>{list[0].age}</td>
          <td>{isAdult(list[0].age)}</td>
        </tr>
        <tr>
          <td>{formatting(list[1].firstname)}</td>
          <td>{formatting(list[1].lastname)}</td>
          <td>{list[1].age}</td>
          <td>{isAdult(list[1].age)}</td>
        </tr>
        <tr>
          <td>{formatting(list[2].firstname)}</td>
          <td>{formatting(list[2].lastname)}</td>
          <td>{list[2].age}</td>
          <td>{isAdult(list[2].age)}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
