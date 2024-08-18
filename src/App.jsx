import { useState } from "react";
import reactLogo from "./assets/reactlogo.png";
import { CORE_CONCEPTS } from "./data.js";
import "./App.css";
import { Navbar } from "./Components/Nav.jsx";
import TabButton from "./Components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

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
  const [selectedTopic, setSelectedTopic] = useState("");
  function handleClick(selectedBtn) {
    //selectedBtn => 'components' , 'jsx' , 'props' , 'state';
    setSelectedTopic(selectedBtn);
    console.log(selectedTopic);
  }
  let tabContent = <p>Please Select a Topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (<CoreComponents key={item.title} {...item} />))}
          </ul>
        </section>
        <h2 class="getStarted">Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
