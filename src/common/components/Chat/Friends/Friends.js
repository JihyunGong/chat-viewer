import React from 'react';
import { useSelector } from 'react-redux';
import sortFriends from '../../../utils/sortFriends';
import styled from 'styled-components';

export default function Friends({ userInput, sort, setModalOn, setChattingFriend }) {
  const friendLists = useSelector((state) => state.friends.friends);
  const sortedFriendLists = sortFriends(sort, friendLists);

  function handleClick(chattingFriend) {
    setChattingFriend(chattingFriend);
    setModalOn(true);
  }

  if (userInput) {
    const friend = sortedFriendLists.find((friend) => friend.name.toLowerCase() === userInput.toLowerCase());

    if (friend) {
      return (
        <Table>
          <tbody>
            <tr>
              <ImgTd>
                <img
                  src='https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp'
                  alt='profile'
                  width='60px'
                  height='60px'
                />
              </ImgTd>
              <NameTd>{friend.name}</NameTd>
              <td onClick={() => handleClick(friend)}><Button>대화 시작</Button></td>
            </tr>
          </tbody>
        </Table>
      );
    }

    alert("입력하신 이름과 일치하는 친구가 없습니다.");
  }

  if (sortedFriendLists.length) {
    return (
      <Table>
        <div>친구 {sortedFriendLists.length}</div>
        <tbody>
          {sortedFriendLists.map((friend) => (
            <tr key={friend.id}>
              <ImgTd>
                <img
                  src='https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp'
                  alt='profile'
                  width='60px'
                  height='60px'
                />
              </ImgTd>
              <NameTd>{friend.name}</NameTd>
              <td onClick={() => handleClick(friend)}><Button>대화 시작</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  return <div>친구 {sortedFriendLists.length}</div>
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

const Button = styled.button`
  background-color: #ffe98a;
  border: none;
  border-radius: 10px;
  padding: 7px;
  float: right;
`;
