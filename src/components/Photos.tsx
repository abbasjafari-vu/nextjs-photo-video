"use client";
import React, { useEffect, useState } from "react";
import pexels from "@/libs/pexels";
import type { Photos } from "@/types";
import Search from "./details/Search";
import Link from "next/link";

export default function Photos() {
    const [photos, setPhotos] = useState<Photos | undefined>();
    const [search, setSearch] = useState("people");

    const [page, setPage] = useState(1);

    useEffect(() => {
        void pexels.photos
            .search({ query: search, per_page: 40, size: "medium", page })
            .then((res) => {
                if (res) {
                    console.log(res);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    setPhotos(res);
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
                {photos?.photos.map((photo) => {
                    return (
                        <Link
                            href={`/photo/${photo.id}`}
                            key={`photos-${photo.id}`}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={photo.src.medium}
                                alt={photo.alt}
                                className="h-auto w-full"
                            />
                        </Link>
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
