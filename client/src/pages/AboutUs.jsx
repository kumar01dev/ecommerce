import React from 'react';

function AboutUs() {

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24 flex justify-center items-center flex-col gap-8">
            <div className='flex justify-center items-center flex-col '> 
                <h1 className="text-xl md:text-3xl font-bold mb-4">World of Overlays</h1>
                <div className="flex flex-col items-center text-center">
                    <p className="text-md font-semibold md:text-lg">
                        We Created these clothes for those people who are here to conquer.
                    </p>
                    <p className="text-md font-semibold mb-10 md:mb-16 md:text-lg">
                        If this were a 1,000 years ago, we made these for the men who would come on horses and burn armies alone.
                    </p>
                </div>
            </div>

            {/* image */}
            <div>
                <img src="https://overlaysnow.com/cdn/shop/files/Banner-mobile-_9.jpg?v=1732191313&width=800" alt="banner" className="w-full h-auto" />
            </div>

            {/* some data */}
            <div>
            <div className="flex flex-col items-center text-center">
                    <p className="text-sm mb-2 md:text-lg">
                        <span className='font-bold'>Overlays</span> is a brand for those who can think beyond the confines of what is? and imagine what if?
                    </p>
                    <p className="text-sm mb-2 md:text-lg">
                        Through our unique approach to fabrics, design, color, and aesthetics, we transform and reshape perceptions, challenging conventional fashion and trends.
                    </p>
                    <p className="text-sm mb-2 md:text-lg">
                        We're constantly creating something new and unexpected.
                    </p>
                    <p className="text-sm mb-2 md:text-lg">
                    Our aesthetic embraces the absurd and the surreal.
                    </p>

                    <p className="text-sm mb-2 md:mb-16 md:text-lg">
                    <span className='font-bold'>Overlays</span> makes room for people to break free from the limitations of their world and escape into an alternate reality through our lens.
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <h1 className="text-3xl font-semibold mb-4">We believe</h1>
                <p className="text-lg mb-1 md:text-lg"> Trap Limit Us.</p>
                <p className="text-lg mb-1  md:text-lg"> Unlocks New Possibilites.</p>
                <p className="text-lg mb-1 md:text-lg">To Alter Reality.</p>
                <h1 className=" mt-5  text-2xl font-bold mb-4 md:text-2xl md:mt-10">
                    Our love and efforts are interwoven between the threads of each product we make.
                </h1>
            </div>
        </div>
    )
}

export default AboutUs;