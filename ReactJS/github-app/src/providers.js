import React from "react";
import { ResetCSS } from "./global/resetCSS";
import App from "./App";
import GithubProvider from "./providers/github-providers";

const Providers = () =>{
    return(
        <main>
        <GithubProviders>
        <ResetCSS/>
        <App />
        </GithubProviders>
        </main>
    )
}

export default Providers;