"use client";
import React, { useEffect, useState } from "react";
import pexels from "@/libs/pexels";
import type { Videos } from "@/types";
import Search from "./details/Search";

export default function Videos() {
    const [videos, setVideos] = useState<Videos>();
    const [search, setSearch] = useState("people");
    const [page, setPage] = useState(1);

    useEffect(() => {
        void void pexels.videos
            .search({ query: search, per_page: 40, size: "small", page })
            .then((res) => {
                if (res) {
                    console.log(res);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    setVideos(res);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [search, page]);

    return (
        <>
            <Search setSearch={setSearch} />
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {videos?.videos.map((video) => {
                    const { video_files, id } = video;
                    return (
                        <video key={id} width="350" controls>
                            <source
                                src={video_files[2]?.link}
                                type={video_files[2]?.file_type}
                            ></source>
                        </video>
                    );
                })}
            </div>
            <div className="join flex justify-center pt-10">
                <button
                    type="button"
                    className="btn join-item"
                    onClick={() => {
                        setPage((page) => {
                            return page >= 0 ? page - 1 : 1;
                        });
                    }}
                >
                    «
                </button>
                <button type="button" className="btn join-item">
                    Page {page}
                </button>
                <button
                    type="button"
                    className="btn join-item"
                    onClick={() => {
                        setPage((page) => {
                            return page >= 0 ? page + 1 : 1;
                        });
                    }}
                >
                    »
                </button>
            </div>
        </>
    );
}
