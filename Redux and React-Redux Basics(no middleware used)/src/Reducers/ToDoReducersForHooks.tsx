//SAME AS TODOREDUCER BUT DONE HERE TO DIFFERNTIATE BETWEEN COMPONENT
//ALSO HELPFUL TO DEMONSTRATE COMBINE REDUCERS
import { produce } from "immer";
import { genericActionType } from "../Actions/ToDoActions";

type State = {
  count_values: number;
  values: genericActionType["payload"][];
  //Assiging values type to be same as array of genericActionType.payload
};

var intialState: State = {
  count_values: 0,
  values: []
};

export const toDoReducerHooks = (
  state: State = intialState,
  action: genericActionType
) => {
  //DOING MANUALLY
  switch (action.type) {
    case "addNew":
      var id: number = state.count_values + 1;
      var temp: genericActionType["payload"][] = state.values;
      console.log(temp);
      temp = temp.concat([action.payload]);
      return {
        ...state,
        count_values: state.count_values + 1,
        values: temp
      };

    //using immer

    case "remove":
      return produce(state, (draft) => {
        draft.count_values = state.count_values - 1;
        //will filter out elements that return true and give it to temp
        var temp = draft.values.filter((element) => {
          return element.work !== action.payload.work;
        });

        console.log("AfterDeleting", temp);
        draft.values = temp;
        console.log("AfterDeletingjhgg", draft.values);
      });

    case "edit":
      return produce(state, (draft) => {
        if (action.payload.id) {
          id = action.payload.id;
        }
        //findindex when gets true return will give the index as output
        var index_to_be_removed = draft.values.findIndex((element) => {
          return element.id === id;
          //will return true if element id is equal to given id
        });
        draft.values.splice(index_to_be_removed, 1);
      });

    default:
      return state;
  }
};
