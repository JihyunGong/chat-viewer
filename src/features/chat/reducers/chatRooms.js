import { SAVE_CHATROOMS } from "../types";

const initialState = {
  chatRooms: []
};

export default function chatRooms(state = initialState, action) {
  switch (action.type) {
    case SAVE_CHATROOMS: {
      const newMessage = action.payload;
      const existingChatRoom = state.chatRooms.find((chatRoom) => chatRoom.id === newMessage.id);

      if (existingChatRoom) {
        for (const chatRoom of state.chatRooms) {
          if (JSON.stringify(chatRoom) === JSON.stringify(existingChatRoom)) {
            chatRoom.messages.push(...(newMessage.messages));
          }
        }

        return state;
      }

      return {
        ...state,
        chatRooms: [...state.chatRooms, newMessage]
      };
    }
    default: {
      return state;
    }
  }
}
