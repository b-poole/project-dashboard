import { useReducer } from "react";
import type { ReactNode } from "react";
import { IssuesContext } from "./IssuesContext";
import { issuesReducer } from "./issuesReducer";
import { mockIssues } from "../data/mockIssue";

export function IssuesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(issuesReducer, {
    issues: mockIssues,
  });

  return (
    <IssuesContext.Provider
      value={{
        issues: state.issues,
        createIssue: (issue) =>
          dispatch({ type: "CREATE_ISSUE", payload: issue }),
        updateIssue: (issue) =>
          dispatch({ type: "UPDATE_ISSUE", payload: issue }),
        deleteIssue: (id) =>
          dispatch({ type: "DELETE_ISSUE", payload: { id } }),
      }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
