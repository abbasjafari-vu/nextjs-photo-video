"use client";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
    setSearch: Dispatch<SetStateAction<string>>;
};
export default function Search(props: Props) {
    const { setSearch } = props;

    return (
        <div className="mb-10 flex rounded-full border px-5 py-2">
            <input
                type="text"
                placeholder="Search people,nature,cat,..."
                className="flex-1 focus-within:outline-none"
                onChange={(e) => {
                    setSearch(e.currentTarget.value);
                }}
            />
        </div>
    );
}
