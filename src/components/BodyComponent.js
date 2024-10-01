import RestCard from "./RestroCardComponent";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // state variable - super powerful variable
    const [ listOfRestro, setListOfRestro] = useState([]);
    const [ filterListOfRestro, setFilterListOfRestro] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    });

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();
        setListOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterListOfRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestro && listOfRestro.length === 0) {
        return <Shimmer/>;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    Search : <input type="text" 
                    placeholder="Search..."
                    className="search-box" value={ searchText }
                    onChange={(event) => setSearchText(event.target.value)}></input>
                    <button onClick={() => {
                        const filterList = listOfRestro.filter((val) => {
                            return val.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        setFilterListOfRestro(filterList);
                        if(filterList.length === 0) {
                            console.log('asas')
                        }
                    }}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestro.filter((val) => {
                        return val.info.avgRating > 4.5
                    })
                    setListOfRestro(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filterListOfRestro.map(res => <RestCard key={res.info.id} resData={res}/>)
                }
            </div>
        </div>
    );
}

export default Body;