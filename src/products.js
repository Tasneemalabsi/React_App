import { useState } from 'react'
import CardComp from './card'
import { Form } from 'react-bootstrap'
import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react';

function Products (){
    let [items, setItems] = useState(JSON.parse(localStorage.getItem("items")));
    let {user, isAuthenticated}= useAuth0()

    function filterData(event){
        let filteredValue = event.target.value
        if(filteredValue !=="all"){
        let filteredData = JSON.parse(localStorage.getItem("items")).filter(item=>item.price.value <= filteredValue && item.price.value> filteredValue-10)
        setItems(filteredData)}
        else if(filteredValue === "all"){
            setItems(JSON.parse(localStorage.getItem("items")))
        }
    }



    
    let prices = [10,20,30,40,50,60,70,80,90,100]

    return(
        <>
    <Form.Select aria-label="Default select example" style={{marginTop:"2%", marginLeft:"20%", marginRight:"20%", width:"70%"}} onChange={filterData} >
    <option value="all">All</option>
    {prices.map(function(item,index){
      return(
        
        <option value={item}>{item-10}$ -{item}$</option>
      )
    }
    )
    }
    </Form.Select>
        <div className="cardContainer">
            {items[0] != null?items.map(item=>{
                return(
                    <CardComp image={item.images[0].baseUrl} title={item.name}  price={item.price.value} code={item.code} showButton={true} email={isAuthenticated?user.email:""}/>
                )
            }):<p>No results</p>}
            </div>
        </>
    )
}

export default Products