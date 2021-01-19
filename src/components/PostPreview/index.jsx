import React from 'react';
import styled from 'styled-components';


const ContainerOne = styled.li`
    width: 100%;
    height: 300px;
    padding: 1em 1em;
    margin-bottom: 1em;
    border: 1px solid black;

    background-color: white;
    overflow: scroll;
`;

const Container = styled.div`
    height: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
`;

const PostHead = styled.h2`
    padding-bottom: .5em;
`;

const Image = styled.img`
    height: 200px;
`;

const Content = styled.div`
    height: 100px;
    overflow: hidden;
    box-shadow: inset 0 -10px 10px 0px black;
`;

function PostPreview(props) {
    return(
        <>
            <ContainerOne>
                <PostHead>{props.item.title}</PostHead>
                <Container>
                    {
                        props.item.metadata && <Image src={props.item.metadata.image.imgix_url} />
                    }
                    <Content dangerouslySetInnerHTML={{__html: `${props.item.content}`}} />
                    <a href={`/blog/${props.item.slug}`}>LINK</a>
                </Container>
            </ContainerOne>
        </>
    )
}

export default PostPreview;