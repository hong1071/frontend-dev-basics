<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

	<script>
	
		// DOM Load Event
		// 1. load: 모두 다 로딩(DOM, CSSOM, Image)
		// 2. DOMContentLoaded: DOM만 로딩(CSSOM, Image 로딩 안됨)
		window.addEventListener("DOMContentLoaded", function(){
			document.getElementsByTagName("button")[0].addEventListener('click', function(){
				var xhr = null;
				if(window.ActiceXObject){			// IE8
					xhr = new ActiveXObject('Microsoft.XMLHTTP');
				}
				else if(window.XMLHttpRequest){		// Other Standard Browser
					xhr = new XMLHttpRequest();
				}
				else {
					console.log("Ajax 기능을 사용할 수 없습니다");
					return;
				}
				
				xhr.addEventListener('readystatechange', function(){
					if(this.readyState == XMLHttpRequest.UNSENT){					//readyState: 0
						// request 요청이 초기화 되기 전	
						console.log("state:unsent");
					}
					else if(this.readyState == XMLHttpRequest.OPENED){			//readyState: 1
						// 서버와 연결 성공
						console.log("state:OPENED");
					}
					else if(this.readyState == XMLHttpRequest.HEADERS_RECIEVED){	//readyState: 2
						// 서버가 request를 받음
						console.log("state:HEADERS_RECIEVED");
					}
					else if(this.readyState == XMLHttpRequest.LOADING){			//readyState: 3
						// response 처리중
						console.log("state:LOADING");
					}
					else if(this.readyState == XMLHttpRequest.DONE){				//readyState: 4
						// response 처리 완료
						console.log("state:DONE");
					
						if(this.status != 200){
							console.error(this.state);
							return;
						}
						
						var response = JSON.parse(this.responseText);
						console.log(response, typeof(response));
						
						var html = "";
						html += ("<h2>" + response.data.no + "</h2>")
						html += ("<h3>" + response.data.name + "</h3>")
						html += ("<h4>" + response.data.message + "</h4>")
						
						document.getElementById("data").innerHTML = html;
					}
				});
				
				xhr.open("get", '${pageContext.request.contextPath }/api/json', true);
				xhr.send();
			});
		})
		
	</script>

</head>
<body>
	<h1>AJAX Text - JSON Format data</h1>
	
	<button>데이터 가져오기</button>
	<div id="data">
	</div>
	
</body>
</html>