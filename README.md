
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
    <a href="https://inho-m.tistory.com/17">FE Trend 개발기 #7 - 코드 에디터 추가 및 개선(고도화)</a>
</li><li>
    <a href="https://inho-m.tistory.com/16">정적 페이지 데이터 압축으로 트래픽 줄이기 (feat. fflate)</a>
</li><li>
    <a href="https://inho-m.tistory.com/14">FE Trend 개발기 #6 - 웹 3차(마지막)</a>
</li><li>
    <a href="https://inho-m.tistory.com/13">FE Trend 개발기 #5 - 웹 2차</a>
</li><li>
    <a href="https://inho-m.tistory.com/12">FE Trend 개발기 #4.1 - 구글 번역 개선</a>
</li>
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post

<details>
<summary>FE Trend 개발기 #7 - 코드 에디터 추가 및 개선(고도화)</summary>
<br/>
<p data-ke-size="size16">타 프로젝트를 진행하려다 다른 일정이랑 겹치면 애매할 것 같아서 고도화를 먼저 진행하였다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">코드 에디터 추가</h3>
<p data-ke-size="size16">코드에디터는 찾아보다가 디자인도 깔끔하고 어느정도 커스터마이징이 가능한 Sandpack을 사용하기로 하였다.</p>
<p data-ke-size="size16"><a href="https://sandpack.codesandbox.io/docs" target="_blank" rel="noopener&nbsp;noreferrer">https://sandpack.codesandbox.io/docs</a></p>
<figure id="og_1754618519821" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="Introduction | Sandpack Docs &ndash; Sandpack" data-og-description="Sandpack is a component toolkit for creating your own live-running code editing experiences powered by CodeSandbox." data-og-host="sandpack.codesandbox.io" data-og-source-url="https://sandpack.codesandbox.io/docs" data-og-url="https://sandpack.codesandbox.io/docs" data-og-image="https://scrap.kakaocdn.net/dn/bN9Ueb/hyZuz9wE2x/6YB4VkXUQcn4uZ4gfQKGh0/img.jpg?width=1200&amp;height=627&amp;face=0_0_1200_627"><a href="https://sandpack.codesandbox.io/docs" target="_blank" rel="noopener" data-source-url="https://sandpack.codesandbox.io/docs">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/bN9Ueb/hyZuz9wE2x/6YB4VkXUQcn4uZ4gfQKGh0/img.jpg?width=1200&amp;height=627&amp;face=0_0_1200_627');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">Introduction | Sandpack Docs &ndash; Sandpack</p>
<p class="og-desc" data-ke-size="size16">Sandpack is a component toolkit for creating your own live-running code editing experiences powered by CodeSandbox.</p>
<p class="og-host" data-ke-size="size16">sandpack.codesandbox.io</p>
</div>
</a></figure>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">먼저 설치를 해주었다</p>
<pre id="code_1754618579393" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>yarn add @codesandbox/sandpack-react</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">Sandpack의 특징은 완성된 에디터를 제공하기도 하지만 각파트별로 컴포넌트를 제공하여 내가 입맛에 맞게 변형하여 사용이 가능하다.</p>
<p data-ke-size="size16">그리고 SandpackLayout은 자체적으로 반응형으로 작동하여 디바이스에 맞춤형으로 제작하는데도 용이하다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">내가 이번 프로젝트에서 목표한 코드 에디터 요구 사항은 이러하다.</p>
<ol style="list-style-type: decimal;" data-ke-list-type="decimal">
<li>코드 템플릿 변경 기능</li>
<li>에디터 내에 타겟 파일(js, css...) 변경 기능</li>
<li>라이브로 프리뷰 보기 기능</li>
<li>css 및 자체 테마 변경 기능</li>
</ol>
<p data-ke-size="size16">처음에는 기본으로 제공되는 Sandpack 컴포넌트를 사용하여 구현하려 하였으나 단순 Sandpack 컴포넌트 기능으로 요구사항에 맞추어 개발하는 게 어려웠다. 특히 1, 2번 요구 사항이 커스터마이징 없이 구현하는데 제약이 있었다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">Sandpack공식문서를 참고하면 다양한 컴포넌트들을 제공하고 그것들을 조합하여 구현하는것이 가능하다.</p>
<p data-ke-size="size16">그러한 점을 이용해 1, 2번 기능을 별개로 구현하여 연결하는 방식으로 작업을 진행하였다.</p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">코드 템플릿 Selector</h4>
<p data-ke-size="size16">먼저 코드 템플릿 선택 기능을 구현하였다.</p>
<p data-ke-size="size16">select 태그를 사용하였고 제공되는 SANDBOX_TEMPLATES(Sandpack에서 제공하는 tamplate) alias에서 키값을 추출하여 options로 사용하였다.</p>
<pre id="code_1754634475841" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>import { SANDBOX_TEMPLATES, SandpackProvider, type SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";

const TEMPLATE_OPTIONS = Object.keys(SANDBOX_TEMPLATES).map((key) =&gt; {
    const keys = key.split('-');
    const label = key.length &gt; 0 ? keys.map(k =&gt; k === "ts" ? "TypeScript" : k.charAt(0).toUpperCase() + k.slice(1)).join(' + ') : keys[0].charAt(0).toUpperCase() + keys[0].slice(1);
    return {
        value: key as SandpackPredefinedTemplate,
        label: label,
    };
});

export const CodeEditor = () =&gt; {

    const [template, setTemplate] = useState&lt;SandpackPredefinedTemplate&gt;("react-ts");
        &lt;SandpackProvider
            template={template}
        &gt;
 ...
                        &lt;select
                            value={template}
                            onChange={(e) =&gt; setTemplate(e.target.value as SandpackPredefinedTemplate)}
                            className="mb-auto cursor-pointer py-8 px-16 text-xs border border-[#EFEFEF] rounded outline-none dark:text-[#EFEFEF] dark:border-[#252525] dark:bg-[#151515] max-sm:w-full"
                        &gt;
                            {TEMPLATE_OPTIONS.map((option) =&gt; (
                                &lt;option key={option.value} value={option.value}&gt;
                                    {option.label}
                                &lt;/option&gt;
                            ))}
                        &lt;/select&gt;
...
		&lt;/SandpackProvider&gt;
    );
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">options는 좀더 자연스럽게 표현하기 위해 약자로 쓰여있는 ts를 typescript로 바꿔 주었고 다중 템플릿일 때 템플릿별 연결을 +로 하였다.</p>
<p data-ke-size="size16">template를 상태값으로 설정하였고 SandpackProvider에 추가해주었다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>테스트</b></p>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-filename="Aug-08-2025 15-33-09.gif" data-origin-width="300" data-origin-height="434"><span data-url="https://blog.kakaocdn.net/dn/EkzvK/btsPLX62Q8g/xIqYv2knzt6giKYWO7SgNK/img.gif" data-phocus="https://blog.kakaocdn.net/dn/EkzvK/btsPLX62Q8g/xIqYv2knzt6giKYWO7SgNK/img.gif"><img src="https://blog.kakaocdn.net/dn/EkzvK/btsPLX62Q8g/xIqYv2knzt6giKYWO7SgNK/img.gif" srcset="https://blog.kakaocdn.net/dn/EkzvK/btsPLX62Q8g/xIqYv2knzt6giKYWO7SgNK/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="300" height="434" data-filename="Aug-08-2025 15-33-09.gif" data-origin-width="300" data-origin-height="434"/></span></figure>
</p>
<p data-ke-size="size16">원하는 대로 코드 템플릿 설정이 가능해졌다.</p>
<h4 data-ke-size="size20">파일 탐색기</h4>
<p data-ke-size="size16">파일 탐색기는 SandpackFileExplorer 컴포넌트로 제공이 된다.</p>
<p data-ke-size="size16">해당 컴포넌트가 레이아웃에서 사용하는 것을 고려하여 만들어져서 details/summary 태그를 사용해 selector처럼 구현하고 useClickAway 훅을 구현하여 영역 밖 클릭 시 닫히도록 하였다.</p>
<pre id="code_1754636721064" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/shared/lib/utils/use-click-away.ts
import { useEffect, useRef, type RefObject } from "react";

export function useClickAway&lt;T extends HTMLElement&gt;(
  callback: (e: MouseEvent) =&gt; void
): RefObject&lt;T | null&gt; {
  const ref = useRef&lt;T&gt;(null);

  useEffect(() =&gt; {
    const handler = (e: MouseEvent) =&gt; {
      if (ref.current &amp;&amp; !ref.current.contains(e.target as Node)) {
        callback(e);
      }
    };

    document.addEventListener("mousedown", handler);
    return () =&gt; {
      document.removeEventListener("mousedown", handler);
    };
  }, [callback]);

  return ref;
}</code></pre>
<p data-ke-size="size16">element를 지정하면 해당 element의 영역 외 클릭시 원하는 로직을 실행시키는 훅이다.</p>
<p data-ke-size="size16">&nbsp;</p>
<pre id="code_1754637049191" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>import { SandpackFileExplorer, SandpackProvider } from "@codesandbox/sandpack-react";
import { FileIcon } from "@shared/assets";
import { useClickAway } from "@shared/lib/utils";
import { useRef } from "react";

export const CodeEditor = () =&gt; {
    const detailsRef = useRef&lt;HTMLDetailsElement&gt;(null);
    const clickAwayRef = useClickAway&lt;HTMLDivElement&gt;(() =&gt; {
        if (detailsRef.current) {
            detailsRef.current.open = false;
        }
    });

    return (
        &lt;SandpackProvider&gt;
...
                    &lt;div ref={clickAwayRef} className="relative flex-1 border border-[#EFEFEF] rounded dark:text-[#EFEFEF] dark:border-[#252525] dark:bg-[#151515]"&gt;
                        &lt;details ref={detailsRef} open={false} className="peer"&gt;
                            &lt;summary className="cursor-pointer py-8 px-16 text-xs flex flex-row gap-5 items-center justify-center"&gt;
                                &lt;FileIcon /&gt;
                                {trans("common.codeEditor.fileExplorer", "파일 탐색기")}
                            &lt;/summary&gt;
                        &lt;/details&gt;
                        &lt;div className="absolute top-36 left-0 hidden peer-open:block z-1 w-full border border-[#EFEFEF] rounded dark:text-[#EFEFEF] dark:border-[#252525] dark:bg-[#151515]"&gt;
                        	&lt;SandpackFileExplorer /&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
...
        &lt;/SandpackProvider&gt;
    )
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><b>테스트</b></p>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-filename="Aug-08-2025 16-14-20.gif" data-origin-width="452" data-origin-height="338"><span data-url="https://blog.kakaocdn.net/dn/Fyxg0/btsPMQ7rYAd/9x1GEBBboy3Gszg414kkA0/img.gif" data-phocus="https://blog.kakaocdn.net/dn/Fyxg0/btsPMQ7rYAd/9x1GEBBboy3Gszg414kkA0/img.gif"><img src="https://blog.kakaocdn.net/dn/Fyxg0/btsPMQ7rYAd/9x1GEBBboy3Gszg414kkA0/img.gif" srcset="https://blog.kakaocdn.net/dn/Fyxg0/btsPMQ7rYAd/9x1GEBBboy3Gszg414kkA0/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="452" height="338" data-filename="Aug-08-2025 16-14-20.gif" data-origin-width="452" data-origin-height="338"/></span></figure>
</p>
<h4 data-ke-size="size20">결과물</h4>
<pre id="code_1754637476706" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/features/code/ui/code-editor.tsx
import { SANDBOX_TEMPLATES, SandpackCodeEditor, SandpackFileExplorer, SandpackLayout, SandpackPreview, SandpackProvider, type SandpackPredefinedTemplate } from "@codesandbox/sandpack-react";
import { FileIcon } from "@shared/assets";
import { useTheme } from "@shared/lib/theme";
import { useClickAway, useTrans } from "@shared/lib/utils";
import { useRef, useState } from "react";

const TEMPLATE_OPTIONS = Object.keys(SANDBOX_TEMPLATES).map((key) =&gt; {
    const keys = key.split('-');
    const label = key.length &gt; 0 ? keys.map(k =&gt; k === "ts" ? "TypeScript" : k.charAt(0).toUpperCase() + k.slice(1)).join(' + ') : keys[0].charAt(0).toUpperCase() + keys[0].slice(1);
    return {
        value: key as SandpackPredefinedTemplate,
        label: label,
    };
});

export const CodeEditor = () =&gt; {
    const trans = useTrans();
    const detailsRef = useRef&lt;HTMLDetailsElement&gt;(null);
    const clickAwayRef = useClickAway&lt;HTMLDivElement&gt;(() =&gt; {
        if (detailsRef.current) {
            detailsRef.current.open = false;
        }
    });
    const [template, setTemplate] = useState&lt;SandpackPredefinedTemplate&gt;("react-ts");
    const { currentTheme } = useTheme();

    return (
        &lt;SandpackProvider
            template={template}
            theme={currentTheme}
        &gt;
            &lt;div className="space-y-10"&gt;
                &lt;div className="flex flex-row gap-10 max-sm:flex-col-reverse"&gt;
                    &lt;div ref={clickAwayRef} className="relative flex-1 border border-[#EFEFEF] rounded dark:text-[#EFEFEF] dark:border-[#252525] dark:bg-[#151515]"&gt;
                        &lt;details ref={detailsRef} open={false} className="peer"&gt;
                            &lt;summary className="cursor-pointer py-8 px-16 text-xs flex flex-row gap-5 items-center justify-center"&gt;
                                &lt;FileIcon /&gt;
                                {trans("common.codeEditor.fileExplorer", "파일 탐색기")}
                            &lt;/summary&gt;
                        &lt;/details&gt;
                        &lt;div className="absolute top-36 left-0 hidden peer-open:block z-1 w-full border border-[#EFEFEF] rounded dark:text-[#EFEFEF] dark:border-[#252525] dark:bg-[#151515]"&gt;
                            &lt;code className="font-sans tracking-wide"&gt;
                                &lt;SandpackFileExplorer /&gt;
                            &lt;/code&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                    &lt;code&gt;
                        &lt;select
                            value={template}
                            onChange={(e) =&gt; setTemplate(e.target.value as SandpackPredefinedTemplate)}
                            className="mb-auto cursor-pointer py-8 px-16 text-xs border border-[#EFEFEF] rounded outline-none dark:text-[#EFEFEF] dark:border-[#252525] dark:bg-[#151515] max-sm:w-full"
                        &gt;
                            {TEMPLATE_OPTIONS.map((option) =&gt; (
                                &lt;option key={option.value} value={option.value}&gt;
                                    {option.label}
                                &lt;/option&gt;
                            ))}
                        &lt;/select&gt;
                    &lt;/code&gt;
                &lt;/div&gt;
                &lt;div&gt;
                &lt;SandpackLayout&gt;
                    &lt;SandpackCodeEditor showLineNumbers wrapContent showTabs={false} /&gt;
                    &lt;SandpackPreview showOpenInCodeSandbox={false} /&gt;
                &lt;/SandpackLayout&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/SandpackProvider&gt;
    );
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">조금 기능을 더 추가해서 전역 관리 되는 패널로 만들었다.</p>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="Aug-08-2025 16-21-40.gif" data-origin-width="750" data-origin-height="460"><span data-url="https://blog.kakaocdn.net/dn/cg40qV/btsPKIJTD9h/K1gZtsbKD2d4KaLcQPkV6k/img.gif" data-phocus="https://blog.kakaocdn.net/dn/cg40qV/btsPKIJTD9h/K1gZtsbKD2d4KaLcQPkV6k/img.gif"><img src="https://blog.kakaocdn.net/dn/cg40qV/btsPKIJTD9h/K1gZtsbKD2d4KaLcQPkV6k/img.gif" srcset="https://blog.kakaocdn.net/dn/cg40qV/btsPKIJTD9h/K1gZtsbKD2d4KaLcQPkV6k/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="750" height="460" data-filename="Aug-08-2025 16-21-40.gif" data-origin-width="750" data-origin-height="460"/></span></figure>
</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">CustomEvent를 사용하여 dom에 커스텀 이벤트 디스패치하기</h3>
<p data-ke-size="size16">파싱 된 데이터들의 code 태그에 클릭만 해도 클립보드에 복사되는 기능을 구현하였다.</p>
<pre id="code_1754638901136" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// scripts/action.ts
function sanitizeRSSContent(rawHTML: string): string {
    DOMPurify.addHook('afterSanitizeAttributes', function (node) {
        if (node.tagName === 'PRE') {
            node.setAttribute('onclick', `
                navigator.clipboard.writeText(this.innerText);
            `);
        }
        if (node.tagName === 'CODE' &amp;&amp; node.parentElement?.tagName !== 'PRE') {
            node.setAttribute('onclick', `
                navigator.clipboard.writeText(this.innerText);
            `);
        }
    });
...</code></pre>
<p data-ke-size="size16">이런 식으로 파싱 한 데이터의 정제 과정을 거칠 때 태그에 추가하는 방식으로 복사를 구현하였다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그런데 하나 문제가 되는 게 사용자 경험상 복사했는지 여부를 알 수 없는 것이다.</p>
<p data-ke-size="size16">단순 alert로 표기하기에는 디자인적 요소를 해치기에 토스트 메시지 형식으로 메시지를 표출하기로 했다.</p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">메시지 기능</h4>
<pre id="code_1754639718171" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/shared/lib/message/use-message-context.tsx
import { createContext, useContext } from "react";

type MessageContextType = {
  addMessage: (message: string) =&gt; void;
} | null;

export const MessageContext = createContext&lt;MessageContextType | null&gt;(null);

export const useMessageContext = () =&gt; {
  return useContext(MessageContext);
};


import { MessageContext } from "@shared/lib/message";
import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";


// src/shared/lib/message/use-message.tsx
import { useContext } from "react";
import { MessageContext } from "./use-message-context";

export const useMessage = () =&gt; {
    const data = useContext(MessageContext);
    if (!data) {
        throw new Error("useMessage must be used within a MessageProvider");
    }

    return data;
}


// src/shared/ui/message/message-provider.tsx
export const MessageProvider = ({ children }: PropsWithChildren) =&gt; {
    const [message, setMessage] = useState&lt;string&gt;("");
    const [trigger, setTrigger] = useState(false);

    useEffect(() =&gt; {
        if (!message) return;
        const timeout = setTimeout(() =&gt; {
            setMessage("");
        }, 3000);

        return () =&gt; clearTimeout(timeout);
    }, [message, trigger]);

    const addMessage = useCallback((msg: string) =&gt; {
        setTrigger(prev =&gt; !prev);
        setMessage(msg);
    }, []);

    return (
        &lt;MessageContext.Provider value={useMemo(() =&gt; ({
            addMessage,
        }), [addMessage])}&gt;
            {children}
            {
                createPortal(
                    &lt;div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-9999"&gt;
                        {message &amp;&amp; (
                            &lt;div key={trigger.toString()} className="bg-gray-100 text-sm font-medium px-16 py-12 rounded-md animate-message dark:bg-[#222]"&gt;
                                {message}
                            &lt;/div&gt;
                        )}
                    &lt;/div&gt;,
                    document.body
                )
            }
        &lt;/MessageContext.Provider&gt;
    )
}</code></pre>
<p data-ke-size="size16">addMessage함수 사용 시 메시지가 3초 동아 노출되었다가 사라지도록 구현하였다.</p>
<p data-ke-size="size16">createPortal를 사용하여 외부 속성의 영향을 받지 않도록 하였고 tailwind로 커스텀 애니메이션을 설정했다.</p>
<p data-ke-size="size16">trigger는 새 메시지가 들어오면 메시지 div의 key가 바뀌도록 하여 컴포넌트 리랜더링을 유도했다.&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">커스텀 이벤트</h4>
<p data-ke-size="size16">문제는 이것을 만들어진 dom 속성에 넘겨줘야 된다는 것이다.</p>
<p data-ke-size="size16">고민하다 커스텀 이벤트로 만들어 디스패치하는 방식을 선택했다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">먼저 addEventListener로 이벤트를 추가해 줬다.</p>
<pre id="code_1754640636337" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/features/trend/ui/trend-panel.tsx
...
    useEffect(() =&gt; {
        const copyMessage = () =&gt; addMessage(trans("trend.copyCode", "코드 복사 완료"));
        window.addEventListener("copy-message", copyMessage);
        return () =&gt; window.removeEventListener("copy-message", copyMessage);
    }, [addMessage, trans]);
...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그런 다음 데이터 정제 과정에서 CustomEvent를 추가해 줬다.</p>
<pre id="code_1754641004323" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>...
        if (node.tagName === 'PRE') {
            node.setAttribute('onclick', `
                navigator.clipboard.writeText(this.innerText);
                window.dispatchEvent(new CustomEvent('copy-message'));
            `);
        }
        if (node.tagName === 'CODE' &amp;&amp; node.parentElement?.tagName !== 'PRE') {
            node.setAttribute('onclick', `
                navigator.clipboard.writeText(this.innerText);
                window.dispatchEvent(new CustomEvent('copy-message'));
            `);
        }
...</code></pre>
<p data-ke-size="size18">&nbsp;</p>
<p data-ke-size="size18"><b>테스트</b></p>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="Aug-08-2025 17-18-04.gif" data-origin-width="778" data-origin-height="540"><span data-url="https://blog.kakaocdn.net/dn/oh9Ix/btsPNbXYfxc/Ep20aYieqLsFPHcc0TtTY1/img.gif" data-phocus="https://blog.kakaocdn.net/dn/oh9Ix/btsPNbXYfxc/Ep20aYieqLsFPHcc0TtTY1/img.gif"><img src="https://blog.kakaocdn.net/dn/oh9Ix/btsPNbXYfxc/Ep20aYieqLsFPHcc0TtTY1/img.gif" srcset="https://blog.kakaocdn.net/dn/oh9Ix/btsPNbXYfxc/Ep20aYieqLsFPHcc0TtTY1/img.gif" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="778" height="540" data-filename="Aug-08-2025 17-18-04.gif" data-origin-width="778" data-origin-height="540"/></span></figure>
</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<p data-ke-size="size16">이제 포스트에서 원하는 코드를 복사하여 코드에디터에 붙여 넣는 것이 가능해졌다!</p>
<p data-ke-size="size16">다음으로 ai 챗봇 고도화 작업을 하고 싶은데 언제 할지는 모르겠다. 차기 프로젝트도 진행하고 싶고 슬슬 회사 일이 많아지고 있기 때문에...</p>
<p data-ke-size="size16">아무튼 근시일 내로 뭐든 작업을 시작해야겠다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">브랜치 #7</p>
<p data-ke-size="size16"><a href="https://github.com/inho1019/front-end-trend/tree/%237" target="_blank" rel="noopener&nbsp;noreferrer">https://github.com/inho1019/front-end-trend/tree/%237</a></p>
<p data-ke-size="size16">사이트</p>
<p data-ke-size="size16"><a href="https://fe-trend.netlify.app/" target="_blank" rel="noopener&nbsp;noreferrer">https://fe-trend.netlify.app/</a></p>
<figure id="og_1754641469241" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="website" data-og-title="FE Trend" data-og-description="최신 프론트엔드 트렌드와 기술 정보를 제공합니다." data-og-host="fe-trend.netlify.app" data-og-source-url="https://fe-trend.netlify.app/" data-og-url="https://fe-trend.netlify.app/" data-og-image=""><a href="https://fe-trend.netlify.app/" target="_blank" rel="noopener" data-source-url="https://fe-trend.netlify.app/">
<div class="og-image" style="background-image: url();">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">FE Trend</p>
<p class="og-desc" data-ke-size="size16">최신 프론트엔드 트렌드와 기술 정보를 제공합니다.</p>
<p class="og-host" data-ke-size="size16">fe-trend.netlify.app</p>
</div>
</a></figure>
</details>
