import { SAVE_CHATROOMS } from '../types';

const initialState = {
  chatRooms: []
};

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
