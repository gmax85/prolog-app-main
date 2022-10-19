import { useQuery } from "react-query";
import axios from "axios";
import { Project } from "../types/project.types";

async function getProject() {
  const { data } = await axios.get("http://prolog-api.profy.dev/project");
  return data;
}

export function useProjects() {
  return useQuery<Project[], Error>(["projects"], getProject, {
    initialData: [],
  });
}
