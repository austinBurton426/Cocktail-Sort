import React from 'react';
import './App.css'

class App extends React.Component{

state={
  number:"",
  result:[]
}

submitHandler = (e) => {
e.preventDefault()
//split number into an array OF numbers

  const arr = (this.state.number).split("");


//the cocktail sort
// 
// 
// 
  let is_Sorted = true;

  while (is_Sorted){
     for (let i = 0; i< arr.length - 1; i++){
             if (arr[i] > arr[i + 1])
              {
                 let temp = arr[i];
                 arr[i] = arr[i + 1];
                 arr[i+1] = temp;
                 is_Sorted = true;
              }
     }
  
     if (!is_Sorted)
         break;
  
     is_Sorted = false;
  
     for (let j = arr.length - 1; j > 0; j--){
             if (arr[j-1] > arr[j])
              {
                 let temp = arr[j];
                 arr[j] = arr[j - 1];
                 arr[j - 1] = temp;
                 is_Sorted = true;
              }
     }
  }
  // console.log("Sorted array:")
  this.setState({result:arr})
  console.log(arr);
}

//binds target value to state 

changeHandler = ({target}) => {
this.setState({[target.name]: target.value});
}

render(){
  return (
    <div >
      <form 
      onSubmit={this.submitHandler}
      className="form">
      <input
      placeholder="NUMBERS!!"
      type="text"
      className="number"
      value={this.state.number}
      name="number"
      onChange={this.changeHandler}
      required
      />
      <button
      type="submit"
      >SHAke iT lIkE a PoLaroid PicTuRe!!!</button>
      </form>
      <div 
      className="answer">
DAS COCKTAIL SORTIE BOI
      </div>
      <div 
      className="answer">
{(this.state.number)}
      </div>
      <div 
      className="answer">
{(this.state.result).join()}
      </div>
    </div>
  );
}}

export default App;
