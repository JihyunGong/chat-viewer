import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../common/components/Header/Header';
import Friends from '../common/components/Chat/Friends/Friends';
import Chats from '../common/components/Chat/Chats/Chats';
import AddFriendModal from '../common/components/AddFriendModal/AddFriendModal';
import ChatModal from '../common/components/ChatModal/ChatModal';

export default function App() {
  const [sort, setSort] = useState("ascending");
  const [addFriendModalOn, setAddFriendModalOn] = useState(false);
  const [chatModalOn, setChatModalOn] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chattingFriend, setChattingFriend] = useState({});

  return (
    <div>
      <Header setSort={setSort} setModalOn={setAddFriendModalOn} setUserInput={setUserInput} />
      <Routes>
        <Route path='/' element={<Friends userInput={userInput} sort={sort} setModalOn={setChatModalOn} setChattingFriend={setChattingFriend}/>} />
        <Route path='/chats' element={<Chats userInput={userInput} setChattingFriend={setChattingFriend} setModalOn={setChatModalOn}/>} />
      </Routes>
      {addFriendModalOn &&
        <AddFriendModal setModalOn={setAddFriendModalOn} />
      }
      {chatModalOn && 
        <ChatModal friend={chattingFriend} setModalOn={setChatModalOn} />
      }
    </div>
  );
}
