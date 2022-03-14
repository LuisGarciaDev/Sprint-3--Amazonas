import { typesCom} from "../types/types";

const initialState = {
    coments: [],
    updateItem: {
        nameuser: '',
        emailuser: '',
        title: '',
        opinion: '',
    }
}

export const comentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesCom.register:
            return {
                coments: [action.payload]
            }
        case typesCom.list:
            return {
                coments: [...action.payload]
            }
        case typesCom.update:
            return {
                ...state,
                updateItem: action.payload
            }
        case typesCom.delete:
            return {
                ...state,
                coments: state.coments.filter(com => com.emailuser !== action.payload)
            }

        default:
            return state

    }
}