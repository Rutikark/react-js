import { IMAGE_URL } from "../utils/constants";

const RestaurantCart = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating} = resData.info;
    
    return(
      <div className="res-card">
          <img  className="res-img" src={IMAGE_URL+cloudinaryImageId} />
          <h3>{name}</h3>
          <h4>{cuisines.join(",")}</h4>
          <h4>{avgRating}</h4>
      </div>
    )
  }
  export default RestaurantCart;