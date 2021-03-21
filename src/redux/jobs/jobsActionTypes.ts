export const JOBS_MAKE_REQUEST = "JOBS_MAKE_REQUEST"
export const JOBS_GET_DATA = "JOBS_GET_DATA"
export const JOBS_ERROR = "JOBS_ERROR"
export const JOBS_HAS_NEXT_PAGE = "JOBS_HAS_NEXT_PAGE"

export type job = {
    id: string,
    type: string,
    url: string,
    created_at: string,
    company: string,
    company_url: string,
    location: string,
    title: string,
    description: string,
    how_to_apply: string,
    company_logo: string
}

export interface JobsMakeRequest {
    type: typeof JOBS_MAKE_REQUEST,
}

export interface JobsGetData {
    type: typeof JOBS_GET_DATA,
    payload: job[]
}

export interface JobsError {
    type: typeof JOBS_ERROR,
    payload: string
}

export interface JobsHasNextPage {
    type: typeof JOBS_HAS_NEXT_PAGE,
    payload: boolean
}


export type JobsDispatchTypes = JobsMakeRequest | JobsGetData | JobsError | JobsHasNextPage