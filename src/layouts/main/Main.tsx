import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Pinned from '../../pages/pinned/Pinned'
import SingleJobItem from '../../pages/singleJobItem/SingleJobItem'
import PageNotFound from '../../pages/pageNotFound/PageNotFound'

import { MainCnt } from './MainElements'

const Main = () => {
    return (
        <MainCnt>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pinned" component={Pinned} />
                <Route path="/job-item/:id" component={SingleJobItem} />
                <Route component={PageNotFound} />
            </Switch>
        </MainCnt>
    )
}

export default Main
