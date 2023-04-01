import { Box } from "@mui/material";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ forcePage, ...props }) => {
  return (
    // <Box>
      <ReactPaginate
        {...props}
        forcePage={forcePage || 0}
        pageRangeDisplayed={5}
        breakLabel="..."
        nextLabel="Next"
        previousLabel="Previous"
        marginPagesDisplayed={3}
        pageClassName="page-item "
        pageLinkClassName="page-link"
        containerClassName="pagination justify-content-center"
        previousClassName="page-item "
        nextClassName="page-item"
        activeClassName="active"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
      />
    // </Box>
  );
};

export default Pagination;
