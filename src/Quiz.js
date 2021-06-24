import React, { useEffect, useState } from "react";
import { useIsMount } from "./useIsMount";
import ifvisible, { on } from "ifvisible.js"

import "./Quiz.css";
import Home from "./Home";

function Quiz() {
  const [selected, setselected] = useState(false)
  const [score, setscore] = useState(0)
  const handleSubmit=()=>{
    var cnt=0;
    setScreen("submitted");
    for(var i=0;i<10;i++){
      if(localStorage.getItem(i)==3){
        cnt++;
      }
    }
    setscore(cnt);
    localStorage.clear();
    setdisabled(false);
  }
  document.onkeydown = function(e) {
    if(e){
      alert("How dare you use keyboard")
    }
    if(e.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }
  
  
  document.addEventListener('contextmenu', event => event.preventDefault());

  const [optionSelected, setoptionSelected] = useState();
  const [Screen, setScreen] = useState("home")
  const isMount = useIsMount();
  async function getQuizData(topic) {
    let x = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${topic}`
    );

    setQuestions(await x.json());
    console.log(Questions);
  }
  const get_number = (name) => {
    if (name === "computer_button") return 18;
    if (name === "video_games_button") return 15;
    if (name === "natureandscience") return 17;
  };
  const handleClick = (e) => {
    console.log("Clicked" + e.target.id);

    setdisabled(true);
    settopic(get_number(e.target.id));
    setScreen("questions")
  };
  const [disabled1, setdisabled] = useState("");
  const [topic, settopic] = useState();
  const [Questions, setQuestions] = useState();
 const handleButtonClick=(key)=>{
  console.log(key)
  console.log()
  var x=document.getElementsByClassName(key);
  console.log(x);
  
  if(x){
  // x.style.backgroundColor="#74ef97";
  x[0].style.backgroundColor="#74ef97";
}
 }
  useEffect(() => {
    if (isMount) {
      console.log("First Render");
    } else {
      getQuizData(topic);
    }
  }, [topic]);

  return (
    <div>
      <div className='header__buttons'>
        <div className='questionsContainer'>
          {Screen==="questions" && Questions ? (
            <div>
              <h2>You have selected {topic} for quiz . All the best </h2>
              {Questions["results"].map((question, index) => {
                return (
                  <div className='question__card' postid={index}>
                    <div className='question'>{question.question}</div>
                    {question.incorrect_answers.map((incorrect, index1) => {
                      return (
                        <div className='options__holder' postid1='amazing'>
                          <div className='each__option' postId={index}>
                            <button
                              className={`question${index}option${index1}`}
                              style={{
                                backgroundColor: `${optionSelected}`,
                              }}
                              id={incorrect}
                              key1={`question${index}option${index1}`}
                              onClick={(e) => {
                                // setoptionSelected(...optionSelected, `${e.target.parentNode.parentNode.parentNode.getAttribute("postid")} `+incorrect );
                                setselected(true);
                               localStorage.setItem(e.target.parentNode.parentNode.parentNode.getAttribute(
                                "postid"
                              ),index)
                              console.log(`question${index}option${index1}`)
                              handleButtonClick(`question${index}option${index1}`)
                                
                                
                              }}>
                              {incorrect}
                              {/* {selected?<h1></h1>:<h2>Not Selected</h2>} */}
                             
                              
                            </button>
                          </div>
                        </div>
                      );
                    })}
                     <button
                              className= {`question${index}option3 options1`}
                              style={{
                                backgroundColor: `${optionSelected}`,
                              }}
                              
                              onClick={(e) => {
                                // setoptionSelected(...optionSelected, `${e.target.parentNode.parentNode.parentNode.getAttribute("postid")} `+incorrect );
                                console.log(e.target.parentNode.getAttribute(
                                  "postid"
                                ))
                               localStorage.setItem(e.target.parentNode.getAttribute(
                                "postid"
                              ),3)
                                
                              handleButtonClick(`question${index}option3`)
                              }}>
                             
                              
                             {question.correct_answer}
                              
                            </button>
                  </div>
                );
              })}
              
              <button className='button1' onClick={handleSubmit}>Submit</button>
            </div>
          ) : (
            <div>
              <Home handleClick={handleClick}/>
            </div>
          )}
        </div>
      </div>
      {Screen==="submitted"?<div>Submitted The test Your Score is {score}</div>:<h1></h1>}
    </div>
  );
}

export default Quiz;
