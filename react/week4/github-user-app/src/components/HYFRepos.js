import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HyfRepos = () => {
    const userContext = useContext(UserContext);
    const onClick = () => {
        const API_URL = "https://api.github.com/users/HACKYOURFUTURE-CPH/repos";
        return userContext.getRepos(API_URL);
    }
    return (<div>
        <h2>Hack Your Future Repositories</h2>
        <button onClick={onClick} >Get Repos</button>
        {
            (userContext.repos.length > 0) &&
            userContext.repos.map((repo) => <li key={repo.id} >{repo.name}</li>)
        }
    </div>)
}
export default HyfRepos;