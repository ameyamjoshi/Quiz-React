import React from "react";
import "./Home.css"
function Home(props) {
  return (
    <div className="container__home">
         <h1 style={{textAlign:"center"}}>Select the topic to start quiz</h1>
         <div className="button__holder">
      <button
        // disabled={disabled1}
        id='computer_button'
        className='button1'
        style={{opacity:".8"}}
        onClick={props.handleClick}>
        Computer
      </button>
      <button
        // disabled={disabled1}
        id='natureandscience'
        className='button1'
        style={{opacity:".8"}}
        onClick={props.handleClick}>
        Nature & Science
      </button>
      <button
        // disabled={disabled1}
        id='video_games_button'
        className='button1'
        style={{opacity:".8"}}
        onClick={props.handleClick}>
        Video Games
      </button>
      <button
        // disabled={disabled1}
        id='sports'
        className='button1'
        style={{opacity:".8"}}
        onClick={props.handleClick}>
        Sports
      </button>
      {/* <button
        // disabled={disabled1}
        id='computer_button'
        className='button1'
        onClick={props.handleClick}>
        Computer
      </button>
      <button
        // disabled={disabled1}
        id='computer_button'
        className='button1'
        onClick={props.handleClick}>
        Computer
      </button>
      <button
        // disabled={disabled1}
        id='computer_button'
        className='button1'
        onClick={props.handleClick}>
        Computer
      </button> */}
      </div>
      <div className="rules">
      <ul>
        <li>
       <b>Do Not Use Keyboard .</b> If we find frequent use of keyboard test will be auto-submitted 
       </li>
       
       <li>
       <b>Be Sure about the answer and then mark .</b> Once you select an option , you won't be able to change your answer
       </li>
       <li>
       <b>Click on Submit Button to Generate Score . </b> Once you are done with the test , click submit button to generate your test score
       </li>
       <li>
       <b>Right Click Will be Disabled throughout the test . </b> 
       </li>
       
       </ul>
      </div>
      {props.button_content ==="Agree Terms to Continue" ||props.button_content ==="Click to agree terms " ?
      
      <button className="button1" style={{opacity:".7"}} onClick={props.handleAgreeClick}> {props.button_content} </button>
      :
      <button className="button1" style={{opacity:"1"}} onClick={props.handleAgreeClick}> {props.button_content} </button>
      }
      {props.button_content==="Terms Agreed " && props.topic!="0" ?
      <button className="button1" style={{opacity:"1"}} onClick={props.handlestart}> Start Test </button>
      :
      <p></p>}
      {/* <button className="button1" style={{opacity:"1"}} onClick={props.handleAgreeClick}> {props.button_content} </button> */}
    </div>
  );
}

export default Home;
