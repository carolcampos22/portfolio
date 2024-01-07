const textElement = document.querySelector(".text-about")
const btnToggle = document.querySelector("#btn-languages")

const texts = {
    'pt-br': `<p>Olá! Meu nome é Carolina, sou Desenvolvedora Web Fullstack, formada em outubro de 2023 pela escola de programação Labenu. Além disso, participei do bootcamp Fundamentos de Desenvolvimento Web Front-end, do Instituto Nu by Descomplica, concluído em julho de 2023. Nos meus estudos aprendi diversas tecnologias: HTMl, CSS, JavaScript, React.js, Styled-components, React hooks, Next.js, APIs Rest, Bootstrap, Node.js, SQL. Estou aprendendo por conta própria NestJS e MySQL para criar projetos mais escaláveis e robustos. Tenho noções de Orientação a Objetos e Arquitetura em Camadas.</p>
    <p>Atualmente faço o Bootcamp Backend Python e Django da WoMakersCode, com previsão de conclusão para o próximo mês de março. Além dessas tecnologias, aprendo Metodologias Ágeis (Scrum e Kanban) e desenvolvo projetos individuais e em grupo.</p>
    <p>Minha jornada no mundo da programação se iniciou na faculdade de Física Médica, onde cursei algumas disciplinas que envolviam programação (C/C++ e Python). Encontrei muitas dificuldades e desafios, mas isso, ao invés de me fazer desistir ou detestar programação, despertou em mim uma paixão pela área, entusiasmo e curiosidade de aprender sempre mais. Assim, eu tenho me dedicado exclusivamente a cursos e bootcamps de desenvolvimento web. </p>
    <p>Em meus projetos, crio interfaces intuitivas e responsivas, sempre em busca da melhor experiência do usuário. Trabalho com frameworks como React.js e Next.js, aprimorando minha capacidade de criar aplicações dinâmicas e eficientes. Além disso, utilizo o Styled-components, que me permite explorar o poder da estilização no nível de componentes. Cada projeto que crio contribui para minha evolução como desenvolvedora e demonstra minha capacidade de resolver problemas de forma criativa e eficiente, evoluindo a cada novo projeto.</p>
    <p>O que mais me motiva como desenvolvedora é a busca contínua por aprender e enfrentar novos desafios. Sou movida pela curiosidade e pelo desejo de me manter atualizada em relação às últimas tendências e melhores práticas do desenvolvimento front-end. Além disso, valorizo o trabalho em equipe e a troca de conhecimento, pois acredito que colaborar com outros profissionais é uma maneira valiosa de crescer e progredir no campo da tecnologia.</p>
    <p>Estou entusiasmada com a perspectiva de ingressar em uma equipe inovadora e contribuir com minhas habilidades no desenvolvimento web. Sou apaixonada por construir produtos que tenham um impacto positivo na vida das pessoas e estou ansiosa para fazer parte de projetos desafiadores e significativos.  Se você está procurando uma desenvolvedora web dedicada, criativa e pronta para enfrentar novos desafios, adoraria ter a oportunidade de trabalhar juntos. Vamos conversar sobre como posso contribuir com sua equipe e tornar suas ideias realidade!</p>`,

    'en-us': `<p>Hello! My name is Carolina, and I am a Fullstack Web Developer, graduated in October 2023 from the Labenu programming school. Additionally, I participated in the Fundamentals of Web Front-end Development bootcamp at Instituto Nu by Descomplica, completed in July 2023. In my studies, I've gained knowledge in various technologies, including HTML, CSS, JavaScript, React.js, Styled-components, React hooks, Next.js, REST APIs, Bootstrap, Node.js, and SQL. I am currently self-learning NestJS and MySQL to create more scalable and robust projects. I have a grasp of Object-Oriented Programming and Layered Architecture.</p>

    <p>I am currently enrolled in the WoMakersCode Backend Python and Django Bootcamp, with an expected completion date next March. In addition to these technologies, I am learning Agile Methodologies (Scrum and Kanban) and working on individual and group projects.</p>
    
    <p>My programming journey began during my studies in Medical Physics at university, where I took courses involving programming in C/C++ and Python. Despite facing challenges, this experience fueled a passion, enthusiasm, and curiosity for the field, leading me to focus exclusively on web development courses and bootcamps.</p>
    
    <p>In my projects, I create intuitive and responsive interfaces, always striving for the best user experience. I work with frameworks like React.js and Next.js, enhancing my ability to create dynamic and efficient applications. I also utilize Styled-components, enabling me to explore the power of styling at the component level. Each project I undertake contributes to my growth as a developer, showcasing my creative and efficient problem-solving skills, evolving with every new endeavor.</p>
    
    <p>What motivates me as a developer is the continuous pursuit of learning and facing new challenges. I am driven by curiosity and the desire to stay updated on the latest trends and best practices in front-end development. Moreover, I value teamwork and knowledge exchange, believing that collaborating with other professionals is a valuable way to grow and progress in the technology field.</p>
    
    <p>I am excited about the prospect of joining an innovative team and contributing my web development skills. I am passionate about building products that have a positive impact on people's lives and eager to be part of challenging and meaningful projects. If you are seeking a dedicated, creative web developer ready to tackle new challenges, I would love the opportunity to work together. Let's discuss how I can contribute to your team and bring your ideas to life!</p>
    
    `
}

let languageShown = 'pt-br'

const toggleLanguage = () => {
    languageShown = languageShown === 'pt-br' ? 'en-us' : 'pt-br'
    textElement.innerHTML = texts[languageShown];
}

btnToggle.addEventListener('click', toggleLanguage)
textElement.innerHTML = texts[languageShown]