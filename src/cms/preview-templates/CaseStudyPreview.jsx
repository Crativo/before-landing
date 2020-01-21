import React from 'react'
import StyleSheetInjector from './StyleSheetInjector'
import CaseStudy from '../../templates/CaseStudyTemplate'
import styled from 'styled-components'
import GlobalStyles from '../../styles/global';

const CoverImage = styled.img`
    max-width: 100%;
`

const CaseStudyPreview = ({ entry }) => {
    const caseStudy = entry.toJS().data
    return (
        <StyleSheetInjector>
            <React.Fragment>
                <GlobalStyles />
                <CoverImage src={caseStudy.coverImageHorizontal} />
                <CoverImage src={caseStudy.coverImageSquare} />
                <CaseStudy caseStudy={caseStudy} />
            </React.Fragment>
        </StyleSheetInjector>
    )
}

export default CaseStudyPreview