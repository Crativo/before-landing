import React from 'react'
import StyleSheetInjector from './StyleSheetInjector'
import CaseStudy from '../../templates/CaseStudyTemplate'
import styled from 'styled-components'
import GlobalStyles from '../../styles/global';

const CoverImage = styled.img`
    max-width: 100%;
`

const CaseStudyPreview = ({ entry }) => {
    return (
        <StyleSheetInjector>
            <React.Fragment>
                <GlobalStyles />
                <CoverImage src={entry.toJS().data.coverImageHorizontal} />
                <CoverImage src={entry.toJS().data.coverImageSquare} />
                <CaseStudy caseStudy={entry.toJS().data} />
            </React.Fragment>
        </StyleSheetInjector>
    )
}

export default CaseStudyPreview