export default function getChattingMessages(friendId, chatLists) {
  return chatLists.find((chat) => chat.id === friendId);
}