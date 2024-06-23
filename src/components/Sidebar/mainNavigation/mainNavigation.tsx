import {ChevronDown, Home} from "lucide-react";

function MainNavigation() {
    return ( 
        <nav className="space-y-0.5">
            <a href="">
                <Home className="h-5 w-5 text-zinc-500"/>
                <span className="font-medium text-zinc-700 ">Home</span>
            <ChevronDown className=""/>
            </a>
        </nav>
     );
}

export default MainNavigation;