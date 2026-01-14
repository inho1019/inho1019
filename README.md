
<br/>
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&pause=1000&color=36BCF7&width=435&lines=Frontend+engineer+inho_m" alt="Typing SVG" />

## Tech
<br>
<div align="center">
  <br/>
  <div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/>
    <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=flat&logo=react&logoColor=white"/>
    <img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square"/>
    <img src="https://img.shields.io/badge/Graphql-E10098?style=flat&logo=graphql&logoColor=white"/>
  </div>
  <br/>
  <br/>
  <div style="display: flex; align-items: flex-start;">
    <img src="https://techstack-generator.vercel.app/github-icon.svg" alt="icon" width="70" height="70" />
    <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="70" height="70" />
    <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="70" height="70" />
    <img src="https://techstack-generator.vercel.app/graphql-icon.svg" alt="icon" width="70" height="70" />
  </div>
</div>

## Blog
<details open>
  <summary>목록</summary>
  <ul>

<li>
    <a href="https://inho-m.tistory.com/20">고정소수점과 부동소수점</a>
</li><li>
    <a href="https://inho-m.tistory.com/19">튜플 타입을 사용해야하는 이유</a>
</li><li>
    <a href="https://inho-m.tistory.com/18">FE Trend 개발기 #8 - AI 요약 기능 추가 (고도화)</a>
</li><li>
    <a href="https://inho-m.tistory.com/17">FE Trend 개발기 #7 - 코드 에디터 추가 및 개선(고도화)</a>
</li><li>
    <a href="https://inho-m.tistory.com/16">정적 페이지 데이터 압축으로 트래픽 줄이기 (feat. fflate)</a>
</li>
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post

<details>
<summary>고정소수점과 부동소수점</summary>
<br/>
<p data-ke-size="size16">일단 말그대로 이해하여 비트기준 소수점이 고정, 부동으로 이해하면 편하다</p>
<h3 data-ke-size="size23">고정소수점</h3>
<p data-ke-size="size16">정수 비트과 소수점 비트들 사이에 소수점을 고정해두고 거기에 숫자들만 변경 하는 형식이다.<br /><code>[부호 비트(0 or 1)][정수 비트들 (1~31)] .(소수점) [소수 비트들(1~31)]</code> <br />사실 소수점 보다는 정수 비트와 소수 비트에 벽이 있다고 생각하는게 좀더 옳은 표현, 양쪽 방에 비트의 상태를 바쑤어 숫자를 변경. 정밀하게 계산이 가능</p>
<h3 data-ke-size="size23">부동소수점</h3>
<p data-ke-size="size16">부동소수점은 위와 다른 방식으로 접근한다. 숫자 비트 묶음이 존재하고 소수점 위치를 다른 비트 묶음으로 지정해준다. <br /><code>[부호 비트(1)][소수점 위치 알려주는 비트들(8)][숫자 비트들(23)]</code> <br />해당 방식으로 구현하여 표현방식에 있어 유리함을 가져옴 그러나 숫자가 듬성듬성 함 ex:) 100000 다음은 100005 이런식으로</p>
</details>
