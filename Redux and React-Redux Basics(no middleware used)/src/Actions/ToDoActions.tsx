//ACTION CREATORS
export type genericActionType = {
  type: "addNew" | "remove" | "edit";
  payload: {
    work: String;
    id?: number;
  };
};
export const addNewToDo = (payload: genericActionType["payload"]) => {
  return {
    type: "addNew",
    payload: payload
  };
};

export const removeToDo = (payload: genericActionType["payload"]) => {
  return {
    type: "remove",
    payload: payload
  };
};

export const alterToDo = (payload: genericActionType["payload"]) => {
  return {
    type: "edit",
    payload: payload
  };
};
