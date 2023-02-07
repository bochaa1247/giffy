import React, {useState,useEffect,useRef} from "react";
import getTendringTerms from "services/GetTrendTermsService";
import Category from "components/Category";

export default function TrendingSearches(){
    const [trends,setTrends]= useState([])
    

    useEffect(function() {
    getTendringTerms().then(setTrends)
    },[])
    return <Category  name= 'Tendencias' options={trends}/>
}