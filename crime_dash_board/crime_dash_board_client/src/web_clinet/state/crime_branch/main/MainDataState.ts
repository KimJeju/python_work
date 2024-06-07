import { atom } from "recoil";

export const mainDataOccurrenceState = atom({
    key : "main_data_occurrence",
    default : []
})

export const mainDataArrestState = atom({
    key : "main_data_arrest",
    default : []
})

export const mainDataArrestPeopleState = atom({
    key : "main_data_arrest_people",
    default : []
})

export const mainDataArrestPersentState = atom({
    key : "main_data_arrest_persent",
    default : []
})

export const mainDataLegalEntityState = atom({
    key : "main_data_legal_entity",
    default : []
})