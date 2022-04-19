import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Portal from "../Portal/Portal";
import { saveChatRooms } from "../../../features/chat";
import getChattingMessages from "../../utils/getChattingMessages";
import { format } from "date-fns";
import styled from "styled-components";

export default function ChatModal({ friend, setModalOn }) {
  const chatLists = useSelector((state) => state.chatRooms.chatRooms);
  const chattingMessages = getChattingMessages(friend.id, chatLists);

  const dispatch = useDispatch();

  const messageInfo = {
    id: -1,
  };

  function handleSend() {
    if (messageInfo.content) {
      messageInfo.date = new Date();
      dispatch(saveChatRooms(friend.id, messageInfo));
    }
  }

  return (
    <Portal>
      <Background>
        <Content>
          <Header>
            {friend.name}
            <CloseButton onClick={() => setModalOn(false)}>&#706;</CloseButton>
          </Header>
          {chattingMessages &&
            chattingMessages.messages.map((message) => (
              <>
              <TextBox>{message.content}</TextBox>
              <div>{format(message.date, "yyyy-MM-dd'('HH:mm')'")}</div>
              </>
            ))
          }
          <Textarea
            placeholder="내용을 입력하세요."
            value={messageInfo.content}
            rows="3"
            col="30"
            onChange={(ev) => messageInfo.content = ev.target.value}
          />
          <SendButton onClick={handleSend}>전송</SendButton>
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

const Header = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe045;
  border-bottom: 2px solid;
`;

const TextBox = styled.div`
  background-color: #fff29c;
  border: 1px solid;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`;

const Textarea = styled.textarea`
  position: sticky;
  bottom: 0;
  width: 98%;
  // left: 0;
  // right: 0;
  resize: none;
`;

const SendButton = styled.button`
  position: sticky;
  bottom: 0;
  right: 0;
`;

const CloseButton = styled.button`
  background-color: black;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
`;
