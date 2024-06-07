import axios from "axios";
import { ICrimeBranchSelected } from "../../Interfaces/IChartModel";
import { crime_branch_default_url } from "../../constants/GlobalConstant";
import { ITotalData } from "../../Interfaces/ICrimeBranchModel";

export async function default_data_on_load() {
    try{
        const total_crime =  await total_crime_branch_data();
        const sub_crime = await get_dynamic_subject_data("2024",1,"sub", "발생건수");
        const occurrences_data = await get_average_subject_data("average", "발생건수");
        const arrest_data = await get_average_subject_data("average","검거건수")
        const crime_branch_transition = await get_crime_branch_transiiton();
        return [total_crime, crime_branch_transition, sub_crime , occurrences_data,arrest_data,];

    }catch(error){
        console.log(error);
        return;
    }finally{
        console.log("All data return")
    }
}

export async function total_crime_branch_data() {
    const total_crime = await axios.get(
        crime_branch_default_url
    ).then((response) => {

        const total_Data : ITotalData = {
            average : response.data['average'],
            main : response.data['main'],
            sub : response.data['sub']
        }

        return total_Data;
    }).catch((error) => {
        console.log(error);
    })
    return total_crime;
}

export async function selected_branch_crime_data(args:ICrimeBranchSelected) {
    const response = await axios.get(
        crime_branch_default_url + "seleted?year=" + args.year +"&branch=" + args.branch
    ).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log(error);
    })
    return response;
}

export async function get_average_subject_data(category : string, subject : string) {
    const response = await axios.get(
        crime_branch_default_url + "average_subject?category=" + category + "&select_data=" + subject
    ).then((response) => {
        return response.data
    }).catch((error) => {
        console.log(error);
    })
    return response
}

export async function get_crime_branch_transiiton() {
    const response = await axios.get(
        crime_branch_default_url + "number_of_occurrences"
    ).then((response) => {
        return response.data
    }).catch((error) => {
        console.log(error)
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


