import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { BindingDataType, IProps } from "../render/crime_branch/tab_render/TotalCrimeReport";

const Container = styled.div`
    display : flex;
    align-items : center;

    width: 200px;
    height : 50px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`


export default function SingDataBox({name, data}:BindingDataType){

    const objectData =  data as object;
    return (
        <Container >
            <p>{name}</p>
            {Object.values(objectData).map((el, index) => (
                <p key={index}>{el}</p>
            ))}
        </Container>
    )
}

//     // const [single, setSingle] = useState<number>(single_data);

//     // if (data.values != undefined) {
//     //     Object.values(data.values).map((el) => {

//     //         if (el != "대분류") {
//     //             el.replace(",","")
//     //             a = parseInt(el);
//     //         }
//     //     })
//     // }

//     // console.log(a);

//     function onDataLoad() {
//         // let animating_data = single_data - 5000;

//         // for (let i = 0; animating_data === single_data; ++i) {
//         //     if (animating_data !== single_data) {
//         //         setSingle(animating_data += i)
//         //     } else {
//         //         break;
//         //     }
//         // }
//     }

// }