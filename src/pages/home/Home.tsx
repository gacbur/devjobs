import { useState, ChangeEvent } from 'react'

import { HomeCnt, Search, InputCnt, FilterInput, LocationInput, FullTimeCheckbox, JobList, JobsNoResults, SearchButton, SearchInputsCnt } from './HomeElements'

import JobItem from '../../components/jobItem/JobItem'
import JobsPagination from '../../components/jobsPagination/JobsPagination'
import SearchFilterItems from '../../components/searchFilterItems/SearchFilterItems'
import Loading from '../../components/loading/Loading'

import useFetchJobs from '../../hooks/useFetchJobs'

export type paramsProps = {
    description: string,
    location: string,
    full_time?: any
}

const Home = () => {

    const [params, setParams] = useState<paramsProps>({
        description: '',
        location: '',
        full_time: false
    })

    const [inputValues, setInputValues] = useState<paramsProps>({
        description: '',
        location: '',
        full_time: false
    })

    const [page, setPage] = useState<number>(1)

    const handleInputValuesChange = (e: ChangeEvent<HTMLInputElement>) => {
        const param = e.target.name
        const value = e.target.value
        const type = e.target.type
        if (type === 'checkbox') {
            setInputValues({
                ...inputValues,
                [param]: !inputValues.full_time
            })
        } else {
            setInputValues({
                ...inputValues,
                [param]: value
            })
        }
    }

    const handleSetSearchParams = (e: any) => {
        e.preventDefault()
        setPage(1)
        setParams({
            ...inputValues
        })
    }

    const { jobs, loading, hasNextPage } = useFetchJobs(params, page)

    return (
        <>
            <HomeCnt>
                <Search onSubmit={(e) => handleSetSearchParams(e)}>
                    <SearchInputsCnt>
                        <InputCnt>
                            <FilterInput
                                placeholder="Filter by title, companies, expertise..."
                                name="description"
                                value={inputValues.description}
                                onChange={handleInputValuesChange}
                            >
                            </FilterInput>
                        </InputCnt>
                        <InputCnt>
                            <LocationInput
                                placeholder="Filter by location..."
                                name="location"
                                value={inputValues.location}
                                onChange={handleInputValuesChange}
                            >
                            </LocationInput>
                        </InputCnt>
                        <InputCnt>
                            <label htmlFor="full-time-checkbox">
                                Full Time
                     </label>
                            <FullTimeCheckbox
                                checked={inputValues.full_time}
                                onChange={handleInputValuesChange}
                            >
                            </FullTimeCheckbox>
                        </InputCnt>
                    </SearchInputsCnt>
                    <SearchButton>Search</SearchButton>
                </Search>
                <SearchFilterItems
                    paramsInfo={params}
                    inputValues={inputValues}
                    setParams={setParams}
                    setInputValues={setInputValues}
                    setPage={setPage}
                />
                {loading ? null
                    :
                    jobs.length === 0 ?
                        null
                        :
                        <JobsPagination
                            page={page}
                            setPage={setPage}
                            hasNextPage={hasNextPage}
                        />
                }
                {loading && <Loading />}
                {jobs.length === 0 && !loading ?
                    <JobsNoResults>Found no results ...</JobsNoResults>
                    :
                    null}
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
            { loading ?
                null
                :
                jobs.length === 0 ?
                    null
                    :
                    <JobsPagination
                        page={page}
                        setPage={setPage}
                        hasNextPage={hasNextPage}
                    />}
        </>
    )
}

export default Home
