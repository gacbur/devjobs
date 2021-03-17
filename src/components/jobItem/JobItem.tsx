import React, { FC } from 'react'

import { job } from '../../redux/jobs/jobsActionTypes'

import { JobEl, JobElDateP, JobElEmploymentP, JobElTitleH3, JobElCompanyP, JobElLocationH6 } from './JobItemElements'

type JobItemProps = {
    item: job
}

const JobItem: FC<JobItemProps> = ({ item }) => {

    const {
        id,
        type,
        url,
        created_at,
        company,
        company_url,
        location,
        title,
        description,
        how_to_apply,
        company_logo,
    } = item


    return (
        <JobEl>
            <JobElDateP>{created_at.slice(0, 11)}</JobElDateP>
            <JobElEmploymentP>{type}</JobElEmploymentP>
            <JobElTitleH3>{title}</JobElTitleH3>
            <JobElCompanyP>{company}</JobElCompanyP>
            <JobElLocationH6>{location}</JobElLocationH6>
        </JobEl>
    )
}

export default JobItem
