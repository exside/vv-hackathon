import * as React from "react";
import {observer} from "mobx-react-lite";
import ButtonLink from "../../shared/ButtonLink";
import {ArrowLeftOutlined} from "@ant-design/icons";
import Content from "../../shared/Content";

const Exercises = (props) => {
  return (
    <Content type={'wide'}>
      <h1 style={{marginLeft: -30}}>
        <ButtonLink href={'/'} type={'link'} icon={<ArrowLeftOutlined/>}/>
        {'Exercises'}
      </h1>
    </Content>
  )
};

export default observer(Exercises);
