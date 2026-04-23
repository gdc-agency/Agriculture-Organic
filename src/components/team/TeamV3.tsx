import TeamV2Data from '@/assets/jsonData/team/TeamV2Data.json';
import SingleTeamV2 from './SingleTeamV2';

const TeamV3 = () => {
    return (
        <>
            <div className="farmer-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                {TeamV2Data.map(team =>
                                    <div className="col-lg-4 col-md-6 farmer-stye-one" key={team.id}>
                                        <SingleTeamV2 team={team} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV3;