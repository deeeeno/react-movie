# REACT TUTORIAL 3. Movie

Nomad coder의 React 세번째 튜토리얼입니다.   

## 주요 내용
### Routing   
이번에 주가 된 내용은 라우팅이다. 지금까지의 튜토리얼은 '/'페이지에서 진행했지만, 페이지를 좀 더 세분화하는 튜토리얼을 진행했다. 아쉬운 점은 노마드 아저씨가 알려준 react-router-dom 버전보다 상위 버전이 나왔는지 Switch 컴포넌트는 사라져버렸다ㅜ. 6버전부터 Routes로 변경되었다는데 그것으로 리드미를 작성해보겠다.    
우선 첫 번째로 아래 명령어로 라이브러리를 설치하자.
```
npm install react-router-dom -g --save
```
메인이 되는 App.js에 다음과 같이 import하고 코드를 작성해보자.
```
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';  //import

function App() {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie/:id" element={<Detail/>} />
    </Routes>
  </Router>;
}
```
코드는 무척이나 심플하다. Routes 안에 Route 컴포넌트를 통해서 path와 element를 설정해주면 끝! 이 프로젝트는 src안에 component로 사용될 것들을 담을 components, 라우팅 컴포넌트인 routes로 나뉘어서 저장했는데 이는 기호에 맞춰서 진행하면 될 듯 하다.   

### Param
위 코드에서 좀 특별한 부분은 /movie/:id 일텐데, :id로 id 변수에 값을 넘겨주는 모습을 확인할 수 있다. 리액트에서는 아주 인터레스팅하게 useParams라는 메소드로 관리할 수 있다.
```
import {useParams} from 'react-router-dom';
function Detail(){
    const params = useParams();
    console.log(params); ///{id:12345}
    return <div></div>
}
```
위의 주석처럼 입력한 파라미터를 받을 수 있다. ? 뒤의 파라미터가 아닌 콜론으로 설정한 파라미터라는 점 주의해야 한다.   


오늘도 많이 배웠다...