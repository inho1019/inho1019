
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
    <a href="https://inho-m.tistory.com/9">FE magazine 개발기 #3 - RSS Parser 수난기 (with.GitHub Action)</a>
</li><li>
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
<summary>FE magazine 개발기 #3 - RSS Parser 수난기 (with.GitHub Action)</summary>
<br/>
<p data-ke-size="size16">본격적으로 데이터를 불러오기 위해 rss 파싱 로직을 짜보았다.</p>
<p data-ke-size="size16">그러나 진행중 문제가 발생한게 rss 파싱이 예상과는 달리 client-side에서는 접근이 허용되지 않았다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">처음에는 가능하다고 생각하여 rss-parser를 사용하여 사이트 최초입장시&nbsp;<br /><b>사이트 목록 get -&gt; 사이트 목록을 순회하면 각사이트의 rss parsing -&gt; 데이터를 타입에 맞게 활용 가능하도록 정제</b><br />의 과정을 거치게 하려고 하였다. 작업은 순조로웠으나 rss parse 부분에서 에러가 발생, 클라이언트 사이드 환경에서는 rss parser를 가져오는데 제약이 있다는 것을 알게 되었다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">서버까지 구현하기에는 소요가 많이 든다고 판단, GitHub Action을 사용하여 주기적으로 등록된 사이트 순회하면서 파싱하고 그것을 파일로 저장해두어 그 파일을 fetch하는 형태로 구현하기로 하였다.</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">RSS Parse 스크립트 만들기</h3>
<h4 data-ke-size="size20">필요 세팅</h4>
<pre id="code_1752597673524" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>#파싱을 위한 rss-parser
yarn add rss-parser
#스크립트 파일에서 env 파일을 활요하기 위한 dotenv
yarn add dotenv
#DATETIME 편리하게 활용하기 위한 luxon설치
yarn add luxon
#ts 파일 스크립트 돌릴수 있게 하기위해 tsx 설치
yarn add tsx</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">기존 파일에서 변경점&nbsp;</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>데이터 json 관리를 public 폴더에서 활용하도록 변경</li>
<li>기존 사이트 저장하는 data.json =&gt; site.json으로 변경(혼동 방지)</li>
<li>새로 데이터를 저장하는 파일을 data.json으로 명명</li>
<li>scripts폴더 투르에 생성, script 파일들 저장</li>
</ul>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-16 014829.png" data-origin-width="542" data-origin-height="224"><span data-url="https://blog.kakaocdn.net/dn/0hyvg/btsPj3NrjBw/UlKD8RPkK8AWQlZqtjtbm0/img.png" data-phocus="https://blog.kakaocdn.net/dn/0hyvg/btsPj3NrjBw/UlKD8RPkK8AWQlZqtjtbm0/img.png" data-alt="대략 이런 구조로 변경"><img src="https://blog.kakaocdn.net/dn/0hyvg/btsPj3NrjBw/UlKD8RPkK8AWQlZqtjtbm0/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F0hyvg%2FbtsPj3NrjBw%2FUlKD8RPkK8AWQlZqtjtbm0%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="542" height="224" data-filename="스크린샷 2025-07-16 014829.png" data-origin-width="542" data-origin-height="224"/></span><figcaption>대략 이런 구조로 변경</figcaption>
</figure>
</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>Site 타입 변경 및 ParserData 타입선언</li>
</ul>
<pre id="code_1752598480600" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src/shared/model/site/site.ts
export type Site = {
  id: string;
  url: string;
  name: string;
  description?: string;
  type: {
    title: string;
    content: string;
    createdAt: string;
    link?: string;
    author?: string;
    thumbnail?: string;
  };
};

// src/shared/model/parser/parser-data.ts
import type { DateTime } from "luxon";

export type ParserData = {
    title: string;
    content: string;
    createdAt: DateTime;
    link?: string;
    author?: string;
    thumbnail?: string;
    site: {
        id: string;
        url: string;
        name: string;
    }
}</code></pre>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>기타 파일 경로들 정리</li>
</ul>
<h4 data-ke-size="size20">스크립트 작성(초기 버전)</h4>
<pre id="code_1752598228923" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// scrips/action.ts
import { writeFileSync, readFileSync } from 'node:fs';
import RSSParser from "rss-parser";
import dotenv from 'dotenv';
import type { Site } from "../src/shared/model/site"
import type { ParserData } from "../src/shared/model/parser";
import { DateTime } from 'luxon';
dotenv.config();

const parser = new RSSParser();

(async () =&gt; {
    try {
        const targetSite = process.env.VITE_TARGET_PATH_SITE ?? 'public/site.json';
        const sites = JSON.parse(readFileSync(targetSite, 'utf8')) as Site[];
        const parsing = await Promise.all(sites.map(async (site: Site) =&gt; {
            const feed = await parser.parseURL(site.url);
            const items = feed.items || [];
            const parsedData: ParserData[] = items.map(item =&gt; {
                const createdRaw = item[site.type.createdAt];
                let createdAt: DateTime = DateTime.invalid("Invalid date");
                if (createdRaw) {
                    createdAt = DateTime.fromISO(createdRaw);
                    if (!createdAt.isValid) {
                        createdAt = DateTime.fromHTTP(createdRaw);
                    }
                    if (!createdAt.isValid) {
                        createdAt = DateTime.fromRFC2822(createdRaw);
                    }
                }
                return {
                    title: item[site.type.title] ?? "",
                    content: item[site.type.content] ?? "",
                    createdAt,
                    link: site.type.link &amp;&amp; (item[site.type.link] ?? ""),
                    owner: site.type.owner &amp;&amp; (item[site.type.owner] ?? ""),
                    thumbnail: site.type.thumbnail &amp;&amp; (item[site.type.thumbnail] ?? ""),
                    site: {
                        id: site.id,
                        url: site.url,
                        name: site.name,
                    },
                }
            })
            return parsedData;
        }));
        const data: ParserData[] = parsing.flat();
        data.sort((a, b) =&gt; {
            return b.createdAt.toMillis() - a.createdAt.toMillis();
        });

        const targetData = process.env.VITE_TARGET_PATH_DATA ?? 'public/data.json';

        writeFileSync(targetData, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("process error:", error);
    }
})();</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">흐름대로 설명 하겠다</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>0.</b></p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>env는 이런식으로 사용하면됨</li>
</ul>
<pre id="code_1752599790269" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>import dotenv from 'dotenv';
dotenv.config();

process.env...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>1.</b></p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>site.json에서 사이트 정보들을 가져온후 json으로 parse한 이후 강제로 Site타입으로 선언</li>
</ul>
<pre id="code_1752598333703" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>const targetSite = process.env.VITE_TARGET_PATH_SITE ?? 'public/site.json';
const sites = JSON.parse(readFileSync(targetSite, 'utf8')) as Site[];</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>2.</b></p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>가져온 sites 데이터를 순회하며 rss-parser를 통해 해당경로로 접속하여 feed를 가져옴&nbsp;</li>
</ul>
<pre id="code_1752598657735" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>  const parsing = await Promise.all(sites.map(async (site: Site) =&gt; {
            const feed = await parser.parseURL(site.url);
            const items = feed.items || [];
  ...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>3.</b></p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>다시 가져온 feed데이터를 순회하며 각사이트의 설정된 타입에 맞게 데이터를 정제(serialize)해서 return 해준다.</li>
<li>여기서 createdAt 형태가 사이트마다 다양할경우를 고려해서 valid된 형태를 찾을때까지 다양한 형태시도</li>
<li>최종 데이터는 "const parsing" 으로 return 이경우 사이트 각각의 parserData[]들이 또 배열로 들어가기에 이중배열이 된다. (parserData[][])</li>
</ul>
<pre id="code_1752598791942" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>...
            const parsedData: ParserData[] = items.map(item =&gt; {
            const createdRaw = item[site.type.createdAt];
            let createdAt: DateTime = DateTime.invalid("Invalid date");
            if (createdRaw) {
                createdAt = DateTime.fromISO(createdRaw);
                if (!createdAt.isValid) {
                    createdAt = DateTime.fromHTTP(createdRaw);
                }
                if (!createdAt.isValid) {
                    createdAt = DateTime.fromRFC2822(createdRaw);
                }
            }
            return {
                title: item[site.type.title] ?? "",
                content: item[site.type.content] ?? "",
                createdAt,
                link: site.type.link &amp;&amp; (item[site.type.link] ?? ""),
                owner: site.type.owner &amp;&amp; (item[site.type.owner] ?? ""),
                thumbnail: site.type.thumbnail &amp;&amp; (item[site.type.thumbnail] ?? ""),
                site: {
                    id: site.id,
                    url: site.url,
                    name: site.name,
                },
            }
        })
        return parsedData;
    }));</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>4.</b></p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>parserData[][] 이중배열 형태이기에 flat 사용하여 하나의 배열 형태로 합친다</li>
<li>createdAt 기준으로 재정렬</li>
</ul>
<pre id="code_1752599123065" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>	const data: ParserData[] = parsing.flat();
        data.sort((a, b) =&gt; {
            return b.createdAt.toMillis() - a.createdAt.toMillis();
        });</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>5.</b></p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>data.json으로 최종 데이터 파일 저장</li>
</ul>
<pre id="code_1752599279234" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>        const targetData = process.env.VITE_TARGET_PATH_DATA ?? 'public/data.json';

        writeFileSync(targetData, JSON.stringify(data, null, 2), 'utf8');</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">테스트&nbsp;</h4>
<p data-ke-size="size16">환경에 따라 다른긴하나 단순히 node scripts/action.ts 사용시 오류가 발생할수도 있음, tsx를 활용</p>
<pre id="code_1752599523188" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code># 세팅에서 설치한 tsx 활용
npx tsx scripts/action.ts</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">다행히 데이터가 잘 받아오는 것을 알수가 있었다. (꼭 로컬에서 테스트 해보고 push하자)</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">GitHub Action 스케줄링</h3>
<p data-ke-size="size16">이제 GitHub Action으로 주기적으로 데이터가 들어오게 스크립트가 스케줄링으로 돌아가도록 설정하면된다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">먼저 workflow를 작성해주었다</p>
<pre id="code_1752599928241" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>name: RSS Parser

on:
# 푸시 이벤트가 발생할 때마다 아래 스크립트를 실행한다.
  push:
# 3시간에 한번씩 아래 스크립트를 실행한다.
  schedule:
    - cron: "0 */3 * * *"
# 권한부여
permissions:
  contents: write
  
env:
  VITE_TARGET_PATH_SITE: ${{ vars.SITE_FILE_PATH }}
  VITE_TARGET_PATH_DATA: ${{ vars.DATA_FILE_PATH }}

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Enable Corepack
        run: corepack enable
      - name: Install dependencies
        run: yarn install
      - name: Run RSS Parser
        run: node scripts/action.ts
      - name: Commit Data
        run: |
          git config --local user.email "본인 깃허브 이메일"
          git config --local user.name "본인 깃허브 이름"
          git add .
          if ! git diff --cached --quiet; then
            git commit -m "Update data.json"
            git push
          else
            echo "No changes to commit"
          fi</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">특이점은 env를 잡을수 있다는 것이었다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16"><a href="https://docs.github.com/ko/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables" target="_blank" rel="noopener&nbsp;noreferrer">https://docs.github.com/ko/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables</a></p>
<figure id="og_1752599966908" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="article" data-og-title="변수에 정보 저장 - GitHub Docs" data-og-description="GitHub은(는) 각 GitHub Actions 워크플로 실행에 대한 기본 변수를 설정합니다. 단일 워크플로 또는 여러 워크플로에서 사용할 사용자 지정 변수를 설정할 수도 있습니다." data-og-host="docs.github.com" data-og-source-url="https://docs.github.com/ko/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables" data-og-url="https://docs-internal.github.com/ko/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables" data-og-image="https://scrap.kakaocdn.net/dn/c0P506/hyZjhBMBkD/B2fyr6HvKDyW5d6fjPatJk/img.png?width=1200&amp;height=628&amp;face=0_0_1200_628,https://scrap.kakaocdn.net/dn/pQogv/hyZnbGJTUF/DG1x5SUOYnLpFm28k4rxy1/img.png?width=1200&amp;height=628&amp;face=0_0_1200_628,https://scrap.kakaocdn.net/dn/zpStX/hyZm8J1qb3/kGAfVjrWi73KYgB4rmqSMk/img.png?width=2196&amp;height=216&amp;face=0_0_2196_216"><a href="https://docs.github.com/ko/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables" target="_blank" rel="noopener" data-source-url="https://docs.github.com/ko/actions/how-tos/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/c0P506/hyZjhBMBkD/B2fyr6HvKDyW5d6fjPatJk/img.png?width=1200&amp;height=628&amp;face=0_0_1200_628,https://scrap.kakaocdn.net/dn/pQogv/hyZnbGJTUF/DG1x5SUOYnLpFm28k4rxy1/img.png?width=1200&amp;height=628&amp;face=0_0_1200_628,https://scrap.kakaocdn.net/dn/zpStX/hyZm8J1qb3/kGAfVjrWi73KYgB4rmqSMk/img.png?width=2196&amp;height=216&amp;face=0_0_2196_216');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">변수에 정보 저장 - GitHub Docs</p>
<p class="og-desc" data-ke-size="size16">GitHub은(는) 각 GitHub Actions 워크플로 실행에 대한 기본 변수를 설정합니다. 단일 워크플로 또는 여러 워크플로에서 사용할 사용자 지정 변수를 설정할 수도 있습니다.</p>
<p class="og-host" data-ke-size="size16">docs.github.com</p>
</div>
</a></figure>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">공식문서를 참고하여 env를 잡은후 저런식으로 설정해줬다. (secret값은 vars. 대신 secrets 사용하면 됨!)</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">나머지 흐름부는</p>
<p data-ke-size="size16"><a href="https://inho-m.tistory.com/3#%EC%9E%90%EB%8F%99%ED%99%94-1-7" target="_blank" rel="noopener&nbsp;noreferrer">https://inho-m.tistory.com/3#%EC%9E%90%EB%8F%99%ED%99%94-1-7&nbsp;</a></p>
<figure id="og_1752600092354" contenteditable="false" data-ke-type="opengraph" data-ke-align="alignCenter" data-og-type="article" data-og-title="티스토리 깃허브 연동하기" data-og-description="블로그의 개발 부분 포스팅을 깃허브 README에 자동으로 업로드 하기 위해 티스토리 RSS + 깃허브 액션을 활용하여 자동화 작업을 하기로 했다이해티스토리 rss를 활성하하면 해당 링크 접속시 rss" data-og-host="inho-m.tistory.com" data-og-source-url="https://inho-m.tistory.com/3#%EC%9E%90%EB%8F%99%ED%99%94-1-7" data-og-url="https://inho-m.tistory.com/3" data-og-image="https://scrap.kakaocdn.net/dn/S5Uy3/hyZnaA30kd/gB26N1zFwK9EztFtSuXzr1/img.png?width=800&amp;height=307&amp;face=0_0_800_307,https://scrap.kakaocdn.net/dn/bBHHsA/hyZjAakHRK/rcEaswol3e9TK6BKHjIHKK/img.png?width=800&amp;height=307&amp;face=0_0_800_307,https://scrap.kakaocdn.net/dn/uWyny/hyZm9B9e6R/H7KMNbhlVYrMsFU0Y3n5j1/img.png?width=2418&amp;height=930&amp;face=0_0_2418_930"><a href="https://inho-m.tistory.com/3#%EC%9E%90%EB%8F%99%ED%99%94-1-7" target="_blank" rel="noopener" data-source-url="https://inho-m.tistory.com/3#%EC%9E%90%EB%8F%99%ED%99%94-1-7">
<div class="og-image" style="background-image: url('https://scrap.kakaocdn.net/dn/S5Uy3/hyZnaA30kd/gB26N1zFwK9EztFtSuXzr1/img.png?width=800&amp;height=307&amp;face=0_0_800_307,https://scrap.kakaocdn.net/dn/bBHHsA/hyZjAakHRK/rcEaswol3e9TK6BKHjIHKK/img.png?width=800&amp;height=307&amp;face=0_0_800_307,https://scrap.kakaocdn.net/dn/uWyny/hyZm9B9e6R/H7KMNbhlVYrMsFU0Y3n5j1/img.png?width=2418&amp;height=930&amp;face=0_0_2418_930');">&nbsp;</div>
<div class="og-text">
<p class="og-title" data-ke-size="size16">티스토리 깃허브 연동하기</p>
<p class="og-desc" data-ke-size="size16">블로그의 개발 부분 포스팅을 깃허브 README에 자동으로 업로드 하기 위해 티스토리 RSS + 깃허브 액션을 활용하여 자동화 작업을 하기로 했다이해티스토리 rss를 활성하하면 해당 링크 접속시 rss</p>
<p class="og-host" data-ke-size="size16">inho-m.tistory.com</p>
</div>
</a></figure>
<p data-ke-size="size16">다른 포스트에 자세히 올려두었다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이제 push를 해보자. 그러나...</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">Permission Error (in. GitHub Action)</h3>
<p data-ke-size="size16">권한 에러(403) 이 발생하였다.</p>
<p data-ke-size="size16">알고보니 cludflare를 사용하는 사이트 들은 github action을 통한 접근이 봇으로 인식하여 차단한다는 거 아닌가!!ㅠ</p>
<p data-ke-size="size16">해결법을 찾아야했다</p>
<h4 data-ke-size="size20">1. 헤더 USER-AGENT 주기</h4>
<p data-ke-size="size16">gpt형이 알려준대로 헤더에 user-agent를 줘봤다.</p>
<pre id="code_1752600350266" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>const parser = new RSSParser({
  requestOptions: {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
    }
  }
});</code></pre>
<p data-ke-size="size16">그러나 실패...아예 아이피 접근이 막힌듯...</p>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">2. 크롤링(puppeteer)를 사용하여 데이터 받아와서 변환</h4>
<p data-ke-size="size16">내키지는 않지만 시도해보기로 하였다.</p>
<p data-ke-size="size16">우여곡절끝에 데이터도 파싱파싱...시키면서 테스트 했는데 우려했던대로 크롤링도 Github Action에서 막히는것같았다.&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">해당코드는 그 잔재...</p>
<pre id="code_1752600576473" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>...
async function fetchRssWithPuppeteer(url: string): Promise&lt;string | null&gt; {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

	const rssContent = await page.evaluate(() =&gt; {
        const feedElement = document.querySelector('feed');
        if (feedElement) {
            return feedElement.outerHTML;
        }
        const rssElement = document.querySelector('rss');
        if (rssElement) {
            return rssElement.outerHTML;
        }
        const txt = document.createElement('textarea');
        txt.innerHTML = document.documentElement.outerHTML;
        const domParser = new DOMParser();
        const doc = domParser.parseFromString(txt.value, "text/html");
        const feedDecodeElement = doc.querySelector('feed');
        if (feedDecodeElement) {
            return feedDecodeElement.outerHTML;
        }
        const rssDecodeElement = doc.querySelector('rss');
        if (rssDecodeElement) {
            return rssDecodeElement.outerHTML;
        }
        return null;
    });

    console.log(rssContent)

    return rssContent;
  } finally {
    await browser.close();
  }
}

(async () =&gt; {
    try {
        const targetSite = process.env.VITE_TARGET_PATH_SITE ?? 'public/site.json';
        const sites = JSON.parse(readFileSync(targetSite, 'utf8')) as Site[];
        const parsing = await Promise.all(sites.map(async (site: Site) =&gt; {
            const rssXml = await fetchRssWithPuppeteer(site.url);
            if (!rssXml) {
                console.warn(`Failed to fetch RSS from ${site.url}`);
                return [];
            }
 ...</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<h4 data-ke-size="size20">3. 프록시 서버로 우회</h4>
<p data-ke-size="size16">cloudflare가 봇으로 인식하지 않도록 프록시 서버로 우회하는 방안도 있었다.</p>
<p data-ke-size="size16">다만 서버 만드는데 공수가 많이 들어(귀찮...) 고민하던중 프록시 중계 사이트가 있는것 아닌가...!</p>
<p data-ke-size="size16"><a href="https://rssproxy.migor.org/" target="_blank" rel="noopener&nbsp;noreferrer">https://rssproxy.migor.org/</a></p>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-16 023241.png" data-origin-width="1396" data-origin-height="830"><span data-url="https://blog.kakaocdn.net/dn/b7rUkr/btsPiZZzkNV/6KstdDoKBMyaW6koxWuKkK/img.png" data-phocus="https://blog.kakaocdn.net/dn/b7rUkr/btsPiZZzkNV/6KstdDoKBMyaW6koxWuKkK/img.png" data-alt="고마운 사이트"><img src="https://blog.kakaocdn.net/dn/b7rUkr/btsPiZZzkNV/6KstdDoKBMyaW6koxWuKkK/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7rUkr%2FbtsPiZZzkNV%2F6KstdDoKBMyaW6koxWuKkK%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="1396" height="830" data-filename="스크린샷 2025-07-16 023241.png" data-origin-width="1396" data-origin-height="830"/></span><figcaption>고마운 사이트</figcaption>
</figure>
</p>
<p data-ke-size="size16">해당 사이트를 통해 프록시 우회 경로를 잡았고 로컬에서 테스트한 결과...성공!!</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">문제인 GitHub Action에서만 성공하면 되는데</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-16 023432.png" data-origin-width="1239" data-origin-height="299"><span data-url="https://blog.kakaocdn.net/dn/bldI4r/btsPkpJtwJ7/KNQu3S15KSERPQanUUMM21/img.png" data-phocus="https://blog.kakaocdn.net/dn/bldI4r/btsPkpJtwJ7/KNQu3S15KSERPQanUUMM21/img.png" data-alt="성공!"><img src="https://blog.kakaocdn.net/dn/bldI4r/btsPkpJtwJ7/KNQu3S15KSERPQanUUMM21/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbldI4r%2FbtsPkpJtwJ7%2FKNQu3S15KSERPQanUUMM21%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="1239" height="299" data-filename="스크린샷 2025-07-16 023432.png" data-origin-width="1239" data-origin-height="299"/></span><figcaption>성공!</figcaption>
</figure>
</p>
<p data-ke-size="size16">아무 오류없이 성공했다! 데이터도 잘들어가는거보니 문제가 발생하지는 않는것같다.</p>
<h4 style="color: #000000; text-align: start;" data-ke-size="size20">최종 스크립트</h4>
<pre id="code_1752600976327" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>import { writeFileSync, readFileSync } from 'node:fs';
import RSSParser from "rss-parser";
import { decode } from 'entities';
import dotenv from 'dotenv';
import type { Site } from "../src/shared/model/site";
import type { ParserData } from "../src/shared/model/parser";
import { DateTime } from 'luxon';

dotenv.config();

const parser = new RSSParser();

(async () =&gt; {
    try {
        const targetSite = process.env.VITE_TARGET_PATH_SITE ?? 'public/site.json';
        const sites = JSON.parse(readFileSync(targetSite, 'utf8')) as Site[];
        const parsing = await Promise.all(sites.map(async (site: Site) =&gt; {
            const feed = await parser.parseURL(`${process.env.VITE_RSS_PROXY_URL}${site.url}`);
            const items = feed.items || [];
            const parsedData: ParserData[] = items.map(item =&gt; {
                const createdRaw = item[site.type.createdAt];
                const content = item[site.type.content];
                let createdAt: DateTime = DateTime.invalid("Invalid date");
                if (createdRaw) {
                    createdAt = DateTime.fromISO(createdRaw);
                    if (!createdAt.isValid) {
                        createdAt = DateTime.fromHTTP(createdRaw);
                    }
                    if (!createdAt.isValid) {
                        createdAt = DateTime.fromRFC2822(createdRaw);
                    }
                }
                return {
                    title: item[site.type.title] ?? "",
                    content: content ? decode(decode(content)) : "",
                    createdAt,
                    link: site.type.link &amp;&amp; (item[site.type.link] ?? ""),
                    author: site.type.author &amp;&amp; (item[site.type.author] ?? ""),
                    thumbnail: site.type.thumbnail &amp;&amp; (item[site.type.thumbnail] ?? ""),
                    site: {
                        id: site.id,
                        url: site.url,
                        name: site.name,
                    },
                }
            })
            return parsedData;
        }));
        const data: ParserData[] = parsing.flat();
        data.sort((a, b) =&gt; {
            return b.createdAt.toMillis() - a.createdAt.toMillis();
        });

        const targetData = process.env.VITE_TARGET_PATH_DATA ?? 'public/data.json';

        writeFileSync(targetData, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error("process error:", error);
    }
})();</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">해당 방식을 토대로 최종 스크립트는 이렇게 되었다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">추가로 해당 사이트로 우회시 디코드된 콘텐츠가 그대로 남아있어서 entities의 decode기능을 사용하여 디코딩 과정을 거쳤다.</p>
<pre id="code_1752601111776" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>yarn add entities</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이중으로 되어 있는 경우도 잦아 디코드를 두번돌렸다.</p>
<pre id="code_1752601141534" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>...
content: content ? decode(decode(content)) : "",
...</code></pre>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">데이터 표출하기</h3>
<p data-ke-size="size16">데이터는 store에 담을까도 싶었는데 어차피 변동이 일어나지 않을거니 최초 받아온 데이터를 context에 저장하여 사용하는 방식을 채택했다.</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>context 설정</b></p>
<pre id="code_1752601326144" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src\shared\lib\data\use-data-context.tsx
import { createContext, useContext } from "react";
import type { ParserData } from "../../model/parser";

export const DataContext = createContext&lt;ParserData[] | null&gt;(null);

export const useDataContext = () =&gt; {
  return useContext(DataContext);
};</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size18"><b>provider 설정</b></p>
<p data-ke-size="size16">fetch로 프로젝트 public 폴더에 존재하는 data.json에 접근하여 데이터를 불러왔다.</p>
<p data-ke-size="size16">로딩은 따로 useState를 사용하기 보다 useTransition을 사용 (react19부터 비동기 지원, 추후 포스트로 남기겠다)</p>
<p data-ke-size="size16">data를 context에 담아 povider내에 전역에서 관리할수 있게 하였다.</p>
<pre id="code_1752601389410" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src\shared\ui\data\data-provider.tsx
import { useEffect, useState, useTransition, type PropsWithChildren } from "react"
import { DataContext } from "../../lib/data";
import type { ParserData } from "../../model/parser";

export const DataProvider = ({ children }: PropsWithChildren) =&gt; {
    const [data, setData] = useState&lt;ParserData[] | null&gt;(null);
    const [loading, startTransition] = useTransition();

    useEffect(() =&gt; {
        const fetchData = async () =&gt; {
            startTransition(async () =&gt; {
                try {
                    const response = await fetch("/data.json");
                    const jsonData: ParserData[] = await response.json();
                    setData(jsonData);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setData(null);
                }
            });
        };
        fetchData();
    }, []);

    return (
        &lt;DataContext.Provider value={data}&gt;
            {loading &amp;&amp; &lt;div&gt;Loading...&lt;/div&gt;}
            {children}    
        &lt;/DataContext.Provider&gt;
    )
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">providers 파일 추가후 후에 여러 providers가 생성되는 상황을 고려하였다.</p>
<p data-ke-size="size16">app에 Providers import</p>
<p><figure class="imageblock widthContent" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-16 024644.png" data-origin-width="1814" data-origin-height="483"><span data-url="https://blog.kakaocdn.net/dn/BTP0w/btsPkuYi7ZG/RKk8BmQK1INFuCIrQXqPpK/img.png" data-phocus="https://blog.kakaocdn.net/dn/BTP0w/btsPkuYi7ZG/RKk8BmQK1INFuCIrQXqPpK/img.png"><img src="https://blog.kakaocdn.net/dn/BTP0w/btsPkuYi7ZG/RKk8BmQK1INFuCIrQXqPpK/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBTP0w%2FbtsPkuYi7ZG%2FRKk8BmQK1INFuCIrQXqPpK%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="1814" height="483" data-filename="스크린샷 2025-07-16 024644.png" data-origin-width="1814" data-origin-height="483"/></span></figure>
</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">결과</h3>
<p data-ke-size="size16">main-page에서 간단히 데이터를 불러와 보았다. copilot한테 ui는 임시로 만들어 달라고 부탁</p>
<p data-ke-size="size16">dangerouslySetInnerHTML에 content 삽입</p>
<pre id="code_1752601807807" class="typescript" data-ke-language="typescript" data-ke-type="codeblock"><code>// src\pages\main\ui\main.tsx
import { useDataContext } from "../../../shared/lib/data";
import { MainContainer } from "../../../shared/ui/layout";

const MainPage = () =&gt; {
    const data = useDataContext();
    
    return (
        &lt;MainContainer&gt;
            &lt;div className="flex flex-col gap-20"&gt;
                {
                    data?.map((item, index) =&gt; (
                        &lt;div key={index} className="my-4"&gt;
                            &lt;h2 className="text-xl font-bold"&gt;{item.title}&lt;/h2&gt;
                            &lt;div 
                                dangerouslySetInnerHTML={{ __html: item.content }}
                                className="text-gray-700 whitespace-pre-wrap" 
                            /&gt;
                            &lt;p className="text-sm text-gray-500"&gt;Created at: {item.createdAt.toLocaleString()}&lt;/p&gt; 
                            {item.link &amp;&amp; &lt;a href={item.link} className="text-blue-500 hover:underline"&gt;Read more&lt;/a&gt;}
                            {item.thumbnail &amp;&amp; &lt;img src={item.thumbnail} alt={item.title} className="mt-2 w-32 h-32 object-cover" /&gt;}
                        &lt;/div&gt; 
                    ))
                }
            &lt;/div&gt;
        &lt;/MainContainer&gt;
    );
}

export default MainPage;</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">최종 화면은 이런식으로 잘나왔다!</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-16 025317.png" data-origin-width="739" data-origin-height="1409"><span data-url="https://blog.kakaocdn.net/dn/bqUqA1/btsPkmTwOUe/WG0T1sPd229PtaKlZEYxf0/img.png" data-phocus="https://blog.kakaocdn.net/dn/bqUqA1/btsPkmTwOUe/WG0T1sPd229PtaKlZEYxf0/img.png"><img src="https://blog.kakaocdn.net/dn/bqUqA1/btsPkmTwOUe/WG0T1sPd229PtaKlZEYxf0/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbqUqA1%2FbtsPkmTwOUe%2FWG0T1sPd229PtaKlZEYxf0%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="739" height="1409" data-filename="스크린샷 2025-07-16 025317.png" data-origin-width="739" data-origin-height="1409"/></span></figure>
</p>
<p data-ke-size="size16">#4부터는 퍼블리싱 작업에 들어가겠다</p>
<p data-ke-size="size16">&nbsp;</p>
<p style="background-color: #ffffff; color: #353638; text-align: left;" data-ke-size="size16"><span style="background-color: #ffffff; color: #353638; text-align: left;">브랜치 #3</span></p>
<p style="background-color: #ffffff; color: #353638; text-align: left;" data-ke-size="size16"><a href="https://github.com/inho1019/front-end-magazine/tree/%233" target="_blank" rel="noopener&nbsp;noreferrer">https://github.com/inho1019/front-end-magazine/tree/%233</a></p>
</details>
