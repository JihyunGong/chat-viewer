import React from 'react';
// import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/SearchInput';
import styled from 'styled-components';

export default function Header({ setSort, setModalOn, setUserInput }) {
  return (
    <header>
      <HeaderDiv>
        <button><Link to='/'>친구 목록</Link></button>
        <button><Link to='/chats'>채팅 목록</Link></button>
      </HeaderDiv>
      <select
        name="order"
        id="order"
        onChange={(ev) => setSort(ev.target.value)}
      >
        <option value="ascending">이름 오름차순</option>
        <option value="descending">이름 내림차순</option>
      </select>
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

  button {
    background-color: #ffdf75;
    padding: 30px;
    margin-left: 50px;
    border-radius: 25px;
    border: 2px solid #d9a600;
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
  background-color: #d9a600;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #ffdf75;
  float: right;
  
`; 
