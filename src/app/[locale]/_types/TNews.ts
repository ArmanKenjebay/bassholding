import {TResponse} from "@/app/[locale]/_types/TResponse";

export interface TNewsData {
    id: number;
    attributes: {
        title: string;
        date: string;
        content: string;
        context?: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        localizations: {
            data: [];
        };
    };
}

export interface TNews extends TResponse<TNewsData[]> {

}

