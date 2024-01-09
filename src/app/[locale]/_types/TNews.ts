import {TResponse} from "@/app/[locale]/_types/TResponse";

export interface TNewsData {
    id: number;
    attributes: {
        title: string;
        date: string;
        content: string;
        context: string;
        chips: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        locale: string;
        image_preview: TNewsImage
        image_main: TNewsImage
        image_content: TNewsImage
        image_sub_content: TNewsImage
        localizations: {
            data: TNewsData[]
        }
    };
}

export interface TNewsImage {
    data: {
        id: number;
        attributes: {
            name: string;
            alternativeText?: string; // Отмечен как опциональный
            caption?: string; // Отмечен как опциональный
            width: number;
            height: number;
            formats: {
                thumbnail: {
                    name: string;
                    hash: string;
                    ext: string;
                    mime: string;
                    path?: string; // Отмечен как опциональный
                    width: number;
                    height: number;
                    size: number;
                    url: string;
                };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl?: string; // Отмечен как опциональный
            provider: string;
            provider_metadata?: any; // Могут быть разные типы данных
            createdAt: string;
            updatedAt: string;
        };
    };
}

export interface TNews extends TResponse<TNewsData[]> {
}


export interface TNewsById extends TResponse<TNewsData> {
}