import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import styled from 'styled-components';


function BlogListContainer() {

  const [pageData, setPageData] = useState(null);


  useEffect(() => {
    const client = new Cosmic();
    const bucket = client.bucket({
      slug: process.env.BUCKET_SLUG,
      read_key: process.env.READ_KEY
    });

    bucket.getObjects({
      type: 'blog-posts',
      limit: 5,
      props: 'slug,title'
    })

    .then(data => {
      setPageData(data);
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
  };

  function renderPage() {
    return(
      <main>
        <h1>My Blog Posts</h1>
        <ul>
            {
                pageData.objects.map(item => {
                    return (
                        <li>
                            <a href={`/blog/${item.slug}`}>{item.title}</a>
                        </li>
                    )
                })
            }
        </ul>
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

export default BlogListContainer;