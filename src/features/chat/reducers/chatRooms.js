import { SAVE_CHATROOMS } from '../types';
import getInitialData from '../../../common/utils/getInitialData';

const initialState = {
  chatRooms: []
};

async function getData() {
  const rooms = (await getInitialData("chatRoomsData")).chatRooms;

  for (const room of rooms) {
    for (const message of room.messages) {
      message.date = new Date(message.date);
    }
  }

  initialState.chatRooms = rooms;
}

getData();

export default function chatRooms(state = initialState, action) {
  switch (action.type) {
    case SAVE_CHATROOMS: {
      const newChatRoom = action.payload;
      const existingChatRoom = state.chatRooms.find((chatRoom) => chatRoom.id === newChatRoom.id);

      if (existingChatRoom) {
        existingChatRoom.messages.push(...newChatRoom.messages);

        return { ...state };
      }

      return {
        ...state,
        chatRooms: [...state.chatRooms, newChatRoom]
      };
    }
    default: {
      return state;
    }
  }
}
