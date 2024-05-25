import styled from "styled-components";


// const Wrapper = styled.div`
//     height : auto;
//     min-height : 100%;
//     padding-bottom : 60px;
// `

// const HomeContainer = styled.div`

// `

const FooterWrapper = styled.footer`
    height : 5vh;
    position : relative;
    transform : translateY(0%);
    border-top : 1px solid #248efe;
    color : white;

    display : flex;
    align-items : center;
    justify-content : center;
    background-color : #1876D1;

    font-size : 12px;
`

export default function Footer(){

    return(
        <FooterWrapper>
                ⓒCopyright  2024, Kunhwi Kim all rights reserved
        </FooterWrapper>
    )
}