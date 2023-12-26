import React from "react";
import Pagination from "react-bootstrap/Pagination";

function Paginate({ page, pages, keyword = "", isAdmin = false }) {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <Pagination.Item
            key={x + 1}
            active={x + 1 === page}
            href={
              isAdmin
                ? `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
                : `/?keyword=${keyword}&page=${x + 1}`
            }
          >
            {x + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    )
  );
}

export default Paginate;
