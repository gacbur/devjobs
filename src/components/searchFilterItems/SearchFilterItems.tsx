import { FC, Dispatch, SetStateAction, useState, useEffect } from 'react'

import { paramsProps } from '../../pages/home/Home'

import { SearchFilterItemsCnt, ResultsBlock, ResultBlocksCnt, ResultsP } from './SearchFilterItemsElements'

type SearchFilterItemsProps = {
    paramsInfo: paramsProps,
    inputValues: paramsProps,
    setParams: Dispatch<SetStateAction<paramsProps>>,
    setInputValues: Dispatch<SetStateAction<paramsProps>>
}

const SearchFilterItems: FC<SearchFilterItemsProps> = ({ paramsInfo, setParams, inputValues, setInputValues }) => {

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
        setParams({
            ...searchResultsValues
        })
    }, [searchResultsValues, setParams])

    return (
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
                        {description}
                    </ResultsBlock>}
                {location !== "" &&
                    <ResultsBlock
                        id="location"
                        onClick={handleSetParams}
                        value={searchResultsValues.location}
                    >
                        {location}
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
    )
}

export default SearchFilterItems
