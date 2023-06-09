# daon-kiosk
잠신고 자습실 키오스크

## 사용법
1. 왼쪽 파일 목록에서 파일을 선택하고, 코드를 작성한다.
2. 위쪽의 Run 버튼을 눌러 서버를 실행하고, 아래 주소로 들어간다. https://daon-kiosk--rodela6.repl.co (replit의 webview로 보는 것보다 다른 탭에서 링크로 들어가서 보는걸 추천)
3. 새로고침과 코드 수정을 반복한다. 화이팅! (F5로 적용 안되면 Ctrl+F5 눌러보기)
4. 수정한 내용을 아래 '수정 기록'에 남겨두기

여러분이 이 프로젝트의 주인입니다! 아이디어가 있다면 거리낌 없이 수정해주세요. 특정 기능을 넣고 싶은데 잘 안되면 언제든지 물어보세요 - 함께하기 위해 우리가 로델라에 있는 겁니다!

## 파일 구조
- kiosk : 키오스크 
- main : 최상위 프로젝트
- manager : 관리자 페이지
- student : 학생용 랭킹 페이지

  - urls.py : 특정 주소로 들어왔을 때 실행할 함수 설정
  - views.py : 사용자의 요청을 처리하여 HTML 파일을 반환하는 함수
  - templates / HTML.html : views.py에서 반환될 HTML 파일
  - static / 파일 : HTML에서 불러올 CSS & JavaScript 코드, 혹은 이미지 파일 등

## 링크 구조
- `/` : 랭킹 페이지
- `/kiosk` : 키오스크 메인 페이지
  - `/kiosk/seats` : 키오스크 좌석 페이지
- `/manager` : 관리자 페이지

## 수정 기록

5/18
- 프로젝트 시작 / 정현석
- Published to Github / 정현석

5/21
- 숫자 키패드 (kiosk/numpad.html) 추가 / 김지원
- 키오스크 메인화면 (kiosk/index.html) 추가 / 정준우
- 관리자 페이지 (manager/index.html) 추가 / 조윤재
- 좌석표 (kiosk/seats.html) 추가 / 최시헌

5/22
- 랭킹 페이지 (student/index.html) 추가 / 김현우

5/24
- 숫자 키패드 눌렀을때 입력되는 기능 추가 / 박서현
- 숫자 키패드 코드 간결화 / 정현석

5/26
- 관리자 페이지 레이아웃 개선 / 정준우

5/27
- 관리자 페이지 레이아웃 개선 / 정현석

5/28
- 랭킹 페이지 메달에 학번, 시간 표시 / 정현석
- 랭킹 페이지 상단 헤더 및 메달 테두리 추가 / 정현석

6/01
- 키오스크 메인화면 소폭 변경 / 이은재
- 랭킹 검색 기능 추가, 시:분:초로 표시 / 김현우