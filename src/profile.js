import { useAuth0 } from "@auth0/auth0-react";
import CardComp from "./card";
import { useState, useEffect } from "react";

function Favorites (){
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("products")));
    let {user, isAuthenticated, isLoading} = useAuth0()
    console.log(user)
    // Load items from local storage on initial render
    useEffect(() => {
      if(isLoading){return;}
      else {
      if(localStorage.getItem("products") && isAuthenticated){
        console.log("hello")
      let filteredData = JSON.parse(localStorage.getItem("products")).filter((item)=>item.email === user.email)
      setItems(filteredData);
      }
    }
    }, [isLoading]);
  
    // Function to handle item deletion
    function handleDelete(index) {
      const updatedItems = [...items];
      updatedItems.splice(index, 1); // Remove the item at the specified index
      setItems(updatedItems);
      localStorage.setItem("products", JSON.stringify(updatedItems));
    }
  
    return (
      <>
        {<div className="cardContainer">
        {1?console.log(items):console.log("hi")}
          {isAuthenticated && items && items.length > 0 ? 
          
            items.map((item, index) => {
                return(
              <CardComp
                key={index}
                image={item.image}
                title={item.title}
                price={item.price}
                link={item.link}
                showButton={false}
                handleDelete={() => handleDelete(index)}
              /> )}
    ):
    <h2 style={{marginLeft:"20%"}}>there are no searched results for this item</h2>
        } 
        </div>}
        </>
    )
}

export default Favorites;