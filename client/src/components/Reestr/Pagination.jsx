import React from 'react';
import { getPagesArray } from '../../utils/pages';
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from 'mdbreact';
import { ICONS } from '../../utils/const';

const Pagination = ({ totalPages, page = 1, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  pagesArray = pagesArray.length > 0 ? pagesArray : ['1'];
  return (
    <MDBRow>
      <MDBCol>
        <MDBPagination className="mb-5">
          <MDBPageItem onClick={() => changePage(1)}>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">
                <i className={ICONS.left}></i>
              </span>
            </MDBPageNav>
          </MDBPageItem>
          {pagesArray.map((p) => (
            <MDBPageItem
              onClick={() => changePage(p)}
              key={p}
              className={page === p ? 'active' : ''}
            >
              <MDBPageNav>{p}</MDBPageNav>
            </MDBPageItem>
          ))}
          <MDBPageItem
            onClick={() => {
              changePage(pagesArray[pagesArray.length - 1]);
            }}
          >
            <MDBPageNav aria-label="Next">
              <span aria-hidden="true">
                <i className={ICONS.right}></i>
              </span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
  );
};

export default Pagination;
