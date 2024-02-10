"use client"
import {useState, useEffect} from "react"

export default function Home() {
  const [count, setCount] = useState (0)
  const [count2, setCount2] = useState (0)

  useEffect(()=>{
    console.log("useEffect function fire")
  },[])

  // useEffect(()=>{
  //   console.log("2nd useEffect")
  // },[count])

  useEffect(()=>{
    console.log("3rd useEffect")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  },[count,count2])
  
  
  return (
      <div>
        <h2>useEffect</h2>
        <h3>React Hook</h3>
        <button onClick={() =>setCount(count +1) } >Counter1 Increament = {count}</button>
        <br/>
        <button onClick={() =>setCount2(count2 +1) } >Counter2 Increament = {count2}</button>
      </div>
 
   )
}