import { ADD_FRIEND } from '../types';

const initialState = {
  friends: []
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case ADD_FRIEND: {
      const newFriend = action.payload;

      return {
        ...state,
        friends: [...state.friends, newFriend]
      };
    }
    default: {
      return state;
    }
  }
}
