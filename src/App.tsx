import React, { useState } from 'react';
import { useToggle } from 'react-use';
import './App.css';
import { ButtonDemo as PureComponentDemo } from './components/PureComponentDemo/index';
import { InputDemo as ComponentWithStateDemo } from './components/ComponentWithStateDemo/index';

function App() {
  const [isPrimary = true, toggleAddToCartButtonStyle] = useToggle(true);

  const [value, setValue] = useState("My Initial Value")
  return (
    <div className="App">

      {/* demo 1: pure component, no internal state*/}
      <PureComponentDemo
        buttonType={isPrimary ? 'primary' : 'secondary'}
        onClick={toggleAddToCartButtonStyle}
      // style={{backgroundColor: 'black'}} // this is not recommended        
      >
        Toggle Color
     </PureComponentDemo>

      {/* demo 2: with prop and internal state */}
      <label> {`interconnected components with internal state: ${value}`}</label>
      <div style={{marginTop: '10px', marginBottom: '50px'}}>
        <ComponentWithStateDemo initialValue={value} onPureComponentDemoValueChange={(value) => setValue(value)}/>
        <ComponentWithStateDemo initialValue={value} onPureComponentDemoValueChange={(value) => setValue(value)}/>
      </div>

    </div>
  );
}

export default App;
