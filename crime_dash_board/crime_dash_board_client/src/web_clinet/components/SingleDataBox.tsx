import styled from "styled-components";
import { BindingDataType } from "../render/crime_branch/tab_render/TotalCrimeReport";
import { useState } from "react";

const Container = styled.div`
    padding : 15px;

    width: 300px;
    height : 100px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const Title = styled.h2`
    font-size : 16px;
    font-weight: bold;
`

const Content = styled.p`
    font-size : 30px;
`


export default function SingDataBox({ avg_title, data }: BindingDataType) {

    const objectData : string = data as string;

    // const replaceData = objectData.replace(",","");

    // const [single, setSingle] = useState<number>(parseInt(replaceData));

    // function onDataLoad() {

    //     console.log("on load")
    //     if(single >= 5000){
    //     let animating_data = single - 5000;

    //     for (let i = 0; animating_data === single; ++i) {
    //         if (animating_data !== single) {

    //             console.log(single);
    //             setSingle(animating_data += i)
    //         } else {
    //             break;
    //         }
    //     }
    // }
    // }

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