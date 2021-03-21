import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { RootStore } from '../../redux/Store'


import { HomeCnt, Search, InputCnt, FilterInput, LocationInput, FullTimeCheckbox, SearchButton, JobList } from './HomeElements'

import { LoadMoreBtn } from './HomeElements'

import JobItem from '../../components/jobItem/JobItem'
import JobsPagination from '../../components/jobsPagination/JobsPagination'

import ClipLoader from 'react-spinners/ClipLoader'

import useFetchJobs from '../../hooks/useFetchJobs'

const Home = () => {

    const [params, setParams] = useState({})
    const [page, setPage] = useState(1)

    const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)


    return (
        <HomeCnt>
            <Search>
                <InputCnt>
                    <FilterInput
                        placeholder="Filter by title, companies, expertise..."
                    >

                    </FilterInput>
                </InputCnt>
                <InputCnt>
                    <LocationInput
                        placeholder="Filter by location..."
                    >

                    </LocationInput>
                </InputCnt>
                <InputCnt>
                    <FullTimeCheckbox />
                    <label htmlFor="full-time-checkbox">
                        Full Time
                     </label>
                    <SearchButton>Search</SearchButton>
                </InputCnt>
            </Search>
            {loading && <ClipLoader size={80} color="#3470a8" />}
            {error && <h1>Error. Try refreshing.</h1>}
            {
                jobs.length > 0 ?
                    <JobList>
                        {jobs.map(item => {
                            return <JobItem key={item.id} item={item} />
                        })}
                    </JobList>
                    :
                    null
            }
            <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}></JobsPagination>
        </HomeCnt>
    )
}

export default Home
