import React from 'react'

import { useHistory } from 'react-router-dom'

import { PageNotFoundWrapper, GoBack, GoBackBtn, MessageCnt, MessageH4 } from './PageNotFoundElements'

import { BsArrowLeft } from 'react-icons/bs'

const PageNotFound = () => {

    const history = useHistory()

    return (
        <PageNotFoundWrapper>
            <GoBack>
                <GoBackBtn
                    onClick={() => history.goBack()}
                >
                    <BsArrowLeft className="arrow" />
                </GoBackBtn>
            </GoBack>
            <MessageCnt>
                <MessageH4>Page not found, Sorry...</MessageH4>
            </MessageCnt>
        </PageNotFoundWrapper>
    )
}

export default PageNotFound
