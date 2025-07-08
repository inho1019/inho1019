import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.md
 */
 
let text = `# 프론트엔드 개발자를 꿈꾸는 명인호 입니다.
안녕하세요! 프론트엔드 개발자 명인호입니다.
웹과 모바일 앱 개발에 관심이 많고, React와 React Native를 주로 사용합니다.
개발 관련 블로그를 운영하고 있으며, 다양한 기술 스택을 활용하여 프로젝트를 진행하고 있습니다.

# 기술 스택
<div align="center">
  
  <div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"/>
    <img src="https://img.shields.io/badge/ReactNative-61DAFB?style=flat&logo=react&logoColor=white"/>
    <img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/>
    <img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white"/>
  </div>
  
</div>

# GitHub

<br>
<div align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=inho1019&theme=radical&count_private=true" />&nbsp;
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=inho1019&layout=compact&theme=radical&count_private=true" />
</div>

# Blog
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

    text += `</ul>
</details>

## 최신글
`

    if (items.length > 0) {    
        //최신글 하나 표출
        text += `
### ${items[0].title}

${items[0].content}
`
    }

    // README.md 파일 작성
    writeFileSync('README.md', text, 'utf8');

    console.log('업데이트 완료')
})();