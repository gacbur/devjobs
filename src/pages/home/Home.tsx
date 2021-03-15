import { HomeCnt, Search, InputCnt, FilterInput, LocationInput } from './HomeElements'


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
                <InputCnt></InputCnt>
            </Search>
            Home
        </HomeCnt>
    )
}

export default Home
