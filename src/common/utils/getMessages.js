export default function getMessages(friendId, chatLists) {
  return chatLists.find((chat) => chat.id === friendId);
}
