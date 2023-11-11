import {Role as Roles, Gender} from "@prisma/client"


enum EngpyPLanguage {
    PYTHON,
    JAVASCRIPT,
    JAVA,
    CPP,
    CP,
    CS
}


export {
    Roles,
    Gender,
    EngpyPLanguage
}