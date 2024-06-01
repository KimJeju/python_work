import axios from "axios";
import { crime_branch_default_url } from "../globals/Constants";



export async function get_average_subject_data() {

    const response = await axios.get(
        crime_branch_default_url + "average_subject?category=average&select_data=발생건수"
    ).then((response) => {
        return response.data
    }).catch((error) => {
        console.log(error);
    })

    return response
}

export async function get_dynamic_subject_data() {

    const response = await axios.get(
        crime_branch_default_url + "dynamic_subject?year=2024&branch=1&category=main&subject=발생건수"
    ).then((response) => {
        return response.data
    }).catch((error) => {
        console.log(error)
    })

    return response
}