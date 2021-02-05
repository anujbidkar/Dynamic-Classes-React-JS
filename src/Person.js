import './Anuj.css';


function Person(props)
{
    return(
        <div>

             <h5 className="wisdom"> Your Name is : {props.name} </h5>

             <button onClick={props.clickable}>
                 Click Here To change Name
             </button>
        </div>
    );

}

export default Person;