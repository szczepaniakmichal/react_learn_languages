import React from 'react';

import Button from "../Button";
import { white } from "../../configs/colors";

function UserPanel() {
    return (
        <>
            <Button buttonText='Generate words in Polish' color={white} isBolder/>
            <Button buttonText='Generate words in English' color={white} isBolder/>
        </>
    );
}

export default UserPanel;