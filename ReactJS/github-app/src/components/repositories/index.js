import React from "react";
import * as S from "./styled";
const Repositories = () => {
    return <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected">
        <S.WrapperTabList>
            <S.WrapperTab>
                Repositories
            </S.WrapperTab>
            <S.WrapperTab>
                Starred
            </S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperabPanel><Repositories name="app-ideas" linkToRepo="https://github.com/JefAlmeida1?tab=repositories"
        fullName="JefAlmeida1"/></S.WrapperabPanel>
        <S.WrapperabPanel><Repositories
        name="JefAlmeida1" linkToRepo="https://github.com/JefAlmeida1/JefAlmeida1"
        fullName="JefAlmeida1"/></S.WrapperabPanel>
    </S.WrapperTabs>;
};

export default Repositories;