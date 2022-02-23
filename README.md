# kukka 메인 페이지

원티드 프리온보딩 퍼포먼스바이 TBWA kukka 메인 페이지 과제 리포입니다.

<br/>

## 📌 배포

[https://kukka-absolute.netlify.app/](https://kukka-absolute.netlify.app/)


<br/>

## 📌 요구 사항 및 구현 방향

### Vanila JS + jQuery 사용

### GNB

- 메뉴 아이템 클릭시 해당 칸으로 스크롤 이동
- 미디어쿼리를 이용해 반응형 고려

### 팝업

- jquery cookie를 이용해 하루단위로 나타날 수 있도록 구현
- 이미지 클릭시 외부 링크로 이동

### 플라워클래스 캐러셀

- 왼쪽 큰 영역과 오른쪽 두개의 작은 영역을 번갈아서 회전시키는 캐러셀 구현
- break point 진입 시 캐러셀 기능 없이 순서대로 나열

### 배너

- 두개의 영역으로 구성되는 긴 배너 구현
- break point 진입 시 캐러셀로 변경

### footer

- 순수 css 로 레이아웃 구성
- 크로스 브라우징 반영 ( float 및 px 사용 )
- SNS 클릭 시 새창 링크 이동

<br/>

## 📌 기술 스택

- JavaScript
- CSS
- bootstrap 4
- jQuery

<br/>

## 📌 팀원
|[이욱창](https://github.com/wook95)|[김태희](https://github.com/tae100k)|[문현돈](https://github.com/hyundonny)|[이경은](https://github.com/2kyung19)|
| ----- | ---- | ----- |  ----- |
|<img src="https://avatars.githubusercontent.com/u/80494742?v=4" width="200"/>|<img src="https://avatars.githubusercontent.com/u/78027252?v=4" width="200" />| <img src="https://avatars.githubusercontent.com/u/10048956?v=4" width="200" />|<img src="https://avatars.githubusercontent.com/u/32586712?v=4" width="200" />



<br/>

## 📌 팀원별 역할 및 회고

### 김태희

- 역할
    - navbar구현
- 회고
    - 이번에는 바닐라 JS로 구현하는 과제였어서 기본적인 html, css에 집중할 수 있었다. 항상 부족한 부분인데, 부족한 걸 알면서도 인정하지 않으려고 해서 쓰던 속성에만 손이 가는 것 같다. 제한된 상황에 놓이니 기본의 중요성을 느낄 수 있었고, 프로젝트 마무리가 되면 꼭 한번 더  css를 공부를 해야겠다고 생각했다.

### 문현돈

- 역할
    - 캐러셀 스타일 구현 및 이미지 이동 기능 구현을 담당했다.
- 회고
    - browser compatibility에 대해서는 이전에 생각해본 적이 없었기 때문에 이번 과제가 쉽지 않았다. 이번 과제를 진행하며 어떤 것들이 레거시 브라우저에서 활용되지 않는지, 폴리필은 어떻게 활용하는지 등에 대해 배울 수 있었다.
    - 개발 공부를 시작한 이후 보통 React를 활용해 개발을 해왔다. 바닐라 자바스크립트를 안 써본 건 아니지만 오랜만에 하니 어색했다. 그래서 좀 더 재미있게 해보고자 내가 만드는 것들을 컴포넌트 단위로 나누어 구현해보고, 각 컴포넌트 안에서 React의 useState 훅을 따라해서 캐러셀 이미지 변경 기능을 구현했다. 바닐라 자바스크립트 프로젝트였지만 의외로 React가 어떻게 작동하는 지까지 생각해볼 수 있던 프로젝트였다.

### 이경은

- 역할
    - footer 구현
- 회고
    - display flex는 ie10부터 지원하고, grid는 ie가 지원을 안해서, float를 사용했다. 초반에 rem을 사용해서 크기 지정을 해줬는데, rem은 지원을 안한다고해서 px로 모두 바꿔주었다. 또한 media query도 지원을 안한다고해서 polyfill을 넣어줬다. 다양한 환경을 고려하여 구현하는 것이 생각보다 쉽지 않았다.
    - 크로스 브라우징을 고려하여 구현해보는 좋은 경험이었다.

### 이욱창

- 역할
    - jquery cookie를 사용해 하루 단위로 키고 끌 수 있는 모달창 구현
    - 하단 배너 1024px 이하로 리사이즈시 캐러셀로 변경되도록 배너 구현
    - iframe으로 유투브 동영상 삽입
- 회고
    - 리액트의 소중함을 깨달았습니다🥲
    - 그동안 웹팩이 대신 해주었던 모듈화, 바벨에서의 트랜스파일이 왜 필요한지 절실히 깨달았습니다.
