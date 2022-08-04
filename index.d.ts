declare module "cz-custom" {
  export interface Option {
    name: string;
    value?: string;
  }
  export interface Options {
    types: Option[];
    scopes?: Option[];
    scopeOverrides?: { [type: string]: Option[] };
    messages?: {
      type?: string,
      scope?: string,
      customScope?: string,
      subject?: string,
      body?: string,
      breaking?: string,
      footer?: string,
      confirmCommit?: string,
    };
    allowCustomScopes?: boolean;
    customScopesName?: string;
    allowEmptyScopes?: boolean;
    emptyScopesName?: string;
    allowBreakingChanges?: string[];
    skipQuestions?: string[];
    appendBranchNameToCommitMessage?: boolean;
    ticketNumberPrefix?: string;
    breakingPrefix?: string;
    footerPrefix?: string;
    subjectLimit?: number;
  }
}
