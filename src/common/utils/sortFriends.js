export default function sortFriends(sort, friendLists) {
  const sortedFriendLists = friendLists.sort((a, b) => (a.name > b.name) ? 1 : -1);

  return sort === "ascending" ? sortedFriendLists : sortedFriendLists.reverse();
}