import * as _ from "lodash";
import {
    createContext,
    ReactNode,
    useContext,
    useReducer,
    useCallback,
} from "react";

export type CtaFormPerson = {
    name: string;
    foodChoice: string;
    allergies: string;
};

export type FormState = "input" | "isSending" | "hasSent";

export type CtaFormValues = {
    willAttend: boolean;
    status: FormState;
    numberOfAttendingPeople: number;
    people: CtaFormPerson[];
};

export type CtaFormActionType =
    | "setNum"
    | "setName"
    | "setAttending"
    | "setIsSending"
    | "setHasSent"
    | "setFood"
    | "setAllergies";

export type CtaFormAction =
    | {
          type: "setNum";
          numberOfAttendingPeople: number;
      }
    | {
          type: "setName";
          index: number;
          name: string;
      }
    | {
          type: "setAttending";
          willAttend: boolean;
      }
    | {
          type: "setHasSent";
      }
    | {
          type: "setIsSending";
      }
    | {
          type: "setFood";
          index: number;
          food: string;
      }
    | {
          type: "setAllergies";
          index: number;
          allergies: string;
      };

type CtaFormUpdater = (
    state: CtaFormValues,
    action: CtaFormAction
) => CtaFormValues;

const checkOkIndexOrThrow = (
    index: number,
    numberOfAttendingPeople: number
) => {
    if (index < 0 || numberOfAttendingPeople <= index) {
        throw new Error(
            `Cannot set attribute when index is ${index}, as only ${numberOfAttendingPeople} are expected`
        );
    }
};

const setNumPeople = (
    state: CtaFormValues,
    action: CtaFormAction & { type: "setNum" }
) => {
    const nextState = _.cloneDeep(state);
    nextState.numberOfAttendingPeople = action.numberOfAttendingPeople;
    while (nextState.people.length > nextState.numberOfAttendingPeople) {
        nextState.people.pop();
    }
    while (nextState.people.length < nextState.numberOfAttendingPeople) {
        nextState.people.push({
            name: "",
            foodChoice: "all",
            allergies: "",
        });
    }
    return nextState;
};

const setAttending = (
    state: CtaFormValues,
    action: CtaFormAction & { type: "setAttending" }
) => {
    const nextState = _.cloneDeep(state);
    nextState.willAttend = action.willAttend;
    return nextState;
};

const setHasSent = (
    state: CtaFormValues,
    action: CtaFormAction & { type: "setHasSent" }
) => {
    const nextState = _.cloneDeep(state);
    nextState.status = "hasSent";
    return nextState;
};

const setIsSending = (
    state: CtaFormValues,
    action: CtaFormAction & { type: "setIsSending" }
) => {
    const nextState = _.cloneDeep(state);
    nextState.status = "isSending";
    return nextState;
};

const setFood = (
    state: CtaFormValues,
    action: CtaFormAction & { type: "setFood" }
) => {
    const nextState = _.cloneDeep(state);
    checkOkIndexOrThrow(action.index, state.numberOfAttendingPeople);
    nextState.people[action.index].foodChoice = action.food;
    return nextState;
};

const setName = (
    state: CtaFormValues,
    action: CtaFormAction & { type: "setName" }
) => {
    const nextState = _.cloneDeep(state);
    checkOkIndexOrThrow(action.index, state.numberOfAttendingPeople);
    nextState.people[action.index].name = action.name;
    return nextState;
};

const setAllergies = (
    state: CtaFormValues,
    action: CtaFormAction & { type: "setAllergies" }
) => {
    const nextState = _.cloneDeep(state);
    checkOkIndexOrThrow(action.index, state.numberOfAttendingPeople);
    nextState.people[action.index].allergies = action.allergies;
    return nextState;
};

const defaultFunc = (state: CtaFormValues, action: CtaFormAction) => {
    throw new Error(`Tried to understand action ${action.type} but could not`);
};

const reducerFunctionMapping: { [key in CtaFormActionType]: CtaFormUpdater } = {
    setNum: setNumPeople as CtaFormUpdater,
    setName: setName as CtaFormUpdater,
    setAttending: setAttending as CtaFormUpdater,
    setIsSending: setIsSending as CtaFormUpdater,
    setHasSent: setHasSent as CtaFormUpdater,
    setFood: setFood as CtaFormUpdater,
    setAllergies: setAllergies as CtaFormUpdater,
};

const reducer = (state: CtaFormValues, action: CtaFormAction) => {
    const func = reducerFunctionMapping[action.type] || defaultFunc;
    return func(state, action);
};

const initialState: CtaFormValues = {
    willAttend: true,
    status: "input",
    numberOfAttendingPeople: 1,
    people: [
        {
            name: "",
            foodChoice: "all",
            allergies: "",
        },
    ],
};

const FormContext = createContext<
    | { state: CtaFormValues; dispatch: (action: CtaFormAction) => void }
    | undefined
>(undefined);

type FormProviderProps = { children: ReactNode };

export const FormProvider = (props: FormProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {props.children}
        </FormContext.Provider>
    );
};

export const useForm = () => {
    const context = useContext(FormContext);
    if (context === undefined) {
        throw new Error("useForm must be used within a FormProvider");
    }
    const { dispatch } = context;
    const setNumPeople = useCallback(
        (num: number) => {
            dispatch({
                type: "setNum",
                numberOfAttendingPeople: num,
            });
        },
        [dispatch]
    );
    const setName = useCallback(
        (index: number, name: string) => {
            dispatch({
                type: "setName",
                index,
                name,
            });
        },
        [dispatch]
    );
    const setAllergies = useCallback(
        (index: number, allergies: string) => {
            dispatch({
                type: "setAllergies",
                index,
                allergies,
            });
        },
        [dispatch]
    );
    const setFood = useCallback(
        (index: number, food: string) => {
            dispatch({
                type: "setFood",
                index,
                food,
            });
        },
        [dispatch]
    );
    const setIsSending = useCallback(() => {
        dispatch({
            type: "setIsSending",
        });
    }, [dispatch]);
    const setHasSent = useCallback(() => {
        dispatch({
            type: "setHasSent",
        });
    }, [dispatch]);
    const setAttend = useCallback(
        (willAttend: boolean) => {
            dispatch({
                type: "setAttending",
                willAttend,
            });
        },
        [dispatch]
    );
    return {
        ...context,
        setNumPeople,
        setName,
        setAllergies,
        setFood,
        setHasSent,
        setAttend,
        setIsSending,
    };
};
