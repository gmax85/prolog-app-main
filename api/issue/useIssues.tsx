import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Issue } from "./issue.types";

async function getIssues() {
  const { data } = await axios.get("http://prolog-api.profy.dev/issue");
  return data;
}

export function useIssues() {
  return useQuery<Issue[], Error>(["issues"], getIssues, {
    initialData: [],
  });
}
