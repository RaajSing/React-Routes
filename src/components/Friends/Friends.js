import { useEffect, useState } from "react";
import Friend from "./Friend/Friend";

function Friends(){

    const [friends, setFriends] = useState([]) ;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return(
        <div>
            <h2>This is Friends Components</h2>
            <p>Lorem</p>
            {
                friends.map(friend => <Friend friend = {friend} key={friend.id}></Friend>)
            }
            
        </div>
    )
}

export default Friends ;