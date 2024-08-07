/* eslint-disable */
// @ts-nocheck

import "./App.css";
import logo from './assets/logo.svg'

function App() {
    return (
        <main className="min-h-screen display-flex align-center justify-center">
            <div className="display-flex flex-column align-center justify-center">
                <div className="mb-3">
                    <amalitech-breadcrumb separator="arrow">
                        <amalitech-breadcrumb-item
                        >
                            Home
                        </amalitech-breadcrumb-item>
                        <amalitech-breadcrumb-item active href="/">
                            Landing Page
                        </amalitech-breadcrumb-item>
                    </amalitech-breadcrumb>
                </div>

                <div className="display-flex flex-row justify-space-between">
                    <div className="border border-neutral-100 bg-white rounded-md p-2">
                        <p className="text-secondary">
                            {" "}
                            Getting started with vite and ads
                        </p>
                    </div>
                    <img
                        src={logo}
                        alt="logo"
                    />
                </div>

                <div className="mt-5">
                    <p className="text-2xl text-center text-secondary mb-3 font-semibold">
                        Amalitech Design System Vite Template
                    </p>
                    <div className="display-flex justify-center">
                        <amalitech-button
                            variant="secondary"
                            icon-position="right"
                            size="medium"
                            disabled="false"

                            onClick={() => window.location.href="https://amalitech-design-system.amalitech-dev.net"}
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_1_2569)">
                                    <path
                                        d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                                        stroke="#696F8C"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M3.5 12H20.33"
                                        stroke="#696F8C"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_2569">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>{" "}
                            Learn More
                        </amalitech-button>
                    </div>
                </div>

                <div className="mt-5 gap-1">
                    <p className="text-sm">Rate your experience:</p>
                    <amalitech-star-rating animated></amalitech-star-rating>
                </div>
            </div>
        </main>
    );
}

export default App;
