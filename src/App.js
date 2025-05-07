import logo from './logo.svg';
import './App.css';
import LinkCp from './components/LinkCp';
import ListCP from './components/ListCp';

function App() {
  const menuArr = ['intro', 'skill', 'portfolio', 'contact'];

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className = 'logo'>
          {/* <a href='/'>LOGO</a> */}
          <LinkCp hrefpr='/' textpr='LOGO' />
        </div>

        <nav>
          <ul>
            {menuArr.map((v)=>(
              <ListCP hrefPr={`/${v}`} textPr={v} />
            ))} 
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
