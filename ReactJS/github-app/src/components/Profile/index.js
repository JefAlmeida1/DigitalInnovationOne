import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from './styled'

const Profile = () => {

    const {githubState} = useGithub()

    useEffect(() => {
      console.log(githubState.user);

    }, [githubState.user]);
    
    return (
    <S.Wrapper>
          <S.WrapperInfoUser>
            <S.WrapperImage src={githubState.user.avatar} alt="avatar"/>
            <div>
            <h1>{githubState.user.name}</h1>
            <S.WrapperUserName>
            <h3>JefAlmeida1</h3>
            <a href={githubState.user.html_url} target="_blank" rel="noreferrer">
              {githubState.user.login}
            </a>
            </S.WrapperUserName>
            <S.WrapperUserGeneric>
            <h3>company:</h3>
            <span>{githubState.user.company}</span>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
            <h3>location:</h3>
            <span>{githubState.user.location}</span>
            </S.WrapperUserGeneric>
            <S.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a href={githubState.user.blog} target="_blank">
            {githubState.user.blog}
            </a>
            </S.WrapperUserGeneric>
            </div>
            <S.WrapperStatusCount>
            <div>
            <h4>Followers</h4>
            <span>{githubState.user.followers}</span>
            </div>
            <div>
            <h4>Following</h4>
            <span>{githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{githubState.user.public_gists}</span>
            </div>
            <div>
            <h4>Repos</h4>
            <span>{githubState.user.public_public_repos}</span>
            </div>
        </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>
    );
  };

export default Profile;