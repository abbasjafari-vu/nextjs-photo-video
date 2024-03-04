import { type ReactNode } from "react";

export type Children = { children: ReactNode };

export type PhotosParams = { params: { id: number } };

export type Photos = {
    photos: {
        alt: string;
        avg_color: string;
        height: number;
        id: number;
        photographer: string;
        photographer_id: number;
        photographer_url: string;
        src: {
            original: string;
            large2X: string;
            large: string;
            landscape: string;
            medium: string;
            portrait: string;
            small: string;
            tiny: string;
        };
        url: string;
        width: number;
    }[];
    total_results: number;
    next_page: string;
    page: number;
    pre_page: number;
};

export type Videos = {
    videos: {
        duration: number;
        avg_color: string;
        full_res: string;
        height: number;
        id: number;
        image: string;
        tags: [];
        user: { id: number; name: string; url: string };
        video_files: {
            id: number;
            quality: string;
            file_type: string;
            width: number;
            height: number;
            fps: number;
            link: string;
        }[];
        video_pictures: {
            id: number;
            nr: number;
            picture: string;
        }[];
    }[];
    total_results: number;
    next_page: string;
    page: number;
    pre_page: number;
};
