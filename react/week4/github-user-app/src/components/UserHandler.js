import React, { useEffect, useContext } from "react";
import { UserContext } from "./UserContext"
import UserList from "./UsersList";


const UserHandler = () => {
    const userContext = useContext(UserContext);

    const API_URL = `https://api.github.com/search/users?q=${userContext.userSearch}`;

    useEffect(() => {
        userContext.getUsers(API_URL);
        console.log(userContext.users)
    }, [userContext.userSearch])

    return (
        <div>
            {userContext.isLoading && <p>Searching...</p>}
            { userContext.error !== "" && <h3>{userContext.error}</h3>}
            { (userContext.users.length > 0) ? <UserList users={userContext.users} />
                : userContext.userSearch && <h3>NO USERS FOUND</h3>}
        </div>
    )

}
export default UserHandler;