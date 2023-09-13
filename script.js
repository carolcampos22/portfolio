const textElement = document.querySelector(".text-about")
const btnToggle = document.querySelector("#btn-languages")

const texts = {
    'pt-br': `<p>Olá! Meu nome é Carolina, sou Desenvolvedora Web Front-web há 1 ano. Faço o bootcamp da Labenu de Desenvolvimento Web Full-Stack (voltado para o React.js), com previsão para finalizar em outubro deste ano. Além disso, também participei do bootcamp Fundamentos de Desenvolvimento Web Front-end, do Instituto Nu by Descomplica, concluído em julho deste ano. Nos meus estudos aprendi diversas tecnologias: HTMl, CSS, JavaScript, React.js, Styled-components, React hooks, Next.js, APIs Rest e Bootstrap. </p>
    <p>Minha jornada no mundo da programação se iniciou na faculdade de Física Médica, onde cursei algumas disciplinas que envolviam programação (C/C++ e Python). Encontrei muitas dificuldades e desafios, mas isso, ao invés de me fazer desistir ou detestar programação, despertou em mim uma paixão pela área, entusiasmo e curiosidade de aprender sempre mais. Assim, eu tenho me dedicado exclusivamente a cursos e bootcamps de desenvolvimento web. </p>
    <p>Em meus projetos, crio interfaces intuitivas e responsivas, sempre em busca da melhor experiência do usuário. Trabalho com frameworks como React.js e Next.js, aprimorando minha capacidade de criar aplicações dinâmicas e eficientes. Além disso, utilizo o Styled-components, que me permite explorar o poder da estilização no nível de componentes. Cada projeto que crio contribui para minha evolução como desenvolvedora e demonstra minha capacidade de resolver problemas de forma criativa e eficiente, evoluindo a cada novo projeto.</p>
    <p>O que mais me motiva como desenvolvedora é a busca contínua por aprender e enfrentar novos desafios. Sou movida pela curiosidade e pelo desejo de me manter atualizada em relação às últimas tendências e melhores práticas do desenvolvimento front-end. Além disso, valorizo o trabalho em equipe e a troca de conhecimento, pois acredito que colaborar com outros profissionais é uma maneira valiosa de crescer e progredir no campo da tecnologia.</p>
    <p>Atualmente, estou entusiasmada com a perspectiva de ingressar em uma equipe inovadora e contribuir com minhas habilidades no desenvolvimento web front-end. Sou apaixonada por construir produtos que tenham um impacto positivo na vida das pessoas e estou ansiosa para fazer parte de projetos desafiadores e significativos.  Se você está procurando uma desenvolvedora web front-end dedicada, criativa e pronta para enfrentar novos desafios, adoraria ter a oportunidade de trabalhar juntos. Vamos conversar sobre como posso contribuir com sua equipe e tornar suas ideias realidade!</p>`,

    'en-us': `<p>Hello! My name is Carolina, and I have been a Front-End Web Developer for 1 year. I am currently enrolled in Labenu's Full-Stack Web Development bootcamp, scheduled to finish in October of this year. Additionally, I completed the Front-End Web Development Fundamentals bootcamp at Instituto Nu by Descomplica in July of this year. During my studies, I have learned various technologies, including HTML, CSS, JavaScript, React.js, Styled-components, React hooks, Next.js, REST APIs, and Bootstrap.</p>

    <p>My journey in the programming world began during my studies in Medical Physics at college, where I took some programming courses (C/C++ and Python). I faced many challenges and difficulties, but instead of giving up or disliking programming, it ignited a passion for the field, enthusiasm, and a curiosity to learn more. As a result, I have dedicated myself exclusively to web development courses and bootcamps.</p>
    
    <p>In my projects, I create intuitive and responsive interfaces, always aiming for the best user experience. I work with frameworks like React.js and Next.js, enhancing my ability to create dynamic and efficient applications. I also use Styled-components, which allows me to explore the power of component-level styling. Each project I create contributes to my growth as a developer and showcases my ability to creatively and efficiently solve problems, evolving with each new project.</p>
    
    <p>What motivates me the most as a developer is the continuous pursuit of learning and tackling new challenges. I am driven by curiosity and the desire to stay updated on the latest front-end development trends and best practices. Furthermore, I value teamwork and knowledge exchange, as I believe that collaborating with other professionals is a valuable way to grow and progress in the technology field.</p>
    
    <p>Currently, I am excited about the prospect of joining an innovative team and contributing my front-end web development skills. I am passionate about building products that have a positive impact on people's lives and I am eager to be part of challenging and meaningful projects. If you are looking for a dedicated, creative, and ready-to-take-on-new-challenges Front-End Web Developer, I would love the opportunity to work together. Let's discuss how I can contribute to your team and bring your ideas to life!</p>
    `
}

let languageShown = 'pt-br'

const toggleLanguage = () => {
    languageShown = languageShown === 'pt-br' ? 'en-us' : 'pt-br'
    textElement.innerHTML = texts[languageShown];
}

btnToggle.addEventListener('click', toggleLanguage)
textElement.innerHTML = texts[languageShown]