
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
    <a href="https://inho-m.tistory.com/21">얕은복사와 깊은복사</a>
</li><li>
    <a href="https://inho-m.tistory.com/20">고정소수점과 부동소수점</a>
</li><li>
    <a href="https://inho-m.tistory.com/19">튜플 타입을 사용해야하는 이유</a>
</li><li>
    <a href="https://inho-m.tistory.com/18">FE Trend 개발기 #8 - AI 요약 기능 추가 (고도화)</a>
</li><li>
    <a href="https://inho-m.tistory.com/17">FE Trend 개발기 #7 - 코드 에디터 추가 및 개선(고도화)</a>
</li>
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post

<details>
<summary>얕은복사와 깊은복사</summary>
<br/>
<h3>얕은 복사</h3>
<p>object 속성이 다른 참조를 가지는 복사, 그러나 object 내의 속성중 object가 있을 경우 그 object는 같은 참조를 가진다. (객체 중첩)</p>
<pre><code class="language-jsx">const obj = { a: &quot;a&quot;, b: { c: &quot;c&quot; } }
const shallowCopy = {...obj}
or
const shallowCopy = Object.assign({}, obj)

shallowCopy.a = &quot;abc&quot;
shallowCopy.b.c = &quot;cba&quot;

console.log(obj.a) // &quot;a&quot;
console.log(obj.b.c) // &quot;cba&quot;  </code></pre>
<p>위처럼 얕은 복사로 인하여 같은 참조를 가지는 c 속성은 변경에 영향을 받는다</p>
<h3>깊은 복사</h3>
<p>위와 같은 참조 문제를 해결하려면 깊은 복사를 해야함. 가장 쉬운방법은 JSON.stringpy로 직렬화 한 이후에 parse로 다시 파싱하는 방법이 있다</p>
<pre><code class="language-jsx">const obj = { a: &quot;a&quot;, b: { c: &quot;c&quot; } }
const deepCopy = JSON.parse(JSON.stringfy()obj)

deepCopy.a = &quot;abc&quot;
deepCopy.b.c = &quot;cba&quot;

console.log(obj.a) // &quot;a&quot;
console.log(obj.b.c) // &quot;c&quot;  </code></pre>
<p>하지만 이 방식도 문제가 있는게 내부에 직렬화 불가한 속성(Symbol 같은)이 있을시 제대로된 처리가 이루어 지지 않는다.</p>
<h3>최종 해결법은?</h3>
<p>lodash 같은 라이브러리를 사용하는게 좋아보인다.</p>
</details>
