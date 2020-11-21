import logo from './logo.svg';
import './App.css';
import Header from './Component/Home/Header/Header';
import Work from './Component/Home/Work/Work';
import Project from './Component/Home/Project/Project';
import Achievement from './Component/Home/Achievement/Achievement';

function App() {
  return (
    <div>
      <Header></Header>
      <Work></Work>
      <Project></Project>
      <Achievement></Achievement>
    </div>
  );
}

export default App;
