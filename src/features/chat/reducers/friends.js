import { ADD_FRIEND } from '../types';
import getInitialData from '../../../common/utils/getInitialData';

const initialState = {
  friends: []
};

async function getData() {
  initialState.friends = (await getInitialData("friendsData")).friends;
}

getData();

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
