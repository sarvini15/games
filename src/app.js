import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Filters from "./components/Filters";
import GamesTable from "./components/GamesTable";
import Pagination from "./components/Pagination";
/* INSTRUCTION: Import the fetchGames and fetchGenres functions from the utils/api file */

function App() {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [search, setSearch] = useState("");
    const [genre, setGenre] = useState("");
    const [sort, setSort] = useState("");

    /* 
        INSTRUCTION: 
        - Use the useQuery hook to fetch games. 
        - May pass the page, limit, search, genre, and sort as query keys so that the data will be refetched when these values change. 
    */

    /* INSTRUCTION: Use the useQuery hook to fetch genres */

    /* INSTRUCTION: Create functions to handle limit change */

    /* INSTRUCTION: Create functions to handle search change */

    /* INSTRUCTION: Create functions to handle sort change */

    const handlePageChange = (newPage) => {
        /* INSTRUCTION: Update the page state */
    };

    const handleGenreChange = (newGenre) => {
        /* INSTRUCTION: Update the genre state and reset the page to 1 */
    };

    return (
        <div className="app">
            <h1>Games</h1>
            <Filters
                /* INSTRUCTION: 
                    - Pass the search, genre, sort, and limit states as props to the Filters component
                    - Pass the genres data as props to the Filters component
                */
                onGenreChange={handleGenreChange}
                /* 
                    INSTRUCTION:
                    - Pass the handleSearchChange, handleGenreChange, handleSortChange, and handleLimitChange functions as props to the Filters component
                */
            />
            <GamesTable
            /* INSTRUCTION:
                    - Pass the games, isLoading, and isError states as props to the GamesTable component
                */
            />
            <Pagination
                /* INSTRUCTION:
                    - Pass games and handlePageChange function as props to the Pagination component
                */
                currentPage={page}
            />
        </div>
    );
}

export default App;
