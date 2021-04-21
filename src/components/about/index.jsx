import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { AboutSection, Avatar, Title, Text, SubTitle } from './style'
import { SectionIntro, ContainerLayout, ResumeButton } from '../common'

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.webp" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar
                fluid={data.placeholderImage.childImageSharp.fluid}
                alt="user photo"
                title="Near Ponce City Market, ATL. Look at that lil baby stache!"
              />
              <SubTitle>Fullstack & Embedded Engineer</SubTitle>
            </div>
            <div>
              <Title> Hello, I’m Zack! </Title>
              <Text>
                {' '}
                I'm a fullstack and embedded developer currently working on IoT
                at scale.{' '}
              </Text>
              <Text>
                {' '}
                I'm a strong believer in coffee at all times of the day, the
                power of data in our everyday lives, and that Donkey Kong is the
                only character worth playing in the Smash games.
              </Text>
              <Text> Currently based out of Bangor, ME. </Text>
              <ResumeButton
                download
                href="https://resume.linkletter.dev"
                target="_blank"
              >
                {' '}
                Download resume{' '}
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
