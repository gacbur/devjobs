import { FC } from 'react'

import { useHistory } from 'react-router'

import { job } from '../../redux/jobs/jobsActionTypes'

import { PinnedItem, JobElDateP, JobElEmploymentP, JobElTitleH3, JobElCompanyP, JobElLocationH6 } from './PinnedJobItemElements'

type PinnedJobItemProps = {
    item: job
}

const PinnedJobItem: FC<PinnedJobItemProps> = ({ item }) => {

    const history = useHistory()

    const {
        id,
        type,
        created_at,
        company,
        location,
        title,
    } = item

    return (
        <PinnedItem onClick={() => history.push(`/job-item/${id}`)}>
            <JobElDateP>{created_at.slice(0, 11)}</JobElDateP>
            <JobElEmploymentP>{type}</JobElEmploymentP>
            <JobElTitleH3>{title}</JobElTitleH3>
            <JobElCompanyP>{company}</JobElCompanyP>
            <JobElLocationH6>{location}</JobElLocationH6>
        </PinnedItem>
    )
}

export default PinnedJobItem
