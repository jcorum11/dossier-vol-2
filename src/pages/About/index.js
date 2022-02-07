import { Fragment } from 'react'
import styled from 'styled-components'
import Hero from '../../components/Jumbotron'

const About = () => {
  return (
    <Fragment>
      <Section id="about">
        <Hero />
        <Container>
          <Title data-testid="about">
            About
          </Title>
          <Paragraph>
            I have worked to overcome obstacles to become a full stack developer
            graduating from University of Utah’s boot camp near the top of the
            class, earning me a full-stack developer certificate with a background
            in Industrial/Organizational Psychology. I have studied diligently to
            learn and implement React, Redux, and GraphQL. I implemented all three
            of these in a project called Rolodeck where I worked with a team and
            implemented GraphQL for the entire project, programmed a QR scanner in
            React, and implemented Redux for easily transferable data.
          </Paragraph>
        </Container>
      </Section>
    </Fragment>
  )
}

const Section = styled.section`
padding: 3rem 0 0 0;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(2, auto);
`

const Container = styled.div`
padding: 0 3rem 3rem 3rem;
grid-row: 2;
grid-column: 2 / 5;
`

const Title = styled.h1`
margin-top: 0;
text-align: center;
font-size: 3rem;
color: #B4B4B4;
`

const Paragraph = styled.p`
font-size: 1.5rem;
background-color: #B4B4B4;
padding: 1rem;
border-radius: 1rem;
`

export default About
