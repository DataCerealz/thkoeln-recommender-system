import * as json_data from './cleaned_data.json'
export const data = json_data.default

let themengebieteData = []

let faecherData = []

let personenData = []

let schlagwoerterData = []

for (let i = 0; i < data.length; i++) {

    themengebieteData.push(data[i].Hauptthema)
    let themengebietContainer = data[i]



    let currentFach = themengebietContainer.Unterthemen

    faecherData.push(currentFach.Unterthema)

    for (let h = 0; h < currentFach.Professoren.length; h++) {
        let currentProf = currentFach.Professoren[h]
        let professorName = currentProf.Name
        personenData.push(professorName)
        for (let schlagwortIndex = 0; schlagwortIndex < currentProf.Schlagworte.length; schlagwortIndex++) {
            let schlagwort = currentProf.Schlagworte[schlagwortIndex]
            schlagwoerterData.push(schlagwort)
        }
    }

}

export const themengebieteArray = [...new Set(themengebieteData)]

export const faecherArray = [...new Set(faecherData)]

export const personenArray = [...new Set(personenData)]

export const schlagwoerterArray = [...new Set(schlagwoerterData)]
