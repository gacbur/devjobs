import { FC } from 'react'

import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router'

import { job } from '../../redux/jobs/jobsActionTypes'

import { removeFromPinned } from '../../redux/pinnedJobs/pinnedJobsActions'

import { PinnedItem, DateP, EmploymentP, TitleH3, CompanyP, LocationH6, DeleteBtn } from './PinnedJobItemElements'

import { IoTrashBinOutline } from 'react-icons/io5'

type PinnedJobItemProps = {
    item: job
}

const PinnedJobItem: FC<PinnedJobItemProps> = ({ item }) => {

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


    const handleJobItemActions = (e: any) => {
        if (e.target.name === 'deleteBtn') {
            dispatch(removeFromPinned(id))
        } else {
            console.log(id)
            history.push(`/job-item/${id}`)
        }
    }

    return (
        <PinnedItem onClick={(e: any) => handleJobItemActions(e)}>
            <DateP>{created_at.slice(0, 11)}</DateP>
            <EmploymentP>{type}</EmploymentP>
            <TitleH3>{title}</TitleH3>
            <CompanyP>{company}</CompanyP>
            <LocationH6>{location}</LocationH6>
            <DeleteBtn
                name="deleteBtn"
                onClick={(e: any) => handleJobItemActions(e)}
            >
                <IoTrashBinOutline
                    className="trash"
                />
            </DeleteBtn>
        </PinnedItem>
    )
}

export default PinnedJobItem
