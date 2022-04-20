import React, { useState } from "react";
import styled from "styled-components";

export default function SearchInput({ setSearchKeyword }) {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <Input
        type="text"
        placeholder="친구 이름을 검색하세요."
        value={keyword}
        onChange={(ev) => setKeyword(ev.target.value)}
      />
      <span onClick={() => setSearchKeyword(keyword)}>&#128269;</span>
    </>
  );
}

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ededed;
  height: 20px;
  min-width: 200px;
  width: 20%;
  border-radius: 2px;
  font-size: 14px;
  letter-spacing: -0.5px;
  transition: 0.3s all ease;
  margin-right: 5px;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid;
  }
`;
