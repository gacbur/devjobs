import { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'

import { getJobsError, getJobsLoading, getJobsSuccess } from '../../redux/jobs/jobsActions'

import Axios from 'axios'

import { HomeCnt, Search, InputCnt, FilterInput, LocationInput, FullTimeCheckbox, SearchButton } from './HomeElements'

import { StandardButton } from '../../components/reusable/StandardButton'

const Home = () => {

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
            <StandardButton
                onClick={() => handleLoadMoreJobs()}
            >Load More</StandardButton>
        </HomeCnt>
    )
}

export default Home
