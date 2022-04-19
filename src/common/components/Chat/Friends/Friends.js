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
              <td>
                <img
                  src='https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1'
                  alt='profile'
                  width='70px'
                  height='70px'
                />
              </td>
              <td>{friend.name}</td>
              <td onClick={() => handleClick(friend)}><button>대화 시작</button></td>
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
              <td>
                <img
                  src='https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1'
                  alt='profile'
                  width='70px'
                  height='70px'
                />
              </td>
              <td>{friend.name}</td>
              <td onClick={() => handleClick(friend)}><button>대화 시작</button></td>
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

  td {
    padding: 10px;
    border-bottom: 1px solid;
  }
`;
