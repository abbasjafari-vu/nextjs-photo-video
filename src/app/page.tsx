import Photos from "@/components/Photos";
import Videos from "@/components/Videos";

export default async function HomePage() {
    return (
        <main className="mx-auto max-w-6xl py-20">
            <div role="tablist" className="tabs tabs-lifted">
                <input
                    type="radio"
                    name="app-tabs"
                    role="tab"
                    className="tab"
                    aria-label="Photos"
                    defaultChecked
                />
                <div
                    role="tabpanel"
                    className="tab-content rounded-box border-base-300 bg-base-100 p-6"
                >
                    <Photos />
                </div>

                <input
                    type="radio"
                    name="app-tabs"
                    role="tab"
                    className="tab"
                    aria-label="Videos"
                />
                <div
                    role="tabpanel"
                    className="tab-content rounded-box border-base-300 bg-base-100 p-6"
                >
                    <Videos />
                </div>
            </div>
        </main>
    );
}
