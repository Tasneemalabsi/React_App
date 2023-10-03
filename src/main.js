import CardComp from './card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './main.css';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Main (){
    let [items, setItems] = useState(JSON.parse(localStorage.getItem("items")));
    let [products, setProducts] = useState([])
    let {user, isAuthenticated} = useAuth0()

//     async function getClothesData (){
//       const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN';
//   const options = {
// 	method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '0f2abd4395msh6ce1c28ccac1aacp178ddbjsn9cd63c10ba80',
//       'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
// 	}
// };

//   const response = await fetch(url, options);
//   const result = await response.json();
//   console.log(response, result)
// 	// setItems(result.results)
//     localStorage.setItem("items",JSON.stringify(result.results))
// }

    let handleSubmit = async (event) => {
        event.preventDefault()
        let searchedItem = event.target.search.value;
        let filteredData = JSON.parse(localStorage.getItem("items")).filter(function(item){return item.name.toLowerCase().includes(searchedItem.toLowerCase())})

        setItems(filteredData)
    }

    // async function getData(){

    //     const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    //     const options = {
    //       method: 'GET'
    //     };
        
    //     try {
    //       const response = await fetch(url, options);
    //       const result = await response.json();
    //       setProducts(result.meals)
    //     } catch (error) {
    //       console.error(error);
    //     }
    
      
    // }

    // useEffect(()=>{getData()},[])





    return(
        <>
          <Form className="d-flex" onSubmit={handleSubmit} style={{marginTop:"3%", marginLeft:"20%", marginRight:"20%"}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
            />
            <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        <div className="cardContainer">
        {1?console.log(items):console.log("hello")}
        {items && items.length !== 0?items.map(function(item){
            return(
                <CardComp image={item.images[0].baseUrl} title={item.name}  price={item.price.value} link={item.link} showButton={true} email={isAuthenticated?user.email:""}/>
            )
        }
    ):
    <h2 style={{marginLeft:"20%"}}>there are no searched results for this item</h2>
        }
        
        </div>
        </>
    )
}

export default Main;