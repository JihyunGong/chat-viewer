export default function sortChats(chatLists) {
  const sortedChatLists = chatLists.sort((a, b) => (b.messages[b.messages.length - 1].date - a.messages[a.messages.length - 1].date));

  return sortedChatLists;
}