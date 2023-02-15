import React from 'react';
import ReactPaginate from "react-paginate";

import styles from './pagination.module.scss'

const Index = ({onChangePage}) => {
    return (
        <>
            <ReactPaginate
                className={styles.pagination}
                nextClassName={styles.pagination__next__button}
                previousClassName={styles.pagination__prev__button}
                activeClassName={styles.pagination__active__button}
                disabledClassName={styles.pagination__disabled__button}
                pageClassName={styles.pagination__all__page__button}
                containerClassName={styles.pagination__container__button}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(e)=> onChangePage(e.selected+1)}
                pageRangeDisplayed={8}
                pageCount={3}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
};

export default Index;