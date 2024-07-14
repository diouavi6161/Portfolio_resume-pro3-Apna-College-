import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
const Header =()=>{
    return(
        <header className="py-8 xl:py-12 text-gray-50 bg-purple-100">
            < div className="container mx-auto text-black flex justify-between items-center">
            <Link href="/">
            <h1 className="text-4xl text-neutral-700">
                Dipen <span>Pradhan</span>
                
            </h1>
            </Link>
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/resume">
                <Button>Hire me</Button>
                </Link>
            </div>

            {/*mobile nav */}
            <div className="xl:hidden">
                <MobileNav/>

            </div>

            
            </div>
        </header>
    )
}

export default Header