<p align="center">
    <img src="https://camo.githubusercontent.com/d25397e9df01fe7882dcc1cbc96bdf052ffd7d0c/68747470733a2f2f73746f726167652e676f6f676c65617069732e636f6d2f676f6c64656e2d77696e642f626f6f7463616d702d676f737461636b2f6865616465722d6465736166696f732e706e67" alt="NLW" />
</p>
<p align="center">
    <a href="https://github.com/fajzanetti">
        <img src="https://img.shields.io/badge/GitHub-fajzanetti-34CB79?logo=GitHub"/>
    </a>
    <a href="https://www.linkedin.com/in/felipezanetti/">
        <img src="https://img.shields.io/badge/Linkedin-felipezanetti-34CB79?logo=linkedin"/>
    </a>
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/fajzanetti/primeiro-projeto-nodejs?color=34CB79" />
    <img alt="GitHub language top" src="https://img.shields.io/github/languages/top/fajzanetti/primeiro-projeto-nodejs?color=34CB79" />
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/fajzanetti/primeiro-projeto-nodejs?color=34CB79" />
    <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/fajzanetti/primeiro-projeto-nodejs?color=34CB79" />
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/fajzanetti/primeiro-projeto-nodejs?color=34CB79" />
    <img alt="Nota Rocketseat" src="https://img.shields.io/badge/Nota-10-34CB79" />
    <img alt="Data de entrega" src="https://img.shields.io/badge/Data%20de%20entrega-23%2F06%2F2020-34CB79" />
</p>
<p align="center">
  <a href="#-Sobre-o-desafio">🚀 Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Projeto">🚧 Projeto</a>
</p>

# 🚀 Sobre o desafio

Nesse desafio, você deve criar uma aplicação para continuar treinando o que você aprendeu até agora no Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services!

Essa será uma aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.

# 🚧 Projeto
<div align="center">
    <p align="left">Utilizando insomnia para ter uma resposta visual:</br></br></p>
    <p align="left">⚫ Regra de négocio.</p>
    <p align="left">🟣 Requisição GET.</p>
    <p align="left">🟢 Requisição POST.</br></br></p>
    <p align="left">🟣 Inicialmente é feita uma requisição GET á API, como não ha dados na API a lista fica vazia e com o <i>balance</i> zerado. </p>
    <img alt="Get Repos" title="Get Repos" src=".github/01.PNG" />
    <p align="left">🟢 Requisição POST realizada em seguida, fazendo um depósito (<i>income</i>) de <i>value</i> 100.</p>
    <img alt="Get Repos" title="Get Repos" src=".github/02.PNG" />
    <p align="left">🟣 Requisição GET mostrando todas <i>transactions</i> cadastradas, ja realizando o <i>balance</i>, como foi criado apenas uma <i>transaction</i> mostra apenas aquela na requisição.</p>
    <img alt="Get Repos" title="Get Repos" src=".github/03.PNG" />
    <p align="left">🟢 Requisição POST realizada em seguida, fazendo um saque (<i>outcome</i>) de <i>value</i> 50.</p>
    <img alt="Get Repos" title="Get Repos" src=".github/04.PNG" />
    <p align="left">🟣 Requisição GET mostrando todas <i>transactions</i> cadastradas, ja realizando o <i>balance</i>.</p>
    <img alt="Get Repos" title="Get Repos" src=".github/05.PNG" />
    <p align="left">⚫ Requisição POST mostrando uma regra de négocio em funcionamento, quando se tenta sacar mais do que se tem depósitado.</p>
    <img alt="Get Repos" title="Get Repos" src=".github/06 nts.PNG" />
    <p align="left">⚫ Requisição POST mostrando uma regra de négocio em funcionamento, quando se tenta sacar valores negativos ou 0 (zero).</p>
    <img alt="Get Repos" title="Get Repos" src=".github/07 si.PNG" />
    <p align="left">⚫ Requisição POST mostrando uma regra de négocio em funcionamento, quando se tenta depósitar valores negativos ou 0 (zero).</p>
    <img alt="Get Repos" title="Get Repos" src=".github/08 di.PNG" />
    <p align="left">⚫ Requisição POST mostrando uma regra de négocio em funcionamento, quando tenta fazer um cadastro com o <i>type</i> diferente de (<i>income | outcome</i>).</p>
    <img alt="Get Repos" title="Get Repos" src=".github/09 tdti.PNG" />
</div>

---

Desenvolvido com 💚 por [Felipe Zanetti!](https://www.linkedin.com/in/felipezanetti/)
