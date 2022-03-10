
function mostrarCurriculo() {
    document.getElementById("conteudo").innerHTML = `
        <div class="col-12" id="apresentacao">
            <p>
                Me Chamo Leonardo Claerte Schunke, tenho 25 anos, moro na cidade de Sapiranga, Rio Grande do Sul!
            </p>
            <p>
                Me considero comunicativo, sempre em constante desenvolvimento de minhas habilidades e crescimento profissional. Confio em minha habilidade de implementar ideias inovadoras para gerar melhor resultado e novas formas de chegar nele
            </p>
            <p>
                Gosto de filmes, principalmente se for da Marvel (da DC só se for do Batman), gosto de músicas e dar um role com os amigos e família, curto uma praia e um bom churrasco, as vezes atividades físicas, mas não é o forte kkk
            </p>
            <button onclick="mostrarExperiencias()">Clique e conheça minhas experiências</button>
        </div>
    `
}

function mostrarExperiencias() {
    document.getElementById("apresentacao").innerHTML = `
        <div class="col-12" id="formacao">
            <h2>
                Minhas experiências:
            </h2>
            <h4>
                Lótus empreendimentos Imobiliários
            </h4>
                <li>Corretor de imóveis</li>
                <li>Março/2017 - Março/2019</li>
            <h4>
                SX Negócios
            </h4>
                <li>Especialista de Atendimentos e negócios</li>
                <li>Dezembro/2020 - Abril/2021</li>
                <li>Assistente de Analista de Aprendizagem Júnior</li>
                <li>Maio/2021 - Agosto/2021</li>
                <li>Líder Especialista de Atendimentos e negócios</li>
                <li>Setembro/2021 - Fevereiro/2022</li>
                <li>Analista de Aprendizagem Pleno</li>
                <li>Março/2022 - Atual</li>
            <button onclick="mostrarFormacao()">Clique e conheça minha formação</button>
        </div>
    `
}

function mostrarFormacao() {
    document.getElementById("formacao").innerHTML = `
            <div class="col-12" id="formacao">
            <h2>
                Estou cursando:
            </h2>
                <li>Analise e Desenvilvimento de Sistemas - FIAP</li>
            <h2>
                Programa de desenvolvimento:
            </h2>
                <li>Starter - Growdev</li>
                <h2>Meus conhecimentos:</h2>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>Javascript</li>
            <button onclick="mostrarContato()">Clique para entrar em contato comigo</button>
        </div>
    `
}

function mostrarContato() {
    document.getElementById("formacao").innerHTML = `
        <div class="col-12" id="contato">
            <h2>
                Contato
            </h2>
            <h3>
                Leonardo C. Schunke | leoschunke@hotmail.com
            </h3>
            <h3>
                Rua Reinaldo Klein, 245 SAPIRANGA-RS
            </h3>
            <h2>
                Deixe seus dados para entrar em contato:
            </h2>
            <div class="row">
                <input class="offset-4 col-4 rounded" type="text" placeholder="Nome" id="nome">
                <input class="offset-4 col-4 rounded" type="text" placeholder="Telefone" id="telefone">
                <input class="offset-4 col-4 rounded" type="text" placeholder="E-mail" id="email">
            </div>
            <button onclick="entrarContato()">Entrar em contato</button>
        </div>
    `
}

function entrarContato() {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    
    localStorage.setItem("contatos", nome);
    localStorage.setItem("contatos", telefone);
    localStorage.setItem("contatos", email);

    console.log(nome, telefone, email);

    document.getElementById("contato").innerHTML = `
        <div class="row conteudo">
            <h1>Obrigado ${nome}!</h1> 
            <div class="col-12" id="feedback">
                <h3>Deixe seu Feedback sobre mim :)</h3>
                <div class="row">
                    <input type="text" id="inputFeedback" class="offset-4 col-4 rounded" placeholder="Feedback">
                </div>
                <button onclick="enviarFeedback()">Enviar Feedback</button>
            </div>
        </div>
    `
}

function enviarFeedback() {
    const feedback = document.getElementById("inputFeedback").value;
    localStorage.setItem("Feedback", feedback);

    console.log(feedback);
}