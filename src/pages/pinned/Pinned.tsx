import { useSelector } from 'react-redux'

import { RootStore } from '../../redux/Store'

import PinnedJobItem from '../../components/pinnedJobItem/PinnedJobItem'

import { PinnedCnt, TitleCnt, TitleH4, ItemList, NoPinnedJobsFound } from './PinnedElements'


const Pinned = () => {

    const pinnedJobs = useSelector((state: RootStore) => state.pinnedJobs.pinnedJobs)

    return (
        <PinnedCnt>
            <TitleCnt>
                <TitleH4>Pinned jobs</TitleH4>
            </TitleCnt>

            {pinnedJobs.length > 0 ?
                <ItemList>
                    {
                        pinnedJobs.map(item => {
                            return <PinnedJobItem key={item.id} item={item} />
                        })
                    }
                </ItemList>
                :
                <NoPinnedJobsFound>
                    No Jobs were pinned yet...
                </NoPinnedJobsFound>
            }

        </PinnedCnt>
    )
}

export default Pinned
