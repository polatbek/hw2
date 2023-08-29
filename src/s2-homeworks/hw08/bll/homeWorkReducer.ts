import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === "up") {
                return [...state].sort((a, b) => a.name.localeCompare(b.name)); // need to fix
            } else if (action.payload === "down") {
                return [...state].sort((a, b) => b.name.localeCompare(a.name));
            }
            return state;
        }

        case 'check': {
            if (action.payload >= 18) {
                return [...state].filter((f) => {
                    return f.age >= action.payload
                }) // need to fix
            }
            return state
        }
        default:
            return state
    }
}
