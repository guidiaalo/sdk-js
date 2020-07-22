import { Base64, RunTypeOptions, GenericID, TagsObj, Query } from "../../common/common.types";

interface ScriptFile {
  name: string;
  content: Base64;
  language: RunTypeOptions;
}

interface AnalysisCreateInfo {
  name: string;
  description?: string | null;
  interval?: string;
  run_on?: "tago" | "external";
  file_name?: string;
  runtime?: RunTypeOptions;
  active?: true;
  profile?: GenericID;
  variables?: {
    key: string;
    value: string | number | boolean;
  };
  tags?: TagsObj | TagsObj[];
}

interface AnalysisInfo extends Readonly<AnalysisCreateInfo> {
  id: GenericID;
  token: string;
  last_run: string;
  created_at: string;
  updated_at: string;
  locked_at: any;
  console?: string[];
}

type AnalysisQuery = Query<AnalysisInfo, "name" | "active" | "run_on" | "last_run" | "created_at" | "updated_at">;

export { AnalysisInfo, AnalysisCreateInfo, ScriptFile, AnalysisQuery };
