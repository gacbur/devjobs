export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"
export const GET_JOBS_LOADING = "GET_JOBS_LOADING"

export type job = {
    id: string,
    type: string,
    url: string,
    createdAt: string,
    company: string,
    companyUrl: string,
    location: string,
    title: string,
    description: string,
    howToApply: string,
    companyLogo: string
}

export interface GetJobsSuccess {
    type: typeof GET_JOBS_SUCCESS,
    payload: job[]
}

export interface GetJobsError {
    type: typeof GET_JOBS_ERROR,
    payload: boolean
}

export interface GetJobsLoading {
    type: typeof GET_JOBS_LOADING,
    payload: boolean
}


export type JobsDispatchTypes = GetJobsSuccess | GetJobsError | GetJobsLoading