

import { useEffect, useState } from 'react';
import * as teamService from '../../services/teamService';
import TeamListItem from './team-list-item/TeamListItem';

function TeamList() {

    const [teams, setTeams] = useState([]);

    useEffect( () => {
        teamService.getAll()
            .then(setTeams)
    }, []);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
                    <h1 className="mb-5">Meet Our Guide</h1>
                </div>
                <div className="row g-4">
                    {teams.map( (team) => <TeamListItem key={team._id} {...team} />)}
                </div>
            </div>
        </div>
    )
}

export default TeamList;