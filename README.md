
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
    <a href="https://inho-m.tistory.com/7">FE magazine 개발기 #2 - 목표 구체화, 기본 설정</a>
</li><li>
    <a href="https://inho-m.tistory.com/6">FE magazine 개발기 #1 - 시작, GitHub API(Octokit)</a>
</li><li>
    <a href="https://inho-m.tistory.com/4">FSD 구조에 대한 고찰</a>
</li><li>
    <a href="https://inho-m.tistory.com/3">티스토리 깃허브 연동하기</a>
</li>
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post

<details>
<summary>FE magazine 개발기 #2 - 목표 구체화, 기본 설정</summary>
<br/>
<h3 data-ke-size="size23">구체화</h3>
<h4 data-ke-size="size20">차별점</h4>
<p data-ke-size="size16">문득 이런 생각이 들었다.</p>
<p data-ke-size="size16">이렇게 만들면 타 RSS 파싱 사이트와 다른 게 뭐지?</p>
<p data-ke-size="size16">"프론트엔드" magazine인데 차별점을 줘야 하지 않겠나.</p>
<p data-ke-size="size16">고민한 결과 3가지의 차별점을 두려고한다.</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li><b>기술 트렌드 시각화</b><br />- 주요 키워드 추출하여 태그로<br />- 키워드별 순위 부여, 그래프로 확인</li>
<li><b>코드 샌드박스 연동<br /></b>- 사용자가 즉석에서 코드 테스트를 해볼 수 있게 샌드박스<span>&nbsp;</span>embed<br />- 만약 코드가 있으면 추적하여 해당 글에 자동으로 embed후 예시 추출하게 (고도화)</li>
<li><b>가져온 데이터 내에 AI 챗봇 적용</b><br />- 가져온 데이터 기반으로 AI에게 질문 및 정리 가능하게 설정</li>
</ul>
<p data-ke-size="size16">일단 크게 이 정도만 목표로 설정했다.</p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">디자인</h4>
<p data-ke-size="size16">디자인은 요즘 잘 쓰고 있는 Swiper패키지를 이용하는 방향으로 구상해 봤다</p>
<p data-ke-size="size16">웹은 일반 리스트, 사이트 별로 설정하면 캐러셀</p>
<p data-ke-size="size16">모바일은 swiper의 <a title="vertical" href="https://swiperjs.com/demos#vertical" target="_blank" rel="noopener">vertical</a>을 사용하여 쇼츠넘기는 느낌으로 단일로 보게 할 생각, 글자 리스트 형식 전환 및 사이트 별 전환가능</p>
<p data-ke-size="size16">&nbsp;</p>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="무제.png" data-origin-width="1920" data-origin-height="1200"><span data-url="https://blog.kakaocdn.net/dn/Yx17r/btsPcTRTszr/lRBVPmyPePhk5nFLNphquK/img.png" data-phocus="https://blog.kakaocdn.net/dn/Yx17r/btsPcTRTszr/lRBVPmyPePhk5nFLNphquK/img.png" data-alt="간단히 디자인 구상"><img src="https://blog.kakaocdn.net/dn/Yx17r/btsPcTRTszr/lRBVPmyPePhk5nFLNphquK/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYx17r%2FbtsPcTRTszr%2FlRBVPmyPePhk5nFLNphquK%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="1920" height="1200" data-filename="무제.png" data-origin-width="1920" data-origin-height="1200"/></span><figcaption>간단히 디자인 구상</figcaption>
</figure>
</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">기본 설정</h3>
<h4 data-ke-size="size20">베이스 css 설정</h4>
<p data-ke-size="size16">먼저 tailwind를 설치해 주자.</p>
<p data-ke-size="size16">vite 환경에서 tailwind 설치 가이드는 공식 문서에 잘 나와있다.</p>
<p data-ke-size="size16"><a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank" rel="noopener&nbsp;noreferrer">https://tailwindcss.com/docs/installation/using-vite</a></p>
<figure id="og_1752220995325" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="article" data-og-title="Installing with Vite - Installation" data-og-description="Integrate Tailwind CSS with frameworks like Laravel, SvelteKit, React Router, and SolidJS." data-og-host="tailwindcss.com" data-og-source-url="https://tailwindcss.com/docs/installation/using-vite" data-og-url="https://tailwindcss.com/docs/installation/using-vite" data-og-image="https://scrap.kakaocdn.net/dn/RBGUS/hyZjyinSXm/Zvn3BUDf0R1AIl7gVbLLu0/img.png?width=1200&amp;height=630&amp;face=0_0_1200_630,https://scrap.kakaocdn.net/dn/bpNtga/hyZjxqfqoJ/sTFI4opOGgBewEbd1YUhMk/img.png?width=1200&amp;height=630&amp;face=0_0_1200_630"><a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank" rel="noopener" data-source-url="https://tailwindcss.com/docs/installation/using-vite">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/RBGUS/hyZjyinSXm/Zvn3BUDf0R1AIl7gVbLLu0/img.png?width=1200&amp;height=630&amp;face=0_0_1200_630,https://scrap.kakaocdn.net/dn/bpNtga/hyZjxqfqoJ/sTFI4opOGgBewEbd1YUhMk/img.png?width=1200&amp;height=630&amp;face=0_0_1200_630');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">Installing with Vite - Installation</p>
<p class="og-desc" data-ke-size="size16">Integrate Tailwind CSS with frameworks like Laravel, SvelteKit, React Router, and SolidJS.</p>
<p class="og-host" data-ke-size="size16">tailwindcss.com</p>
</div>
</a></figure>
<p data-ke-size="size16">&nbsp;</p>
<pre id="code_1752196199786" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>/* /src/app/index.css */
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css");
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
@import "tailwindcss";

@custom-variant dark (&amp;:where([data-theme=dark], [data-theme=dark] *));

@theme {
  --font-sans:
    "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue",
    "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", sans-serif;
    
  --spacing: 0.0625rem; /* 1px */
}</code></pre>
<p data-ke-size="size16">간단히 base css를 설정했다.</p>
<p data-ke-size="size16">다크모드를 고려한 코드 포함&nbsp;<a href="https://tailwindcss.com/docs/dark-mode#using-a-data-attribute" target="_blank" rel="noopener&nbsp;noreferrer">https://tailwindcss.com/docs/dark-mode#using-a-data-attribute</a></p>
<p data-ke-size="size16">기본 폰트는 Pretendard로 설정했다.</p>
<p data-ke-size="size16">tailwind 4 버전 이후부터는 간단하게 저렇게 간단하게 spacing을 커스터마이징하여 기본단위값 설정이 가능해졌다. 보기 편하게 1px 단위로 들어가게 하였고 반응형을 고려하여 rem으로 실질적인 값을&nbsp; 설정하였다.</p>
<h4 data-ke-size="size20">국제화 사전 작업</h4>
<p data-ke-size="size16">i18next, react-i18next, i18next-browser-languagedetector(브라우저 언어 감지) 설치</p>
<pre id="code_1752196894690" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>yarn add i18next react-i18next i18next-browser-languagedetector</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">루트 폴더에 locales를 만들고 임시로 영어 한국어 두 개 파일을 만들어 줬다. (임시로 만든 파일에 빈배열이라도 넣어줘야 에러가 안 뜬다)</p>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-11 오전 10.27.59.png" data-origin-width="632" data-origin-height="334"><span data-url="https://blog.kakaocdn.net/dn/ec6djk/btsPeReju3e/5EpKYPR6Ji0sMqiYwEXQSk/img.png" data-phocus="https://blog.kakaocdn.net/dn/ec6djk/btsPeReju3e/5EpKYPR6Ji0sMqiYwEXQSk/img.png"><img src="https://blog.kakaocdn.net/dn/ec6djk/btsPeReju3e/5EpKYPR6Ji0sMqiYwEXQSk/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fec6djk%2FbtsPeReju3e%2F5EpKYPR6Ji0sMqiYwEXQSk%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="466" height="246" data-filename="스크린샷 2025-07-11 오전 10.27.59.png" data-origin-width="632" data-origin-height="334"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">locales폴더에 설정 파일인 i18n.ts 추가, 리소스에는 방금 만든 json을 연결해 준다.</p>
<pre id="code_1752197453485" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/locales/i18n.ts
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enCommon from "../locales/en/common.json";
import koCommon from "../locales/ko/common.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        common: enCommon,
      },
      ko: {
        common: koCommon,
      },
    },
    fallbackLng: "ko",
    defaultNS: "common",
    react: {
      useSuspense: false,
    },
  });

export default i18n;</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">번들링을 위해 main.tsx 에 방금 만든 i18n설정 파일을 import 해줬다.</p>
<pre id="code_1752197740358" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/app/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.tsx'
import "../locales/i18n"; //추가
import './index.css'

createRoot(document.getElementById('root')!).render(
  &lt;StrictMode&gt;
    &lt;App /&gt;
  &lt;/StrictMode&gt;,
)</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이전 프로젝트에서 useTransition 사용할 때 기본값을 주는 게 보기가 편해서 훅을 따로 만들었다.</p>
<pre id="code_1752198449291" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/shared/lib/use-trans.tsx
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

const useTrans = () =&gt; {
    const { t } = useTranslation();
    const trans = useCallback(
        (key: string, defaultValue: string) =&gt; {
            return t(key, { defaultValue });
        },
        [t]
    );
    return { trans }
};

export default useTrans;</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">라우팅 설정</h4>
<p data-ke-size="size16">react-router를 설치한다.</p>
<pre id="code_1752221803698" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>yarn add react-router</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그다음 router파일을 수정해 준다.</p>
<pre id="code_1752221932087" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/app/router.tsx
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { MainPage } from "../pages/main";
import { useMemo } from "react";
import { Layout } from "../shared/ui";

const BrowserRouter = ({ children }: React.PropsWithChildren) =&gt; {
  const router = useMemo(() =&gt; createBrowserRouter(createRoutesFromElements(children)), [children]);

  return &lt;RouterProvider router={router} /&gt;;
};

const Router = () =&gt; {
    
  return (
    &lt;BrowserRouter&gt;
      &lt;Route element={&lt;Layout /&gt;}&gt;
          &lt;Route path="/" element={&lt;MainPage /&gt;} /&gt;
      &lt;/Route&gt;
    &lt;/BrowserRouter&gt;
  );
};
export default Router;</code></pre>
<p data-ke-size="size16">임시로 메인페이지에 더미 내용을 넣고 기본 페이지로 설정해 주었다. (Layout도 단순히 Outlet만 들어간 상태)</p>
<p data-ke-size="size16">이전 react-router와 달라진 게 react-router 6버전 이후 부터는 동적 라우팅이 가능해졌다.</p>
<p data-ke-size="size16">이전에 createBrowserRouter내에 json형식으로 라우팅을 잡아줘야 Route Elements로 사용이 가능했다</p>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-11 오후 5.24.38.png" data-origin-width="1096" data-origin-height="1168"><span data-url="https://blog.kakaocdn.net/dn/1u2VT/btsPga5203Z/5JoeT2OUwEGYB2eItJlpgK/img.png" data-phocus="https://blog.kakaocdn.net/dn/1u2VT/btsPga5203Z/5JoeT2OUwEGYB2eItJlpgK/img.png" data-alt="이런식으로 각기 잡아 줘서 사용..."><img src="https://blog.kakaocdn.net/dn/1u2VT/btsPga5203Z/5JoeT2OUwEGYB2eItJlpgK/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F1u2VT%2FbtsPga5203Z%2F5JoeT2OUwEGYB2eItJlpgK%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="243" height="259" data-filename="스크린샷 2025-07-11 오후 5.24.38.png" data-origin-width="1096" data-origin-height="1168"/></span><figcaption>이런식으로 각기 잡아 줘서 사용...</figcaption>
</figure>
</p>
<p data-ke-size="size16">6버전 이후 createRoutesFromElements 함수가 추가되어서 동적 라우팅이 가능해졌다. 위 사진같이 번거롭던 과정을 위 코드같이 단순히 Route Element만 사용하면 동적으로 라우팅 되도록 바뀌었다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이후 App에 import만 해주면 끝</p>
<pre id="code_1752223314002" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/app/App.tsx
import Router from "./router"

function App() {
  return (
    &lt;Router /&gt;
  )
}

export default App</code></pre>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<p data-ke-size="size16">#2부터는 본격적인 시작인 줄 알았으나... 세팅에 생각보다 시간을 소요하였다ㅠㅠ</p>
<p data-ke-size="size16">#3부터는 정말로 기능 및 ui 구현에 들어가겠다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><span style="background-color: #ffffff; color: #353638; text-align: left;">브랜치 #2</span></p>
<p data-ke-size="size16"><span style="background-color: #ffffff; color: #353638; text-align: left;"><a href="https://github.com/inho1019/front-end-magazine/tree/%232" target="_blank" rel="noopener&nbsp;noreferrer">https://github.com/inho1019/front-end-magazine/tree/%232</a></span></p>
</details>
