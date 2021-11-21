import React from "react";
import * as S from './styled'
const Profile = () => {
    return (
    <S.Wrapper>
          <S.WrapperInfoUser>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/89365867?v=4" alt="avatar"/>
            <div>
            <h1></h1>
            <S.WrapperUserName>
            <h3>JefAlmeida1</h3>
            <a href="https://github.com/JefAlmeida1" target="_blank" rel="noreferrer">JefAlmeida1</a>
            </S.WrapperUserName>
            <span></span>
            </div>
            <S.WrapperStatusCount>
            <div>
            <h4>Follower</h4>
            <span>10</span>
            </div>
            <div>
            <h4>Starreds</h4>
            <span>10</span>
            </div>
            <div>
            <h4>Following</h4>
            <span>10</span>
          </div>
        </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>
    );
  };

export default Profile;