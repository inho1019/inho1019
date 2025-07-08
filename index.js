import { writeFileSync } from 'node:fs';
import Parser from "rss-parser";

/**
 * README.md
 */
 
let text = `## 안녕하세요, 풀스택 개발자를 꿈꾸는 명인호 입니다.

군대에서 코딩에 관심을 가져 독학 후 비트캠프에서 데브옵스 1기 과정을 통해 다양한 기술을 습득하고, 팀 프로젝트에서 부조장을 맡아 팀원들을 이끌고 협업 하여 프로젝트를 성공적으로 제작하였습니다. 풀스택 분야의 역량을 키워 수료 후, 자격증 공부 및 독학으로 자기 개발에 힘쓰고 있습니다. 앞으로도 새로운 도전에 적극적으로 참여하여 더 나은 개발자로 성장하고자 합니다.

**풀스택 개발 능력**을 가져 프론트엔드와 백엔드 경계를 이해하며 풀스택 개발자로서 양 영역을 아우르는 기술을 효과적으로 활용할 수 있습니다.  
Spring Boot를 통한 백엔드 개발과 ERD 설계를 통한 데이터베이스 구축 경험을 가지고 있어 **데이터베이스** 활용이 가능합니다. 
호기심 가지고 탐구하는 태도로 6개월 간의 교육 훈련과 팀 프로젝트, 독학과 개인 프로젝트 제작을 통해 PHP, JSP, Java, SpringBoot,Jpa,React,React Native 등 **다양한 기술**을 경험하고 활용할 수 있는 능력을 갖췄습니다.

## 기술 스택
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
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=inho1019&theme=radical" />&nbsp;
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=inho1019&layout=compact&theme=radical" />
</div>

## Posts
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
        console.log(link, title, categories);
        text += `
        <li>
            <a href="${link}">${title}</a>
        </li>
        `;
    })

    text += `
  </ul>
</details>

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