import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import styled from 'styled-components';
import PageTitle from '../../components/PageTitle';


function BlogPostContainer({ match }) {

  const [pageData, setPageData] = useState(null);


  useEffect(() => {
    const client = new Cosmic();
    const bucket = client.bucket({
      slug: process.env.BUCKET_SLUG,
      read_key: process.env.READ_KEY
    });


    bucket.getObject({
      slug: match.params.slug,
      props: 'slug,title,content'
    })

    .then(data => {
      setPageData(data.object);
    })

    .catch(error => {
      console.log(error);
    })


  }, []);

  function renderSkeleton() {
    return(
      <p>Loading...</p>
    );
  };

  function renderPage() {
    return(
      <main>
        <PageTitle title={pageData.title} />
        <div dangerouslySetInnerHTML={{__html: pageData.content}} />
      </main>
    )
  };

  return (
    <>
      {(pageData === null) ? renderSkeleton() : renderPage()}
    </>
  )
};

export default BlogPostContainer;