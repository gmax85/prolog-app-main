type PageMeta = {
  currentPage: number;
  limit: number;
  totalItems: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type Page<T> = {
  items: Array<T>;
  meta: PageMeta;
}


// export type { Page } from "./page.types"