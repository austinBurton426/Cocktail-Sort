import React from 'react';
import UIFx from 'uifx';
import './App.css'
import mp3File from './images/soundEffect.mp3';

const beep = new UIFx( mp3File,{volume:1.0,throttleMs:100});

class App extends React.Component{

state={
  number:"",
  result:[]
}


    
    

submitHandler = (e) => {
e.preventDefault()
//split number into an array OF numbers
  const arr = (this.state.number).split("");
//cocktail sort below
  let is_Sorted = true;

  while (is_Sorted){
     for (let i = 0; i< arr.length - 1; i++){
             if (arr[i] > arr[i + 1])
              {
                 let temp = arr[i];
                  // temp => a => b => temp 
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
};


//binds target value to state 

changeHandler = ({target}) => {
this.setState({[target.name]: target.value});
}



render(){
  return (
    <div >
      <div 
      className="answer1">
DAS COCKTAIL SORTIE BOI
      </div>
      
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
      className="button"
      onClick={()=>{
        console.log("hi")
        return beep.play()}}
      type="submit"
      >SHAke iT lIkE a PoLaroid PicTuRe!!!</button>
      </form>
      <div 
      
      className="answer">
Before Some Drinks:{(this.state.number)}
      </div>
      <div 
      className="answer">
After Some Drinks:{(this.state.result).join()}
      </div>
      <div
      className="wordyBoi"
      >
      <h1>Example : Let us consider an example array (5 1 4 2 8 0 2)</h1>

<h2>First Forward Pass:</h2>
<p>([5 1] 4 2 8 0 2) ? ([1 5] 4 2 8 0 2), Swap since 5 > 1</p>
<p>(1 [5 4] 2 8 0 2) ? (1 [4 5] 2 8 0 2), Swap since 5 > 4</p>
<p>(1 4 [5 2] 8 0 2) ? (1 4 [2 5] 8 0 2), Swap since 5 > 2</p>
<p>(1 4 2 [5 8] 0 2) ? (1 4 2 [5 8] 0 2)</p>
<p>(1 4 2 5 [8 0] 2) ? (1 4 2 5 [0 8] 2), Swap since 8 > 0</p>
<p>(1 4 2 5 0 [8 2]) ? (1 4 2 5 0 [2 8]), Swap since 8 > 2</p>
<br/>
<h1>After first forward pass, greatest element of the array will be present at the last index of array.</h1>
<h2>First Backward Pass:
</h2>
<p>(1 4 2 5 [0 2] 8) ? (1 4 2 5 [0 2] 8)</p>
<p>(1 4 2 [5 0] 2 8) ? (1 4 2 [0 5] 2 8), Swap since 5 > 0</p>
<p>(1 4 [2 0] 5 2 8) ? (1 4 [0 2] 5 2 8), Swap since 2 > 0</p>
<p>(1 [4 0] 2 5 2 8) ? (1 [0 4] 2 5 2 8), Swap since 4 > 0</p>
<p>([1 0] 4 2 5 2 8) ? ([0 1] 4 2 5 2 8), Swap since 1 > 0</p>
<h1>After first backward pass, smallest element of the array will be present at the first index of the array.
</h1>

      </div>
    </div>
  );
}}

export default App;
