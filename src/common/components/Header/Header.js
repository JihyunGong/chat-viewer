import React from 'react';
// import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import styled from 'styled-components';

export default function Header({ setSort, setModalOn, setUserInput }) {
  return (
    <header>
      <select
        name="order"
        id="order"
        onChange={(ev) => setSort(ev.target.value)}
      >
        <option value="ascending">이름 오름차순</option>
        <option value="descending">이름 내림차순</option>
      </select>
      <HeaderDiv>
        <button><Link to='/'>친구 목록</Link></button>
        <button><Link to='/chats'>채팅 목록</Link></button>
      </HeaderDiv>
      <SearchInput setSearchKeyword={setUserInput} />
      <AddButton onClick={() => setModalOn(true)}>친구 추가</AddButton> 
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
    margin-left: 50px;
    border-radius: 15px;
    border: none;
    text-decoration: none;
    
    &:link,
    &:visited,
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
`;
  
const AddButton = styled.button`
  background-color: #ffe045;
  padding: 10px;
  border-radius: 15px;
  border: none;
  float: right;
`; 
