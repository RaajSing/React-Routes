import React from "react";
import {Link, useNavigate} from "react-router-dom" ;

function Friend({friend}){

    const navigate = useNavigate(); // vekhappa...
    const showFriendDetail = () => {
        const path = `/friend/${friend.id}` ; // vekhappa...
        navigate(path) ;
    }


    return (
        <div>
            <h3>Name : {friend.name}</h3>
            <Link to={"/Friend/" + friend.id}>Show Detail</Link> {/* Vekhappa */}
            <button onClick={showFriendDetail}>{friend.name} Info..</button>
        </div>
    )
}

export default Friend ;