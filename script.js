const textElement = document.querySelector(".text-about")
const btnToggle = document.querySelector("#btn-languages")

const texts = {
    'pt-br': `<p>Olá! Seja bem-vindo(a) ao meu portfólio! Sou desenvolvedora web front-end com mais de 1 ano de experiência.</p>
      <p>Minha jornada no mundo da programação começou na faculdade de Física Médica, onde cursei disciplinas que
        envolviam programação (C/C++ e Python). Apesar das dificuldades e desafios iniciais, desenvolvi uma paixão pela
        área, além de um entusiasmo e curiosidade constantes para aprender mais. Desde então, tenho me dedicado
        exclusivamente a cursos e bootcamps de desenvolvimento web.</p> </br>
      <p>Em meus projetos, foco em criar interfaces intuitivas e responsivas, sempre buscando proporcionar a melhor
        experiência ao usuário. Trabalho com linguagens como JavaScript e com frameworks como React.js e
        Next.js, aprimorando minha capacidade de criar aplicações dinâmicas e eficientes. Utilizo Styled-components para
        explorar o poder da estilização no nível de componentes, mas também valorizo o Tailwind CSS, o Bootstrap e
        pré-processadores como o Sass. Cada projeto que desenvolvo contribui para minha evolução como desenvolvedora e
        demonstra minha capacidade de resolver problemas de forma criativa e eficiente.</p></br>
      <p>O que mais me motiva como desenvolvedora é a busca contínua por aprendizado e novos desafios. Sou movida pela
        curiosidade e pelo desejo de me manter atualizada em relação às últimas tendências e melhores práticas do
        desenvolvimento front-end. Além disso, valorizo o trabalho em equipe e a troca de conhecimento, pois acredito
        que colaborar com outros profissionais é uma maneira valiosa de crescer e progredir no campo da tecnologia.</p></br>
      <p>Atualmente, estou entusiasmada com a perspectiva de ingressar em uma equipe inovadora e contribuir com minhas
        habilidades no desenvolvimento web front-end. Sou apaixonada por construir produtos que tenham um impacto
        positivo na vida das pessoas e estou ansiosa para fazer parte de projetos desafiadores e significativos. Se você
        está procurando uma desenvolvedora web front-end dedicada, criativa e pronta para enfrentar novos desafios,
        adoraria ter a oportunidade de trabalharmos juntos. Vamos conversar sobre como posso contribuir com sua equipe e
        transformar suas ideias em realidade!</p>`,

    'en-us': `<p>Hello! Welcome to my portfolio! I am a front-end web developer with over 1 year of experience.</p>
<p>My journey into the world of programming began in Medical Physics college, where I took courses involving programming (C/C++ and Python). Despite the initial difficulties and challenges, I developed a passion for the field, along with a constant enthusiasm and curiosity to learn more. Since then, I have dedicated myself exclusively to web development courses and bootcamps.<p></br>
<p>In my projects, I focus on creating intuitive and responsive interfaces, always aiming to provide the best user experience. I work with languages like JavaScript and frameworks like React.js and Next.js, enhancing my ability to create dynamic and efficient applications. I use Styled-components to explore the power of styling at the component level, but I also value Tailwind CSS, Bootstrap, and preprocessors like Sass. Every project I develop contributes to my growth as a developer and demonstrates my ability to solve problems creatively and efficiently.</p></br>
<p>What motivates me the most as a developer is the continuous pursuit of learning and new challenges. I am driven by curiosity and the desire to stay updated with the latest trends and best practices in front-end development. Additionally, I value teamwork and knowledge exchange, as I believe collaborating with other professionals is a valuable way to grow and progress in the technology field.</p></br>
<p>Currently, I am excited about the prospect of joining an innovative team and contributing my skills to front-end web development. I am passionate about building products that positively impact people's lives and am eager to be part of challenging and meaningful projects. If you are looking for a dedicated, creative, and ready-to-face-new-challenges front-end web developer, I would love the opportunity to work together. Let's talk about how I can contribute to your team and turn your ideas into reality!</p>`
}

let languageShown = 'pt-br'

const toggleLanguage = () => {
    languageShown = languageShown === 'pt-br' ? 'en-us' : 'pt-br'
    textElement.innerHTML = texts[languageShown];
}

btnToggle.addEventListener('click', toggleLanguage)
textElement.innerHTML = texts[languageShown]