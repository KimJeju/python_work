import styled from "styled-components";
import { BindingDataType } from "../render/crime_branch/tab_render/TotalCrimeReport";

const Container = styled.div`
    padding : 15px;

    width: 300px;
    height : 100px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius : 1rem;
    transition : 0.5s;

    &:hover {
        background-color : white;

        box-shadow: rgba(0, 0, 0, 0.24) 3px 6px 16px;

    }

`

const Title = styled.h2`
    font-size : 16px;
    font-weight: bold;
`

const Content = styled.p`
    font-size : 30px;

    transition : 0.5s;

    &:hover {
        font-size : 40px;
    }

`


export default function SingDataBox({ avg_title, data }: BindingDataType) {

    const objectData : string = data as string;

    if (objectData.toString() === "대분류") {
        return (<></>)
    } else {
        return (
            <Container>
                {objectData.toString() === "대분류" ? "" : <Title>{avg_title}</Title>}

                {avg_title === "발생대비\n검거건수(%)" ? <Content>{objectData} %</Content> : <Content>{objectData} 건</Content>}
            </Container>
        )
    }


}