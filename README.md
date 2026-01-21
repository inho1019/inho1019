
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
    <a href="https://inho-m.tistory.com/22">React에서의 전역 스코프</a>
</li><li>
    <a href="https://inho-m.tistory.com/21">얕은복사와 깊은복사</a>
</li><li>
    <a href="https://inho-m.tistory.com/20">고정소수점과 부동소수점</a>
</li><li>
    <a href="https://inho-m.tistory.com/19">튜플 타입을 사용해야하는 이유</a>
</li><li>
    <a href="https://inho-m.tistory.com/18">FE Trend 개발기 #8 - AI 요약 기능 추가 (고도화)</a>
</li>
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post

<details>
<summary>React에서의 전역 스코프</summary>
<br/>
<p data-ke-size="size16">모든 코드에서 접근할수 있는 가장 바깥쪽 범위에서 선언하는 스코프를 전역 스코프라고 한다.</p>
<p data-ke-size="size16">여기서 React 사용 개발자로서 뭔가 와닿지 않을수도 있다.</p>
<p data-ke-size="size16"><br />&rdquo;특정 파일에서 var로 선언하면 전역 스코프인거 아니야?&rdquo; 라는 생각이 들수 있는데 다시 보면 이렇게 선언한것은 아래에 설명할 모듈 스코프의 특징과 일치한다. <span style="font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Apple SD Gothic Neo', Arial, sans-serif; letter-spacing: 0px;">그러기에 위에서 설명한 &ldquo;모든 코드&rdquo;라는 의미에 접근하여야한다.</span></p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">우리가 코딩을 할때 console 이나 Math같이 선언 없이 사용할수 있는 이름들이 있다. 이것들은 사실 앞에 전역 객체가 생략되어 사용된 것들이다. window, self, global... 등등 환경에 따라 전역 객체의 이름은 다르지만 <code>ECMAScript 2020</code> 애서는 globalThis로 이름을 표준화 하였다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그래서 방금 설명한게 뭐냐 &ldquo;모든 코드에서 접근 가능&rdquo;은 다른 말로 &ldquo;전역 객체에 등록하는 것&rdquo; 이라고 볼수 있다.<br />그럼 React에서 전역 객체를 어떻게 등록할까? 방법은 크게 두가지가 있다.</p>
<h3 data-ke-size="size23">index.html의 script 태그 내에 직접 변수 선언</h3>
<pre class="xml"><code>&lt;script&gt;
  // 브라우저가 로딩되자마자 전역에 박힘
  var myGlobal = "I am Global"; 
&lt;/script&gt;</code></pre>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li><b>특징:</b> React 앱이 실행되기도 전에 변수가 존재한다.</li>
<li><b>단점:</b> <code>.env</code> 환경변수 같은 모던 빌드 시스템의 이점을 활용하기 어렵고, 코드가 분산됨.</li>
</ul>
<h3 data-ke-size="size23">글로벌 객체에 직접 주입</h3>
<pre class="clean"><code>import React from 'react';

// 명시적으로 window 객체에 주입
globalThis.myGlobal = "I am Global via JS"; </code></pre>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li><b>특징:</b> React 환경에 직접 주입, 그리고 위의 단점을 파훼할 수 있다.</li>
<li><b>단점:</b> 최상위 (<code>App.js</code> 등..)에서 사용하지 않으면 해당 모듈(파일)이 불러오기 전까지 주입되지 않는다. 그러니 가급적 최상위에 사용</li>
</ul>
<p data-ke-size="size16">위 두 방식이 React에서 의 전역 스코프를 만드는 방식이다. 사실 React 환경에서는 외부 라이브러리 초기화 외에는 저런방식으로 접근할 이유는 없지만 프로그래머로서 이런 본질적인 고민을 해보는건 프레임워크나 작동방식의 이해에 있어서 좋은 것 같다.</p>
</details>
