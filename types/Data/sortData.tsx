import {
    African,
    SouthAmerican,
    Oceanian,
    NorthAmerican,
    Australian,
    Asia,
    Countries
} from './data'

export default class Region {

    static getContinet() {
        return ['African', 'Oceanian', 'Australian', 'Asia', 'SouthAmerican', 'NorthAmerican']
    }
    static getCountryFromContinent(continent: string) {
        const Country: {[key: string]: {[key: string]: string}} = {
            African: {...African},
            SouthAmerican: {...SouthAmerican},
            Oceanian: {...Oceanian},
            NorthAmerican: {...NorthAmerican},
            Australian: {...Australian},
            Asia: {...Asia}

        }
        // console.log(Country)
        return Country[continent]
    }
    static getCountryCodeFromCountry(continent: string, country: string) {
        const Country: {[key: string]: {[key: string]: string}} = {
            African: {...African},
            SouthAmerican: {...SouthAmerican},
            Oceanian: {...Oceanian},
            NorthAmerican: {...NorthAmerican},
            Australian: {...Australian},
            Asia: {...Asia}

        }
        return Country[continent][country]
    }
}
