import React , {useState, useEffect} from "react";
import './data-grid.css';
import axios from "../utils/axios";
import useSWR from 'swr';
import Card from "./capsule-card";
import PageNumbers from "./paginate";
import SelectInputField from "./select";
import './search.css';


const fetcher=url=>axios.get(url).then(res=>res.data);

const Capsules=()=>{

    const [capsules, setCapsules]=useState([]);
    const [currentPage, setCurrentPage]=useState(1);
    const [capsulesPerPage]=useState(8);

    const {data}=useSWR("https://api.spacexdata.com/v3/capsules", fetcher);

    useEffect(()=>{

        const lastCapsuleIndex=currentPage*capsulesPerPage;
        const firstCapsuleIndex=lastCapsuleIndex-capsulesPerPage;

        const currentCapsules=data?data.slice(firstCapsuleIndex, lastCapsuleIndex):[];

        setCapsules(currentCapsules);

    },[currentPage, capsulesPerPage, data])


    const paginate=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const getCapsuleDetails=()=>{
        
        // const popup=document.getElementById("popup");

        // popup.classList.add("more-items")
    }

    const capsuleInfo=capsules?capsules.map((capsule)=>{

        return (
            <Card key={capsule.capsule_serial} name={capsule.capsule_id} missions={capsule.missions.length}
                status={capsule.status} details={capsule.details} onClick={getCapsuleDetails}
                serial={capsule.capsule_serial} type={capsule.type}
                 landings={capsule.landings} reuse={capsule.reuse_count}
                 missionNames={capsule.missions.map((names)=>{
                    return (<span key={names.name} className="mission-names" >{names.name}</span>)
                 })} id={capsule.capsule_id} />
        )
    }):<Card/>

    const totalNumberOfCapsules=data?data.length:0;

    const statuses=data?data.map((status)=>{
        return status.status
    }):[];

    return(
        <React.Fragment>
            <section className="capsules-section">
            <h1>Search Form</h1>
                <form>
                    <div className="input-element"><SelectInputField/></div>
                    <div className="input-element"><SelectInputField/></div>
                    <div className="input-element"><SelectInputField/></div>
                    <div className="input-element"><button>Search</button></div>
                </form>
                <div className="capsule-cards">
                    {capsuleInfo}
                </div>
                <PageNumbers paginate={paginate} capsulesPerPage={capsulesPerPage} totalCapsules={totalNumberOfCapsules}/>
            </section>
        </React.Fragment>
    )
}
export default Capsules;