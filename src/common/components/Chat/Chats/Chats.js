import React from 'react';
import { useSelector } from 'react-redux';
import sortChats from '../../../utils/sortChats';
import { format } from 'date-fns';
import styled from 'styled-components';

export default function Chats({ userInput, setChattingFriend, setModalOn }) {
  const friendLists = useSelector((state) => state.friends.friends);
  const chatLists = useSelector((state) => state.chatRooms.chatRooms);
  const sortedChatLists = sortChats(chatLists);

  function handleClick(chatId) {
    const friend = friendLists.find((friend) => friend.id === chatId);
    setChattingFriend(friend);
    setModalOn(true);
  }

  if (userInput) {
    const friend = friendLists.find((friend) => friend.name.toLowerCase() === userInput.toLowerCase());
    const chatRoom = !friend ? null : sortedChatLists.find((chat) => chat.id === friend.id);

    if (chatRoom) {
      return (
        <Table>
          <tbody>
            <tr onClick={() => handleClick(chatRoom.id)}>
              <ImgTd>
                <img
                  src='https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp'
                  alt='profile'
                  width='60px'
                  height='60px'
                />
              </ImgTd>
              <NameTd>{friend.name}</NameTd>
              <td>{chatRoom.messages[chatRoom.messages.length - 1].content}</td>
              <DateTd>{format(chatRoom.messages[chatRoom.messages.length - 1].date, "yyyy-MM-dd'('HH:mm')'")}</DateTd>
            </tr>
          </tbody>
        </Table>
      );
    }

    alert("입력하신 이름의 친구와의 채팅방이 없습니다.");
  }

  if (sortedChatLists.length) {
    return (
      <Table>
        <div>채팅 {sortedChatLists.length}</div>
        <tbody>
          {sortedChatLists.map((chat) => {
            const friend = friendLists.find((friend) => friend.id === chat.id);
            
            return (
              <tr key={chat.id} onClick={() => handleClick(chat.id)}>
                <ImgTd>
                  <img
                    src='https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp'
                    alt='profile'
                    width='60px'
                    height='60px'
                  />
                </ImgTd>
                <NameTd>{friend.name}</NameTd>
                <td>{chat.messages[chat.messages.length - 1].content}</td>
                <DateTd>{format(chat.messages[chat.messages.length - 1].date, "yyyy-MM-dd'('HH:mm')'")}</DateTd>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  return <div>채팅 {sortedChatLists.length}</div>
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid;
  }
`;

const ImgTd = styled.td`
  width: 15%;
`;

const NameTd = styled.td`
  // width: 70%;
`;

const DateTd = styled.td`
  // float: right;
`;
// const Button = styled.button`
//   background-color: #ffe98a;
//   border: none;
//   border-radius: 10px;
//   padding: 7px;
//   float: right;
// `;
