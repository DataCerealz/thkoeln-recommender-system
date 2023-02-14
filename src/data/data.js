import * as json_data from './cleaned_data.json'
export const data = json_data

let themengebieteData = []

let faecherData = []

let personenData = []

let schlagwoerterData = []

for (let i = 0; i < data.length; i++) {

    themengebieteData.push(data[i].Hauptthema)
    let themengebietContainer = data[i]

    for (let o = 0; o < themengebietContainer.Unterthemen.length; o++) {



        let currentFach = themengebietContainer.Unterthemen[o]

        faecherData.push(currentFach.Unterthema)

        for (let h = 0; h < currentFach.Professoren.length; h++) {
            let professorName = currentFach.Professoren[h].Name
            personenData.push(professorName)
            for (let schlagwortIndex = 0; schlagwortIndex < currentFach.Professoren[h].Schlagworte.length; schlagwortIndex++) {
                let schlagwort = currentFach.Professoren[h].Schlagworte[schlagwortIndex]
                schlagwoerterData.push(schlagwort)
            }
        }
    }
}

export const themengebieteArray = [...new Set(themengebieteData)]

export const faecherArray = [...new Set(faecherData)]

export const personenArray = [...new Set(personenData)]

export const schlagwoerterArray = [...new Set(schlagwoerterData)]