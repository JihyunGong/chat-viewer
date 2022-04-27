import React from 'react';
import { useSelector } from 'react-redux';
import sortByDates from '../../../utils/sortByDates';
import getOnChattingFriend from '../../../utils/getOnChattingFriend';
import { format } from 'date-fns';
import styled from 'styled-components';

export default function ChatLists({ searchKeyword, sorting, setOnChattingFriend, setModalOn }) {
  const friends = useSelector((state) => state.friends).friends;
  const chatRooms = sortByDates(sorting, useSelector((state) => state.chatRooms).chatRooms);

  function handleClick(chatRoomId) {
    const friend = friends.find((friend) => friend.id === chatRoomId);
    setOnChattingFriend(friend);
    setModalOn(true);
  }

  if (searchKeyword) {
    const friend = getOnChattingFriend(searchKeyword, friends);
    const chatRoom = friend ? chatRooms.find((chatRoom) => chatRoom.id === friend.id) : undefined;

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
              <ContentTd>{chatRoom.messages[chatRoom.messages.length - 1].content}</ContentTd>
              <DateTd>{format(JSON.parseISO(chatRoom.messages[chatRoom.messages.length - 1].date), "yyyy-MM-dd' ['HH:mm']'")}</DateTd>
            </tr>
          </tbody>
        </Table>
      );
    }

    alert('입력하신 이름을 가진 친구와의 채팅방이 없습니다.');
  }

  return (
    <>
      <div>채팅 {chatRooms.length}</div>
      <Table>
        <tbody>
          {chatRooms.map((chatRoom) => {
            const friend = friends.find((friend) => friend.id === chatRoom.id);

            return (
              <tr key={chatRoom.id} onClick={() => handleClick(chatRoom.id)}>
                <ImgTd>
                  <img
                    src='https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp'
                    alt='profile'
                    width='60px'
                    height='60px'
                  />
                </ImgTd>
                <NameTd>{friend.name}</NameTd>
                <ContentTd>{chatRoom.messages[chatRoom.messages.length - 1].content}</ContentTd>
                <DateTd>{format(chatRoom.messages[chatRoom.messages.length - 1].date, "yyyy-MM-dd' ['HH:mm']'")}</DateTd>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;

  tr {
    border-bottom: 1px solid;
  }
`;

const ImgTd = styled.td`
  width: 15%;
`;

const NameTd = styled.td`
  width: 10%;
`;

const ContentTd = styled.td`
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
`;

const DateTd = styled.td`
  float: right;
`;
