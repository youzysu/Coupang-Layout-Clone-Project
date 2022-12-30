# 🛒 쿠팡 웹사이트 레이아웃 클론 프로젝트

> Coupang Website Layout Clone Coding Project For Learning HTML/CSS

- 쿠팡 사이트: https://www.coupang.com
- DEMO 사이트: https://sparkling-banoffee-dc4ae9.netlify.app/

## 1. 프로젝트 내용

- 쿠팡 사이트 레이아웃 클론 개인 프로젝트
- 기간: 2022.12.23. ~ 2022.12.30.

## 2. 사용 기술

- HTML5
- SCSS
- Parcel
- ES6

## 3. 구현 내용

### 3.1 쿠팡 헤더 영역

> 📌 [HTML](), [SCSS]()

#### 세부 구현 내용

- 로그인바 영역
  - CSS flex 배치
  - `order`를 이용하여 배치 순서 변경
  - `flex-grow`로 간격 설정
- 헤더 메인 영역
  - css grid 배치
  - `grid-template-area`로 배치 영역 지정
  - 상품 검색창
    - `grid-template-columns`로 영역 구분, `select` 태그로 카테고리 작성
  - 마이쿠팡, 장바구니 메뉴
    - 마이쿠팡, 장바구니 마우스 이벤트 발생 시 드롭다운 메뉴

#### 추가 구현 기능 목록

- [ ] 카테고리 메뉴 클릭 이벤트 발생 시 드롭다운 메뉴 구현

### 3.2 쿠팡 배너 영역

> 📌 [HTML](), [SCSS]()

배너 영역 레이아웃만 잡아 기능 구현 필요

- 배너 이미지
- 네비게이션

#### 추가 구현 기능 목록

- [ ] 배너 이미지 슬라이드

### 3.3 쿠팡 오늘의 발견 영역

> 📌 [HTML](), [SCSS]()

#### 세부 구현 내용

- CSS flex 배치
- 각 상품 이미지마다 `position`으로 버튼 위치 고정
- 상품 이미지 hover 발생 시 border 색상 변경, 버튼에 `::before` 선택자로 '구매하기' 텍스트 추가

### 3.4 쿠팡 오늘의 쇼핑 제안 영역

> 📌 [HTML](), [SCSS]()

#### 세부 구현 내용

- CSS flex 배치
- 각 상품 이미지마다 `position`으로 할인율 위치 고정
- `text-overflow`으로 상품명 말줄임표 구현
- 상품 이미지 링크 hover 발생 시 글자색 변경, underline 추가

### 3.5 쿠팡 카테고리 추천 광고상품 영역

> 📌 [HTML](), [SCSS]()

#### 세부 구현 내용

- CSS flex 배치
- HOT키워드 hover 발생 시 색상 전환
- 상품 목록 `flex-wrap` 으로 줄바꿈 구현

#### 추가 구현 기능 목록

- [ ] issue: 캐러셀 span build 시 사라지는 문제
- [ ] 캐러셀 슬라이드 구현 (Swiper 라이브러리)

### 3.6 쿠팡 푸터 영역

> 📌 [HTML](), [SCSS]()

#### 세부 구현 내용

- CSS flex 배치
- 목록 요소를 구분하는 `|`를 `::after` 선택자를 활용하여 구현
- 전화번호와 이메일 html `a` 태그 `href` 태그 활용
- 인스타그램 아이콘 배경 `linear-gradient`을 활용하여 직접 구현
