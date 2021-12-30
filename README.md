# 리액트로 메모리 게임 구현하기

- 참고: https://www.youtube.com/watch?v=XcHNBMG1GQI&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&index=2

- 데모 링크: https://westone034626.github.io/react-memory-game

- 얻을 수 있었던 것

  1.  원하는 로직대로 구현하기 위해 react hook을 활용한 경험(useState, useEffect)
      1. useEffect가 특정 데이터변화를 트리거 삼아서 effect 함수를 호출하는 hook이란 것을 다시금 실감했습니다.
  2.  전체적인 리액트를 보는 시각 기르기 훈련
      1. App -> Card 순으로 데이터가 흐르는 구조입니다.
      2. App에서 전체 card 정보를 가지고 있으며 card 정보가 업데이트가 발생하는 곳은 Card 컴포넌트입니다.(어떻게 업데이트 될지에 대한 로직 또한 App에서 짭니다. 단지 그것의 호출 역할만 Card에게 넘깁니다)
      3. 업데이트 되는 card 정보에 따라 어떤 논리 흐름을 따르게 할 지 짜는 것이 이번 구현의 핵심이었습니다.(choiceOne과 choiceTwo가 같은지 다른지 검사하는 것, 같으면 어떤 방식으로 화면에 변화를 발생시켜야하는 지, 같지 않을 때 카드가 바로 뒤집어지는데 이걸 어떻게 해결하는지 )
