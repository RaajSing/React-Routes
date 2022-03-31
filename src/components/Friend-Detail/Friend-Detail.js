import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function FriendDetail(){

    const params = useParams() ; // Vekhappa....

    const [friend, setFriend] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.FriendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])

    return (
        <div>
            <h1>Friend Details {params.FriendId}</h1>
            <p>{friend.name}</p>
        </div>
    )
}

export default FriendDetail ;