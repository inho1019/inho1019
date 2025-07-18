
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
    <a href="https://inho-m.tistory.com/10">FE magazine 개발기 #4 - Alias 설정, 웹 1차, 구글 번역 적용</a>
</li><li>
    <a href="https://inho-m.tistory.com/9">FE magazine 개발기 #3 - RSS Parser 수난기 (with.GitHub Action)</a>
</li><li>
    <a href="https://inho-m.tistory.com/7">FE magazine 개발기 #2 - 목표 구체화, 기본 설정</a>
</li><li>
    <a href="https://inho-m.tistory.com/6">FE magazine 개발기 #1 - 시작, GitHub API(Octokit)</a>
</li><li>
    <a href="https://inho-m.tistory.com/4">FSD 구조에 대한 고찰</a>
</li>
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post

<details>
<summary>FE magazine 개발기 #4 - Alias 설정, 웹 1차, 구글 번역 적용</summary>
<br/>
<p data-ke-size="size16">시간을 쪼개서 조금 빠르게 작업을 진행하였다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">Alias 설정</h3>
<p data-ke-size="size16">본격적으로 웹 퍼블리싱에 들어가기에 앞서 import 할 때 보기 편하게 하기 위해 alias를 설정해 주었다.</p>
<p data-ke-size="size16">먼저 vite-tsconfig-paths를 설치한다</p>
<pre id="code_1752768971821" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>yarn add vite-tsconfig-paths</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">어려운 건 없고 tsconfig.json paths 설정을 vite가 인식할 수 있도록 하는 모듈이다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">vite.config.ts에 모듈을 추가해 준다.</p>
<pre id="code_1752769132041" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// vite.config.ts
export default defineConfig({
  plugins: [
    ...
    tsconfigPaths(),
    ...
  ],
})</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그리고 ts.config.app.json 에 alias를 설정하면 끝난다.</p>
<p data-ke-size="size16">나의 경우에는 FSD구조에 맞추어 alias를 설정하였다.</p>
<pre id="code_1752769237205" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// tsconfig.app.json
{
  "compilerOptions": {
    ...
    /* Aliases */
    "paths": {
      "@app/*": ["./src/app/*"],
      "@pages/*": ["./src/pages/*"],
      "@features/*": ["./src/features/*"],
      "@shared/*": ["./src/shared/*"],

      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이후 프로젝트 전반적으로 리팩토링 작업을 거치어 파일들을 alias에 맞추어 import 하였다.</p>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-18 012138.png" data-origin-width="625" data-origin-height="103"><span data-url="https://blog.kakaocdn.net/dn/csuWgm/btsPnHQSSUj/qq0gj0J8zgXMw6Yc4ewSg0/img.png" data-phocus="https://blog.kakaocdn.net/dn/csuWgm/btsPnHQSSUj/qq0gj0J8zgXMw6Yc4ewSg0/img.png" data-alt="이런식으로 보기 편하게 들어간다"><img src="https://blog.kakaocdn.net/dn/csuWgm/btsPnHQSSUj/qq0gj0J8zgXMw6Yc4ewSg0/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcsuWgm%2FbtsPnHQSSUj%2Fqq0gj0J8zgXMw6Yc4ewSg0%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="552" height="91" data-filename="스크린샷 2025-07-18 012138.png" data-origin-width="625" data-origin-height="103"/></span><figcaption>이런식으로 보기 편하게 들어간다</figcaption>
</figure>
</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">웹 1차</h3>
<h4 data-ke-size="size20">아이템, 리스트 퍼블리싱</h4>
<p data-ke-size="size16">퍼블리싱 부분은 크게 설명할 것이 없어 간단히 코드만 띄우고 특이점만 설명하겠다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>아이템</b></p>
<p data-ke-size="size16">만들어둔 useTrans를 유틸을 활용하여 국제화 적용 테스트를 해보았다.</p>
<p data-ke-size="size16">div props를 기반으로 두어 컴포넌트로서 유동적으로 활용할 수 있게 하였다.</p>
<pre id="code_1752769481565" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src\features\magazine\ui\magazine-item.tsx
import type { ParserData } from "@shared/model/parser";
import { useTrans } from "@shared/lib/utils";
import { DateTime } from "luxon";

interface MagazineItemProps extends React.HTMLAttributes&lt;HTMLDivElement&gt; {
    data: ParserData;
}

export const MagazineItem = ({ data, ...props }: MagazineItemProps) =&gt; {
    const { trans } = useTrans();

    return (
        &lt;div {...props}&gt;
            &lt;p className="text-xs text-gray-500"&gt;{data.site.name}&lt;/p&gt; 
            &lt;h2 className="text-xl font-bold"&gt;{data.title}&lt;/h2&gt;
            &lt;p className="text-sm text-gray-700"&gt;{trans("magazine.createdAt", "작성일")} {DateTime.fromISO(data.createdAt).toFormat("yyyy-MM-dd HH:mm")}&lt;/p&gt; 
            {data.thumbnail &amp;&amp; &lt;img src={data.thumbnail} alt={data.title} className="mt-2 w-32 h-32 object-cover" /&gt;}
        &lt;/div&gt;
    );
}</code></pre>
<pre id="code_1752769599942" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>// src\locales\ko\common.json
{
    "magazine": {
        "createdAt": "작성일"
    }
}</code></pre>
<p data-ke-size="size18">&nbsp;</p>
<p data-ke-size="size18"><b>리스트</b></p>
<p data-ke-size="size16">항목 별로 경계선을 만들어주는 tailwind 속성의 divide를 활용하였다</p>
<pre id="code_1752769803859" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src\pages\magazine\ui\initial\magazine-list.tsx
const data = useDataContext();
...
            &lt;div className="flex flex-col divide-y-1 divide-gray-200"&gt;
                {
                    data?.map((item, index) =&gt; (
                        &lt;MagazineItem 
                            key={index} 
                            data={item}
                            className="cursor-pointer py-15 px-10" 
                        /&gt;
                    ))
                }
            &lt;/div&gt;
...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>결과</b></p>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-18 013326.png" data-origin-width="1079" data-origin-height="1104"><span data-url="https://blog.kakaocdn.net/dn/cH3czS/btsPmorBLic/TTMKhYcsDJPKsLOAiFq3Yk/img.png" data-phocus="https://blog.kakaocdn.net/dn/cH3czS/btsPmorBLic/TTMKhYcsDJPKsLOAiFq3Yk/img.png" data-alt="크게 디자인적 요소는 없지만 깔끔하게 나온다"><img src="https://blog.kakaocdn.net/dn/cH3czS/btsPmorBLic/TTMKhYcsDJPKsLOAiFq3Yk/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcH3czS%2FbtsPmorBLic%2FTTMKhYcsDJPKsLOAiFq3Yk%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="1079" height="1104" data-filename="스크린샷 2025-07-18 013326.png" data-origin-width="1079" data-origin-height="1104"/></span><figcaption>크게 디자인적 요소는 없지만 깔끔하게 나온다</figcaption>
</figure>
</p>
<h4 data-ke-size="size20">패널 구현</h4>
<p data-ke-size="size16">디테일 페이지를 대신할 사이드 패널을 구현하였다.</p>
<p data-ke-size="size16">먼저 다양한 애니메이션을 시도하기 위해 tailwindcss-animated 설치</p>
<pre id="code_1752770227019" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>yarn add tailwindcss-animated</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">tailwind v4부터는 이렇게 모듈을 설치하면 index.css에 import를 해줘야 한다. (기존 config 파일이 사라졌기 때문에)</p>
<pre id="code_1752770331135" class="css" data-ke-language="css" data-ke-type="codeblock"><code>/* src\app\index.css */
...
@import "tailwindcss-animated";
...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">먼저 추후 다양한 패널이 필요할 것을 고려하여 base용 panel컴포넌트를 만들었다.</p>
<p data-ke-size="size16">좌, 우, 위, 아래에서 나타난다고 가정해서 props를 설정하였다.</p>
<p data-ke-size="size16">타 요소의 영향을 피하기 위해 createPortal로 감쌌고 tailwind-animated의 fade속성을 적극 활용하여 시각적 효과를 주었다.</p>
<p data-ke-size="size16">createPortal의 정확한 역할은 추후 다른 포스트로 다뤄보겠다.</p>
<pre id="code_1752770465219" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src\shared\ui\panel\panel.tsx
import { type PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";

interface PanelProps extends PropsWithChildren{
    isOpen: boolean;
    position: "left" | "right" | "top" | "bottom";
    className?: string;
}

export const Panel = ({ isOpen, position, children, className }: PanelProps) =&gt; {
    if (!isOpen) return null;

    return (
        createPortal(
            &lt;div className={
                twMerge(
                    "fixed z-10",
                    position === "left" &amp;&amp; "left-0 top-0 animate-fade-right",
                    position === "right" &amp;&amp; "right-0 top-0 animate-fade-left",
                    position === "top" &amp;&amp; "top-0 left-0 animate-fade-down",
                    position === "bottom" &amp;&amp; "bottom-0 left-0 animate-fade-up",
                    className
                )
            }&gt;
                {children}
            &lt;/div&gt;,
            document.body
        )
    );
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">해당 컴포넌트를 활용해서 데이터를 띄어줄 magazine-panel도 제작하였다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><span style="color: #333333; text-align: start;"><span>&nbsp;</span>rss파싱으로 가져온 content는 대게 HTML형식이 때문에</span> dangerouslySetInnerHTML을 사용하여 content를 띄웠다. (뷰어로 지칭하겠다)</p>
<p data-ke-size="size16">mount/unmout 없이 data 바뀔 시 스크롤 초기화를 위해 useEffect로 변화를 감지하여 scrollTop = 0을 설정</p>
<pre id="code_1752770669303" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src\features\magazine\ui\magazine-panel.tsx
import { XIcon } from "@shared/assets";
import type { ParserData } from "@shared/model/parser";
import { Panel } from "@shared/ui/panel"
import { useEffect, useRef } from "react";

export interface MagazinePanelProps {
    data: ParserData | null;
    isOpen: boolean;
    onClose: () =&gt; void;
}

export const MagazinePanel = ({ data, isOpen, onClose }: MagazinePanelProps) =&gt; { 
    const viewerRef = useRef&lt;HTMLDivElement&gt;(null);
    
    useEffect(() =&gt; {
        if (viewerRef.current) {
            viewerRef.current.scrollTop = 0;
        }
    }, [data]);

    if (!data) return null;

    return (
        &lt;Panel
            isOpen={isOpen}
            position="right"
            className="w-full h-full max-w-640 p-10"
        &gt;
            &lt;div className="rounded-xl shadow-xl flex flex-col gap-20 bg-white p-15 h-full"&gt;
                &lt;div className="flex flex-row justify-between"&gt;
                    &lt;div className="text-xl"&gt;{data?.title}&lt;/div&gt;
                    &lt;button className="cursor-pointer" onClick={onClose}&gt;
                        &lt;XIcon /&gt;
                    &lt;/button&gt;
                &lt;/div&gt;
                &lt;div
                    ref={viewerRef}
                    className="overflow-y-auto whitespace-pre-wrap viewer"
                    dangerouslySetInnerHTML={ { __html: data?.content ?? "" } }
                /&gt;
            &lt;/div&gt;
        &lt;/Panel&gt;
    )
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">내부 뷰어에 viewer 클래스 네임을 줘서 따로 html태그들에 대한 스타일을 잡았다. (개취이기에 따로 코드는 x)</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">아까 만들어둔 리스트에 간단히 로직을 추가하여 아이템 클릭 시 패널이 뜨도록 하였다.</p>
<pre id="code_1752771127893" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src\pages\magazine\ui\initial\magazine-list.tsx
import { MagazineItem } from "@features/magazine";
import { MagazinePanel } from "@features/magazine/ui/magazine-panel";
import { useDataContext } from "@shared/lib/data";
import type { ParserData } from "@shared/model/parser";
import { useCallback, useState } from "react";


export const MagazineList = () =&gt; {
    const data = useDataContext();

    const [selectedData, setSelectedData] = useState&lt;ParserData | null&gt;(null);

    const handleClickItem = useCallback((data: ParserData) =&gt; {
        setSelectedData(data);
    }, []);

    const handleClosePanel = useCallback(() =&gt; {
        setSelectedData(null);
    }, []);
    
    return (
        &lt;&gt;
            &lt;div className="flex flex-col divide-y-1 divide-gray-200"&gt;
                {
                    data?.map((item, index) =&gt; (
                        &lt;MagazineItem 
                            key={index} 
                            data={item}
                            onClick={() =&gt; handleClickItem(item)}
                            className="cursor-pointer py-15 px-10" 
                        /&gt;
                    ))
                }
            &lt;/div&gt;
            &lt;MagazinePanel isOpen={!!selectedData} data={selectedData} onClose={handleClosePanel} /&gt;
        &lt;/&gt;
    );
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>결과</b></p>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-18 015249.png" data-origin-width="1470" data-origin-height="1422"><span data-url="https://blog.kakaocdn.net/dn/Xv48n/btsPn7ogTf0/H4ssXlbbyqZgkDHIbsb6xK/img.png" data-phocus="https://blog.kakaocdn.net/dn/Xv48n/btsPn7ogTf0/H4ssXlbbyqZgkDHIbsb6xK/img.png" data-alt="사이드에 잘뜨는 것을 확인"><img src="https://blog.kakaocdn.net/dn/Xv48n/btsPn7ogTf0/H4ssXlbbyqZgkDHIbsb6xK/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXv48n%2FbtsPn7ogTf0%2FH4ssXlbbyqZgkDHIbsb6xK%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="1470" height="1422" data-filename="스크린샷 2025-07-18 015249.png" data-origin-width="1470" data-origin-height="1422"/></span><figcaption>사이드에 잘뜨는 것을 확인</figcaption>
</figure>
</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">구글 번역</h3>
<p data-ke-size="size16">해당 프로젝트의 고도화 목표 중 하나인 구글 번역을 추가해보려 한다.</p>
<p data-ke-size="size16">구글 번역이 새로운 api는 유료 버전이라 구버전의 위젯 기능을 사용하여 구현하여야 해서 꽤나 불친절한 느낌을 받았다. (거의 십몇 년 된 것 같은 느낌...)</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">먼저 코드는 이렇게 작성했다.</p>
<pre id="code_1752771480490" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src\shared\ui\google-translate\google-translate-provider.tsx
...
declare global {
    interface Window {
        googleTranslateElementInit?: () =&gt; void;
        google?: {
            translate: {
                TranslateElement: new (options: object, elementId: string) =&gt; any;
            };
        };
    }
}
...
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleTranslate = useCallback(() =&gt; setIsEnabled(prev =&gt; !prev), []);

    useEffect(() =&gt; {
        if (!isEnabled) return;
        const langCode = i18next.language.split("-")[0];

        window.googleTranslateElementInit = () =&gt; {
            if (window.google?.translate) {
                new window.google.translate.TranslateElement(
                    {
                        autoDisplay: true 
                    },
                    "google_translate_element"
                );
            }
        };

        const script = document.createElement("script");
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);

        const handleChangeLanguage = (language = "") =&gt; {
            const select = document.querySelector('select.goog-te-combo') as HTMLSelectElement | null;
            if (select) {
                select.value = language;
                select.dispatchEvent(new Event('change'));
            }
        }
        
        setTimeout(() =&gt; {
            handleChangeLanguage(langCode);
        }, 1000)
        return () =&gt; {
           window.location.reload();
        };
    }, [isEnabled]);
...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">번역 부분은 방식만 봐도 구식 느낌이다.</p>
<ol style="list-style-type: decimal;" data-ke-list-type="decimal">
<li>isEnable 사용여부 분기 처리</li>
<li>true일 경우 init (초기 설정 파일) 작성<br />ㄴTranslateElement 부분에 language 설정하는 부분 <br />(includeLanguages: 자체 위젯에서 사용할 언어들, pageLanguage: 현재 페이지의 언어)<br />이 있는데 나는 국제화를 적용할 거고 따로 위젯을 사용한 컨트롤을 하지 않을 거 기에 설정하지는 않았다.</li>
<li>script를 body에 추가</li>
<li>위젯의 dom속성을 활용하여 번역할 language를 설정 - 불필요한 ui요소를 만들기 싫어서 i18n의 현재 언어로 고정하였다.&nbsp;<br />ㄴscript적용을 기다려야 해서 setTimeout을 설정하여 1초 후에 적용시켰다.</li>
<li>만약 <span style="color: #333333; text-align: left;">isEnable<span> false -&gt; return 될 경우 세로고침으로 해당 번역 초기화<br />ㄴ사실 여기서 좀 골머리가 썩었던 게 요소들을 제거해서 초기화하는 방식을 노렸으나 정상 동작하지 않았다.<br />특정 요소들을 날려도 계속 뭔가 남아서 번역 작업이 이루어지거나 console 에러가 발생하여 일단 세로고침하는 형식으로 진행... 추후 다른 방법을 찾으면 해당 방식으로 적용해 보겠다.</span></span><span style="color: #333333; text-align: left;"><span></span></span></li>
</ol>
<p data-ke-size="size16"><span style="color: #333333; text-align: left;"><span>그리고 해당 구글 번역 위젯의 쓸데없는 ui를 날리려면 index.css에서 설정을 해줘야 한다.</span></span></p>
<pre id="code_1752772365268" class="css" data-ke-language="css" data-ke-type="codeblock"><code>/* src\app\index.css */
...
@layer base {
  body {
    top: 0 !important;
  }
  #google_translate_element,
  .goog-te-banner-frame,
  .goog-te-gadget,
  .goog-te-menu-value,
  .skiptranslate,
  .VIpgJd-ZVi9od-aZ2wEe-wOHMyf {
    display: none !important;
  }
}
...</code></pre>
<p data-ke-size="size16">위에 위젯 띄우면서 body에 강제로 top을 줘버리기에 important로 해서 top: 0을 줘야 한다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">해당 번역 로직은 useContext/Provider를 활용하여 전역으로 적용하였다.</p>
<p data-ke-size="size16">사실 이것도 패널 부분만 번역하려 했는데 아무리 영역 제한을 특정 doc에만 걸어도 전체를 번역하기에 이렇게 전역으로 관리할 수 밖에 없었다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><span style="color: #333333; text-align: start;"><span>&nbsp;</span>useContext/Provider</span> 관련해서는 이전 챕터에서 다뤘기에 따로 다루지는 않겠다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>결과</b></p>
<p data-ke-size="size16">상단에 토글 버튼을 만들어 간단히 영어 포스트에 번역을 적용해 보았다.</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-18 021746.png" data-origin-width="758" data-origin-height="1347"><span data-url="https://blog.kakaocdn.net/dn/ZLAMq/btsPopvqVhM/d7zsuTBXQi6kw6tNymfGB1/img.png" data-phocus="https://blog.kakaocdn.net/dn/ZLAMq/btsPopvqVhM/d7zsuTBXQi6kw6tNymfGB1/img.png" data-alt="잘되긴한다!"><img src="https://blog.kakaocdn.net/dn/ZLAMq/btsPopvqVhM/d7zsuTBXQi6kw6tNymfGB1/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FZLAMq%2FbtsPopvqVhM%2Fd7zsuTBXQi6kw6tNymfGB1%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="758" height="1347" data-filename="스크린샷 2025-07-18 021746.png" data-origin-width="758" data-origin-height="1347"/></span><figcaption>잘되긴한다!</figcaption>
</figure>
</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<p data-ke-size="size16">구글 번역 부분은 보강이 좀 더 필요하다고 생각한다... 열심히 찾아보면 세로고침 없이 해제하는 법이 있을 거라고 생각이 든다.</p>
<p data-ke-size="size16">#5 전에 #4. 5에서 GitHub Pages를 사용한 배포를 다뤄보려고 한다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">브랜치 #4</p>
<p data-ke-size="size16"><a href="https://github.com/inho1019/front-end-magazine/tree/%234" target="_blank" rel="noopener&nbsp;noreferrer">https://github.com/inho1019/front-end-magazine/tree/%234</a>&nbsp;&nbsp;</p>
</details>
