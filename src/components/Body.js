import RestaurantCart from "./Restaurant";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";

const Body = () =>{
  const [listOfRestaurant,setListOfRestaurant] = useState([])

  //useEffect hook
  useEffect(()=>{
     fetchData();
  },[]);

  //Call API using fetch()-->it is super power that browser has given
  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json() 
    console.log(json)
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  //Conditional rendering
    // if(listOfRestaurant.length === 0){
    //   return <ShimmerCard/>
    // }

/*---- insted of conditional rendering you can use ternary operator as shown in the below---*/

    return listOfRestaurant === 0 ?<ShimmerCard/> : (
        <div className="body">
            <div className="search">
              <button className="filter-btn" onClick={()=>{
                 let filteredRestaurants = listOfRestaurant.filter((res)=>res.info.avgRating >4.5)
                setListOfRestaurant(filteredRestaurants)
              }}>filter avaRating Restaurant</button>
            </div>
            <div className="res-container">
              {listOfRestaurant?.map((restaurant)  =>(
                <RestaurantCart key={restaurant.info.id} resData={restaurant} />
              ))}
            </div>
        </div>
    )
}

export default Body;