import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFriend } from '../../../features/chat';
import isAlreadyExisting from '../../utils/isAlreadyExisting';
import Portal from '../Portal/Portal';
import styled from 'styled-components';

export default function Modal({ setModalOn }) {
  const dispatch = useDispatch();

  const friends = useSelector((state) => state.friends.friends);
  const friendInfo = {};

  function handleSubmit() {
    if (isAlreadyExisting(friends, friendInfo)) {
      alert('입력하신 친구의 정보는 이미 존재합니다.');
    } else {
      dispatch(addFriend(friendInfo));
    }

    setModalOn(false);
  }

  return (
    <Portal>
      <Background>
        <Content>
          <form>
            <FormDiv>
              <input
                type='text'
                placeholder='이름'
                value={friendInfo.name}
                onChange={(ev) => friendInfo.name = ev.target.value}
              />
            </FormDiv>
            <FormDiv>
              <input
                type='number'
                placeholder='연락처'
                value={friendInfo.phoneNumber}
                onChange={(ev) => friendInfo.phoneNumber = ev.target.value}
              />
            </FormDiv>
          </form>
          <SubmitButton onClick={handleSubmit}>추가</SubmitButton>
          <CloseButton onClick={() => setModalOn(false)}>X</CloseButton>
        </Content>
      </Background>
    </Portal>
  );
}

const Background = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
`;

const Content = styled.div`
  width: 450px;
  height: 350px;
  position: relative;
  overflow: scroll;
  background: #f5f5f5;
  border: 3px solid;
`;

const FormDiv = styled.div`
  margin: 15px;
`;

const CloseButton = styled.button`
  background-color: black;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
`;

const SubmitButton = styled.button`
  background-color: black;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
`;
