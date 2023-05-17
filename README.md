# daon-kiosk
잠신고 자습실 키오스크

## 사용법
1. 왼쪽 파일 목록에서 파일을 선택하고, 코드를 작성한다.
2. 위쪽의 Run 버튼을 눌러 서버를 실행하고, 아래 주소로 들어간다. https://daon-kiosk--rodela6.repl.co
3. 새로고침과 코드 수정을 반복한다. 화이팅!

## 파일 구조
- kiosk : 키오스크 
- main : 최상위 프로젝트
- manager : 관리자 페이지
- student : 학생용 랭킹 페이지

  - urls.py : 접속 경로별로 함수 할당
  - views.py : 사용자의 요청을 처리하여 HTML 파일을 반환하는 함수
  - templates / HTML.html : views.py에서 반환될 HTML 파일
