import logo from './logo.svg';
import './App.css';
import PostList from './components/AxiosApi/PostList';
import POSTUser from './components/AxiosApi/POSTUser';
function App() {
  return (
    <div className="App">
      <PostList />
      <POSTUser />


    </div>
  );
}

export default App;
