/* eslint-disable @typescript-eslint/no-explicit-any */
export type  DataModel<T, P> = {
    response: T,
    request: P,
    isLoading: boolean,
    error:any | string
  }

export type ResponseData<T> = {
  data: T;
  pagination: Pagination;
}

export type RequestData = {
  sort: string | undefined;
  keyword: string | undefined;
  page: number | undefined;
  limit: number | undefined;
  order: Order | undefined;
  itemsPerPage: number | undefined
};

export type DataNotFound = {
   code: 0,
   message: string
}

  export type Pagination = {
    links:        Link[];
    first:        number;
    current:      number;
    last:         number;
    previous:     number;
    next:         number;
    totalItems:   number;
    itemsPerPage: number;
}

export type Link = {
    url:    string;
    active: boolean;
    page:   number;
}
 
export type Order = "ASC" | "DESC" | undefined