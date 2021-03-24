import { FC } from 'react'

import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router'

import { useToasts } from 'react-toast-notifications';

import { job } from '../../redux/jobs/jobsActionTypes'

import { removeFromPinned } from '../../redux/pinnedJobs/pinnedJobsActions'

import { PinnedItem, DateP, EmploymentP, TitleH3, CompanyP, LocationH6, DeleteBtn } from './PinnedJobItemElements'

import { IoTrashBinOutline } from 'react-icons/io5'

type PinnedJobItemProps = {
    item: job
}

const PinnedJobItem: FC<PinnedJobItemProps> = ({ item }) => {

    const { addToast } = useToasts()

    const dispatch = useDispatch()

    const history = useHistory()

    const {
        id,
        type,
        created_at,
        company,
        location,
        title,
    } = item

    const handleGoToSingleJob = (e: any) => {
        if (e.target.name !== 'deleteBtn') {
            history.push(`/job-item/${id}`)
        }
    }

    const handleDeleteJobItem = () => {
        dispatch(removeFromPinned(id))
        addToast("Job was successfully removed from Pinned", { appearance: 'success' })
    }

    return (
        <PinnedItem
            onClick={(e: any) => handleGoToSingleJob(e)}>
            <DateP>{created_at.slice(0, 11)}</DateP>
            <EmploymentP>{type}</EmploymentP>
            <TitleH3>{title}</TitleH3>
            <CompanyP>{company}</CompanyP>
            <LocationH6>{location}</LocationH6>
            <DeleteBtn
                name="deleteBtn"
                onClick={(e: any) => handleDeleteJobItem()}
            >
                <IoTrashBinOutline
                    className="trash"
                />
            </DeleteBtn>
        </PinnedItem>
    )
}

export default PinnedJobItem
