# 리액트로 메모리 게임 구현하기

- 참고: https://www.youtube.com/watch?v=XcHNBMG1GQI&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=2

- 데모 링크: https://westone034626.github.io/react-memory-game

# 부족한 부분들

- Typescript

  1. event object에 DOM의 method인 contains가 없는데 prototype에 존재한다는 사실을 알고
     타입에러 발생하는 것과 상관없이 그대로 사용 중(@ts-ignore 덕분에)

# 느낀점

- UI/UX

  1.  모달창 발생 시 스크롤 되지 않도록 조치(wanted의 로그인/회원가입 모달창 참고)

  - querySelector로 body 태그에 접근해서 style의 overflow 조작

  2.  모달창을 close button 뿐 아니라 mask 방식으로 닫을 수 있도록 구현(wanted의 로그인/회원가입 모달창 참고)

- Javascript 문법

  1.  카드 오브젝트들의 matched property가 모두 true인지 검사할 때 every를 활용

- DOM 문법

  1. contains: DOM 트리에 DOM 트리를 입력하고 포함관계인지 검사하는 함수 (DOM에 대한 지식도 문제 해결 능력에 지대한 영향을 끼치겠구나를 느낌)

- 얻을 수 있었던 것

  1.  원하는 로직대로 구현하기 위해 react hook을 활용한 경험(useState, useEffect)
      1. useEffect가 특정 데이터변화를 트리거 삼아서 effect 함수를 호출하는 hook이란 것을 다시금 실감했습니다.
  2.  전체적인 리액트를 보는 시각 기르기 훈련
      1. App -> Card 순으로 데이터가 흐르는 구조입니다.
      2. App에서 전체 card 정보를 가지고 있으며 card 정보가 업데이트가 발생하는 곳은 Card 컴포넌트입니다.(어떻게 업데이트 될지에 대한 로직 또한 App에서 짭니다. 단지 그것의 호출 역할만 Card에게 넘깁니다)
      3. 업데이트 되는 card 정보에 따라 어떤 논리 흐름을 따르게 할 지 짜는 것이 이번 구현의 핵심이었습니다.(choiceOne과 choiceTwo가 같은지 다른지 검사하는 것, 같으면 어떤 방식으로 화면에 변화를 발생시켜야하는 지, 같지 않을 때 카드가 바로 뒤집어지는데 이걸 어떻게 해결하는지 )
