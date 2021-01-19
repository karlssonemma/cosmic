import Cosmic from 'cosmicjs';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PageTitle from '../../components/PageTitle';

const Div = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    & > p {
        color: green;
        padding: 1em 3em;
    }
`;

function AboutContainer() {

    const [pageData, setPageData] = useState(null);

    useEffect(() => {

        const client = new Cosmic();
        const bucket = client.bucket({
            slug: process.env.BUCKET_SLUG,
            read_key: process.env.READ_KEY
        });

        bucket.getObject({
            slug: 'about',
            props: 'slug,title,content'
        })

        .then(data => {
            setPageData(data.object);
            console.log(data.object);
        })
        .catch(error => {
            console.log(error);
        })

    }, [])


    function renderSkeleton() {
        return(
            <p>...Loading</p>
        )
    };

    function renderPage() {
        return(
            <main>
                <PageTitle title={pageData.title} />
                <Div dangerouslySetInnerHTML={{__html: pageData.content}} />
            </main>
        )
    }

    return(
        <>
            {(pageData === null) ? renderSkeleton() : renderPage()}
        </>
    )
}

export default AboutContainer;