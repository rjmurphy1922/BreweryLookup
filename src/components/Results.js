import Feeder from "./Feeder"
import React, {useState, useEffect} from "react"
import axios from "axios"
import bootstrap from'bootstrap/dist/css/bootstrap.min.css';


function Results({key, name, street, website, city, state, fullAddress}) {

  // const [maps, setMaps] = useState([]);
  // //check tuseState "" for errors
  // useEffect(() =>{
  //   axios.get(`https://www.google.com/maps/embed/v1/place?key=AIzaSyCfcAaKlRbP10QUCCdw2mhmV0ts9vAgp-M
  //   &q=` + city )
  // }, [] )
  //   .then(results => setMaps(results.data)) 
  //   console.log(maps)




  
 return (
        <div className="collection">
        {/* <a href="#!" className="collection-item" key = {key}>{`${id}`}</a> */}
        <a data href={website} onClick = {() => window.open(`${website}`,"_blank")} className="collection-item "key = {key} onClick={(e) => console.log(e.target.textContent)}>{`${name}`} 
         </a>
        {/* <a href="#!" className="collection-item" key = {key}>{`${name}`}</a> */}
        {/* <a href=""  className="collection-item">Maps</a> */}
        
        
{/*         
        {/* <iframe width={400} height={300} style={{border: 0, marginRight:0}} loading="lazy" allowFullScreen src="https://www.google.com/maps/embed/v1/place?key=AIzaSyConOxgTJ3swIM23X024RVEG5T5vMc4-Ug
        &q=   +  "  ></iframe> */}

</div>
 )}
  export default Results