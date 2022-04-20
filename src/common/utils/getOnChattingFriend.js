export default function getOnChattingFriend(searchKeyword, friends) {
  return friends.find((friend) => friend.name.toLowerCase() === searchKeyword.toLowerCase());
}
