import { useEffect } from 'react'

import Axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'

import { jobsMakeRequest, jobsGetData, jobsError, JobsHasNextPage } from '../redux/jobs/jobsActions'

import { RootStore } from '../redux/Store'
import axios from 'axios'

const useFetchJobs = (params: any, page: any) => {



    const BASE_URL = 'https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json'

    const dispatch = useDispatch()
    const jobsState = useSelector((state: RootStore) => state.jobs)

    const { jobs, loading, error, hasNextPage } = jobsState

    useEffect(() => {
        const cancelToken1 = Axios.CancelToken.source()
        dispatch(jobsMakeRequest())
        Axios.get(BASE_URL, {
            params: { markdown: false, page: page, ...params }
        }).then(res => {
            dispatch(jobsGetData(res.data))
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch(jobsError(e))
        })

        const cancelToken2 = Axios.CancelToken.source()
        dispatch(jobsMakeRequest())
        Axios.get(BASE_URL, {
            params: { markdown: false, page: page + 1, ...params }
        }).then(res => {
            dispatch(JobsHasNextPage(res.data.length !== 0))
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch(jobsError(e))
        })

        return () => {
            cancelToken1.cancel()
            cancelToken2.cancel()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params, page])

    return {
        jobs,
        loading,
        error,
        hasNextPage
    }
}

export default useFetchJobs
