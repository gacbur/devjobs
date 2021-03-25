import { useEffect, FC, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { RouteComponentProps, withRouter } from 'react-router';

import { useToasts } from 'react-toast-notifications';

import { RootStore } from '../../redux/Store'

import { getSingleJobError, getSingleJobItem, getSingleJobLoading } from '../../redux/singleJobItem/singleJobItemActions'
import { addToPinned, removeFromPinned } from '../../redux/pinnedJobs/pinnedJobsActions'

import { Item, ItemLogo, ItemCompanyH4, ItemDateP, ItemEmploymentP, ItemTitleH3, ItemLocationH6, ItemDescription, ItemPinBtn } from './SingleJobItemElements'

import Loading from '../../components/loading/Loading'

import { VscPinned } from 'react-icons/vsc'
import { BiPlus } from 'react-icons/bi'
import { IoIosCheckmarkCircle } from 'react-icons/io'

import parse from 'html-react-parser';

type SingleRecipeParams = {
    id: string
}

type SingleRecipeProps = RouteComponentProps<SingleRecipeParams>

const SingleJobItem: FC<SingleRecipeProps> = ({ match }) => {

    const { addToast } = useToasts()

    const dispatch = useDispatch()

    const [isPinned, setIsPinned] = useState<boolean>()

    const jobs = useSelector((state: RootStore) => state.jobs.jobs)
    const singleJobLoading = useSelector((state: RootStore) => state.singleJob.singleJobsLoading)
    const singleJobError = useSelector((state: RootStore) => state.singleJob.singleJobsError)
    const singleJob = useSelector((state: RootStore) => state.singleJob.singleJob)
    const pinnedJobs = useSelector((state: RootStore) => state.pinnedJobs.pinnedJobs)

    useEffect(() => {
        let isLoading = true
        let error = false
        dispatch(getSingleJobLoading(isLoading))
        dispatch(getSingleJobError(error))

        const getJobItem = (jobsItemId: string) => {
            const item = jobs.find(item => item.id === jobsItemId)
            const pinnedItem = pinnedJobs.find(item => item.id === jobsItemId)
            if (item) {
                dispatch(getSingleJobItem(item))
                isLoading = false
                dispatch(getSingleJobLoading(isLoading))
            }
            else if (pinnedItem) {
                dispatch(getSingleJobItem(pinnedItem))
                isLoading = false
                dispatch(getSingleJobLoading(isLoading))
            }
            else {
                isLoading = false
                error = true
                dispatch(getSingleJobLoading(isLoading))
                dispatch(getSingleJobError(error))
            }
        }
        getJobItem(match.params.id)
    }, [match.params.id, pinnedJobs, jobs, dispatch])


    useEffect(() => {
        const checkIfPinned = () => {
            const isInPinned = pinnedJobs.find(item => item.id === match.params.id)
            if (isInPinned) {
                setIsPinned(true)
            } else {
                setIsPinned(false)
            }
        }
        checkIfPinned()
    }, [match.params.id, pinnedJobs])


    const handleJobPinButton = () => {
        const isInPinned = pinnedJobs.find(item => item.id === match.params.id)
        if (isInPinned) {
            dispatch(removeFromPinned(match.params.id))
            addToast('This job was successfully removed from pinned.',
                { appearance: 'success' })
            setIsPinned(false)
        } else {
            dispatch(addToPinned(singleJob))
            addToast('This job was successfully pinned.',
                { appearance: 'success' })
            setIsPinned(true)
        }
    }

    return (
        <>
            {singleJobLoading ?
                <Loading />
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
                        <ItemPinBtn
                            onClick={() => handleJobPinButton()}
                        >
                            <VscPinned className="pin" />
                            <BiPlus className="plus" />
                            {isPinned ? <IoIosCheckmarkCircle className="checkmark" /> : null}
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
