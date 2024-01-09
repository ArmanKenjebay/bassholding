export interface TMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}


export interface TResponse<T> {
    data: T
    meta: TMeta
}