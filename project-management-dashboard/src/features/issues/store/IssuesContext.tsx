import { createContext } from "react";
import type { Issue } from "../types";



// ---- Context ----

type IssuesContextValue = {
  issues: Issue[];
  createIssue: (issue: Issue) => void;
  updateIssue: (issue: Issue) => void;
  deleteIssue: (id: string) => void;
};

export const IssuesContext = createContext<IssuesContextValue | undefined>(undefined);


