🎮 Jogos143 — Plataforma de Jogos em ASP.NET Core MVC

O Jogos143 é um site desenvolvido em ASP.NET Core MVC com foco em apresentar jogos de forma organizada, rápida e com visual gamer.
O projeto possui páginas individuais para cada jogo, layout compartilhado, front-end em CSS/JS e lógica estruturada via Controllers.

📂 Estrutura do Projeto

A estrutura real do seu projeto está assim:

Jogos143/
│
├── Controllers/
│    ├── HomeController.cs
│    └── JogosController.cs
│
├── Views/
│    ├── Home/
│    │    └── Index.cshtml
│    │
│    ├── Jogos/
│    │    ├── BankeryCafeSimulator.cshtml
│    │    ├── Carrion.cshtml
│    │    ├── CharruaSoccer.cshtml
│    │    ├── ... (várias páginas de jogos)
│    │
│    └── Shared/
│         ├── _Layout.cshtml
│         ├── _LoginPartial.cshtml
│         ├── _ValidationScriptsPartial.cshtml
│         └── Error.cshtml
│
├── Models/
│    └── ErrorViewModel.cs
│
├── Data/
│    ├── ApplicationDbContext.cs
│    └── Migrations/
│
├── wwwroot/
│    ├── css/
│    ├── js/
│    ├── img/
│    ├── IMGJ/
│    ├── Video/
│    └── favicon.ico
│
├── appsettings.json
├── appsettings.Development.json
└── Program.cs

🚀 Sobre o Projeto

O objetivo do Jogos143 é trazer uma experiência rápida e organizada para encontrar informações sobre vários jogos.
Cada jogo tem sua própria página com imagens, textos e detalhes visuais.

O layout utiliza _Layout.cshtml para manter padrão de cores e tema gamer.

🛠️ Tecnologias Utilizadas

ASP.NET Core MVC 7/8

Razor Pages (Views .cshtml)

Entity Framework Core

HTML / CSS / JavaScript

Bootstrap / Tema customizado roxo neon

LocalDB SQL Server (para identidade e dados)

🔥 Funcionalidades

✔️ Página inicial com destaque para jogos
✔️ Lista de jogos no menu “Jogos”
✔️ Páginas individuais dos jogos (Views/Jogos/*.cshtml)
✔️ Layout responsivo
✔️ Controle de navegação via JogosController
✔️ Sistema de login (Identity configurado na pasta Areas)
✔️ Assets organizados no wwwroot/

⚙️ Como Rodar o Projeto

Abra o projeto no Visual Studio

Restaure os pacotes NuGet automaticamente

Rode as migrações (se necessário):

update-database


Execute com IIS Express

Abra no navegador:

https://localhost:####/

📌 Controllers Principais
HomeController

/Home/Index

Página inicial do site

JogosController

/Jogos/NomeDoJogo

Cada método retorna uma View específica de jogo

Exemplo:

public IActionResult Raft()
{
    return View();
}


Esse método abre a View:

Views/Jogos/Raft.cshtml

🎨 Front-end

Todos os estilos personalizados ficam em:

wwwroot/css


Imagens em:

wwwroot/img
wwwroot/IMGJ


Scripts JavaScript:

wwwroot/js

📘 Objetivo do Projeto

Criar um site gamer simples, rápido e visualmente atraente, perfeito para quem quer conhecer jogos de forma prática.

👨‍💻 Autor

Doguns
Criador do projeto Jogos143.
