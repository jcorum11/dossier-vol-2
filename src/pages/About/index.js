import { Fragment, lazy } from 'react'
import styled from 'styled-components'
import { colors } from '../../variables'
import firstImage from './assets/IMG_1011.webp'
import secondImage from './assets/IMG_3175.webp'

const SectionTitle = lazy(() => import('../../components/SectionTitle'))

const About = () => {
  const mobileFormat = window.innerWidth <= 768 ? true : false
  return (
    <Fragment>
      <Section id="about">
        <Container>
          <SectionTitle name='about' />
          <RowContainer>
            <FirstImage></FirstImage>
            <FirstParagraphContainer>
              <FirstParagraph>
                I have worked to overcome obstacles to become a full stack developer
                graduating from University of Utah’s boot camp near the top of the
                class, earning me a full-stack developer certificate with a background
                in Industrial/Organizational Psychology.
              </FirstParagraph>
            </FirstParagraphContainer>
          </RowContainer>
          <RowContainer>
            {!mobileFormat ? (
              <Fragment>
                <SecondParagraphContainer>
                  <SecondParagraph>
                    I have studied diligently to
                    learn and implement React, Redux, and GraphQL. I implemented all three
                    of these in a project called Rolodeck where I worked with a team and
                    implemented GraphQL for the entire project, programmed a QR scanner in
                    React, and implemented Redux for easily transferable data.
                  </SecondParagraph>
                </SecondParagraphContainer>
                <SecondImage></SecondImage>
              </Fragment>
            ) : (
              <Fragment>
                <SecondImage></SecondImage>
                <SecondParagraphContainer>
                  <SecondParagraph>
                    I have studied diligently to
                    learn and implement React, Redux, and GraphQL. I implemented all three
                    of these in a project called Rolodeck where I worked with a team and
                    implemented GraphQL for the entire project, programmed a QR scanner in
                    React, and implemented Redux for easily transferable data.
                  </SecondParagraph>
                </SecondParagraphContainer>
              </Fragment>
            )}
          </RowContainer>
        </Container>
      </Section>
    </Fragment>
  )
}

const Section = styled.section`
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(2, auto);
scroll-snap-align: start;
`

const Container = styled.div`
grid-row: 2;
grid-column: 2 / 5;
`

const FirstParagraph = styled.p`
background-color: black;
color: ${colors.pink};
margin: 0;
text-align: center;
font-size: 2rem;
line-height: 4rem;
width: 50vw;
@media screen and (max-width: 768px) {
  font-size: 1rem;
  width: 100vw;
  line-height: 3rem;
}
@media screen and (min-width: 1020px) and (max-width: 1440px) {
  font-size: 1.25rem;
}
`

const FirstImage = styled.div`
background-image: url(${firstImage});
background-size: cover;
background-position: center 70;
height: 50vh;
`

const RowContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 50vw) fit-content(50vw);
@media screen and (max-width: 768px) {
  display: block;
}
`

const SecondImage = styled(FirstImage)`
background-image: url(${secondImage});
background-position: center;
`

const SecondParagraph = styled(FirstParagraph)`
background-color: #BDAE91;
`

const FirstParagraphContainer = styled.div`
padding: 0 6rem;
background-color: black;
display: flex;
align-items: center;
@media screen and (max-width: 786px) {
  padding: 0 1rem;
  height: 50vh;
}
`

const SecondParagraphContainer = styled(FirstParagraphContainer)`
background-color: #BDAE91;
`

export default About
