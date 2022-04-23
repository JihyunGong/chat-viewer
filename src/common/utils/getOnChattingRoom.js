export default function getOnChattingRoom(friendId, chatRooms) {
  return chatRooms.find((chatRoom) => chatRoom.id === friendId);
}
