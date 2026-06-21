function Hero () {
    return (
        <div className="container relative mx-auto mt-16">
            <div className="h-px w-4 bg-yellow-500 absolute -left-8 top-3" />
            {/* <hr className="w-4 text-yellow-500 absolute " /> */}
            <p className="text-red-500 md:text-yellow-500">INDEPENDENT FINANCIAL SOLUTION</p>
            <p className="mt-8 text-white uppercase text-5xl font-semibold leading-15">know what you are <br /> buying into before <br /> the <span className="text-yellow-500"> money moves</span></p>
            <div className="border-l border-yellow-500 text-white mt-8 px-4">
                <p>Big Methodology</p>
                <p>Indepndent businesses</p>
                <p><span className="text-yellow-500">WITHOUT</span> the Big4 price tag.</p>
            </div>
            <div className="h-px w-240 z-0 bg-yellow-500 rotate-45 hidden md:block absolute right-0 top-70" />
        </div>
    )
}

export default Hero;