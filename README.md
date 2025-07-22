
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
    <a href="https://inho-m.tistory.com/13">FE Trend 개발기 #5 - 웹 2차</a>
</li><li>
    <a href="https://inho-m.tistory.com/12">FE Trend 개발기 #4.1 - 구글 번역 개선</a>
</li><li>
    <a href="https://inho-m.tistory.com/11">FE Trend 개발기 #4.5 - 배포하기 (with.GitHub Pages)</a>
</li><li>
    <a href="https://inho-m.tistory.com/10">FE Trend 개발기 #4 - Alias 설정, 웹 1차, 구글 번역 적용</a>
</li><li>
    <a href="https://inho-m.tistory.com/9">FE Trend 개발기 #3 - RSS Parser 수난기 (with.GitHub Action)</a>
</li>
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post

<details>
<summary>FE Trend 개발기 #5 - 웹 2차</summary>
<br/>
<p data-ke-size="size16">4일 만에 포스트이다.</p>
<p data-ke-size="size16">뭔가 FE Magazine이라는 명칭이 좀 딱딱하고 저 g모양만 아래로 빠지는 게 마음에 안 들어서 FE Trend로 명칭을 바꾸고 리팩토링 작업을 하였다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">기본 작업에서는&nbsp;<span style="font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Apple SD Gothic Neo', Arial, sans-serif; letter-spacing: 0px;">퍼블리싱 작업이 대부분이라 작업 양이 많아도 막상 포스팅을 할 내용이 없다.</span></p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그래도 어느정도 구색은 갖추었으니 그간 바뀌거나 추가된 기능 위주로 다뤄보려고 한다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">워크플로우 연결하기</h3>
<p data-ke-size="size16">현재 나는 해당 프로젝트에서 두 개의 워크플로우를 사용하고 있다.</p>
<p data-ke-size="size16">하나는 배포를 담당하는 deployment, 다른 하나는 파싱을 담당하는 rss-parser이다.</p>
<p data-ke-size="size16">본래 deployment 가 메인 branch에 push 감지 시 동작하게 하였으나 타 워크플로우로 인한 push는 감지하지 못하였다...</p>
<pre id="code_1753157116616" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>on:
  # 기본 브랜치에 대한 푸시 이벤트 발생 시 실행
  push:
    branches:
      - main</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그래서 고심한게 rss-parser를 돌릴 때 데이터 변경으로 commit/push가 발생하면 rss-parser에서 deployment를 실행시켜 주는 방법으로 고민했고 다행히 해당 기능은 지원을 하였다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">on에&nbsp; workflow_dispatch: 를 설정하면 해당 워크플로우는 수동으로 실행이 가능해진다.</p>
<p data-ke-size="size16">이것은 타 워크플로우에서 해당워크플로우를 실행하는것도 가능해진다는 말이다.</p>
<p data-ke-size="size16">대신 permission 에 action: write를 설정해줘야 한다.&nbsp;</p>
<pre id="code_1753157540814" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code># .github/workflows/rss-parser.yml
on:
  ...
  # Actions 탭에서 수동으로 워크플로우를 실행할 수 있도록 구성
  workflow_dispatch:

# 권한부여
permissions:
  ...
  actions: write
  id-token: write #이건 필수는 아닌데 넣어주는게 좋다고 해서 넣어줌

jobs:
  build:
...
	- name: Commit Data
      run: |
        git config --local user.email "...@...com"
        git config --local user.name "..."
        git add .
        if ! git diff --cached --quiet; then
          git commit -m "Update data.json"
          git push
          echo "changes_detected=true" &gt;&gt; $GITHUB_ENV
        else
          echo "No changes to commit"
          echo "changes_detected=false" &gt;&gt; $
        fi
    # 커밋 발생시 배포 워크플로우를 트리거
    - name: Trigger Deployment
      if: env.changes_detected == 'true'
      uses: benc-uk/workflow-dispatch@v1
      with:
        workflow: Deployment
        token: ${{ secrets.GITHUB_TOKEN }}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">원리는 commit 발생시 임시 env를 만들어 boolean값을 주고 다음 job에서 해당 env의 boolean으로 분기 처리하여 true일 경우 Deployment 워크플로우를 실행시키는 것이다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">크게 외부에서 손볼것은 없다. env도 만들어지는 거고 ${{ secrets.GITHUB_TOKEN }}는 자체적으로 지원을 해주기 때문</p>
<p data-ke-size="size16">다만 신경 써야하는 것은 workflow: 에 정확한 workfow의 명칭(yml에서 설정한 name)을 넣어 줘야 한다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">테스트 결과 잘 동작하는 것을 확인했다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">Tailwind + details/summary 활용하기</h3>
<p data-ke-size="size16">모바일 화면에서 item panel을 열면 제목이 너무 길어 본문내용이 상당 부분 가려지는 문제가 발생하였다.</p>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-22 오후 1.25.31.png" data-origin-width="1040" data-origin-height="960"><span data-url="https://blog.kakaocdn.net/dn/mx2Dm/btsPrOpXm7D/3MrEDYMHAtB107DJCVfFc1/img.png" data-phocus="https://blog.kakaocdn.net/dn/mx2Dm/btsPrOpXm7D/3MrEDYMHAtB107DJCVfFc1/img.png" data-alt="제목/링크 부분은 고정이고 하단 영역에서 스크롤을 한다"><img src="https://blog.kakaocdn.net/dn/mx2Dm/btsPrOpXm7D/3MrEDYMHAtB107DJCVfFc1/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fmx2Dm%2FbtsPrOpXm7D%2F3MrEDYMHAtB107DJCVfFc1%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="426" height="393" data-filename="스크린샷 2025-07-22 오후 1.25.31.png" data-origin-width="1040" data-origin-height="960"/></span><figcaption>제목/링크 부분은 고정이고 하단 영역에서 스크롤을 한다</figcaption>
</figure>
</p>
<p data-ke-size="size16">그래서 해당 제목을 열고 닫는 방식으로 구현하기로 생각했다.</p>
<p data-ke-size="size16">이럴 때 react의 state를 사용해서 구현이 가능하지만 굳이 state까지 사용할 필요 없이 시맨틱 태그 + tailwind 만으로도 구현이 가능하다.</p>
<p data-ke-size="size16"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details" target="_blank" rel="noopener&nbsp;noreferrer">https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details</a></p>
<figure id="og_1753158493508" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="&lt;details&gt;: The Details disclosure element - HTML | MDN" data-og-description="The &lt;details&gt; HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an open state. A summary or label must be provided using the &lt;summary&gt; element." data-og-host="developer.mozilla.org" data-og-source-url="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details" data-og-url="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details" data-og-image="https://scrap.kakaocdn.net/dn/eo0ODl/hyZnb2aPNd/EK2fqkQ4Por1s6DXe9mgr1/img.png?width=1920&amp;height=1080&amp;face=0_0_1920_1080"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details" target="_blank" rel="noopener" data-source-url="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/eo0ODl/hyZnb2aPNd/EK2fqkQ4Por1s6DXe9mgr1/img.png?width=1920&amp;height=1080&amp;face=0_0_1920_1080');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">&lt;details&gt;: The Details disclosure element - HTML | MDN</p>
<p class="og-desc" data-ke-size="size16">The &lt;details&gt; HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an open state. A summary or label must be provided using the &lt;summary&gt; element.</p>
<p class="og-host" data-ke-size="size16">developer.mozilla.org</p>
</div>
</a></figure>
<p data-ke-size="size16">혹시 해당 태그에 대해 잘 모른다면 한번 읽어보는 것을 추천한다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">tailwind에는 group이라는 className이 있다.</p>
<p data-ke-size="size16">해당 클래스는 태그 내부의 다른 태그에 현재 태그의 속성을 상속시켜준다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">details에는 open이라는 속성이 있다. 그리고 해당 속성의 boolean이 클릭 시 토글로 전환되면서 열렸다 닫혔다 한다.</p>
<p data-ke-size="size16">그럼 해당 open 속성과 group을 조합할 수 있지 않겠는가?</p>
<pre id="code_1753158731556" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/features/trend/ui/trend-item.tsx
...
                      &lt;details open className="group"&gt;
                           &lt;summary className="...group-open:line-clamp-2..."&gt;{title}&lt;/summary&gt;
                        &lt;/details&gt;
...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">line-clamp는 해당 라인 수 만큼 표시하고 나머지는 ellipsis 처리해주는 tailwind 클래스이다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">저런 식으로 details의 open 속성을 group-open으로 사용하여 open처리 시 ellipsis 처리하도록 구현하는 것이 가능!</p>
<p data-ke-size="size16">(부모요소에 group은 무조건 선언 필요)</p>
<p data-ke-size="size16">open때 ellipsis 고 close일 때 전체로 보이는 건 추상적인 개념이니 신경 쓰지 말자 ㅎㅎ</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">state를 쓰지 않고 저렇게 html태그와 tailwind로만 구현하니 참 간편하다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>화살표(marker)가 보일 경우</b></p>
<p data-ke-size="size16">base css에서 제거해 주자</p>
<pre id="code_1753172986040" class="css" data-ke-language="css" data-ke-type="codeblock"><code>/* src/app/index.css */
 
@layer base {
 ...
  details summary::-webkit-details-marker,
  details summary::marker {
    display: none !important;
    color: transparent !important;
    background: none !important;
  }
  details summary {
    @apply list-none cursor-default;
  }
  ...
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">결과</h4>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-filename="Jul-22-2025 13-38-04.gif" data-origin-width="380" data-origin-height="530"><span data-url="https://blog.kakaocdn.net/dn/bKtmHt/btsPsqbroYT/bxkeqFlOvNzQIAf7msrVS0/img.gif" data-phocus="https://blog.kakaocdn.net/dn/bKtmHt/btsPsqbroYT/bxkeqFlOvNzQIAf7msrVS0/img.gif"><img src="https://blog.kakaocdn.net/dn/bKtmHt/btsPsqbroYT/bxkeqFlOvNzQIAf7msrVS0/img.gif" srcset="https://blog.kakaocdn.net/dn/bKtmHt/btsPsqbroYT/bxkeqFlOvNzQIAf7msrVS0/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="288" height="530" data-filename="Jul-22-2025 13-38-04.gif" data-origin-width="380" data-origin-height="530"/></span></figure>
</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">HTML 정제(sanitized)하기</h3>
<p data-ke-size="size16">dangerouslysetinnerhtml 사용 시 HTML 정제야 당연한 거지만 해당 프로젝트를 진행하면서 고민이 하나 있었다.</p>
<p data-ke-size="size16">현재 구조가 주기적 데이터 파싱 후, 저장해 두고 페이지는 정적으로 저장되어 있는 데이터를 꺼내와서 사용하는 구조이다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">데이터에 base64가 들어가는 것도 아니고 용량을 얼마나 차지하겠냐 생각했는데... 생각보다 많은 용량을 차지하고 있었다.</p>
<p data-ke-size="size16">현재 사이트 5개를 등록을 해두었는데 데이터의 용량이 2mb인 것이다.&nbsp;</p>
<p data-ke-size="size16">작은 용량으로 보일 수 있겠지만은 데이터 = 트래픽 용량이다. 사이트가 나중에 몇십 개가 등록이 된 상태로 사용자가 많아지면 트래픽 용량이 확 빠져버리기에 (GitHub의 제한 트래픽은 100GB) 좀 더 최적화를 할 필요를 느꼈다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">여러 방법이 있지만 그중 하나로 생각한 게 정제가 필요한 코드를 클라이언트 사이드에서 정제하기보다 rss-parser에서 데이터 저장하기 전에 정제하여 파일용량을 작게 만들면 좋겠다고 생각했다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">먼저 dompurify 패키지를 설치한다.</p>
<p data-ke-size="size16">해당 패키지는 dom 정제를 보다 쉽고 편리하게 해 준다.</p>
<pre id="code_1753173129019" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>yarn add dompurify</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그리고 우리는 node 환경에서 실행할 거기에 jsdom(시뮬 dom)도 설치해 준다.</p>
<pre id="code_1753173369747" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>yarn add jsdom</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그리고 이전에 만들었던 actions.ts 스크립트 파일에 정제 함수를 추가한다.</p>
<pre id="code_1753173589753" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// scripts/action.ts
...
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

function sanitizeRSSContent(rawHTML: string): string {
  return DOMPurify.sanitize(rawHTML, {
    FORBID_TAGS: ['script', 'style', 'link', 'form'],
    FORBID_ATTR: ['style', 'onerror', 'onclick', 'onload'],
    ALLOWED_URI_REGEXP: /^https?:/
  });
}
...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">대충 FORBID...은 거부할 요소들이고 ALLOWED...은 허용할 요소들이다. 어렵지 않으니 사용할 때 상세 항목들을 찾아봐라.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">해당 함수를 사용하여 content를 저장하기 전에 한번 정제해줬다.</p>
<pre id="code_1753173748913" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>content: content ? sanitizeRSSContent(decode(decode(content))) : "",</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>이후 테스트 결과는...</b></p>
<p data-ke-size="size16">2.1mb였던 파일이 1.4mb까지 줄었다!</p>
<p data-ke-size="size16">실제로 표시되는 content에도 거의 영향이 가지 않았다.</p>
<p data-ke-size="size16">생각보다 성과가 좋아서 만족...!</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">기타 작업</h3>
<h4 data-ke-size="size20">모바일 뒤로 가기 이슈</h4>
<p data-ke-size="size16">모바일 환경에서 상세 페널이 열렸을 때 무심코 뒤로 가기 액션을 했다가 웹사이트가 꺼지는 이슈가 있었다.</p>
<p data-ke-size="size16">고심 끝에&nbsp; 패널 open 분기 상태를 searchParams로 관리하여 뒤로 가기 시 history로 넘어가 자연스럽게 panel이 닫히도록 하였다.</p>
<pre id="code_1753174192037" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/pages/trend/ui/initial/trend-list.tsx
...
    const [searchParams, setSearchParams] = useSearchParams();

    const isPanelOpen = useMemo(() =&gt; searchParams.get("trend-panel") === "true", [searchParams]);

    const handleClickItem = useCallback((data: ParserData) =&gt; {
        setSelectedData(data);
        if (!isPanelOpen) {
            setSearchParams((prev) =&gt; {
                const params = new URLSearchParams(prev);
                params.set("trend-panel", "true");
                return params;
            });
        }
    }, [isPanelOpen, setSearchParams]);

    const handleClosePanel = useCallback(() =&gt; {
        setSelectedData(null);
        setSearchParams((prev) =&gt; {
            const params = new URLSearchParams(prev);
            params.delete("trend-panel");
            return params;
        }, { replace: true });
    }, [setSearchParams]);
    
...</code></pre>
<p data-ke-size="size16">close때 replace를 걸어 기록에 남지 않게 설정하였다.</p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">클라이언트 사이드에서 데이터 정제 및 태그 변경</h4>
<p data-ke-size="size16">가끔 몇몇 콘텐츠에 과도하게 띄어쓰기가 있는 것을 발견하였다.</p>
<p data-ke-size="size16">띄어쓰기도 parser에서 어느 정도 거르고 가져올까도 했는데 해당 사안은 클라이언트 사이드에서 처리하기로 했다.</p>
<pre id="code_1753174486158" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/shared/lib/utils/sanitize-html.ts
export const sanitizeHtml = (html: string): string =&gt; {
    return html
      .replace(/(\r\n|\n|\r){3,}/g, '\n\n') // 3개 이상 줄바꿈 &rarr; 2개
      .replace(/(\r\n|\n|\r)/g, '\n') // 나머지는 통일성 있게 줄바꿈
      .trim();   
};</code></pre>
<p data-ke-size="size16">따로 유틸 함수를 만들어서 사용했다. dangerouslysetinnerhtml에 넣기 전에 사용하면 끝.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">추가로 content 내부의 a태그들이 새창이 아닌 현재창에서 열리는 것도 문제라고 생각, querySelector로 a태그만 선택 후 _blank를 설정해 줬다.</p>
<pre id="code_1753174684165" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/features/trend/ui/trend-panel.tsx
...
	useEffect(() =&gt; {
        if (viewerRef.current) {
            viewerRef.current.scrollTop = 0;
            const links = viewerRef.current.querySelectorAll('a');
            links.forEach(link =&gt; {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            });
		}
    }, [data]);
...</code></pre>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<p data-ke-size="size16">프로젝트가 거의 막바지에 접어든 것 같다.</p>
<p data-ke-size="size16">아마도 고도화(ai 챗봇)를 제외하면 다음 챕터가 마지막이 될 것 같다.</p>
<p data-ke-size="size16">#6에서 설정 패널 및 사이트 등록 작업을 진행해 보겠다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">브랜치 #5</p>
<p data-ke-size="size16"><a href="https://github.com/inho1019/front-end-trend/tree/%235" target="_blank" rel="noopener&nbsp;noreferrer">https://github.com/inho1019/front-end-trend/tree/%235</a></p>
</details>
