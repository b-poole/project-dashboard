import type { Issue } from "../types";

// ---- Types ----

type IssuesState = {
  issues: Issue[];
};

type IssuesAction =
  | { type: "CREATE_ISSUE"; payload: Issue }
  | { type: "UPDATE_ISSUE"; payload: Issue }
  | { type: "DELETE_ISSUE"; payload: { id: string } };

// ---- Reducer ----

export function issuesReducer(state: IssuesState, action: IssuesAction): IssuesState {
  switch (action.type) {
    case "CREATE_ISSUE":
      return {
        ...state,
        issues: [...state.issues, action.payload],
      };

    case "UPDATE_ISSUE":
      return {
        ...state,
        issues: state.issues.map((issue) =>
          issue.id === action.payload.id ? action.payload : issue
        ),
      };

    case "DELETE_ISSUE":
      return {
        ...state,
        issues: state.issues.filter(
          (issue) => issue.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
}