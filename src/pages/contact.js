import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Page from '../components/Page'
import { navigate } from 'gatsby';

class contact extends React.Component {
  render() {

    return (
      <Layout>
        <Helmet title="Contact Me" />
        <Page heading={"Contact"} subheading={"Let's make the next big crazy thing together"} button={false}/>
        <div id="main">
          <section id="content" className="main">
            <form 
              onSubmit={event => {
                navigate("/success")}} 
                action="https://formspree.io/zachary.linkletter@maine.edu" 
                method="POST">
              <span>Email:</span>
              <input type="email" name="_replyto" required/>
              <span>Your Message:</span>
              <textarea name="message"> </textarea>
              <input type="submit" className="button special" value="Send"/>
              <input type="button" className="button" value="Go Back" style={{marginLeft:10}} onClick={() => {navigate("/")}} />
            </form>
          </section>
        </div>
        
      </Layout>
    )
  }
}

export default contact
