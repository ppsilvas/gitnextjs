import { SpeedInsights } from "@vercel/speed-insights/next";

import Link from "next/link";

function Sobre() {
    return(<div>
       <h1>Sobre</h1>

        <Link href="/">
            Acessar página Home
        </Link>
     </div>)
}

<SpeedInsights />
export default Sobre