## 프론트 엔드 코딩 테스트 
프론트 엔드를 마치며 코딩 테스트 작업물을 제출합니다. 

### 작업 결과물 구조
- 친구 목록 페이지
  - 헤더에는 친구 목록과 채팅 목록을 오갈 수 있는 링크가 존재하고, 친구 검색 기능, 친구 목록 정렬 그리고 친구 추가를 할 수 있는 기능들이 존재합니다. 
  - 초기에 mock data로 기존의 친구 목록을 보여주기 위해 friendsData.json파일을 작성하였습니다. 유저가 원하는 경우, 친구 추가를 하여 친구 목록에 추가할 수도 있습니다. 
  - 친구 추가를 할 경우, 추가된 친구들의 목록을 볼 수 있고 친구의 인원수가 상단에 표시됩니다. 
  - 친구 목록에서는 대화를 시작할 수 있는 버튼이 있으며, 버튼을 클릭하면 대화를 시작할 수 있습니다. 

- 채팅 목록 페이지
  - 헤더에 친구 목록 페이지와 동일하게 친구 목록과 채팅 목록을 오갈 수 있는 링크가 존재하며, 채팅 검색 기능, 채팅 목록 정렬 그리고 친구 추가를 할 수 있는 기능들이 존재합니다.
  - 친구 목록 페이지와 마찬가지로, 초기에 mock data로 기존의 채팅 목록을 보여주기 위해 chatRoomsData.json파일을 생성하였습니다. 
  - 채팅 검색 기능은 친구의 이름을 기준으로 검색이 가능하게 하였고, 해당 친구와의 채팅 기록이 없다면 경고문이 뜹니다. 
  - 채팅 목록 정렬은 친구와 마지막으로 채팅을 한 시간을 기준으로 하며, 오래된순과 최신순으로 정렬할 수 있습니다. 
  - 채팅을 이어가고 싶은 경우, 해당 채팅 목록을 클릭하면 채팅방 모달이 띄워지며 이전에 채팅한 기록도 볼 수 있습니다. 
  - 채팅방 개수가 상단에 표시됩니다.

- 채팅방 모달
  - 채팅방에서는 현재 채팅을 진행 중인 친구의 이름을 상단에서 확인할 수 있으며, 메시지마다 누구의 메시지인지 그리고 메시지 내용, 메시지 전송 시각을 확인 할 수 있습니다. 

### 신경쓰며 작업한 부분
- 단순 반복문(for, while..)의 사용을 지양하고 객체(배열)의 내장 메서드를 활용하여 코드의 가독성을 높이려 하였습니다. 
- 중복된 코드를 줄이기 위해, 자주 사용하는 함수들은 utils 폴더 내부에 따로 관리해주었고 재사용성을 높이려 하였습니다. 
- 각 컴포넌트의 역할을 분명히 하기 위해, 해당 컴포넌트와 관련없는 기능을 수행하는 함수들은 utils 폴더 내부에서 관리하였습니다.
- 각 state를 생성할 때, redux에서 관리할 수 있는 state인지 신중하게 고민하였습니다. 

### 맺음말
이번 코딩 테스트에서 가장 고민이 많았던 부분은 redux store에 있는 friends state와 chatRooms state를 분리하는 것이었습니다. 제가 진행하고자 하는 방향에서, 두 state간에 겹쳐야하는 부분(friend.id)이 있어 적절히 분리해보았으나, 각 state 구조를 정규화하는 작업은 아직 미숙한 것 같습니다. 해당 부분은 정규화 작업에 대한 많은 경험이 필요해보입니다. 

벌써 프론트 엔드 과정을 마치며, 다가올 백엔드에 대한 탐구도 기대됩니다. 
한 달 동안 저희 모두를 도와주신 켄님, 많은 멘토분들 감사합니다! :)
