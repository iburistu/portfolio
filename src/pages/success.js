import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Page from '../components/Page';

class success extends React.Component {
    render() {
  
      return (
        <Layout>
          <Helmet title="Success!" />
          <Page heading={"Thank you!"} subheading={"I'll be in contact shortly!"} button={true}/>
        </Layout>
        )
    }
}

export default success