import React, { useEffect, useState } from 'react';
import '../../Responsive.css';
import Clubs from '../Clubs/Clubs';


const Home = () => {
    const [clubs, setClubs] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(res => res.json())
        .then(data => setClubs(data.teams));
    }, []);
    return (
        <div className="teamDiv">
            <div className="teamDetails">
            {
                clubs.map(cl => <Clubs club = {cl}></Clubs>)
            }
            </div>
        </div>
    );
};

export default Home;