import './App.css';
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import Button from '@material-ui/core/Button';

function App() {
  const [num, setnum] = useState(0);
  const incnum=()=>
  {
    
    setnum(num+1);
  }
  const decnum=()=>
  {
    setnum(num-1);
    if(num<=0)
    {
      alert("zero limit reached");
      setnum(0);
    }
  }
  return (
    <div className="App container" style={{
      marginTop:150
    }}>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <h1 style={{
            fontSize:150
          }}>{num}</h1>
      <Button variant="contained" color="primary" style={{
            marginRight:30
          }} onClick={incnum}>
        <AddIcon/>
      </Button>
      <Button variant="contained" color="secondary" onClick={decnum}>
      <MinimizeIcon/>
      </Button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
