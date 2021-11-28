import React from 'react';

import UserPanel from "../UserPanel";
import WorkSection from "../WorkSection";

import { WrapperCol, WrapperRow } from './styles';

function Container() {
    const data = [
        {
            en: "mother",
            pl: "mama",
        },
        {
            en: "father",
            pl: "tata",
        },
        {
            en: "daughter",
            pl: "córka",
        },
        {
            en: "son",
            pl: "syn",
        },
    ];

    return (
        <>
            <WrapperRow>
                <UserPanel />
            </WrapperRow>
            <WrapperCol>
                <WorkSection data={data}/>
            </WrapperCol>
        </>
    );
}

export default Container;