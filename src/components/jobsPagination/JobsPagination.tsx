import { FC, Dispatch, SetStateAction } from 'react'

import styled from 'styled-components'

//@ts-ignore
import ReactPaginate from 'react-paginate'

type JobsPaginationProps = {
    page: number,
    setPage: Dispatch<SetStateAction<number>>,
    hasNextPage: boolean | undefined
}

const StyledPaginateContainer = styled.div`

    .pagination {
    width:95%;
    margin-top:2em;
    margin-bottom:4em;
    align-items:center;
    justify-content:center;
    display:flex;
    list-style:none;
    }

    .break-me {
    cursor: pointer;
    margin:0em .4em;
    font-size:20px;
    }

    .active {
    background-color:  #234f94;
    color:white;

        a{
            color:white;
        }

    }

    .page{
        cursor:pointer;
        margin:0em .4em;
        border:1px solid #234f94;
        border-radius:8px;
        display:flex;
        align-items:center;
        justify-content:center;
        min-width:40px;
        min-height:40px;
        transition:.2s;
        font-size:14px;
        color: ${props => props.theme.TextColorMain};
        
        a{
            border:none;
            min-height:40px;
            min-width:40px;
        }

        &:hover{
            background-color: #234f94;
            color:white;
            transition:.2s;
        }
    }

    .previous, .next{

    cursor:pointer;
        margin:0em .4em;
        border:1px solid #234f94;
        color:#234f94;
        border-radius:8px;
        width:70px;
        font-size:13px;
        height:40px;
        transition:.2s;

        a{
            width:100%;
            height:100%;
            display:flex;
            align-items:center;
            padding:0em .5em;
            justify-content:center;
        }

        &:hover{
            background-color: #234f94;
            color:white;
            transition:.2s;
        }
    }
    `;

const JobsPagination: FC<JobsPaginationProps> = ({ page, setPage, hasNextPage }) => {

    return (
        <StyledPaginateContainer>
            <ReactPaginate
                previousLabel="previous"
                nextLabel="next"
                breakLabel="..."
                breakClassName="break-me"
                containerClassName="pagination"
                activeClassName="active"
                pageClassName="page"
                pageLinkClassName="page"
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
