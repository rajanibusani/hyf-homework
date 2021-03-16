import UserHandler from "./components/UserHandler";
import './App.css';
import { UserProvider } from "./components/UserContext";
import UserInput from "./components/UserInput";
import HYFRepos from "./components/HYFRepos";

function App() {
  return (
    <div className="container">
      <UserProvider>
        <div className="user-column">
          <h2>GitHub User Search</h2>
          <UserInput />
          <UserHandler />
        </div>
        <div className="repos-column">
          <HYFRepos />
        </div>
      </UserProvider>
    </div>
  );
}

export default App;
