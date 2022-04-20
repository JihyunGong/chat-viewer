import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../common/components/Header/Header';
import FriendLists from '../common/components/Chat/FriendLists/FriendLists';
import ChatLists from '../common/components/Chat/ChatLists/ChatLists';
import NewFriendModal from '../common/components/NewFriendModal/NewFriendModal';
import ChatRoomModal from '../common/components/ChatRoomModal/ChatRoomModal';

export default function App() {
  const [sorting, setSorting] = useState("ascending");
  const [newFriendModalOn, setNewFriendModalOn] = useState(false);
  const [chatRoomModalOn, setChatRoomModalOn] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [onChattingFriend, setOnChattingFriend] = useState({});

  return (
    <div>
      <Header setSorting={setSorting} showAddForm={setNewFriendModalOn} setUserInput={setUserInput} />
      <Routes>
        <Route path='/' element={<FriendLists searchKeyword={userInput} sorting={sorting} setOnChattingFriend={setOnChattingFriend} setModalOn={setChatRoomModalOn} />} />
        <Route path='/chats' element={<ChatLists searchKeyword={userInput} sorting={sorting} setOnChattingFriend={setOnChattingFriend} setModalOn={setChatRoomModalOn} />} />
      </Routes>
      {newFriendModalOn &&
        <NewFriendModal setModalOn={setNewFriendModalOn} />
      }
      {chatRoomModalOn &&
        <ChatRoomModal friend={onChattingFriend} setModalOn={setChatRoomModalOn} />
      }
    </div>
  );
}
