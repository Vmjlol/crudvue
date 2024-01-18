<template>
    <div id="my-app">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="../css/login-register.css">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
        </head>

        <body class="bg-black">


            <div class="box d-flex position-absolute top-50 start-50 translate-middle" style="flex-direction: row-reverse;">
                <div class="leftbox me-5">
                    <div class="icon">
                        <i class="bi bi-yin-yang"></i>
                    </div>

                    <div class="text">
                        <h4>A fortuna fica ao lado daquele que ousa.</h4>
                        <p>Todo progresso ocorre fora da zona de conforto.</p>
                    </div>

                    <div class="logo">
                        <div class="gradient"></div>
                        <div class="gradient2">
                            <div class="fundoshape"></div>
                            <div class="posicaoshape">
                                <div class="lowershape"></div>
                                <div class="uppershape"></div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="login ms-5">
                    <div>
                        <h3 class="fw-bold">Inscreva-se</h3>
                    </div>

                    <div class="form m-2">
                        <label for="nome">Nome completo</label>
                        <input type="nome" name="nome" id="nome" placeholder="Nome e sobrenome">
                        <label for="email">Endereço de e-mail</label>
                        <input type="email" name="email" id="email" placeholder="email@email.com.br">
                        <label for="senha">Senha de acesso</label>
                        <input type="password" name="senha" id="senha" placeholder="********">
                    </div>


                    <div class="links">
                        <router-link to="/">já tenho conta</router-link>
                        <router-view></router-view>
                        <a href="#">
                            <button class="confirm">cadastrar</button>
                        </a>
                    </div>
                </div>
            </div>






        </body>

    </div>
</template>

<style >
body {
    background-color: black !important;
}
</style>