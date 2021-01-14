import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';

function HomeContainer() {

  const [pageData, setPageData] = useState(null);


  useEffect(() => {
    const client = new Cosmic();
    const bucket = client.bucket({
      slug: process.env.BUCKET_SLUG,
      read_key: process.env.READ_KEY
    });

    bucket.getObject({
      slug: 'home',
      props: 'slug,title,content'
    })

    .then(data => {
      setPageData(data.object);
      console.log(data);
    })

    .catch(error => {
      console.log(error);
    })


  }, []);

  function renderSkeleton() {
    return(
      <p>Loading...</p>
    );
  }

  function renderPage() {
    return(
      <main>
        <h1>{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{__html: pageData.content}} />
      </main>
    )
  }

  return (
    <>
      {(pageData === null) ? renderSkeleton() : renderPage()}
    </>
  )
};

export default HomeContainer;