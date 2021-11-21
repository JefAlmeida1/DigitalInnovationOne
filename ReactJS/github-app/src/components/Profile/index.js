import React from "react";
import * as S from './styled'
const Profile = () => {
    return (
    <S.Wrapper>
          <S.WrapperInfoUser>
            <S.WrapperImage src="" alt="avatar"/>
            <div>
            <h1></h1>
            <S.WrapperUserName>
            <h3></h3>
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