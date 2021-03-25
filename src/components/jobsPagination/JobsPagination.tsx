import { FC, Dispatch, SetStateAction } from 'react'

import { StyledPaginateContainer } from './JobsPaginationElements'

//@ts-ignore
import ReactPaginate from 'react-paginate'

type JobsPaginationProps = {
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    hasNextPage: boolean | undefined
}

const JobsPagination: FC<JobsPaginationProps> = ({ page, setPage, hasNextPage }) => {

    return (
        <StyledPaginateContainer>
            <ReactPaginate
                previousLabel='previous'
                nextLabel='next'
                breakLabel="..."
                breakClassName="break-me"
                containerClassName="pagination"
                activeClassName="active"
                pageClassName="page"
                previousClassName={`previous ${page === 1 ? 'disabled' : ''}`}
                nextClassName={`next ${hasNextPage ? '' : 'disabled'}`}
                pageLinkClassName="page"
                pageRangeDisplayed={0}
                marginPagesDisplayed={1}
                forcePage={page - 1}
                pageCount={hasNextPage ? page + 1 : page}
                onPageChange={(props: any) => {
                    setPage(props.selected + 1)
                }}
            >

            </ReactPaginate>
        </StyledPaginateContainer>
    )
}

export default JobsPagination
