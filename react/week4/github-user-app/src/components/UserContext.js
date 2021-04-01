import React, { useState, createContext } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [userSearch, setUserSearch] = useState("");
    const [error, setError] = useState("");
    const [repos, setRepos] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const fetchUsers = await fetch(url)
            const usersData = await fetchUsers.json();
            // console.log(usersData)
            if (usersData.items) {
                setIsLoading(false)
                return setUsers(usersData.items)
            } else if (usersData.message) {
                console.log(error)
                setIsLoading(false)
                setError(usersData.message);
            }
        } catch (error) {
            // console.log(error.Error)
            setIsLoading(false)
            setError(error);

        }
    }

    const UserValues = {
        users,
        userSearch,
        isLoading,
        error,
        getUsers: (url) => {
            if (userSearch) {
                // console.log(userSearch)
                setIsLoading(true);
                return fetchUsers(url);
            }
        },
        onChange: (e) => {
            setUserSearch(e.target.value)
        },
        getRepos: async (url) => {
            const fetchRepos = await fetch(url);
            const reposData = await fetchRepos.json();
            return setRepos(reposData);
        },
        repos,
    }

    return (
        <UserContext.Provider value={UserValues}>
            {children}
        </UserContext.Provider>
    )

}

