import React, { useContext } from "react";
import { UserContext } from "./UserContext";
const UserInput = () => {
    const userContext = useContext(UserContext);
    return <>
        <input type="text" placeholder="search username" value={userContext.userSearch} onChange={userContext.onChange}></input>
    </>
}

export default UserInput;