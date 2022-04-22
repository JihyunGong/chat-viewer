import React from 'react';
import { useSelector } from 'react-redux';
import sortByNames from '../../../utils/sortByNames';
import getOnChattingFriend from '../../../utils/getOnChattingFriend';
import styled from 'styled-components';

export default function FriendLists({ searchKeyword, sorting, setOnChattingFriend, setModalOn }) {
  const friends = sortByNames(sorting, useSelector((state) => state.friends.friends));

  function handleClick(onChattingFriend) {
    setOnChattingFriend(onChattingFriend);
    setModalOn(true);
  }

  if (searchKeyword) {
    const friend = getOnChattingFriend(searchKeyword, friends);

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
              <td>{friend.name}</td>
              <td onClick={() => handleClick(friend)}><Button>대화 하기</Button></td>
            </tr>
          </tbody>
        </Table>
      );
    }

    alert('입력하신 이름과 일치하는 친구가 없습니다.');
  }

  return (
    <>
      <div>친구 {friends.length}</div>
      <Table>
        <tbody>
          {friends.map((friend) => (
            <tr key={friend.id}>
              <ImgTd>
                <img
                  src='https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp'
                  alt='profile'
                  width='60px'
                  height='60px'
                />
              </ImgTd>
              <td>{friend.name}</td>
              <td onClick={() => handleClick(friend)}><Button>대화 하기</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
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

const Button = styled.button`
  background-color: #ffe98a;
  border: none;
  border-radius: 10px;
  padding: 7px;
  float: right;
`;
