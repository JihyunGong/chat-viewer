import React, { useState } from "react";
import styled from "styled-components";


export default function SearchInput({ setSearchKeyword }) {
  const [keyword, setKeyword] = useState("");

  function handleSubmit(ev) {
    if (ev.keyCode === 13) {
      setSearchKeyword(keyword);
    }
  }

  return (
    // <form onSubmit={handleSubmit}>
      <Input 
      type="text"
      placeholder="친구 이름을 검색하세요."
      value={keyword}
      onChange={(ev) => setKeyword(ev.target.value)}
      onKeyDown={handleSubmit}
      />
      // <input type='submit' value='검색' />
    // </form>
  );
}

const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid #ededed;
  height: 20px;
  min-width: 200px;
  width: 20%;
  border-radius: 2px;
  font-size: 16px;
  letter-spacing: -0.5px;
  transition: 0.3s all ease;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #414141;
  }
`;
