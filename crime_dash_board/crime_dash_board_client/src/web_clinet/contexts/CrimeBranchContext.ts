import axios from "axios";
import { crime_branch_default_url } from "../globals/Envs";



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