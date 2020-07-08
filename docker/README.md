# Nginx HLS module Image

> HLS Module을 도커라이징하여 Scalable한 스트리밍 서버를 만듦.

- 내부 포트는 1935로 RTMP, 80으로 http가 열려있음.
- nginx.conf를 직접 변경해도 되지만, 일반적으로 가상화된 컨테이너를 여러개 증설하여 로드밸런싱하는 경우라면 크게 문제가 없어보임.
- https는 로드밸런서에 인증서를 두면 문제가 생기지 않음
-
