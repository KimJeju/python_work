import axios from "axios";
import { crime_branch_default_url } from "../globals/Constants";
import { ICrimeBranchSelected } from "../Interfaces/IChartModel";

export async function selected_branch_crime_data(args:ICrimeBranchSelected) {

    console.log(args);
    const response = await axios.get(
        crime_branch_default_url + "seleted?year=" + args.year +"&branch=" + args.branch
    ).then((response) => {

        console.log(response.data);
        return response.data;
    }).catch((error) => {
        console.log(error);
    })

    return response;
}

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

export async function get_dynamic_subject_data(year : string, branch : number, category : string, subject : string) {
    const response = await axios.get(
        crime_branch_default_url + "dynamic_subject?year=" + year + "&branch=" + branch + "&category=" + category + "&subject=" + subject
    ).then((response) => {
        return response.data
    }).catch((error) => {
        console.log(error)
    })

    return response
}


