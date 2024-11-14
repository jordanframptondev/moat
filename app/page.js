import "@/styles/styles.css"

export default function Home() {
    return (
        <>
            <div id="page" className="relative w-dvh h-dvh cursor-text">
                <div className="absolute bottom-14 left-48">
                    <h1 className="text-[200px] select-none">MOAT</h1>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-[#0000002a]">
                </div>
                <div className="absolute top-1/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-[#fdf5e6] text-6xl w-[410px] select-none">Technology studio that builds
                        websites.</h2>
                </div>
                <div
                    className="absolute mt-10 flex flex-col min-w-[558px] w-1/2 max-w-[666px] h-[496px] p-10 bg-[#0000004a] text-[#fdf5e6] rounded-r-2xl select-none">
                    <p>
                        We work with clients to bring their digital landscape to life. From start to finish, we
                        collaborate on creating the pixel-perfect site that is unique to you.
                    </p>

                    <h2 className="mt-5 italic">Services</h2>
                    <p>
                        eCommerce, Blog, Portfolio, Custom Web Development, Technical Consulting, and more.
                    </p>

                    <h2 className="mt-5 italic">Technologies</h2>
                    <p>
                        React, Next.js, CMS, Shopify and more.
                    </p>

                    <h2 className="mt-5 italic">Select Clients</h2>
                    <p>Black Ink | RabbitWolf Creative | Weston Colton | Clearstone Builders | MF9.World </p>

                    <h2 className="mt-5 italic">Location</h2>
                    <p>Based in Utah, serving clients everywhere</p>
                </div>
                <div className="absolute bottom-9 right-10">
                    <p className="text-[100px] text-blue-950 hover:text-blue-900">Connect</p>
                </div>
            </div>
        </>
    );
}
