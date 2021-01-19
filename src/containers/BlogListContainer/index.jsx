import React, { useState, useEffect } from 'react';
import Cosmic from 'cosmicjs';
import styled from 'styled-components';
import PageTitle from '../../components/PageTitle';
import PostPreview from '../../components/PostPreview';


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
      props: 'slug,title,content,metadata'
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
        <PageTitle title={pageData.title} />
        <ul>
            {
                pageData.objects.map(item => {
                    return (
                        <PostPreview item={item} />
                    )
                })
            }
        </ul>
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