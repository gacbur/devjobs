import React, { useEffect, FC } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { RouteComponentProps, withRouter } from 'react-router';

import { RootStore } from '../../redux/Store'

import { getSingleJobError, getSingleJobItem, getSingleJobLoading } from '../../redux/singleJobItem/singleJobItemActions'

import { JobItem, JobItemLogo, JobItemCompanyH4, JobItemDateP, JobItemEmploymentP, JobItemTitleH3, JobItemLocationH6, JobItemDescription } from './SingleJobItemElements'

import ClipLoader from 'react-spinners/ClipLoader'

import parse from 'html-react-parser';

type SingleRecipeParams = {
    id: string
}

type SingleRecipeProps = RouteComponentProps<SingleRecipeParams>

const SingleJobItem: FC<SingleRecipeProps> = ({ match }) => {

    console.log(match.params.id)

    const dispatch = useDispatch()

    const jobs = useSelector((state: RootStore) => state.jobs.jobs)
    const singleJobLoading = useSelector((state: RootStore) => state.singleJob.singleJobsLoading)
    const singleJobError = useSelector((state: RootStore) => state.singleJob.singleJobsError)
    const singleJob = useSelector((state: RootStore) => state.singleJob.singleJob)

    useEffect(() => {
        let isLoading = true
        let error = false
        dispatch(getSingleJobLoading(isLoading))
        dispatch(getSingleJobError(error))

        const getJobItem = (jobsItemId: string) => {
            const item = jobs.filter(item => item.id === jobsItemId)
            if (item[0]) {
                console.log(item[0])
                dispatch(getSingleJobItem(item[0]))
                isLoading = false
                dispatch(getSingleJobLoading(isLoading))
            } else {
                isLoading = false
                error = true
                dispatch(getSingleJobLoading(isLoading))
                dispatch(getSingleJobError(error))
            }
        }

        getJobItem(match.params.id)
    }, [])



    return (
        <>
            {singleJobLoading ?
                <ClipLoader size={80} color="#3470a8"></ClipLoader>
                :
                singleJob ?
                    <JobItem>
                        <JobItemLogo>
                            <img src={singleJob.company_logo} alt={singleJob.title} />
                        </JobItemLogo>
                        <JobItemCompanyH4>{singleJob.company}</JobItemCompanyH4>
                        <JobItemDateP>{singleJob.created_at.slice(0, 11)}</JobItemDateP>
                        <JobItemEmploymentP>{singleJob.type}</JobItemEmploymentP>
                        <JobItemTitleH3>{singleJob.title}</JobItemTitleH3>
                        <JobItemLocationH6>{singleJob.location}</JobItemLocationH6>
                        <JobItemDescription>
                            {parse(
                                `${singleJob.description}`
                            )}
                            {parse(
                                `${singleJob.how_to_apply}`
                            )}
                        </JobItemDescription>
                    </JobItem>
                    :
                    null
            }
            {
                singleJobError ?
                    <p>error sorry go back</p>
                    :
                    null
            }
        </>
    )
}

export default withRouter(SingleJobItem)
