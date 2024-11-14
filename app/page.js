"use client";

import "@/styles/styles.css"
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const {clientX, clientY} = event;
            const {innerWidth, innerHeight} = window;

            const xPercent = clientX / innerWidth;
            const yPercent = clientY / innerHeight;

            const hue = 229 + (xPercent * 20 - 10); // Adjust hue based on x position
            const lightness = 89 + (yPercent * 10 - 5); // Adjust lightness based on y position

            const gradient = `linear-gradient(135deg, hsla(${hue}, 63%, ${lightness}%, 1) 0%, hsla(${hue}, 57%, ${lightness - 12}%, 1) 100%)`;

            document.getElementById("page").style.background = gradient;
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div id="page" className="relative h-dvh cursor-text w-full">
                <div className="relative min-h-[1140px] max-h-[1140px]">
                    <div className="absolute top-[400px] left-[350px] z-10">
                        <h1 className="text-[250px] select-none font-sans text-slate-600">MOAT</h1>
                    </div>
                    {/*<div className="fixed bottom-0 left-0 w-full h-full bg-[#0000002a]">*/}
                    {/*</div>*/}
                    <div className="absolute top-[230px] left-[725px]">
                        <h2 className="text-yellow-100 text-6xl w-[410px] select-none hover:text-[#fdf5e6] text-right">Technology
                            studio that builds
                            websites.</h2>
                    </div>
                    {/*text-[#fdf5e6]*/}
                    <div
                        className="absolute ml-10 mt-10 flex flex-col w-[666px] h-[456px] min-h-fit p-10 bg-[#ffffff9a] text-green-950 rounded-r-2xl select-none">
                        <p className="text-[32px] text-[#4f9062] text-center">
                            We work with clients to bring their digital landscape to life. From start to finish, we
                            collaborate on creating the pixel-perfect site that is unique to you.
                        </p>
                        <div className="text-[14px] text-slate-600">
                            <h2 className="mt-5 italic">Services</h2>
                            <p>
                                eCommerce, Blog, Portfolio, Custom Web Development, Technical Consulting, and more.
                            </p>

                            <h2 className="mt-5 italic">Technologies</h2>
                            <p>
                                React, Next.js, CMS, Shopify and more.
                            </p>

                            <h2 className="mt-5 italic">Select Clients</h2>
                            <p>Black Ink | RabbitWolf Creative | Weston Colton | MF9.World </p>

                            <h2 className="mt-5 italic">Location</h2>
                            <p>Serving clients everywhere</p>
                        </div>
                    </div>
                    <div className="absolute bottom-64 left-[200px] ml-10">
                        <p className="text-[91px] font-serif text-orange-400 hover:text-blue-950">About</p>
                    </div>
                    <div className="absolute bottom-9 left-0 ml-10">
                        <p className="text-[91px] text-[#3c8a8a] hover:text-blue-900">Connect</p>
                    </div>
                </div>
            </div>
        </>
    );
}
