import SideNav from "../globals/SideNav";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
 width : calc(100% - 7vw);
 height : 100vh;
 background-color : red;
 
 margin : 5%;
`

export default function Branch(){

   
    const ack = get_default_crime_branch()

    console.log(ack);

    return(
        <>
         <SideNav />
         <Container>
            
         </Container>
        </>
    )
}

async function get_default_crime_branch(){
    try{
        const ack = await axios.get("http://localhost:8891/crime_branch")
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        
        return ack
    } catch (error){
        console.error(error)
    }
};

