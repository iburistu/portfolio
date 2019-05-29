import React from 'react';
import { Link } from 'gatsby';

function Page(props) {
    return(
        <header id="header">
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
            {props.button && <Link to="/" className="button special">Go Back</Link>}
        </header>
    )
}

export default Page;