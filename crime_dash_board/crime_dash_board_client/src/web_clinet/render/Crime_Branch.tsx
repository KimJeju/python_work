import SideNav from "../globals/SideNav";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useCallback, useState } from "react";


import { useRecoilValueLoadable } from "recoil";
import { fetchCrimeBranchState } from "../state/Atoms/CrimeBranchAtoms";

const Container = styled.div`
 width : calc(100% - 7vw);
 height : 100vh;
 background-color : red;
 
 margin : 5%;
`

export default function Crime_Branch() {

    //비동기적으로 데이터 가져오기
    const data = useRecoilValueLoadable(fetchCrimeBranchState);

    console.log(data.contents);

    // // const data = useRecoilValue(crimebranchState);
    // const [crimeData, setCrimeData] = useState([]);

    // async function get_default_crime_branch(): Promise<object | undefined | void> {

    //     try {
    //         await axios.get("http://localhost:8892/crime_branch")
    //             .then((response) => {
    //                 setCrimeData(response.data);
    //                 console.log("data send")
    //             }).catch((error) => {
    //                 console.log(error);
    //             })
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    // useEffect(() => {
    //     get_default_crime_branch();
    // }, [])
    
    // console.log(crimeData);

    return (
        <>
            <SideNav />
            <Container>

            </Container>
        </>
    )
}


