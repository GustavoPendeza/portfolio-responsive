import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../app/page.module.css";

interface Props {
    total_count: number | undefined;
    setPage: (page: number) => void;
    projectsPerPage: number;
}

export default function Pagination({
    total_count,
    setPage,
    projectsPerPage,
}: Props) {
    const [pageCount, setPageCount] = useState(0);

    function getPageCount() {
        setPageCount(Math.ceil(total_count! / projectsPerPage));
    }

    function handleChangePage(event: any) {
        setPage(event.selected + 1);
    }

    useEffect(() => {
        getPageCount();
    }, [total_count]);

    return (
        <ReactPaginate
            pageCount={pageCount}
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            pageRangeDisplayed={5}
            onPageChange={handleChangePage}
            containerClassName={styles.paginationButtons}
            activeClassName={styles.activePaginationButton}
            disabledClassName={styles.disabledPaginationButton}
        />
    );
}
