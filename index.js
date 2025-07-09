import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.md
 */
 
let text = `<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&pause=1000&color=36BCF7&width=435&lines=Frontend+engineer+inho_m" alt="Typing SVG" />

## Tech
<br>
<div align="center">
  <br/>
  <div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/>
    <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=flat&logo=react&logoColor=white"/>
    <img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white"/>
  </div>
  <br/>
  <br/>
  <div style="display: flex; align-items: flex-start;">
    <img src="https://techstack-generator.vercel.app/github-icon.svg" alt="icon" width="77" height="77" />
    <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="77" height="77" />
    <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="icon" width="77" height="77" />
    <img src="https://techstack-generator.vercel.app/graphql-icon.svg" alt="icon" width="77" height="77" />
  </div>
</div>
<br/>

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

`;

const total = 5; // 가져올 글의 개수

// rss-parser 생성
const parser = new Parser({
    headers: {
        Accept: 'application/rss+xml, application/xml, text/xml; q=0.1',
    }});

(async () => {

    // 피드 목록
    const feed = await parser.parseURL('https://inho-m.tistory.com/rss');

    const items = feed.items.filter(item => item.categories.some(category => category.includes('개발'))).slice(0, total);

    items.map((item) => {
        const {link, title, categories} = item;
        text += `<li>
    <a href="${link}">${title}</a>
</li>`;
    })

    text += `
  </ul>
  <a href="https://inho-m.tistory.com">전체글보기</a>
</details>

### Recent Post
`

    if (items.length > 0) {    
        //최신글 하나 표출
        text += `
<details>
<summary>${items[0].title}</summary>
<br/>
${items[0].content}
</details>
`
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8');

    console.log('업데이트 완료')
})();