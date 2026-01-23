
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
    <a href="https://inho-m.tistory.com/24">믹스인/트레잇</a>
</li><li>
    <a href="https://inho-m.tistory.com/23">패스포트와 세션을 사용한 인증</a>
</li><li>
    <a href="https://inho-m.tistory.com/22">React에서의 전역 스코프</a>
</li><li>
    <a href="https://inho-m.tistory.com/21">얕은복사와 깊은복사</a>
</li><li>
    <a href="https://inho-m.tistory.com/20">고정소수점과 부동소수점</a>
</li>
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post

<details>
<summary>믹스인/트레잇</summary>
<br/>
<p data-ke-size="size16">클래스를 여러 파츠로 쪼개서 필요한 부분만 사용하거나 합쳐서 사용하는 것이 가능하다.</p>
<p data-ke-size="size16">이것을 <b>믹스인/트레잇</b> 방식이라고 부름</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">예시로 보면 간단하다.</p>
<pre class="scala"><code>// 1. 기본 타입을 정의 (이건 문법적인 약속입니다. "생성자 기능이 있는 모든 것")
type Constructor = new (...args: any[]) =&gt; {};

// 2. [믹스인 1] 싸움 능력 부품
function CanFight&lt;T extends Constructor&gt;(Base: T) {
  return class extends Base {
    attack() {
      console.log('  펀치를 날립니다!');
    }
  };
}

// 3. [믹스인 2] 운전 능력 부품
function CanDrive&lt;T extends Constructor&gt;(Base: T) {
  return class extends Base {
    drive() {
      console.log('  부릉부릉 운전합니다!');
    }
  };
}

// 4. 기본 클래스 (사람)
class Human {
  speak() {
    console.log('안녕, 나는 사람이야.');
  }
}

// ---------------------------------------------
// 5. 믹스인으로 조립하기! (이게 핵심)
// Human에 싸움 능력(CanFight)과 운전 능력(CanDrive)을 입힘
class Spy extends CanDrive(CanFight(Human)) {}

// 6. 사용해보기
const jamesBond = new Spy();

jamesBond.speak();  // 기본 기능 (Human)
jamesBond.attack(); // 추가된 기능 1 (CanFight)
jamesBond.drive();  // 추가된 기능 2 (CanDrive)</code></pre>
<p data-ke-size="size16">이런 방식으로 기본 클래스에 필요한 클래스를 덧입히는 느낌.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">확장성이 필요한 클래스에 사용하면 좋을것 같다!</p>
</details>
