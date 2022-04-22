export default function sortByNames(sorting, friends) {
  const sortedFriends = friends.sort((prevFriend, currFriend) => (prevFriend.name > currFriend.name) ? 1 : -1);

  return sorting === 'ascending' ? sortedFriends : sortedFriends.reverse();
}
