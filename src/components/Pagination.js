import React from "react";

function Pagination(props) {
    const { currentPage, games, onPageChange } = props;
    return (
        <div className="pagination">
            {/* INSTRUCTION: Add a button to go to the previous page. Disable the button if the current page is the first page. */}

            {/* INSTRUCTION: Display the current page number */}

            {/* INSTRUCTION: Add a button to go to the next page. Disable the button if there are no games. */}
        </div>
    );
}

export default Pagination;
