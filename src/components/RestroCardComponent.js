import { CDN_URL } from "../utils/constants";

const styleObj = {
    backgroundColor: "#f0f0f0"
}

const RestCard = (props) => {
    const { resData } = props;

   const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
   } = resData?.info
    return (
        <div className="res-card" style={styleObj}>
            <img className="res-logo"
            alt="res-logo"
            src={ CDN_URL + cloudinaryImageId }>
            </img>
            <h3>{ name }</h3>
            <h4>{ cuisines.join(", ")}</h4>
            <h4>{ avgRating} Star</h4>
            <h4>{ resData.info.sla.deliveryTime} Min.</h4>
        </div>
    );
}

export default RestCard;