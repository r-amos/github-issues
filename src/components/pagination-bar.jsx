import React from 'react';
import PaginationButton from './pagination-button';

const PaginationBar = (props) => {

    const buttons = [];

    for (let i = 1; i < props.pages; i++) {

        buttons.push(<PaginationButton key={i} page={i} onPaginationClick={props.onPaginationClick} />)

    }

    return <div>{buttons}</div>

}

export default PaginationBar;