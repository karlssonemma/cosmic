import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    font-size: 3rem;
    padding: .5em 0;
`;

function PageTitle(props) {
    return(
        <Header>{props.title}</Header>
    )
}

export default PageTitle;