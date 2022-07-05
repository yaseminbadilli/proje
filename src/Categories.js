import { useEffect, useState } from "react";
import {  ListGroup, ListGroupItem } from "reactstrap";

export default function Categories() {
  const[count, setCount]= useState(0);
  const [calculation, setCalculation] = useState(0);


  const [categories, setCategories] = useState(
    [
      
        {id:"1", categoryName: "kovalar"},
        {id:"2", categoryName: "aaaa"},
        {id:"3", categoryName: "bbb"}

      
    ]
  )

  

  function veriGetir() {
    fetch("http://localhost:3000/Categories")
      .then(responses => responses.json())
      .then(data => setCategories(data))
  }

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); 
  // useEffect(() => {
   
  //   setTimeout(() => {
  //     setCount((count)=>count+1)
      
  //   }, 1000);
  // }, [])
  

  return (
    <>

  
    <h1>Count: {count}</h1>
    <button onClick={() => setCount((c) => c + 1)}>+</button>
    <h1>Calculation: {calculation}</h1>
    
      <ListGroup>
        {
          categories.map((cat) => (
            <ListGroupItem key={cat.id}>{cat.categoryName}</ListGroupItem>
          ))
        }
        <button type="button" onClick={veriGetir}>Veritabanı</button>
      </ListGroup>
     
      
    </>

  )

}