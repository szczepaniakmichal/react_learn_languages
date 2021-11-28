import React from 'react';
import { InputTask } from "./styles";

function Task({ value }) {
    return (
        <>
            <InputTask value={value} />
        </>
    );
}

export default Task;