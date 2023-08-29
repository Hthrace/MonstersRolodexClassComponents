import "./App.css";
import { Component } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

//let uuid = self.crypto.randomUUID();

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    /*  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=> res.json())
    .then((users)=> this.setState((curr)=>{ return {...curr, monsters:[...users]}})) */

    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        this.setState((curr) => {
          return { ...curr, monsters: [...users] };
        });
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };
    getUsers();
  }

  onSearch = (e) => {
    this.setState((curr) => {
      return { ...curr, [e.target.name]: e.target.value.toLowerCase() };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearch } = this;

    const monstersFiltered = monsters.filter((m) =>
      m.name.toLowerCase().includes(searchField)
    );

    return (
      <>
      <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearch} placeHolder={"Search Monsters"} className={"search-box"} />
        <CardList monstersFiltered={monstersFiltered} />
      </>
    );
  }
}

export default App;
