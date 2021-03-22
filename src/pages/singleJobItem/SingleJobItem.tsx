import React, { useEffect, FC } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { RouteComponentProps, withRouter } from 'react-router';

import { RootStore } from '../../redux/Store'

import { getSingleJobError, getSingleJobItem, getSingleJobLoading } from '../../redux/singleJobItem/singleJobItemActions'

import { Item, ItemLogo, ItemCompanyH4, ItemDateP, ItemEmploymentP, ItemTitleH3, ItemLocationH6, ItemDescription, ItemPinBtn } from './SingleJobItemElements'

import { VscPinned } from 'react-icons/vsc'
import { BiPlus } from 'react-icons/bi'

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
                    <Item>
                        <ItemLogo>
                            <img src={singleJob.company_logo} alt={singleJob.title} />
                        </ItemLogo>
                        <ItemCompanyH4>{singleJob.company}</ItemCompanyH4>
                        <ItemDateP>{singleJob.created_at.slice(0, 11)}</ItemDateP>
                        <ItemEmploymentP>{singleJob.type}</ItemEmploymentP>
                        <ItemTitleH3>{singleJob.title}</ItemTitleH3>
                        <ItemLocationH6>{singleJob.location}</ItemLocationH6>
                        <ItemDescription>
                            {parse(
                                `${singleJob.description}`
                            )}
                            {parse(
                                `${singleJob.how_to_apply}`
                            )}
                        </ItemDescription>
                        <ItemPinBtn>
                            <VscPinned className="pin" />
                            <BiPlus className="plus" />
                        </ItemPinBtn>
                    </Item>
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
