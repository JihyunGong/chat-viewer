export default function sortByDates(sorting, chatRooms) {
  const sortedChatRooms = chatRooms.sort((prevChatRoom, currChatRoom) =>
    (prevChatRoom.messages[prevChatRoom.messages.length - 1].date - currChatRoom.messages[currChatRoom.messages.length - 1].date));

  return sorting === "ascending" ? sortedChatRooms : sortedChatRooms.reverse();
}
