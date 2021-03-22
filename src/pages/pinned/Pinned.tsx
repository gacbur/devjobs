import { useSelector, useDispatch } from 'react-redux'

import { RootStore } from '../../redux/Store'

import PinnedJobItem from '../../components/pinnedJobItem/PinnedJobItem'

import { PinnedCnt, TitleCnt, TitleH4, ItemList } from './PinnedElements'
import { Item } from '../singleJobItem/SingleJobItemElements'


const Pinned = () => {

    const pinnedJobs = useSelector((state: RootStore) => state.pinnedJobs.pinnedJobs)

    return (
        <PinnedCnt>
            <TitleCnt>
                <TitleH4>Pinned jobs</TitleH4>
            </TitleCnt>
            <ItemList>
                {pinnedJobs.length > 0 ?
                    pinnedJobs.map(item => {
                        return <PinnedJobItem key={item.id} item={item} />
                    })
                    :
                    null
                }
            </ItemList>
        </PinnedCnt>
    )
}

export default Pinned
