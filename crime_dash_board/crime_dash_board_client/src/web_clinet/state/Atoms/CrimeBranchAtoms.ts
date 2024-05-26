import axios from "axios";
import { atom, selector } from "recoil";

export const crimebranchState = atom<object>({
    key : "crime_branch",
    default : [],
})

export const fetchCrimeBranchState = selector({
    key : "fetch_crime_branch",
    get : async () => {
        const ack = await axios.get(
            "http://localhost:8892/crime_branch"
        );

        const data = ack.data

        return data;
    }
})