import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Pinned from '../../pages/pinned/Pinned'
import SingleJobItem from '../../pages/singleJobItem/SingleJobItem'

import { MainCnt } from './MainElements'

const Main = () => {
    return (
        <MainCnt>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pinned" component={Pinned} />
                <Route path="/job-item/:id" component={SingleJobItem} />
            </Switch>
        </MainCnt>
    )
}

export default Main
