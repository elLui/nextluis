import About from "@/app/about/page";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";



const inter = Inter( { subsets : [ "latin" ] } );

export default function Home() {
    return (
        
        <main>
            
            <h1>
                <About/>
            </h1>
        
        </main>
    
    );
}
