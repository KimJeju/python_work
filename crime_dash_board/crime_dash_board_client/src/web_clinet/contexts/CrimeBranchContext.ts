import axios from "axios";
import { useSetRecoilState } from "recoil";
import { subjectAverageState } from "../state/crime_branch/SubjectAverageState";
import { crime_branch_default_url } from "../globals/Envs";
import { useState } from "react";



export function get_average_subject_data(){
    const setAverageSubject = useSetRecoilState(subjectAverageState);

    const [isSuccess , setIsSucces ] = useState(true);

    if(isSuccess){
        axios.get(
            crime_branch_default_url + "average_subject?category=average&select_data=발생건수"
        ).then((response) => {
            setAverageSubject(response.data)
            setIsSucces(false);
        }).catch((error) => {
            console.log(error);
            setIsSucces(false)
        })
    }   
    return isSuccess;
}