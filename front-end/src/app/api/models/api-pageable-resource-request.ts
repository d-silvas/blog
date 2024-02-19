export interface PageableResource<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  isLast: boolean;
}

export interface ApiPageableResourceRequest<T> {
  data: PageableResource<T> | null;
  loading: boolean;
  error: any;
}
