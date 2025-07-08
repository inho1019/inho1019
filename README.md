## 프론트엔드 개발자를 꿈꾸는 명인호 입니다.
안녕하세요! 프론트엔드 개발자 명인호입니다.
웹과 모바일 앱 개발에 관심이 많고, React와 React Native를 주로 사용합니다.
개발 관련 블로그를 운영하고 있으며, 다양한 기술 스택을 활용하여 프로젝트를 진행하고 있습니다.

## 기술 스택
<br>
<div align="center">
  
  <div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/>
    <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=flat&logo=react&logoColor=white"/>
    <img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white"/>
  </div>
  
</div>

## GitHub

<br>
<div align="center">
  [![GitHub Streak](https://streak-stats.demolab.com?user=inho1019&theme=dark&border_radius=5&locale=ko)](https://git.io/streak-stats)
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=inho1019&layout=compact&theme=transparent&count_private=true" />
</div>

<br>
# Blog
<details open>
  <summary>목록</summary>
  <ul>

<li>
    <a href="https://inho-m.tistory.com/3">티스토리 깃허브 연동하기</a>
</li></ul>
</details>

## 최신글

### 티스토리 깃허브 연동하기

<p data-ke-size="size16">블로그의 개발 부분 포스팅을 깃허브 README에 자동으로 업로드 하기 위해 티스토리 RSS + 깃허브 액션을 활용하여 자동화 작업을 하기로 했다</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">이해</h3>
<p data-ke-size="size16">티스토리 rss를 활성하하면 해당 링크 접속시 rss포맷의 xml을 볼수 있다</p>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-08 오전 11.56.58.png" data-origin-width="1908" data-origin-height="1352"><span data-url="https://blog.kakaocdn.net/dn/E2tbn/btsO75rDgmP/ZHZvTbaKEUOEqVw0cQQDNK/img.png" data-phocus="https://blog.kakaocdn.net/dn/E2tbn/btsO75rDgmP/ZHZvTbaKEUOEqVw0cQQDNK/img.png" data-alt="rss+xml"><img src="https://blog.kakaocdn.net/dn/E2tbn/btsO75rDgmP/ZHZvTbaKEUOEqVw0cQQDNK/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FE2tbn%2FbtsO75rDgmP%2FZHZvTbaKEUOEqVw0cQQDNK%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="446" height="316" data-filename="스크린샷 2025-07-08 오전 11.56.58.png" data-origin-width="1908" data-origin-height="1352"/></span><figcaption>rss+xml</figcaption>
</figure>
</p>
<p data-ke-size="size16">해당 xml을 파싱하고 거기서 필요한 항목만 분류하여 해당 데이터를 토대로 README파일을 작성</p>
<p data-ke-size="size16">위 작업을 깃허브 액션을 통해 자동화 시킨다</p>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">사전작업</h3>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>본인 티스토리 주소/mange 접속</li>
<li>관리 &gt; 블로그&nbsp;</li>
<li>RSS 전체공개, 개수는 입맛에 맞게 설정</li>
</ul>
<p><figure class="imageblock alignCenter" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-08 오후 12.52.30.png" data-origin-width="2418" data-origin-height="930"><span data-url="https://blog.kakaocdn.net/dn/Yj6Mj/btsO8jcaHNR/Dp4axA2QNJiLXjhPXkFv1k/img.png" data-phocus="https://blog.kakaocdn.net/dn/Yj6Mj/btsO8jcaHNR/Dp4axA2QNJiLXjhPXkFv1k/img.png"><img src="https://blog.kakaocdn.net/dn/Yj6Mj/btsO8jcaHNR/Dp4axA2QNJiLXjhPXkFv1k/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FYj6Mj%2FbtsO8jcaHNR%2FDp4axA2QNJiLXjhPXkFv1k%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="2418" height="930" data-filename="스크린샷 2025-07-08 오후 12.52.30.png" data-origin-width="2418" data-origin-height="930"/></span></figure>
</p>
<h3 data-ke-size="size23">리포지토리 생성 및 클론</h3>
<p data-ke-size="size16">기존 본인 이름을 사용한 리포지토리를 만든 사용자는 바로 저장소를 클론하여 사용</p>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-08 오후 3.42.58.png" data-origin-width="228" data-origin-height="37"><span data-url="https://blog.kakaocdn.net/dn/bDs0G2/btsO8BRYtwe/aAXfJxNnmgs7qa6J3Kr4J1/img.png" data-phocus="https://blog.kakaocdn.net/dn/bDs0G2/btsO8BRYtwe/aAXfJxNnmgs7qa6J3Kr4J1/img.png"><img src="https://blog.kakaocdn.net/dn/bDs0G2/btsO8BRYtwe/aAXfJxNnmgs7qa6J3Kr4J1/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbDs0G2%2FbtsO8BRYtwe%2FaAXfJxNnmgs7qa6J3Kr4J1%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="228" height="37" data-filename="스크린샷 2025-07-08 오후 3.42.58.png" data-origin-width="228" data-origin-height="37"/></span></figure>
</p>
<p data-ke-size="size16">신규로 생성하는 사용자는 new 리포지토리 생성 -&gt; 본인 깃허브 이름을 리포지토리 이름으로 생성</p>
<p data-ke-size="size16">이후 로컬에서 클론</p>
<pre id="code_1751947153100" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>git clone &lt;리포지토리명(여기선 본인 아이디)&gt;</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<h3 data-ke-size="size23">프로젝트 세팅</h3>
<p data-ke-size="size16">npm 사용하는 방식은 예시가 많아 yarn으로 진행해 보았다</p>
<p data-ke-size="size16">&nbsp;</p>
<pre id="code_1751948096002" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>yarn init -y  #package.json 생성
yarn install  #yarn 설치</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이후 import 구문 동작을 위해 package.json에 type module 명시</p>
<pre id="code_1751948357950" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>{
  "name": "inho_m",
  ...
  "type": "module",  //추가
  ...
  "packageManager": "yarn@4.9.1",
}</code></pre>
<h3 data-ke-size="size23">스크립트 작성</h3>
<p data-ke-size="size16">root에 index.js 생성, 파싱을 위한 스크립트를 작성한다</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">먼저 rss파싱을 위한 rss-parser 설치</p>
<pre id="code_1751948653937" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>yarn add rss-parser</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이후 index.js에 import, README파일 수정을 위한 writeFileSync도 import</p>
<pre id="code_1751948804165" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">기본으로 README에 들어갈 text를 변수로 선언</p>
<pre id="code_1751949029900" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>/**
 * README.md
 */
 
let text = `## 안녕하세요, OOO입니다
기본으로 들어갈 내용...

## 기술 스택
...

## Posts

`;</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이제 parser로 파싱후 writeFileSync로 README 작성</p>
<p data-ke-size="size16">아래에서는 간단히 제목만 링크를 걸어 삽입하는 방식으로 작성했다</p>
<pre id="code_1751949327852" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () =&gt; {

    // 피드 목록
    const feed = await parser.parseURL('https://inho-m.tistory.com/rss'); //본인 티스토리 주소/rss

    feed.items.map((item) =&gt; {
        const {link, title} = item;
        text += `&lt;a href=${link}&gt;${title}&lt;/a&gt;&lt;/br&gt;`;
    })

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8');

    console.log('업데이트 완료')
})();</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">index.js 전체 코드</p>
<pre id="code_1751949526254" class="javascript" data-ke-language="javascript" data-ke-type="codeblock"><code>import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.md
 */
 
let text = `## 안녕하세요, OOO입니다
기본으로 들어갈 내용...

## 기술 스택
...

## Posts

`;

const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () =&gt; {

    // 피드 목록
    const feed = await parser.parseURL('https://inho-m.tistory.com/rss'); //본인 티스토리 주소/rss

    feed.items.map((item) =&gt; {
        const {link, title} = item;
        text += `&lt;a href=${link}&gt;${title}&lt;/a&gt;&lt;/br&gt;`;
    })

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8');

    console.log('업데이트 완료')
})();</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">구조는 간단하다&nbsp;</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>rss 파싱</li>
<li>파싱한데이터에서 필요한 요소를 a링크 형태로 기존 text에 추가</li>
<li>최종 text를 바탕으로 READ.md파일을 생성 (기존파일과 교체)</li>
</ul>
<h3 data-ke-size="size23">테스트</h3>
<p data-ke-size="size16">로컬에서도 간단히 테스트가 가능하다</p>
<pre id="code_1751950049177" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>yarn node index.js</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">실행시 에러가 발생한게 아니면 우리가 작성한 방식대로 READ.md파일이 생성된것을 볼수가 있다</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">추가로 parser된 데이터의 feed를 console.log로 찍어보는것도 좋은생각</p>
<pre id="code_1751950202694" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>{
  items: [
    {
      creator: 'inho_m',
      title: 'title',
      link: 'https://inho-m.tistory.com/n',
      pubDate: 'Tue, 8 Jul 2025 11:14:31 +0900',
      author: 'inho_m',
      comments: ...,
      content: ...,
      contentSnippet: ...,
      guid: 'https://inho-m.tistory.com/1',
      categories: [Array],
      isoDate: '2025-07-08T02:14:31.000Z'
    }
  ],
  image: {
    link: 'https://inho-m.tistory.com',
    url: ...,
    title: 'inho_m 님의 블로그'
  },
  title: 'inho_m 님의 블로그',
  description: '남긴다는 행위로 얻는 것',
  pubDate: 'Tue, 8 Jul 2025 12:30:52 +0900',
  managingEditor: 'inho_m',
  generator: 'TISTORY',
  link: 'https://inho-m.tistory.com/',
  language: 'ko',
  ttl: '100'
}</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">해당 데이터를 응용하여 좀더 다양한 방식으로 표현하는것도 가능하다</p>
<h3 data-ke-size="size23">응용</h3>
<div data-ke-type="moreLess" data-text-more="더보기" data-text-less="닫기"><a class="btn-toggle-moreless">더보기</a>
<div class="moreless-content">
<pre id="code_1751955791886" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.md
 */
 
let text = `...

## Posts
&lt;details open&gt;
  &lt;summary&gt;목록&lt;/summary&gt;
  &lt;ul&gt;

`;

const total = 5; // 가져올 글의 개수

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () =&gt; {

    // 피드 목록
    const feed = await parser.parseURL('https://inho-m.tistory.com/rss');
    
    const items = feed.items.filter(item =&gt; item.categories.some(category =&gt; category.includes('개발'))).slice(0, total);

    items.map((item) =&gt; {
        const {link, title, categories} = item;
        text += `&lt;li&gt;
    &lt;a href="${link}"&gt;${title}&lt;/a&gt;
&lt;/li&gt;`;
    })

    text += `&lt;/ul&gt;
&lt;/details&gt;

`

    if (items.length &gt; 0) {    
        //최신글 하나 표출
        text += `
### ${items[0].title}

${items[0].content}
`
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8');

    console.log('업데이트 완료')
})();</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이런식으로 개수제한, 카테고리 필터링 후 details-summary로 목록화 시키고 최신글 하나만 README에 표시되게 하는것도 가능!</p>
</div>
</div>
<h3 data-ke-size="size23">자동화</h3>
<p data-ke-size="size16">root에서 .github/workflows 폴더를 순차적으로 생성 원하는 이름.yml 파일을 생성한다</p>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-08 오후 3.26.43.png" data-origin-width="323" data-origin-height="50"><span data-url="https://blog.kakaocdn.net/dn/dhCPf9/btsO8Wuwp4c/NxsISme3vzOZoQ5dQSYpK0/img.png" data-phocus="https://blog.kakaocdn.net/dn/dhCPf9/btsO8Wuwp4c/NxsISme3vzOZoQ5dQSYpK0/img.png"><img src="https://blog.kakaocdn.net/dn/dhCPf9/btsO8Wuwp4c/NxsISme3vzOZoQ5dQSYpK0/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdhCPf9%2FbtsO8Wuwp4c%2FNxsISme3vzOZoQ5dQSYpK0%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="323" height="50" data-filename="스크린샷 2025-07-08 오후 3.26.43.png" data-origin-width="323" data-origin-height="50"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">먼저 액션의 이름을 설정, 나는 Update Readme로 하였다</p>
<pre id="code_1751956053901" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>name: Readme Update</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">그 다음 자동화 스케쥴 시점을 설정한다 - cron 표현식을 참고하여 알맞은 형태로 생성, 나의 경우 1시간마다 스케쥴이 돌도록 하였다</p>
<pre id="code_1751956159678" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>on:
# 1시간에 한번씩 아래 스크립트를 실행한다.
  schedule:
    - cron: "0 */1 * * *"</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">마지막으로 자동화 빌드 흐름을 설정하면 끝이다</p>
<pre id="code_1751956450976" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: yarn install
      - name: Update README
        run: yarn node index.js
      - name: Commit README
        run: |
          git add .
          git config --local user.email "본인 깃허브 이메일"
          git config --local user.name "본인 깃허브 이름"
          git commit -m "Update README.md"
          git push</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">Install dependencies 아래부터 보면된다</p>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>파싱을 위한 의존성 설치</li>
<li>스크립트 실행</li>
<li>최종 결과물을 깃에 커밋</li>
</ul>
<h4 data-ke-size="size20">오류!!</h4>
<p data-ke-size="size16">1. yarn 버전 문제 - yarn install 직전 corepack 사용을 하면 된다고 해서 추가</p>
<pre id="code_1751961352187" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>      - name: Enable Corepack
        run: corepack enable</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">2. 권한문제 발생</p>
<p><figure class="imageblock alignLeft" data-ke-mobileStyle="widthOrigin" data-filename="스크린샷 2025-07-08 오후 4.53.00.png" data-origin-width="504" data-origin-height="384"><span data-url="https://blog.kakaocdn.net/dn/dbpI7Y/btsPaeA7Bn2/ECLdLRx1Y56KIujjxtGcwK/img.png" data-phocus="https://blog.kakaocdn.net/dn/dbpI7Y/btsPaeA7Bn2/ECLdLRx1Y56KIujjxtGcwK/img.png"><img src="https://blog.kakaocdn.net/dn/dbpI7Y/btsPaeA7Bn2/ECLdLRx1Y56KIujjxtGcwK/img.png" srcset="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdbpI7Y%2FbtsPaeA7Bn2%2FECLdLRx1Y56KIujjxtGcwK%2Fimg.png" onerror="this.onerror=null; this.src='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png'; this.srcset='//t1.daumcdn.net/tistory_admin/static/images/no-image-v1.png';" loading="lazy" width="285" height="217" data-filename="스크린샷 2025-07-08 오후 4.53.00.png" data-origin-width="504" data-origin-height="384"/></span></figure>
</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">자동화 코드 jobs부분 상단에 권한부여 코드를 넣어주니 문제가 해결되었다</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">최종 코드</p>
<pre id="code_1751961276544" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>name: Update Readme

on:
# 1시간에 한번씩 아래 스크립트를 실행한다.
  schedule:
    - cron: "0 */1 * * *"
# 권한부여
permissions:
  contents: write

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
      - name: Update README
        run: yarn node index.js
      - name: Commit README
        run: |
          git config --local user.email "본인 깃허브 이메일"
          git config --local user.name "본인 깃허브 이름"
          git add .
          git commit -m "Update README.md"
          git push</code></pre>
<hr contenteditable="false" data-ke-type="horizontalRule" data-ke-style="style6" />
<h3 data-ke-size="size23">마무리</h3>
<p data-ke-size="size16">깃허브 액션을 처음 써봤는데 참 편리한 기능인것같다. 간단한 코드 몇줄로 스케줄링 까지 가능하니...</p>
<p data-ke-size="size16">그래도 덜 익숙한 입장으로서 타이밍을 스케줄 + git push할 때까지 액션을 부여해서 확실하게 작동여부를 판단하는것이 좋은것같다.</p>
<pre id="code_1751962478702" class="bash" data-ke-language="bash" data-ke-type="codeblock"><code>on:
# 푸시 이벤트가 발생할 때마다 아래 스크립트를 실행한다.
  push:
# 1시간에 한번씩 아래 스크립트를 실행한다.
  schedule:
    - cron: "0 */1 * * *"</code></pre>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">이런식으로...</p>
<p data-ke-size="size16">&nbsp;</p>
<p data-ke-size="size16">처음 포스팅이라 설명은 잘 못한것 같지만 그래도 발을 뗀 게 어딘가싶다. 기왕 이렇게 git 연동까지 한거 자주 포스팅을 올리도록 노력해보겠다 ~.~</p>
