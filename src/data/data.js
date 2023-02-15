import * as json_data from './cleaned_data.json'
export const data = json_data.default

export const _data = data.reduce((acc, cur) => {
    const existingObj = acc.find(obj => obj.Hauptthema === cur.Hauptthema && obj.Unterthemen.Unterthema === cur.Unterthemen.Unterthema);
    if (existingObj) {
      existingObj.Unterthemen.Professoren = existingObj.Unterthemen.Professoren.concat(cur.Unterthemen.Professoren);
    } else {
      acc.push(cur);
    }
    return acc;
  }, []);

  

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
