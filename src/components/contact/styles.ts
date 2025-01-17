import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap-reverse;
    align-items: center;
`

export const ContactLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.2em 1em;

    img {
        width: 30px;
    }

    span {
        font-size: 0.7em;
    }
`
