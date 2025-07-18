
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
    <a href="https://inho-m.tistory.com/12">FE magazine 개발기 #4.1 - 구글 번역 개선</a>
</li><li>
    <a href="https://inho-m.tistory.com/11">FE magazine 개발기 #4.5 - 배포하기 (with.GitHub Pages)</a>
</li><li>
    <a href="https://inho-m.tistory.com/10">FE magazine 개발기 #4 - Alias 설정, 웹 1차, 구글 번역 적용</a>
</li><li>
    <a href="https://inho-m.tistory.com/9">FE magazine 개발기 #3 - RSS Parser 수난기 (with.GitHub Action)</a>
</li><li>
    <a href="https://inho-m.tistory.com/7">FE magazine 개발기 #2 - 목표 구체화, 기본 설정</a>
</li>
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post

<details>
<summary>FE magazine 개발기 #4.1 - 구글 번역 개선</summary>
<br/>
<p data-ke-size="size16">찾아보다가 세로고침 없이 구글 번역 복원로직을 발견했다!</p>
<p data-ke-size="size16"><a href="https://stackoverflow.com/questions/16281414/google-translator-how-to-manually-restore-original-language-with-javascript" target="_blank" rel="noopener&nbsp;noreferrer">https://stackoverflow.com/questions/16281414/google-translator-how-to-manually-restore-original-language-with-javascript</a></p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">혼자 테스트할 때는 iframe 내부 코드를 건드려야 되는 거라 답이 없다고 생각했는데 역시 숨겨진 함수가 존재했다...</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">해당 방식을 참고하여 리팩토링 작업을 거쳤다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>index.html</b></p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>useEffect로 add 하던 script를 index.html로 옮겼다.</li>
<li>googleTranslateElementInit를 init 하면 바로 번역이 진행되기에 바로 restore(원문 보기)를 실행시켰다.</li>
</ul>
<pre id="code_1752822045169" class="html xml" data-ke-language="html" data-ke-type="codeblock"><code>  &lt;!-- index.html --&gt;
  ...
  &lt;body&gt;
    &lt;div id="root"&gt;&lt;/div&gt;
    &lt;div id="google_translate_element"&gt;&lt;/div&gt;
    &lt;script&gt;
      function googleTranslateElementInit() {
        window.googleTranslator = new google.translate.TranslateElement(
          {
              autoDisplay: true 
          },
          'google_translate_element'
        );
        Object.keys(window.googleTranslator).forEach((k) =&gt; {
            if (typeof window.googleTranslator[k]?.restore === 'function') {
                window.googleTranslator[k].restore();
            }
        });
      }
    &lt;/script&gt;
    &lt;script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async&gt;&lt;/script&gt;
    &lt;script type="module" src="/src/app/main.tsx"&gt;&lt;/script&gt;
  &lt;/body&gt;
  ...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>google-translate-provider.tsx</b></p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>기존 script 주입 로직 index.html로 이동</li>
<li>단순 isEnabled를 사용한 토글 함수 형태로 변경, false시 restore함수 실행</li>
</ul>
<pre id="code_1752822277003" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/shared/ui/google-translate/google-translate-provider.tsx
...
    useEffect(() =&gt; {
        if (isEnabled) {
            const langCode = i18next.language.split("-")[0];

            const select = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
            if (select) {
                select.value = langCode;
                select.dispatchEvent(new Event('change'));
            }
        } else {
            if (window.googleTranslator) {
                Object.keys(window.googleTranslator).forEach((k) =&gt; {
                    if (typeof window.googleTranslator[k]?.restore === 'function') {
                        window.googleTranslator[k].restore();
                    }
                });
            }
            document.cookie = "googtrans=";
        };
...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">다행히 잘 동작했다!</p>
<p data-ke-size="size16">생각보다 빠르고 깔끔해서 놀랐다...</p>
<p data-ke-size="size16">앞으로 번역기 사용할 일 있으면 자주 사용하게 될 것 같다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">브랜치 #4.1</p>
<p data-ke-size="size16"><a href="https://github.com/inho1019/front-end-magazine/tree/%234.1" target="_blank" rel="noopener&nbsp;noreferrer">https://github.com/inho1019/front-end-magazine/tree/%234.1</a></p>
</details>
