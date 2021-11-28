import React from 'react';

import { TaskWrapper, Title } from './styles';
import { WrapperCol } from "../Container/styles";
import Task from "../Task";

function WorkSection({data}) {

    const tasks = data.map( (word) => {
        return (
            <TaskWrapper>
                <Task value={word.en}/>
                <Task value={word.pl}/>
            </TaskWrapper>
        )
    } )

    return (
        <WrapperCol>
            <Title>Let's learn! :)</Title>
            <WrapperCol>
                {tasks}
            </WrapperCol>
        </WrapperCol>
    );
}

export default WorkSection;