import { HomeCnt, Search, InputCnt, FilterInput, LocationInput, FullTimeCheckbox } from './HomeElements'

const Home = () => {
    return (
        <HomeCnt>
            <Search>
                <InputCnt>
                    <FilterInput
                        placeholder="Filter by title, companies, expertise..."
                    >

                    </FilterInput>
                </InputCnt>
                <InputCnt>
                    <LocationInput
                        placeholder="Filter by location..."
                    >

                    </LocationInput>
                </InputCnt>
                <InputCnt>
                    <FullTimeCheckbox />
                    <label htmlFor="full-time-checkbox">
                        Full Time
                     </label>
                </InputCnt>
            </Search>
            Home
        </HomeCnt>
    )
}

export default Home
