import React,{useState} from 'react';

function TextForm() {
const[text,setText] = useState("");
const[diplayText, setDisplayText] = useState("");
function handleChange(event){
    const value = event.target.value;
    setText(value);
    setDisplayText(value);
}

function upperCase(){
    const upper = text.toUpperCase();
    setDisplayText(upper);
}
function lowerCase(){

}
  return (

    <div class="form-floating">
  <textarea class="form-control" id="floatingTextarea2" style={{height: "300px"}} value={text} onChange={handleChange}></textarea>
  <label for="floatingTextarea2">Enter Text Here...</label>
  <button type="button" class="btn btn-outline-primary mt-4 ms-2" onClick={upperCase}>UPPERCASE</button>
  <button type="button" class="btn btn-outline-success mt-4 ms-2" onClick={lowerCase}>lowercase</button>
  <button type="button" class="btn btn-outline-danger mt-4 ms-2">Primary</button>

</div>

  )
}

export default TextForm