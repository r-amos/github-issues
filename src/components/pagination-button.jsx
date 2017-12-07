import React from 'react';


const PaginationButton = (props) => {

    return <div onClick={()=> props.onPaginationClick(props.page)}>{props.page}</div>
}

export default PaginationButton;