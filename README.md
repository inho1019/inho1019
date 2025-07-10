
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
<summary>FE magazine 개발기 #1 - 시작, GitHub API(Octokit)</summary>
<br/>
<h3 data-ke-size="size23">시작</h3>
<p data-ke-size="size16">요즘 들어 빠르게 변화하는 프론트엔드 근황에 대해 알아두는 게 좋다고 생각해서 관련 뉴스레터들을 구독하기 시작했다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그렇게 하나씩 받고 읽어보니 도움 되는 내용이 정말 많았다.</p>
<p data-ke-size="size16">문득 이렇게 하나씩 받아보지 말고 한번에 모아서 정리해 주는 사이트가 있으면 좋겠다는 생각이 들었다. (자동 번역도 덤)</p>
<p data-ke-size="size16">서버도 크게 필요없고 재미도 있을 것 같아서 간단히 진행해 보고 괜찮으면 고도화까지 해보기로 마음먹었다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">조사</h3>
<p data-ke-size="size16">처음에는 해당하는 사이트들의 API를 추적하거나 크롤링할까 했는데 호들갑이긴 하나 추후 법적 문제를 고려하여 RSS를 파싱하는 방향으로 진행하기로 결정했다.</p>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-09 오후 4.00.29.png" data-origin-width="2158" data-origin-height="1150"><span data-url="https://blog.kakaocdn.net/dn/kYwTJ/btsO974ASry/7OGoESu4Pj3h0fck84asHk/img.png" data-phocus="https://blog.kakaocdn.net/dn/kYwTJ/btsO974ASry/7OGoESu4Pj3h0fck84asHk/img.png" data-alt="정리하던 API"><img src="https://blog.kakaocdn.net/dn/kYwTJ/btsO974ASry/7OGoESu4Pj3h0fck84asHk/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FkYwTJ%2FbtsO974ASry%2F7OGoESu4Pj3h0fck84asHk%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="2158" height="1150" data-filename="스크린샷 2025-07-09 오후 4.00.29.png" data-origin-width="2158" data-origin-height="1150"/></span><figcaption>정리하던 API</figcaption>
</figure>
</p>
<p data-ke-size="size16">최대한 다양한 사이트를 하고 싶었지만 일단 5개의 사이트만 파싱해보려고 한다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">추후 사이트를 추가할 수 있는 것도 좋다고 생각해서 github api를 사용하여 간단하게 github로 데이터를 관리해보려고 한다</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">프로젝트 환경</h3>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>Library: React</li>
<li>Bundle: Vite</li>
<li>Language: Typescript</li>
<li>CSS: Tailwind</li>
<li>국제화 i18n 적용 예정</li>
</ul>
<p data-ke-size="size16">FSD구조 적용</p>
<p data-ke-size="size16"><a href="https://inho-m.tistory.com/4" target="_blank" rel="noopener">https://inho-m.tistory.com/4</a></p>
<figure id="og_1752107970702" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="article" data-og-title="FSD 구조에 대한 고찰" data-og-description="근래 회사에서 기존 컴포넌트 기반 구조로 하던 프로젝트를 기능 기반 구조(FSD)로 바꾸자는 얘기가 나왔고 논의 끝에 FSD 구조를 적용한 신규 프로젝트를 두어개가 가량 진행했다.본 글에서는 FSD" data-og-host="inho-m.tistory.com" data-og-source-url="https://inho-m.tistory.com/4" data-og-url="https://inho-m.tistory.com/4" data-og-image="https://scrap.kakaocdn.net/dn/cdLdXb/hyZfWrlK7z/UAb6wDJpJR3AwJlK6R7WiK/img.jpg?width=800&amp;height=363&amp;face=0_0_800_363,https://scrap.kakaocdn.net/dn/IIrnm/hyZjvyTbXg/PihjJ9d7nm2u9DMJ3278c1/img.jpg?width=800&amp;height=363&amp;face=0_0_800_363,https://scrap.kakaocdn.net/dn/Lm1W8/hyZf9K3bhK/l5oz7EMlp69nfsbhvYoq9k/img.jpg?width=1622&amp;height=736&amp;face=0_0_1622_736"><a href="https://inho-m.tistory.com/4" target="_blank" rel="noopener" data-source-url="https://inho-m.tistory.com/4">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/cdLdXb/hyZfWrlK7z/UAb6wDJpJR3AwJlK6R7WiK/img.jpg?width=800&amp;height=363&amp;face=0_0_800_363,https://scrap.kakaocdn.net/dn/IIrnm/hyZjvyTbXg/PihjJ9d7nm2u9DMJ3278c1/img.jpg?width=800&amp;height=363&amp;face=0_0_800_363,https://scrap.kakaocdn.net/dn/Lm1W8/hyZf9K3bhK/l5oz7EMlp69nfsbhvYoq9k/img.jpg?width=1622&amp;height=736&amp;face=0_0_1622_736');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">FSD 구조에 대한 고찰</p>
<p class="og-desc" data-ke-size="size16">근래 회사에서 기존 컴포넌트 기반 구조로 하던 프로젝트를 기능 기반 구조(FSD)로 바꾸자는 얘기가 나왔고 논의 끝에 FSD 구조를 적용한 신규 프로젝트를 두어개가 가량 진행했다.본 글에서는 FSD</p>
<p class="og-host" data-ke-size="size16">inho-m.tistory.com</p>
</div>
</a></figure>
<p data-ke-size="size16">를 기반으로 만들 예정, 다만 api는 크게 활용하는 부분이 없어서 제외</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-10 오전 9.41.50.png" data-origin-width="408" data-origin-height="479"><span data-url="https://blog.kakaocdn.net/dn/lQCT2/btsPbsGL19d/tVLaKBiaU60JkXH9e6lMRk/img.png" data-phocus="https://blog.kakaocdn.net/dn/lQCT2/btsPbsGL19d/tVLaKBiaU60JkXH9e6lMRk/img.png" data-alt="폴더 구조는 이런식이다"><img src="https://blog.kakaocdn.net/dn/lQCT2/btsPbsGL19d/tVLaKBiaU60JkXH9e6lMRk/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlQCT2%2FbtsPbsGL19d%2FtVLaKBiaU60JkXH9e6lMRk%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="408" height="479" data-filename="스크린샷 2025-07-10 오전 9.41.50.png" data-origin-width="408" data-origin-height="479"/></span><figcaption>폴더 구조는 이런식이다</figcaption>
</figure>
</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">Github api (octokit) 사용하기</h3>
<p data-ke-size="size16">본격적인 시작에 앞서 추후 사이트를 유동적으로 추가하기 위해 api 환경을 구축해 보겠다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">처음 firebase사용도 고려했었으나 정말 단순히 사이트 이름만 들어가면 될 것 같아서 github api를 사용하기로 했다.</p>
<h4 data-ke-size="size20">사전 지식</h4>
<p data-ke-size="size16">먼저 github에서 공식적으로 지원하는 octokit 패키지를 사용해 깃허브에 다양한 방식으로 접근이 가능하다.</p>
<p data-ke-size="size16">단순히 저장소(repo) 외에도 issue나 pr에 접근하거나 나아가서 작성하는 것이 가능하다.</p>
<p data-ke-size="size16">알아야 되는 규칙은</p>
<p data-ke-size="size16"><b>Public 저장소는 토큰 없이 read 가능, write는 토큰 필요</b></p>
<p data-ke-size="size16"><b>Private 저장소는 read, write 모두 토큰 필요</b></p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">세팅</h4>
<p data-ke-size="size16">octokit을 먼저 설치해줬다.</p>
<pre id="code_1752109205083" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>yarn add @octokit/rest</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">git에 리포지토리를 만드는 과정은 생략하겠다.</p>
<p data-ke-size="size16"><a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">https://github.com/settings/personal-access-tokens/new</a></p>
<figure id="og_1752110840159" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="object" data-og-title="GitHub &middot; Build and ship software on a single, collaborative platform" data-og-description="Join the world's most widely adopted, AI-powered developer platform where millions of developers, businesses, and the largest open source community build software that advances humanity." data-og-host="github.com" data-og-source-url="https://github.com/settings/personal-access-tokens/new" data-og-url="https://github.com" data-og-image="https://scrap.kakaocdn.net/dn/bUDoVH/hyZf5aK4Rl/m6KU6QTFdzHyS47JEvpO2k/img.jpg?width=1200&amp;height=630&amp;face=0_0_1200_630,https://scrap.kakaocdn.net/dn/bSvx28/hyZf5PmDyV/N2X29QxoAFFhUQM8Jeqqz1/img.jpg?width=1200&amp;height=630&amp;face=0_0_1200_630"><a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener" data-source-url="https://github.com/settings/personal-access-tokens/new">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/bUDoVH/hyZf5aK4Rl/m6KU6QTFdzHyS47JEvpO2k/img.jpg?width=1200&amp;height=630&amp;face=0_0_1200_630,https://scrap.kakaocdn.net/dn/bSvx28/hyZf5PmDyV/N2X29QxoAFFhUQM8Jeqqz1/img.jpg?width=1200&amp;height=630&amp;face=0_0_1200_630');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">GitHub &middot; Build and ship software on a single, collaborative platform</p>
<p class="og-desc" data-ke-size="size16">Join the world's most widely adopted, AI-powered developer platform where millions of developers, businesses, and the largest open source community build software that advances humanity.</p>
<p class="og-host" data-ke-size="size16">github.com</p>
</div>
</a></figure>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-10 오전 11.11.09.png" data-origin-width="1628" data-origin-height="176"><span data-url="https://blog.kakaocdn.net/dn/QShHj/btsPbpXTWUf/GlEo9Lkhry4m1DeEE2hJ1k/img.png" data-phocus="https://blog.kakaocdn.net/dn/QShHj/btsPbpXTWUf/GlEo9Lkhry4m1DeEE2hJ1k/img.png"><img src="https://blog.kakaocdn.net/dn/QShHj/btsPbpXTWUf/GlEo9Lkhry4m1DeEE2hJ1k/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQShHj%2FbtsPbpXTWUf%2FGlEo9Lkhry4m1DeEE2hJ1k%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="1628" height="176" data-filename="스크린샷 2025-07-10 오전 11.11.09.png" data-origin-width="1628" data-origin-height="176"/></span></figure>
</p>
<p data-ke-size="size16"><span style="color: #333333; text-align: start;">깃허브 접속해서 토큰을 발급해 준다.</span></p>
<p data-ke-size="size16"><span style="color: #333333; text-align: start;">기한은 본인 선택이지만 나는 무기한으로 설정했다.</span></p>
<p data-ke-size="size16"><span style="color: #333333; text-align: start;">Repository Access는 되도록 only select repository에서 해당 프로젝트로 설정하길 권장</span></p>
<p data-ke-size="size16"><b><span style="color: #333333; text-align: start;">Repository Permissions에서 Contents를 read and write로 변경</span></b></p>
<p data-ke-size="size16"><span style="color: #333333; text-align: start;">발급 후 잘 복사해두자</span></p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">octokit client파일을 생성 (엄밀히 말하면 client라고 지칭하기에는 애매하지만 편의상 지칭)</p>
<pre id="code_1752109589570" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// /src/shared/api/octokit-client.ts
import { Octokit } from "@octokit/rest";

export const client = (token?: string) =&gt; {
  return new Octokit(token ? { auth: token } : {});
}</code></pre>
<p data-ke-size="size16">주어진 토큰을 받아 Octokit 인스턴스를 생성해 반환하는 함수, 추후 인증 외 옵션이 필요할 경우 확장 가능.</p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">데이터 받아오기</h4>
<p data-ke-size="size16">먼저 토큰 없이 데이터 받아오는 작업을 해보았다.</p>
<p data-ke-size="size16">방법은 해당 repo 및 파일 패스를 지정하고&nbsp; getContent를 사용, 유의할 점은 받아온 데이터는 Base64로 표현되기에 디코딩이 필요하다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">편안한 디코딩을 위해 js-base64 설치</p>
<pre id="code_1752110037221" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>yarn add js-base64</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">데이터를 받아오는 코드는 간단하다</p>
<pre id="code_1752110082077" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// /src/shared/api/get/get-data.ts
import { Base64 } from "js-base64";
import { client } from "../octokit-client"
import type { Site } from "../../model/site";

export const getData = async () =&gt;  {
    try {
        const response = await client().repos.getContent({
            owner: import.meta.env.VITE_GITHUB_OWNER,
            repo: import.meta.env.VITE_TARGET_REPO,
            path: import.meta.env.VITE_TARGET_PATH,
            ref: import.meta.env.VITE_TARGET_BRANCH,
        })
        
        let contentBase64: string | undefined;
        if ('content' in response.data &amp;&amp; typeof response.data.content === 'string') {
            contentBase64 = response.data.content;
        } else {
            throw new Error("Content is not available or not in the expected format.");
        }
        const decodedContent = Base64.decode(contentBase64);
        const data = JSON.parse(decodedContent) as Site[];

        return { data, sha: response.data.sha };
    } catch (error) {
        console.error("Error get data:", error);
        return { data: undefined, sha: undefined };
    }
}</code></pre>
<p data-ke-size="size16">client를 import 후 repos의 getContent 기능 사용<br />owner(본인 깃허브 이름), repo(프로젝트의 repository명), path (파일 경로), ref (브랜치명)를 지정해 주면 해당 파일을 읽고 정보를 가져온다</p>
<p data-ke-size="size16">노출을 줄이기 위해 env사용</p>
<pre id="code_1752110523629" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>VITE_GITHUB_OWNER="inho1019"
VITE_TARGET_REPO="front-end-magazine"
VITE_TARGET_PATH="data.json"
VITE_TARGET_BRANCH="main"</code></pre>
<p data-ke-size="size16">꼭 접두사로 VITE_를 붙여주자!</p>
<p data-ke-size="size16"><a href="https://ko.vite.dev/guide/env-and-mode#env-variables" target="_blank" rel="noopener&nbsp;noreferrer">https://ko.vite.dev/guide/env-and-mode#env-variables</a></p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">가져온 정보 중 content 존재여부와 string형식인지 체크, 맞을 경우 base64 디코딩 후 json으로 파싱해서 return 해준다.</p>
<p data-ke-size="size16">파싱된 데이터는 as로 타입을 주입해 줬다.</p>
<pre id="code_1752110459781" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// /src/shared/model/site/site.ts
export type Site = {
  url: string;
  name: string;
  description?: string;
  type: {
    title: string;
    content: string;
    link?: string;
    owner?: string;
    thumbnail?: string;
  };
};</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">추후 파일 수정 시 필요한 sha도 리턴 받음</p>
<h4 data-ke-size="size20">데이터 추가하기</h4>
<p data-ke-size="size16">데이터 추가는 기존 데이터 + 새로운 데이터 형식으로 데이터를 구성해 octokit의 createOrUpdateFileContents를 사용하여 create 및 update가 가능하다.</p>
<pre id="code_1752114316098" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// /src/shared/api/set/set-data.ts
import { Base64 } from "js-base64";
import type { Site } from "../../model/site";
import { getData } from "../get/get-data";
import { client } from "../octokit-client";

export const addData = async (token: string, data: Site, message?: string) =&gt; {
    try {
        const newData: Site[] = []
        const { data: existingData, sha } = await getData();
        if (existingData) {
            newData.push(...existingData);
        }
        newData.push(data);

        await client(token).repos.createOrUpdateFileContents({
            owner: import.meta.env.VITE_GITHUB_OWNER,
            repo: import.meta.env.VITE_TARGET_REPO,
            path: import.meta.env.VITE_TARGET_PATH,
            branch: import.meta.env.VITE_TARGET_BRANCH,
            message: message ?? "Update site data",
            content: Base64.encode(JSON.stringify(newData, null, 2)),
            sha,
        });
    } catch (error) {
        console.error("Error add data:", error);
        throw error;
    }
};</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">직전에 만들었던&nbsp;getData를 사용하여 기존데이터 및 sha(파일 존재 여부 판단, undefined시 create해줌)를 가져와서 사용</p>
<p data-ke-size="size16">message는 commit message를 입력해주면 됨, Optional하게 설정하여 추후 입맛에 맞게 바꿀수 있도록 하였다.</p>
<p data-ke-size="size16">content도 마찬가지로 데이터를 받아올때 처럼 Base64로 인코딩 작업 필요하다.</p>
<h4 data-ke-size="size20">테스트</h4>
<p data-ke-size="size16">간단한 데이터 입력 폼을 만들어 테스트 하였다</p>
<table style="border-collapse: collapse; width: 100.465%; height: 784px;" border="1" data-ke-align="alignLeft">
<tbody>
<tr>
<td style="width: 37.4392%;"><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-10 오전 11.32.25.png" data-origin-width="598" data-origin-height="1502"><span data-url="https://blog.kakaocdn.net/dn/cOlzGC/btsPcW7KlNs/RDCURDn711ss5Lud30GW0K/img.png" data-phocus="https://blog.kakaocdn.net/dn/cOlzGC/btsPcW7KlNs/RDCURDn711ss5Lud30GW0K/img.png"><img src="https://blog.kakaocdn.net/dn/cOlzGC/btsPcW7KlNs/RDCURDn711ss5Lud30GW0K/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcOlzGC%2FbtsPcW7KlNs%2FRDCURDn711ss5Lud30GW0K%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="307" height="771" data-filename="스크린샷 2025-07-10 오전 11.32.25.png" data-origin-width="598" data-origin-height="1502"/></span></figure>
</td>
<td style="width: 62.4445%;">
<div style="background-color: #1f1f1f; color: #cccccc;">
<div><span style="color: #cccccc;"> </span><span style="color: #569cd6;">const</span><span style="color: #cccccc;"> [</span><span style="color: #4fc1ff;">token</span><span style="color: #cccccc;">, </span><span style="color: #dcdcaa;">setToken</span><span style="color: #cccccc;">] </span><span style="color: #d4d4d4;">=</span><span style="color: #cccccc;"> </span><span style="color: #dcdcaa;">useState</span><span style="color: #cccccc;">&lt;</span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;">&gt;(</span><span style="color: #ce9178;">''</span><span style="color: #cccccc;">)</span></div>
<div><span style="color: #cccccc;"> </span><span style="color: #569cd6;">const</span><span style="color: #cccccc;"> [</span><span style="color: #4fc1ff;">formData</span><span style="color: #cccccc;">, </span><span style="color: #dcdcaa;">setFormData</span><span style="color: #cccccc;">] </span><span style="color: #d4d4d4;">=</span><span style="color: #cccccc;"> </span><span style="color: #dcdcaa;">useState</span><span style="color: #cccccc;">&lt;</span><span style="color: #4ec9b0;">Site</span><span style="color: #cccccc;">&gt;({</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; url</span><span style="color: #9cdcfe;">:</span><span style="color: #cccccc;"> </span><span style="color: #ce9178;">''</span><span style="color: #cccccc;">,</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; name</span><span style="color: #9cdcfe;">:</span><span style="color: #cccccc;"> </span><span style="color: #ce9178;">''</span><span style="color: #cccccc;">,</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; description</span><span style="color: #9cdcfe;">:</span><span style="color: #cccccc;"> </span><span style="color: #ce9178;">''</span><span style="color: #cccccc;">,</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; type</span><span style="color: #9cdcfe;">:</span><span style="color: #cccccc;"> {</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; &nbsp; title</span><span style="color: #9cdcfe;">:</span><span style="color: #cccccc;"> </span><span style="color: #ce9178;">''</span><span style="color: #cccccc;">,</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; &nbsp; content</span><span style="color: #9cdcfe;">:</span><span style="color: #cccccc;"> </span><span style="color: #ce9178;">''</span><span style="color: #cccccc;">,</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; &nbsp; thumbnail</span><span style="color: #9cdcfe;">:</span><span style="color: #cccccc;"> </span><span style="color: #ce9178;">''</span></div>
<div><span style="color: #cccccc;">&nbsp; }</span></div>
<div><span style="color: #cccccc;"> })</span></div>
<br />
<div><span style="color: #cccccc;"> </span><span style="color: #569cd6;">const</span><span style="color: #cccccc;"> </span><span style="color: #dcdcaa;">handleGetData</span><span style="color: #cccccc;"> </span><span style="color: #d4d4d4;">=</span><span style="color: #cccccc;"> </span><span style="color: #569cd6;">async</span><span style="color: #cccccc;"> () </span><span style="color: #569cd6;">=&gt;</span><span style="color: #cccccc;"> {</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #c586c0;">&nbsp; try</span><span style="color: #cccccc;"> {</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #569cd6;">&nbsp; &nbsp; const</span><span style="color: #cccccc;"> { </span><span style="color: #4fc1ff;">data</span><span style="color: #cccccc;"> } </span><span style="color: #d4d4d4;">=</span><span style="color: #cccccc;"> </span><span style="color: #c586c0;">await</span><span style="color: #cccccc;"> </span><span style="color: #dcdcaa;">getData</span><span style="color: #cccccc;">()</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; &nbsp; console</span><span style="color: #cccccc;">.</span><span style="color: #dcdcaa;">log</span><span style="color: #cccccc;">(</span><span style="color: #ce9178;">"Retrieved data:"</span><span style="color: #cccccc;">, </span><span style="color: #4fc1ff;">data</span><span style="color: #cccccc;">)</span></div>
<div><span style="color: #cccccc;">&nbsp; } </span><span style="color: #c586c0;">catch</span><span style="color: #cccccc;"> (</span><span style="color: #9cdcfe;">error</span><span style="color: #cccccc;">) {</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; &nbsp; console</span><span style="color: #cccccc;">.</span><span style="color: #dcdcaa;">error</span><span style="color: #cccccc;">(</span><span style="color: #ce9178;">"Error fetching data:"</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">error</span><span style="color: #cccccc;">)</span></div>
<div><span style="color: #cccccc;">&nbsp; }</span></div>
<div><span style="color: #cccccc;"> }</span></div>
<br />
<div><span style="color: #cccccc;"> </span><span style="color: #569cd6;">const</span><span style="color: #cccccc;"> </span><span style="color: #dcdcaa;">handleInputChange</span><span style="color: #cccccc;"> </span><span style="color: #d4d4d4;">=</span><span style="color: #cccccc;"> (</span><span style="color: #9cdcfe;">field</span><span style="color: #d4d4d4;">:</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;">, </span><span style="color: #9cdcfe;">value</span><span style="color: #d4d4d4;">:</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">string</span><span style="color: #cccccc;">) </span><span style="color: #569cd6;">=&gt;</span><span style="color: #cccccc;"> {</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #c586c0;">&nbsp; if</span><span style="color: #cccccc;"> (</span><span style="color: #9cdcfe;">field</span><span style="color: #cccccc;">.</span><span style="color: #dcdcaa;">startsWith</span><span style="color: #cccccc;">(</span><span style="color: #ce9178;">'type.'</span><span style="color: #cccccc;">)) {</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #569cd6;">&nbsp; &nbsp; const</span><span style="color: #cccccc;"> </span><span style="color: #4fc1ff;">typeField</span><span style="color: #cccccc;"> </span><span style="color: #d4d4d4;">=</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">field</span><span style="color: #cccccc;">.</span><span style="color: #dcdcaa;">split</span><span style="color: #cccccc;">(</span><span style="color: #ce9178;">'.'</span><span style="color: #cccccc;">)[</span><span style="color: #b5cea8;">1</span><span style="color: #cccccc;">]</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #dcdcaa;">&nbsp; &nbsp; setFormData</span><span style="color: #cccccc;">(</span><span style="color: #9cdcfe;">prev</span><span style="color: #cccccc;"> </span><span style="color: #569cd6;">=&gt;</span><span style="color: #cccccc;"> ({</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #d4d4d4;">&nbsp; &nbsp; &nbsp; ...</span><span style="color: #9cdcfe;">prev</span><span style="color: #cccccc;">,</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; &nbsp; &nbsp; type</span><span style="color: #9cdcfe;">:</span><span style="color: #cccccc;"> {</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #d4d4d4;">&nbsp; &nbsp; &nbsp; &nbsp; ...</span><span style="color: #9cdcfe;">prev</span><span style="color: #cccccc;">.</span><span style="color: #9cdcfe;">type</span><span style="color: #cccccc;">,</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; &nbsp; &nbsp; &nbsp; [</span><span style="color: #4fc1ff;">typeField</span><span style="color: #9cdcfe;">]:</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">value</span></div>
<div><span style="color: #cccccc;">&nbsp; &nbsp; &nbsp; }</span></div>
<div><span style="color: #cccccc;">&nbsp; &nbsp; }))</span></div>
<div><span style="color: #cccccc;">&nbsp; } </span><span style="color: #c586c0;">else</span><span style="color: #cccccc;"> {</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #dcdcaa;">&nbsp; &nbsp; setFormData</span><span style="color: #cccccc;">(</span><span style="color: #9cdcfe;">prev</span><span style="color: #cccccc;"> </span><span style="color: #569cd6;">=&gt;</span><span style="color: #cccccc;"> ({</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #d4d4d4;">&nbsp; &nbsp; &nbsp; ...</span><span style="color: #9cdcfe;">prev</span><span style="color: #cccccc;">,</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; &nbsp; &nbsp; [</span><span style="color: #9cdcfe;">field</span><span style="color: #9cdcfe;">]:</span><span style="color: #cccccc;"> </span><span style="color: #9cdcfe;">value</span></div>
<div><span style="color: #cccccc;">&nbsp; &nbsp; }))</span></div>
<div><span style="color: #cccccc;">&nbsp; }</span></div>
<div><span style="color: #cccccc;"> }</span></div>
<br />
<div><span style="color: #cccccc;"> </span><span style="color: #569cd6;">const</span><span style="color: #cccccc;"> </span><span style="color: #dcdcaa;">handleSubmit</span><span style="color: #cccccc;"> </span><span style="color: #d4d4d4;">= async</span><span style="color: #cccccc;"> (</span><span style="color: #9cdcfe;">e</span><span style="color: #d4d4d4;">:</span><span style="color: #cccccc;"> </span><span style="color: #4ec9b0;">React</span><span style="color: #cccccc;">.</span><span style="color: #4ec9b0;">FormEvent</span><span style="color: #cccccc;">) </span><span style="color: #569cd6;">=&gt;</span><span style="color: #cccccc;"> {</span></div>
<div><span style="color: #cccccc;"></span><span style="color: #9cdcfe;">&nbsp; e</span><span style="color: #cccccc;">.</span><span style="color: #dcdcaa;">preventDefault</span><span style="color: #cccccc;">()<br /></span><span style="color: #c586c0;">&nbsp; await</span><span style="color: #cccccc;"> </span><span style="color: #dcdcaa;">addData</span><span style="color: #cccccc;">(</span><span style="color: #4fc1ff;">token</span><span style="color: #cccccc;">, </span><span style="color: #4fc1ff;">formData</span><span style="color: #cccccc;">)</span></div>
<div>
<div style="background-color: #1f1f1f; color: #cccccc;">
<div><span style="color: #cccccc;"></span><span style="color: #dcdcaa;">&nbsp; alert</span><span style="color: #cccccc;">(</span><span style="color: #ce9178;">"Data added successfully!"</span><span style="color: #cccccc;">);</span></div>
</div>
</div>
<div><span style="color: #cccccc;"> }<br /></span></div>
</div>
</td>
</tr>
</tbody>
</table>
<p data-ke-size="size16">ui 부분 코드는 생략.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">처음 getData를 확인해보면 데이터가 없어서 오류가 발생한다</p>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-10 오전 11.49.59.png" data-origin-width="2672" data-origin-height="260"><span data-url="https://blog.kakaocdn.net/dn/bpxmAr/btsPa4GpJVB/vyAW1fcVO1DVQ5Qkhu0XT0/img.png" data-phocus="https://blog.kakaocdn.net/dn/bpxmAr/btsPa4GpJVB/vyAW1fcVO1DVQ5Qkhu0XT0/img.png"><img src="https://blog.kakaocdn.net/dn/bpxmAr/btsPa4GpJVB/vyAW1fcVO1DVQ5Qkhu0XT0/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpxmAr%2FbtsPa4GpJVB%2FvyAW1fcVO1DVQ5Qkhu0XT0%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="2672" height="260" data-filename="스크린샷 2025-07-10 오전 11.49.59.png" data-origin-width="2672" data-origin-height="260"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">간단히 data를 채워 넣어서 데이터 저장 (addData)</p>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-10 오후 12.49.45.png" data-origin-width="2072" data-origin-height="1732"><span data-url="https://blog.kakaocdn.net/dn/QOoUe/btsPchq7qu5/vCP8GSvSCTmHce6s4h6nK0/img.png" data-phocus="https://blog.kakaocdn.net/dn/QOoUe/btsPchq7qu5/vCP8GSvSCTmHce6s4h6nK0/img.png"><img src="https://blog.kakaocdn.net/dn/QOoUe/btsPchq7qu5/vCP8GSvSCTmHce6s4h6nK0/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQOoUe%2FbtsPchq7qu5%2FvCP8GSvSCTmHce6s4h6nK0%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="2072" height="1732" data-filename="스크린샷 2025-07-10 오후 12.49.45.png" data-origin-width="2072" data-origin-height="1732"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">git commit, push 하는 과정을 거쳐야 하기에 바로 반영되지는 않는다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">반영후 다시 getData를 해보면</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-10 오후 12.50.57.png" data-origin-width="705" data-origin-height="316"><span data-url="https://blog.kakaocdn.net/dn/oD8EA/btsPb3UbCpK/KdGihkJRfyatR3kfVXYSkk/img.png" data-phocus="https://blog.kakaocdn.net/dn/oD8EA/btsPb3UbCpK/KdGihkJRfyatR3kfVXYSkk/img.png"><img src="https://blog.kakaocdn.net/dn/oD8EA/btsPb3UbCpK/KdGihkJRfyatR3kfVXYSkk/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoD8EA%2FbtsPb3UbCpK%2FKdGihkJRfyatR3kfVXYSkk%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="705" height="316" data-filename="스크린샷 2025-07-10 오후 12.50.57.png" data-origin-width="705" data-origin-height="316"/></span></figure>
</p>
<p data-ke-size="size16">이렇게 정상적으로 데이터를 가져오는 걸 볼 수 있다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">아무래도 즉시 반영이 안 된다는 점이 한계점인 것 같다. 사실 api제공 의도도 데이터 관리가 아니기도 하고...</p>
<p data-ke-size="size16">그러나 해당 프로젝트에서는 이 정도 기능이면 딱 과하지 않고 적당한 것 같다.</p>
<p data-ke-size="size16">삭제 api도 필요할 것 같긴 한데 그건 추후에 진행하고 #2부터 본격적으로 프로젝트 진행을 해보겠다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">브런치 #1</p>
<p data-ke-size="size16"><a href="https://github.com/inho1019/front-end-magazine/tree/%231" target="_blank" rel="noopener&nbsp;noreferrer">https://github.com/inho1019/front-end-magazine/tree/%231</a></p>
</details>
