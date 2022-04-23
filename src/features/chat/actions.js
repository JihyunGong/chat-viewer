import { ADD_FRIEND, SAVE_CHATROOMS } from './types';

let nextFriendId = 0;

export function addFriend(friendInfo) {
  return {
    type: ADD_FRIEND,
    payload: {
      id: ++nextFriendId,
      ...friendInfo
    }
  };
}

export function saveChatRooms(friendId, messageInfo) {
  return {
    type: SAVE_CHATROOMS,
    payload: {
      id: friendId,
      messages: [messageInfo]
    }
  }
}
