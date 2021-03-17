import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getJobsError, getJobsLoading, getJobsSuccess } from '../../redux/jobs/jobsActions'

import { RootStore } from '../../redux/Store'

import Axios from 'axios'

import { HomeCnt, Search, InputCnt, FilterInput, LocationInput, FullTimeCheckbox, SearchButton, JobList } from './HomeElements'

import { LoadMoreBtn } from './HomeElements'

import JobItem from '../../components/jobItem/JobItem'


import ClipLoader from 'react-spinners/ClipLoader'

const Home = () => {

    const jobs = useSelector((state: RootStore) => state.jobs.jobs)

    const dispatch = useDispatch()

    let currentPage = 1;

    const getJobs = (path: string) => {
        let isLoading = true
        dispatch(getJobsLoading(isLoading))

        Axios.get(path)
            .then(response => response.data)
            .then(data => {
                console.log(data)
                dispatch(getJobsSuccess(data))
                isLoading = false
                dispatch(getJobsLoading(isLoading))
            })
            .catch(error => {
                console.log(error)
                isLoading = false
                dispatch(getJobsLoading(isLoading))
                dispatch(getJobsError(true))
            })
    }

    useEffect(() => {
        const path = `/positions.json?page=1`
        getJobs(path)
    }, [])


    const handleLoadMoreJobs = () => {
        const path = `/positions.json?page=${currentPage + 1}`
        getJobs(path)
    }

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
            {jobs.length > 0 ?
                <JobList>
                    {jobs.map(item => {
                        return <JobItem key={item.id} item={item} />
                    })}
                </JobList>
                :
                <ClipLoader size={80} color="#3470a8" />
            }
            {jobs.length > 0 ?
                <LoadMoreBtn
                    onClick={() => handleLoadMoreJobs()}
                >Load More</LoadMoreBtn>
                :
                null
            }
        </HomeCnt>
    )
}

export default Home
