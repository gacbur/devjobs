import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react'

import { paramsProps } from '../../pages/home/Home'

import { SearchFilterItemsCnt, ResultsBlock, ResultBlocksCnt, ResultsP } from './SearchFilterItemsElements'

type SearchFilterItemsProps = {
    paramsInfo: paramsProps,
    inputValues: paramsProps,
    setParams: Dispatch<SetStateAction<paramsProps>>,
    setInputValues: Dispatch<SetStateAction<paramsProps>>,
    setPage: Dispatch<SetStateAction<number>>
}

const SearchFilterItems: FC<SearchFilterItemsProps> = ({ paramsInfo, setParams, inputValues, setInputValues, setPage }) => {

    const { description, location, full_time } = paramsInfo

    const [searchResultsValues, setSearchResultsValues] = useState<paramsProps>({
        description: description,
        location: location,
        full_time: full_time
    })

    const handleSetParams = (e: any) => {
        const id = e.target.id
        if (id === 'description' || 'location') {
            setSearchResultsValues({
                ...paramsInfo,
                [id]: '',
            })
            setInputValues({
                ...inputValues,
                [id]: ''
            })
        } else {
            setSearchResultsValues({
                ...paramsInfo,
                [id]: false,
            })
            setInputValues({
                ...inputValues,
                [id]: false
            })
        }
    }

    useEffect(() => {
        setPage(1)
        setParams({
            ...searchResultsValues
        })
    }, [searchResultsValues, setParams, setPage])

    return (
        <>
            { description !== '' || location !== '' || full_time ?
                <SearchFilterItemsCnt>
                    <ResultsP>
                        filters:
            </ResultsP>
                    <ResultBlocksCnt>
                        {description !== "" &&
                            <ResultsBlock
                                id="description"
                                onClick={handleSetParams}
                                value={searchResultsValues.description}
                            >
                                {description.length > 20 ? description.slice(0, 20) + "..." : description}
                            </ResultsBlock>}
                        {location !== "" &&
                            <ResultsBlock
                                id="location"
                                onClick={handleSetParams}
                                value={searchResultsValues.location}
                            >
                                {location.length > 20 ? location.slice(0, 20) + "..." : location}
                            </ResultsBlock>}
                        {full_time &&
                            <ResultsBlock
                                id="full_time"
                                onClick={handleSetParams}
                                value={searchResultsValues.full_time}
                            >
                                {full_time && 'FullTime'}
                            </ResultsBlock>}
                    </ResultBlocksCnt>
                </SearchFilterItemsCnt>
                :
                null
            }
        </>
    )
}

export default SearchFilterItems
