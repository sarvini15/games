 import React from "react";
 import { useEffect, useSate } from "react";


export default function Filters(props) {
    const { search, genre, sort, limit, genres, onSearchChange, onGenreChange, onSortChange, onLimitChange } = props;
    return (
        <div className="filters">
            {/* INSTRUCTION: Add a text input for searching by title */}

            {/* INSTRUCTION: Add a selector for filtering by genre */}

            {/* INSTRUCTION: Add a selector for sorting */}

            {/* INSTRUCTION: Add a selector for limiting the number of games per page */}
        </div>
    );
}


