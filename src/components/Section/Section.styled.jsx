import styled from '@emotion/styled';


export const Global = styled.section`
    display: grid;
    /*//todo: Можна не передавати props, а  брати їх з theme */
    /* background-color: ${props => props.theme.bсgColor.old}; */
`;

export const TitleLugrasimoBold = styled.h2`
/*//todo: .lugrasimoBold */
    font-family: "Lugrasimo", cursive;
    font-weight: 700;
    font-style: normal;
/*//todo: .title */
    margin-bottom: 24px;
    font-size: 48px;
    text-align: center;
    /* color: #b25501; */
    color: ${props => props.theme.fontColor.mainTitle};
`;
