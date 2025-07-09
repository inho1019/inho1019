
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

## GitHub

<br>
<div align="center">
  <img src="https://streak-stats.demolab.com?user=inho1019&theme=dark&border_radius=4.5&date_format=%5BY.%5Dn.j&card_width=450&card_height=215" alt="GitHub Streak" />&nbsp;
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=inho1019&layout=donut&theme=dark" />
</div>

<br>

## Blog
<details open>
  <summary>목록</summary>
  <ul>

<li>
    <a href="https://inho-m.tistory.com/4">FSD 구조에 대한 고찰</a>
</li><li>
    <a href="https://inho-m.tistory.com/3">티스토리 깃허브 연동하기</a>
</li>
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post

<details>
<summary>FSD 구조에 대한 고찰</summary>
<br/>
<p data-ke-size="size16">근래 회사에서 기존 컴포넌트 기반 구조로 하던 프로젝트를 기능 기반 구조(FSD)로 바꾸자는 얘기가 나왔고 논의 끝에 FSD 구조를 적용한 신규 프로젝트를 두어개가 가량 진행했다.</p>
<p data-ke-size="size16">본 글에서는 FSD에 대해 간단히 설명하고 실제 진행했을 때의 느낀점, 개선점을 적어보려고 한다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">FSD(기능 기반 구조)란</h3>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="image.jpeg" data-origin-width="1622" data-origin-height="736"><span data-url="https://blog.kakaocdn.net/dn/9PQiq/btsPargjQNf/1oJR2YA69TFRlpxYaBDj8k/img.jpg" data-phocus="https://blog.kakaocdn.net/dn/9PQiq/btsPargjQNf/1oJR2YA69TFRlpxYaBDj8k/img.jpg"><img src="https://blog.kakaocdn.net/dn/9PQiq/btsPargjQNf/1oJR2YA69TFRlpxYaBDj8k/img.jpg" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9PQiq%2FbtsPargjQNf%2F1oJR2YA69TFRlpxYaBDj8k%2Fimg.jpg" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="1622" height="736" data-filename="image.jpeg" data-origin-width="1622" data-origin-height="736"/></span></figure>
</p>
<p data-ke-size="size16">기본적으로 FSD구조를 검색하면 나오는 구조이다.</p>
<p data-ke-size="size16">사실 이것만 처음 이것만 달랑 보며 설명을 보아도 이해하기가 쉽지 않다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이해를 돕기위해 기본적인 설명을 해보겠다.</p>
<h4 data-ke-size="size20"><span style="color: #000000;" data-token-index="0">상위계층구조에서는 하위 구조를 import할 수 있지만, 하위구조에서는 상위구조의 내용들을 import 할 수 없다</span>.</h4>
<p data-ke-size="size16">가장 기본이 되는 규칙이자 다른 구조와의 차이점이다.</p>
<p data-ke-size="size16">알아 들을수 있게 설명하면</p>
<ol style="list-style-type: decimal;" data-ke-list-type="decimal">
<li>app은 (되도록)page만 import 한다.</li>
<li>page에서는&nbsp;UI,&nbsp;features,&nbsp;entities,&nbsp;shared&nbsp;를 import 할 수 있다.</li>
<li>UI&nbsp;에서는,&nbsp;features,&nbsp;entities,&nbsp;shared를 import 할 수 있다.</li>
<li>features에서는&nbsp;entities와&nbsp;shared를 import할 수 있다.</li>
<li>entities는 shared만 import 할 수 있다.</li>
<li>shared는 공통 기능</li>
</ol>
<p data-ke-size="size16">이렇게 Layers단 상위계층에서 하위계층만을 import 가능하다는 의미</p>
<h4 data-ke-size="size20">Layers 내부의 Segments 형식 통일(app제외)</h4>
<p data-ke-size="size16">중간 기능 및 역할을 명명한 slices를 제외하고 그 내부의 Segments의 구조는 프로젝트 코드 스타일 유지를 위해 통일하는 것이 좋다</p>
<h4 data-ke-size="size20">Layers&nbsp;역할</h4>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>app: 애플리케이션의 루트 구성 요소 ex:) router, app, main, providers</li>
<li>pages: 최종적으로 조합해서 사용자에게 출력하는 페이지를 담당</li>
<li><s>UI: 하위 기능들을 뷰단위로 조합</s></li>
<li>widgets: 페이지를 구성하는 중간 단위 블록 - 현재 UI보다는 widgets 개념을 좀더 많이 사용</li>
<li>features: 기능(feature) 단위의 조합</li>
<li>entities: 하나의 커다란 비즈니스 주체(데이터 중심) ex:) user, post</li>
<li>shared: 전역적 재사용 가능한 요소</li>
</ul>
<p data-ke-size="size16">최대한 간단히 설명을 해봤다. 실제 사용시 좀더 세밀하게 찾아보고 신경 쓰는것이 좋다.</p>
<h4 data-ke-size="size20">Slices는 기능 또는 도메인 단위를 기준으로 나눈 하위 그룹 폴더</h4>
<h4 data-ke-size="size20">Segments 역할</h4>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>ui: 실제 외부에 노출되는 UI 컴포넌트</li>
<li>model: 타입 및 상태 관리 ex:) ...type.ts, ...context.ts</li>
<li>api: 서버 통신 관련 로직</li>
<li>lib: 유틸성 함수, hook은 따로 분리해도되고 여기에 같이 사용하기도 함</li>
<li>assets: 이미지나 아이콘 기타에셋</li>
<li>config: 환경변수 상수</li>
<li>...</li>
</ul>
<p data-ke-size="size16">프로젝트에 따라 추가되거나 없애기도함</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">실제 사용시 느낀점</h3>
<h4 data-ke-size="size20">장점</h4>
<ol style="list-style-type: decimal;" data-ke-list-type="decimal">
<li>기능별 추적 및 수정(유지보수)가 좀 더 편함<br />확실히 정리가 잘되어 있어 보기 편함</li>
<li>팀원간 작업에 대해 좀더 원할히 분담 가능</li>
<li>타인원 작업도 불필요한 소통 없이 이게 무엇인지 명확히 알기 가능</li>
</ol>
<h4 data-ke-size="size20">단점</h4>
<ol style="list-style-type: decimal;" data-ke-list-type="decimal">
<li><span style="font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Apple SD Gothic Neo', Arial, sans-serif; letter-spacing: 0px;">초반 구조 잡는게 빡심<br /></span>리드 개발자가 어느정도 구조를 맞춰 줘야 팀원들이 그거에 맞춰 진행이 가능, 아닐경우 중구난방 작업될 가능성이 있음 <br />아니면 회사 자체적으로 규칙을 문서로 정리 하는것도 좋은 생각</li>
<li>폴더가 좀 많아진다<br />어디 있는지 알긴 아는데 매번 타고타고 들어가는게 좀 귀찮</li>
<li>어느정도 이해도가 필요하다</li>
<li>api 코드 중복이 좀 있다</li>
</ol>
<h4 style="color: #000000; text-align: start;" data-ke-size="size20">추가적으로...</h4>
<p style="color: #333333; text-align: start;" data-ke-size="size16">각 기능을 내보낼때는 slices단위로 배럴파일 사용하는것이 좋다. import창이 깔끔하고 추적이 용이하다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 style="color: #333333; text-align: start;" data-ke-size="size23">주관적인 이야기 및 개선점</h3>
<p data-ke-size="size16">확실히 컴포넌트 기반 구조보다는 훨씬 재사용성도 높아지고 유지보수가 용이해졌다.</p>
<p data-ke-size="size16">그럼에도 구조개선의 여지가 있어 그거에 대한 본인의 의사를 적어보려고 한다</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b>과감하게 widgets(UI), entities 제거</b></p>
<p data-ke-size="size16">두부분은 사용하거나 해당 기능을 제작할수록 좀 모호한 부분이거나 다른부분에서 사용해도 되는것들이 많이 보였다.</p>
<p data-ke-size="size16">그래서 구조 개편을 위해 삭제하는것이 좋다고 생각이 들었고 찾아보니 실제 그렇게 진행하는 사례가 많았다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b>Api 관리를 별도로</b></p>
<p data-ke-size="size16">api를 segments단위에서 관리하다 보니 중복이 왕왕 발생했다.</p>
<p data-ke-size="size16">또 추후 추가건으로 다른 기능이 추가 될시 이전에 기능(features)단에서 사용했던 api를 공용(shared)단으로 리팩토링할 가능성도 높아 보였다.</p>
<p data-ke-size="size16">그래서 api 를 별도의 폴더로 빼서 그 안에서 도메인 단위로 나누는게 좋다고 생각, 계층은 shared 와 equal 계층으로 판단</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">결론적으로 해당 구조가 완성 (gpt 도움)</p>
<pre id="code_1752028844235" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>src/
├── app/
│   ├── App.tsx
│   ├── providers.tsx
│   └── router.tsx
│
├── pages/
│   ├── DashboardPage/
│   │   └── index.tsx
│   └── SettingsPage/
│       └── index.tsx
│
├── features/
│   ├── led/
│   │   ├── model/
│   │   │   └── ledSlice.ts
│   │   ├── lib/
│   │   │   └── getLedStatus.ts
│   │   └── ui/
│   │       └── LedControlButton.tsx
│   └── temperature/
│       ├── model/
│       │   └── tempSlice.ts
│       └── ui/
│           └── TemperatureDisplay.tsx
│
├── api/
│   ├── led/
│   │   └── api.ts
│   ├── temperature/
│   │   └── api.ts
│   ├── user/
│   │   └── api.ts
│   └── device/
│       └── api.ts
│
├── shared/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── lib/
│   │   ├── fetchWithRetry.ts
│   │   └── formatDate.ts
│   └── api/
│       └── client.ts
│
└── index.tsx</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">다음에 개인 프로젝트시 적용을 해볼 생각이다.</p>
</details>
