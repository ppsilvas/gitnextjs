import { SpeedInsights } from "@vercel/speed-insights/next";

import Link from "next/link";

function Home() {
    return(<div>
       <h1>Home</h1>

        <Link href="/sobre">
            Acessar página Sobre
        </Link>
     </div>)
}

<SpeedInsights />
export default Home