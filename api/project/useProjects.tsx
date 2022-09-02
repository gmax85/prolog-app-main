import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export enum ProjectLanguage {
  react = "react",
  node = "node",
  python = "python",
}

export enum ProjectStatus {
  info = "info",
  warning = "warning",
  error = "error",
}

export type Project = {
  id: string;
  name: string;
  language: ProjectLanguage;
  numIssues: number;
  numEvents24h: number;
  status: ProjectStatus;
};

async function getProject() {
  const { data } = await axios.get("http://prolog-api.profy.dev/project");
  return data;
}

export function useProjects() {
  return useQuery<Project[], Error>(["projects"], getProject, {
    initialData: [],
  });
}
