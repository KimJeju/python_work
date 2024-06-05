import styled from "styled-components";
import { BindingDataType } from "../render/crime_branch/tab_render/TotalCrimeReport";
import { Grid } from "@mui/material";
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => {
    return {
      root: {
        padding : "15px",
        marginLeft : "1vw",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius : "1rem",
        transition : "0.2s",     
        '&hover' : {
            backgroundColor : "white",
            boxShadow: "rgba(0, 0, 0, 0.24) 3px 6px 16px"
        } 
    }};
});

const Container = styled.div`
    

    &:hover {
     

    }

`

const Title = styled.h2`
    font-size : 16px;
    font-weight: bold;
`

const Content = styled.p`
    font-size : 30px;

    transition : 0.2s;

    &:hover {
        font-size : 40px;
    }

`


export default function SingDataBox({ avg_title, data }: BindingDataType) {

    const objectData : string = data as string;
    const { classes } = useStyles();

    if (objectData.toString() === "대분류") {
        return (<></>)
    } else {
        return (
            <Grid item xs={2} className={classes.root}>
                {objectData.toString() === "대분류" ? "" : <Title>{avg_title}</Title>}

                {avg_title === "발생대비\n검거건수(%)" ? <Content>{objectData} %</Content> : <Content>{objectData} 건</Content>}
            </Grid>
        )
    }


}