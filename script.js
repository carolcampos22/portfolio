const textElement = document.querySelector(".text-about")
const btnToggle = document.querySelector("#btn-languages")

const texts = {
  'pt-br': `<p>Oi! Sou desenvolvedora web front-end, estudante de Engenharia de Software na Descomplica e também estou me aprofundando em Inteligência Artificial Aplicada pela Vai na Web — uma área que tem me conquistado e na qual quero me especializar.

Minha história com a programação começou de um jeito curioso: durante a faculdade de Física Médica, tive contato com linguagens como C, C++ e Python… e foi aí que tudo mudou. Me apaixonei pelo universo da tecnologia e decidi seguir de vez esse caminho, mergulhando em cursos, bootcamps e, claro, na graduação certa.

Desde então, venho desenvolvendo aplicações focadas em usabilidade, performance e design. Gosto de criar interfaces modernas e intuitivas com JavaScript, React.js, Next.js, Styled-components, Tailwind CSS, Sass e Bootstrap. Sempre buscando melhorar, aprender coisas novas e me superar a cada projeto.

Sou movida pela curiosidade, adoro aprender e acredito muito no poder da colaboração. Se você procura alguém comprometida, criativa e pronta pra encarar desafios com empolgação, vamos bater um papo?</p>`,

  'en-us': `<p>Hi there! I’m a front-end web developer, currently studying Software Engineering at Descomplica and diving deeper into Applied Artificial Intelligence through the Vai na Web program — a field I’ve been falling in love with and plan to specialize in.

My journey into programming started in an unexpected place: during my Medical Physics degree, I was introduced to languages like C, C++, and Python... and that’s when everything changed. I discovered a real passion for tech and decided to fully switch paths, jumping into bootcamps, courses, and eventually, the right degree.

Since then, I’ve been building user-focused, high-performance, and well-designed web applications. I love working with JavaScript, React.js, Next.js, Styled-components, Tailwind CSS, Sass, and Bootstrap — always aiming to level up and bring my best to each project.

I'm driven by curiosity, constantly learning, and I believe strongly in the power of collaboration. If you're looking for someone dedicated, creative, and excited to take on new challenges, let’s talk!</p>`
}

let languageShown = 'pt-br'

const toggleLanguage = () => {
  languageShown = languageShown === 'pt-br' ? 'en-us' : 'pt-br'
  textElement.innerHTML = texts[languageShown];
}

btnToggle.addEventListener('click', toggleLanguage)
textElement.innerHTML = texts[languageShown]
