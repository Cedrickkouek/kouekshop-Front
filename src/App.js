import './App.css';
import Nav from './customer/components/navigation/nav';
import HomePage from './customer/pages/homepages/HomePage';


function App() {
  return (
    <div className="">
      <Nav />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
