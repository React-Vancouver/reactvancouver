import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import moment from 'moment'
import { css } from 'react-emotion'
import {
  Hero,
  RVBox,
  RVButton,
  RVLink,
  RVCard,
  RVContainer,
  RVGrid,
  RVIcon,
  RVText,
  RVInput,
  MeetupGroup,
  Sponsors,
  Speaker,
  ContactUs,
  EventDetails,
} from 'components'
import Layout from 'layouts'
import { Colors, Buttons, Typography } from 'styles'

const styles = {
  statsTitle: css({
    fontSize: '5rem',
  }),
}

function getUpcomingEvent(events) {
  const upcomingEvents = events.filter(({ node: event }) =>
    moment(event.startDate).isAfter()
  )
  let upcomingEvent = { node: { location: {} } }
  if (upcomingEvents.length > 0) {
    upcomingEvent = upcomingEvents[0]
  }
  return upcomingEvent
}

function getPastEvents(events) {
  return events.filter(({ node: event }) => moment(event.startDate).isBefore())
}

function getSpeakersFromTalks(talks) {
  return talks.reduce((arr, talk) => {
    const { speakers } = talk.node
    if (!speakers) {
      return arr
    }
    return arr.concat(speakers)
  }, [])
}

function getTalksThisYear(talks) {
  return talks.reduce((sum, { node }) => {
    const startOfThisYear = moment().startOf('year')
    const talkDate = moment(node.date)

    if (talkDate.isAfter(startOfThisYear) && talkDate.isBefore()) {
      return sum + 1
    }
    return sum
  }, 0)
}

function getRecentSpeakers(speakers, count = 4) {
  return speakers.reduce((arr, speaker) => {
    const speakerExists = arr.find(s => s.id === speaker.id)
    if (speakerExists || arr.length === count) {
      return arr
    }
    return arr.concat(speaker)
  }, [])
}

function getOldestEvent(events) {
  return events[events.length - 1]
}

export default class IndexPage extends React.Component {
  scrollToEvents = () => {
    this.eventsWrapper.scrollIntoView({ behavior: 'smooth' })
  }

  _renderStats = ({ talks, pastEvents }) => {
    const talksThisYear = getTalksThisYear(talks)
    const oldestEvent = getOldestEvent(pastEvents)

    return (
      <RVContainer my8>
        <RVGrid columns3 alignCenter mb2>
          <RVText>
            <MeetupGroup>
              {group => (
                <RVText title className={styles.statsTitle}>
                  {group ? group.members.toLocaleString() : 'A few'}
                </RVText>
              )}
            </MeetupGroup>
            <RVText subheading>React Fans in Vancouver</RVText>
          </RVText>

          <RVBox>
            <RVText title className={styles.statsTitle}>
              {talksThisYear.toLocaleString()}
            </RVText>
            <RVText subheading>Talks This Year</RVText>
          </RVBox>
          <RVBox>
            <RVText title className={styles.statsTitle}>
              {pastEvents.length.toLocaleString()}
            </RVText>
            <RVText subheading>
              Events since {moment(oldestEvent.node.startDate).format('MMM Y')}
            </RVText>
          </RVBox>
        </RVGrid>
      </RVContainer>
    )
  }

  render() {
    const {
      allContentfulEvents,
      allContentfulTalks,
      allContentfulSponsors,
    } = this.props.data

    const events = allContentfulEvents && allContentfulEvents.edges
    const talks = allContentfulTalks && allContentfulTalks.edges
    const sponsors = allContentfulSponsors && allContentfulSponsors.edges

    const upcomingEvent = getUpcomingEvent(events)
    const pastEvents = getPastEvents(events)

    const speakers = getSpeakersFromTalks(talks)
    const recentSpeakers = getRecentSpeakers(speakers)

    return (
      <Layout
        theme="dark"
        title="Everything React in Vancouver"
        description="React Vancouver is a community of developers, designers, marketers and entrepreneurs that are passionate about React."
        keywords="react, vancouver, events, developers, frontend, development, frameworks"
      >
        <Hero onClickCTA={this.scrollToEvents} sponsors={sponsors} />

        {/* STATS */}

        {this._renderStats({ talks, pastEvents })}

        {/* EVENTS */}

        <RVContainer>
          <RVGrid
            gridTemplateColumns={['repeat(1,1fr)', '2fr 1fr', '2fr 1fr']}
            boxRef={node => (this.eventsWrapper = node)}
            my4
          >
            {upcomingEvent.length > 0 && (
              <RVCard p3>
                <EventDetails {...upcomingEvent.node} />
              </RVCard>
            )}
            <RVCard p3>
              <RVText subheading>Past Events</RVText>
              {pastEvents.map(({ node: event }, index) => {
                const eventListLimit = 8
                if (index >= eventListLimit) return null

                return (
                  <Link to={`/event/${event.slug}`} key={event.id}>
                    <RVText mb1>{event.title}</RVText>
                  </Link>
                )
              })}
            </RVCard>
          </RVGrid>
        </RVContainer>

        <RVBox mb4>
          <Sponsors mb3 sponsors={sponsors} />
        </RVBox>

        {/* SPEAKERS */}
        <RVContainer>
          <RVBox my8>
            <RVText subheading mx-auto alignCenter style={{ maxWidth: 700 }}>
              Latest speakers
            </RVText>
            <RVGrid columns4>
              {recentSpeakers.map(speaker => (
                <Speaker
                  key={speaker.id}
                  fixed={
                    speaker.profilePicture ? speaker.profilePicture.fixed : null
                  }
                  {...speaker}
                />
              ))}
            </RVGrid>
            <RVBox alignCenter>
              <Link to="/speakers">
                <RVButton>Discover All Speakers</RVButton>
              </Link>
            </RVBox>
          </RVBox>

          {/* CONTACT US */}

          <section id="contact-us">
            <ContactUs />
          </section>
        </RVContainer>
      </Layout>
    )
  }
}

export const query = graphql`
  query homeQuery {
    allContentfulEvents(
      limit: 1000
      sort: { fields: [startDate], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          venueName
          venueAddress
          startDate
          endDate
          description {
            childMarkdownRemark {
              html
            }
          }
          location {
            lat
            lon
          }
          talks {
            id
          }
          picaticEventId
        }
      }
    }
    allContentfulSponsors(limit: 1000, filter: { featured: { eq: true } }) {
      edges {
        node {
          id
          companyName
          companyUrl
          companyLogoDark {
            fixed(width: 200) {
              ...GatsbyContentfulFixed
            }
            hero: fixed(width: 148) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    allContentfulTalks(
      limit: 10
      sort: { fields: [date], order: DESC }
      filter: { date: { ne: null } }
    ) {
      edges {
        node {
          id
          date
          speakers {
            id
            firstName
            lastName
            jobTitle
            company
            profilePicture {
              fixed(width: 200, height: 200) {
                ...GatsbyContentfulFixed
              }
            }
            talks {
              id
              title
              date
            }
          }
        }
      }
    }
  }
`
