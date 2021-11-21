import React from "react";
import * as S from "./styled";

const Repositoryitem = ({name, linkToRepo, fullName}) => {
    return(
        <S.Wrapper>
        <S.WrapperTitle>{name}</S.WrapperTitle>
        <S.WrapperFullName>full name:</S.WrapperFullName>
        <S.WrapperLink href={linkToRepo} target="_blank">{fullName}</S.WrapperLink>
        </S.Wrapper>
        
    );
};

export default Repositoryitem;