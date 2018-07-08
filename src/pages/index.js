import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import moment from 'moment'
import {
  Hero,
  MeetupGroup,
  RVBox,
  RVButton,
  RVCard,
  RVContainer,
  RVGrid,
  RVInput,
  RVText,
  SponsorsSection,
} from 'components'
import { contactUsSection } from 'pages/contact-us'
import Layout from 'layouts'

const renderStats = data => {
  const talksThisYear = data.allContentfulEvents.edges.reduce(
    (sum, { node: event }) => {
      const startOfThisYear = moment().startOf('year')
      const numTalks = event.talks && event.talks.length
      const startDate = moment(event.startDate)

      if (startDate.isAfter(startOfThisYear) && startDate.isBefore()) {
        return sum + numTalks
      }
      return sum
    },
    0
  )

  const totalEvents = data.allContentfulEvents.edges.reduce(
    (sum, { node: event }) => {
      if (moment(event.startDate).isBefore()) {
        sum++
      }
      return sum
    },
    // 6 Meetups that are not in Contentful
    6
  )

  return (
    <RVContainer my8>
      <RVGrid columns3 alignCenter mb2>
        <RVText>
          <MeetupGroup>
            {group => (
              <RVText title>
                {group ? group.members.toLocaleString() : 'A few'}
              </RVText>
            )}
          </MeetupGroup>
          <RVText subheading>React Lovers in Vancouver</RVText>
        </RVText>

        {/* https://github.com/gatsbyjs/gatsby/issues/4033 */}
        <RVBox>
          <RVText title>{talksThisYear.toLocaleString()}</RVText>
          <RVText subheading>Talks This Year</RVText>
        </RVBox>
        <RVBox>
          <RVText title>{totalEvents.toLocaleString()}</RVText>
          <RVText subheading>Events since Jan 2016</RVText>
        </RVBox>
      </RVGrid>
    </RVContainer>
  )
}

const IndexPage = ({ data }) => {
  const upcomingEvent = data.allContentfulEvents.edges.filter(
    ({ node: event }) => moment(event.startDate).isAfter()
  )[0]
  const pastEvents = data.allContentfulEvents.edges.filter(({ node: event }) =>
    moment(event.startDate).isBefore()
  )

  return (
    <Layout theme="dark">
      <Hero />
      {renderStats(data)}
      <RVContainer>
        <SponsorsSection sponsors={data.allContentfulSponsors.edges} />

        <RVGrid
          gridTemplateColumns={['repeat(1,1fr)', '2fr 1fr', '2fr 1fr']}
          my4
        >
          <RVCard p3>
            <RVText subheading>Upcoming Event</RVText>
            <RVText mb2>{upcomingEvent.node.title}</RVText>
            <RVButton style={{ alignSelf: 'bottom' }}>Get Tickets</RVButton>
          </RVCard>
          <RVCard p3>
            <RVText subheading>Past Events</RVText>
            {pastEvents.map(({ node: event }, index) => {
              if (index >= 8) return null
              return (
                <Link to={`/event/${event.id}`} key={event.id}>
                  <RVText mb1>{event.title}</RVText>
                </Link>
              )
            })}
          </RVCard>
        </RVGrid>

        <RVBox mb4>
          <RVText heading alignCenter>
            About Us
          </RVText>

          <RVText>
            Join us if you are developers who want to learn more about React
            and/or is looking for a job, recruiters who want to hire React
            developers, or entrepreneurs who wish to meet new people. We host
            monthly meetups which starts off with presentations about
            React/React Native, and end with social time for people to get to
            know each other. We also host workshops and hack nights for people
            from any level of React/React Native. The organizers are React
            enthusiasts who have been working with React since its early stages.
            This community has been, and will continue to be one of the best
            ReactJS meetups in Vancouver.
          </RVText>
        </RVBox>

        {contactUsSection}
      </RVContainer>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query homeQuery {
    allContentfulEvents(
      limit: 1000
      sort: { fields: [startDate], order: DESC }
    ) {
      edges {
        node {
          id
          title
          startDate
          talks {
            id
          }
        }
      }
    }
    allContentfulSponsors(limit: 1000) {
      edges {
        node {
          id
          companyName
          companyLogoDark {
            resolutions(width: 200) {
              width
              height
              src
            }
          }
        }
      }
    }
  }
`
