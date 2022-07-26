import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

import "@fontsource/montserrat";

import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
    return (
        // Page
        <div className="mx-auto flex min-h-screen flex-col items-center justify-center [&>*]:w-96">
            <Navbar />
            <Skills />
            <Footer />
        </div>
    );
}
