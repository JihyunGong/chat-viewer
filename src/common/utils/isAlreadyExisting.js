export default function isAlreadyExisting(friends, friendInfo) {
  return friends.find((friend) => friend.phoneNumber === friendInfo.phoneNumber);
}
