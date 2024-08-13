import {useState} from 'react';
import reactLogo from "./assets/reactlogo.png";
import { CORE_CONCEPTS } from "./data.js";
import "./App.css";
import {Navbar} from "./Components/Nav.jsx";
import TabButton from "./Components/TabButton.jsx";


//------------------------Hero Section------------------------//
const reacrDescription = ["Fundamental", "Crucial", "Core"];
function getRandomINdex(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Hero() {
  return (
    <header>
      <img src={reactLogo} />
      <h1>React Essentials</h1>
      <p>
        {reacrDescription[getRandomINdex(2)]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
}
//------------------Core Components Section----------------------//
function CoreComponents(props) {
  return (
    <li>
      <img src={props.image} alt="..." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

//------------------------Main App Section------------------------//
function App() {
  useState();
  let tabCOntent = 'Please Click a Button';
  function handleClick(selectedBtn){
    //selectedBtn => 'components' , 'jsx' , 'props' , 'state';
    tabCOntent=selectedBtn;
}
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreComponents {...CORE_CONCEPTS[0]} />
            <CoreComponents {...CORE_CONCEPTS[1]} />
            <CoreComponents {...CORE_CONCEPTS[2]} />
            <CoreComponents {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <h2 class="getStarted">Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
        </section>
      </main>
      {tabCOntent}
    </div>
  );
}

export default App;
