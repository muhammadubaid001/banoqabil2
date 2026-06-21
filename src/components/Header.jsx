function Header() {
    return (
        <div className="flex overflow-hidden bg-black z-100 justify-between p-4 border-b border-gray-700">
            <h1 className="text-white">Some Changes <span className="text-yellow-400">PARTNERS</span></h1>
            <div className="hidden md:flex gap-6 text-gray-300">
                <a>Home</a>
                <a>Abou`t</a>
                <a>Contact</a>
                <a>Team</a>
                <a>Services</a>
                <a>Language</a>
            </div>
            <button className="bg-yellow-500 text-white px-10 py-2 text-sm ">Login</button>
        </div>
    )
}

export default Header;