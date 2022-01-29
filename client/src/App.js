import './App.css';
import {Router} from '@reach/router'
import AuthorsList from './components/AuthorsList';
import NewAuthor from './components/AuthorForm'
import UpdateAuthor from './components/UpdateAuthor'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <AuthorsList path="/"/>
          <NewAuthor path="/api/new"/>
          <UpdateAuthor path="/api/update/:id"/>
        </Router>
      </header>
    </div>
  );
}

export default App;
