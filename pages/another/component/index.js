import React from 'react'
import Link from 'next/link'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import Info from '../../../components/Info'

const Component = props => (
  <div>
    <Helmet
      title="Ini another | Hello next.js!"
      meta={[
        { property: 'og:title', content: 'ini another title' },
        { property: 'og:description', content: 'ini another description' },
      ]}
    />
    <h1>Another Page</h1>
    <Info {...props} />
    <br />
    <nav>
      {/* eslint-disable jsx-a11y/anchor-is-valid */}
      <Link href="/"><a>Go back home</a></Link><br />
      <Link href="/other"><a>Navigate to other</a></Link><br />
      <Link href="/about"><a>Navigate to about</a></Link>
      {/* eslint-enable jsx-a11y/anchor-is-valid */}
      <br /><br />
      <button onClick={() => { props.setPing() }}>Start {props.isPinging ? 'pong' : 'ping'}ing</button>
      <br /><br />
      <button onClick={() => { props.stopFetching() }}>Stop fetching</button>
      <br /><br />
      <button onClick={() => { props.startFetching() }}>Start fetching</button>
    </nav>
  </div>
)

Component.propTypes = {
  isPinging: PropTypes.bool.isRequired,
  setPing: PropTypes.func.isRequired,
  stopFetching: PropTypes.func.isRequired,
  startFetching: PropTypes.func.isRequired,
}
export default Component
