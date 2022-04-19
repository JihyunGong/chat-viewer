import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Portal from "../Portal/Portal";
import { saveChatRooms } from "../../../features/chat";
import styled from "styled-components";

export default function ChatModal({ friend, setModalOn }) {
  const chatLists = useSelector((state) => state.chatRooms);
  console.log(chatLists);

  const dispatch = useDispatch();

  const messageInfo = {
    id: -1,
  };

  function handleSend() {
    messageInfo.date = new Date();
    dispatch(saveChatRooms(friend.id, messageInfo));
  }

  return (
    <Portal>
      <Background>
        <Content>
          <HeaderDiv>{friend.name}</HeaderDiv>
          <hr />
          <Textarea
            placeholder="내용을 입력하세요."
            value={messageInfo.content}
            rows="3"
            col="30"
            onChange={(ev) => messageInfo.content = ev.target.value}
          />
          <SendButton onClick={handleSend}>전송</SendButton>
          <CloseButton onClick={() => setModalOn(false)}>&#706;</CloseButton>
        </Content>
      </Background>
    </Portal>
  );
}

const Background = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  width: 350px;
  height: 500px;
  position: relative;
  overflow: scroll;
  background: #f5f5f5;
  border: 3px solid;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Textarea = styled.textarea`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  resize: none;
`;

const SendButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const CloseButton = styled.button`
  background-color: black;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
`;
