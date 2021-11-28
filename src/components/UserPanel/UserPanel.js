import React from 'react';

import { UserPanelWrapper } from "./styles";
import Button from "../Button";
import { white } from "../../configs/colors";

function UserPanel() {
    return (
        <UserPanelWrapper>
            <Button buttonText='Generate words in Polish' color={white} isBolder/>
            <Button buttonText='Generate words in English' color={white} isBolder/>
        </UserPanelWrapper>
    );
}

export default UserPanel;