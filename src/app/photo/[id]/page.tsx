"use client";

import pexels from "@/libs/pexels";
import { PhotosParams } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = PhotosParams;
export default function Photo(props: Props) {
    const {
        params: { id },
    } = props;

    const [photo, setPhoto] = useState<any>();

    useEffect(() => {
        pexels.photos.show({ id }).then((r) => {
            console.log(r);

            setPhoto(r);
        });
    }, [id]);

    return (
        <div className="flex h-screen justify-center items-center">
            {photo ? (
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={photo.src.medium} alt={photo.alt} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Photo!</h2>
                        <p>{photo.alt}</p>
                        <div className="card-actions justify-end">
                            <Link href={"/"} className="btn btn-primary">
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                "loading..."
            )}
        </div>
    );
}
