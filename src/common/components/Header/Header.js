import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import styled from 'styled-components';

export default function Header({ setSorting, showAddForm, setUserInput }) {
  return (
    <header>
      <select
        name="order"
        id="order"
        onChange={(ev) => setSorting(ev.target.value)}
      >
        <option value="ascending">오름차순</option>
        <option value="descending">내림차순</option>
      </select>
      <HeaderDiv>
        <button><Link to='/'>친구 목록</Link></button>
        <button><Link to='/chats'>채팅 목록</Link></button>
      </HeaderDiv>
      <SearchInput setSearchKeyword={setUserInput} />
      <NewButton onClick={() => showAddForm(true)}>친구 추가</NewButton>
      <hr />
    </header>
  );
}

const HeaderDiv = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;

  button {
    background-color: #ffe045;
    padding: 30px;
    border-radius: 15px;
    border: none;
    margin-left: 50px;
    margin-right: 50px
  }
`;

const NewButton = styled.button`
  background-color: #ffe045;
  padding: 10px;
  border-radius: 15px;
  border: none;
  float: right;
`; 
