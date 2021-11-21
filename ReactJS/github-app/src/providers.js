import React from "react";
import { ResetCSS } from "./global/resetCSS";
import App from "./App";
import GithubProvider from "./providers/github-providers";

const Providers = () =>{
    return(
        <main>
        <GithubProvider>
        <ResetCSS/>
        <App />
        </GithubProvider>
        </main>
    )
}

export default Providers;