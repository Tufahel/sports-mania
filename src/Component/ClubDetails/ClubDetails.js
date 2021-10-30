import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ClubDetails/ClubDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faMapMarkerAlt, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import male from '../../images/male.png';
import female from '../../images/female.png';
import Facebook from '../../images/Facebook.png';
import Twitter from '../../images/Twitter.png';
import Youtube from '../../images/YouTube.png';

const ClubDetails = () => {
    const {idTeam} = useParams();
    const [clubdetails, setClubDetails] = useState({});

    const background = {
        backgroundImage: `url(${clubdetails.strStadiumThumb})`,
        backgroundSize: "cover",
        backgroundOrigin: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "300px"
    }
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        //console.log(url);
        //console.log(clubdetails.intFormedYear);
        fetch(url)
        .then(res => res.json())
        .then(data => setClubDetails(data.teams[0]))
    }, [idTeam]);
    //console.log(url);
    console.log(clubdetails.intFormedYear);
    return (
        <div className="club-details">
            <div className="banner" style={background}>
                <div className="img-div">
                    <img src={clubdetails.strTeamBadge} alt=""/>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row top-info-div">
                    <div className="col-md-6 text-white p-3 font-weight-bold left-div card-style">
                        <h3 className="mb-4">{clubdetails.strTeam}</h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Founded: {clubdetails.intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag}/> Country: {clubdetails.strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol}/> Sport Type: {clubdetails.strSport}</p>
                        <p><FontAwesomeIcon icon={faMars}/> Gender: {clubdetails.strGender}</p>
                    </div>
                    <div className="col-md-6 right-div">
                        {
                            (clubdetails.strGender === "Female") ? <img src={female} alt=""/>
                            :
                            <img src={male} alt=""/>
                        }
                        
                    </div>
                </div>
                <div className="bottom-info-div">
                    <p>{clubdetails.strDescriptionEN}</p>
                    <br/>
                    <p>{clubdetails.strStadiumDescription}</p>
                    <div className="footer rounded mx-auto d-block">
                        <a href={`http://${clubdetails.strFacebook}`} target="_blank"><img src={Facebook} alt=""/></a> 
                        <a href={`https://${clubdetails.strYoutube}`} target="_blank"><img src={Youtube} alt=""/></a> 
                        <a href={`https://${clubdetails.strTwitter}`} target="_blank"><img src={Twitter} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubDetails;