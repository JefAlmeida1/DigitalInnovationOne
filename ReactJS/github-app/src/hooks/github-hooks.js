import { useContext } from "react";
import { GithubContext } from "../providers/github-providers";


const useGithub = () =>{
    const {githubState, getUser, getUserRepos, getUserSatrred} = useContext(GithubContext);

    return{githubState, getUser, getUserRepos, getUserSatrred};
}

export default useGithub;