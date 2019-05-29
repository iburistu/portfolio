import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Page from '../components/Page';

class about extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="About" />
        <Page heading={"About Me"} subheading={"Someone's interested!"} button={false}/>
        <div id="main">
          <section id="content" className="main">
            
          </section>
        </div>
        
      </Layout>
    )
  }
}

export default about