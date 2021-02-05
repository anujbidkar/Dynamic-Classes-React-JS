import React,{useState} from 'react';
import './Anuj.css';


function App()
{

  const [myCondition, changeMyCondtion] = useState(false);

  let myDesin = '';


  const style = {

    backgroundColor : 'red',
    color:'white',
    margin:'50px',
  }


  

  

  const showMyDivFunc = () =>
  {
    changeMyCondtion(true);
  }

  const hideMyDivFunc = () =>
  {
    changeMyCondtion(false);

  }

  const ToggleMyDivFunc =() =>
  {
    let mycondtion2 = myCondition;
    changeMyCondtion(!mycondtion2);
  }

  if(myCondition)
  {
    myDesin = (
      <div className="main_div">
        <h1>This is Div</h1>
      </div>
    );

    style.backgroundColor="green";

  }
  else
  {
    style.backgroundColor="red";
  }



  return(
    <div>
      

      <button  style={style} onClick={ToggleMyDivFunc}>Toggle Button</button>


      {myDesin}

    </div>
  );
}

export default App;