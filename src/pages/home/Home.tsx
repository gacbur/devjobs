import { useState, ChangeEvent } from 'react'

import { HomeCnt, Search, InputCnt, FilterInput, LocationInput, FullTimeCheckbox, JobList, JobsNoResults } from './HomeElements'

import JobItem from '../../components/jobItem/JobItem'
import JobsPagination from '../../components/jobsPagination/JobsPagination'

import ClipLoader from 'react-spinners/ClipLoader'

import useFetchJobs from '../../hooks/useFetchJobs'

type paramsProps = {
    description?: string,
    location?: string,
    full_time?: any
}

const Home = () => {

    const [params, setParams] = useState<paramsProps>({})
    const [page, setPage] = useState(1)

    const handleParamChange = (e: ChangeEvent<HTMLInputElement>) => {
        const param = e.target.name
        const value = e.target.value
        setPage(1)
        setParams(prevParams => {
            return { ...prevParams, [param]: value }
        })
    }

    const { jobs, loading, hasNextPage } = useFetchJobs(params, page)

    return (
        <>
            <HomeCnt>
                <Search>
                    <InputCnt>
                        <FilterInput
                            placeholder="Filter by title, companies, expertise..."
                            name="description"
                            value={params.description}
                            onChange={handleParamChange}
                        >
                        </FilterInput>
                    </InputCnt>
                    <InputCnt>
                        <LocationInput
                            placeholder="Filter by location..."
                            name="location"
                            value={params.location}
                            onChange={handleParamChange}
                        >
                        </LocationInput>
                    </InputCnt>
                    <InputCnt>
                        <label htmlFor="full-time-checkbox">
                            Full Time
                     </label>
                        <FullTimeCheckbox
                            value={params.full_time}
                            onChange={handleParamChange}
                        >
                        </FullTimeCheckbox>
                    </InputCnt>
                </Search>
                {loading ? null : jobs.length === 0 ? null : <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}></JobsPagination>}
                {loading && <ClipLoader size={80} color="#3470a8" />}
                {jobs.length === 0 && !loading ? <JobsNoResults>Found no results ...</JobsNoResults> : null}
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
            </HomeCnt>
            { loading ? null : jobs.length === 0 ? null : <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}></JobsPagination>}
        </>
    )
}

export default Home
