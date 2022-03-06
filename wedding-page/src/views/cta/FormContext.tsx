import * as _ from 'lodash'
import { createContext, ReactNode, useContext, useReducer } from 'react';

export type CtaFormPerson = {
    name: string
    foodChoice: string
    allergies: string
}

export type CtaFormValues = {
    willAttend: boolean
    hasSent: boolean
    numberOfAttendingPeople: number
    people: CtaFormPerson[]
};

export type CtaFormActionType = 'setNum' | 'setName'

export type CtaFormAction = {
    type: 'setNum',
    numberOfAttendingPeople: number
} | {
    type: 'setName',
    index: number,
    name: string
}

type CtaFormUpdater = (state: CtaFormValues, action: CtaFormAction) => CtaFormValues;

const setNumPeople = (state: CtaFormValues, action: CtaFormAction) => {
    if (action.type !== 'setNum') {
        return defaultFunc(state, action)
    }
    const nextState = _.cloneDeep(state)
    nextState.numberOfAttendingPeople = action.numberOfAttendingPeople
    while (nextState.people.length > nextState.numberOfAttendingPeople) {
        nextState.people.pop()
    }
    while (nextState.people.length < nextState.numberOfAttendingPeople) {
        nextState.people.push({
            name: '',
            foodChoice: '',
            allergies: ''
        })
    }
    return nextState
}

const setName = (state: CtaFormValues, action: CtaFormAction) => {
    if (action.type !== 'setName') {
        return defaultFunc(state, action)
    }
    const nextState = _.cloneDeep(state)
    if (action.index < 0 || state.people.length <= action.index) {
        throw new Error(`Cannot set name of person when index is ${action.index}, as only ${state.people.length} are expected`)
    }
    nextState.people[action.index].name = action.name
    return nextState
}

const defaultFunc = (state: CtaFormValues, action: CtaFormAction) => {
    throw new Error(`Tried to understand action ${action.type} but could not`)
}

const reducerFunctionMapping: {[key in CtaFormActionType]: CtaFormUpdater} = {
    'setNum': setNumPeople,
    'setName': setName
}

const reducer = (state: CtaFormValues, action: CtaFormAction) => {
    const func = reducerFunctionMapping[action.type] || defaultFunc
    return func(state, action)
}

const initialState: CtaFormValues = {
    willAttend: true,
    hasSent: false,
    numberOfAttendingPeople: 1,
    people: [{
        name: '',
        foodChoice: '',
        allergies: ''
    }]
}

const FormContext = createContext<{state: CtaFormValues, dispatch: (action: CtaFormAction) => void} | undefined>(undefined);

type FormProviderProps = {children: ReactNode}

export const FormProvider = (props: FormProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {state, dispatch}
    return (
        <FormContext.Provider value={value}>
            {props.children}
        </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(FormContext)
    if (context === undefined) {
        throw new Error('useForm must be used within a FormProvider')
    }
    return context
}