# Víveres

Repositório destinado ao aprendizado e desenvolvimento de aplicações utilizando APIs na disciplina de Desenvolvimento de Software.


Descrição de Alto Nível do Produto
O aplicativo Víveres conecta feirantes do CEASA (Centrais de Abastecimento) com ONGs para doação de alimentos excedentes, reduzindo o desperdício e levando alimentos frescos a quem mais precisa. O app permite que os feirantes enviem fotos dos produtos disponíveis para doação, e uma IA integrada descreve automaticamente o tipo, quantidade e condição dos alimentos nas imagens, agilizando o processo de registro para os feirantes. Além disso, um chatbot oferece suporte rápido aos usuários, respondendo dúvidas e orientando no uso da plataforma.


User Stories Iniciais

Como Feirante (Doador)
1. Cadastro e Login: Como feirante, eu quero me cadastrar e fazer login para começar a doar alimentos rapidamente.
2. Doação com Foto: Como feirante, eu quero tirar uma foto dos alimentos que quero doar, e que o app descreva automaticamente o conteúdo, para eu não precisar preencher manualmente os detalhes.
3. Histórico de Doações: Como feirante, quero visualizar um histórico das minhas doações para acompanhar a quantidade doada e o impacto.

Como ONG (Recebedor)
1. Cadastro e Login: Como ONG, quero me cadastrar e fazer login para começar a receber alimentos doados.
2. Visualização de Doações Disponíveis: Como ONG, quero visualizar doações disponíveis em tempo real e solicitar os alimentos que preciso, para que não haja desperdício.
3. Chatbot para Suporte: Como ONG, quero interagir com um chatbot que me ajude com dúvidas sobre o uso do app e com instruções para coleta.

Como Administrador do Sistema
1. Gestão de Usuários: Como administrador, quero gerenciar o cadastro de feirantes e ONGs para garantir a segurança e a validade das informações.
2. Relatórios de Impacto: Como administrador, quero visualizar relatórios sobre a quantidade de alimentos doados, ONGs atendidas e impacto social para monitorar o desempenho do aplicativo.
3. Suporte e Moderação: Como administrador, quero monitorar interações no chatbot para ajustar respostas e garantir a precisão das informações fornecidas.


Rascunho do Backlog

Módulo de Cadastro e Autenticação
[Alta] Implementar cadastro e login para feirantes e ONGs.
[Alta] Verificação de contas via e-mail ou SMS.
[Média] Sistema de recuperação de senha.

Módulo de Doações com IA (Feirante)
[Alta] Implementar envio de fotos para doação.
[Alta] Desenvolver a IA para análise de imagem, que identifica tipo e quantidade de alimentos nas fotos.
[Alta] Sistema para permitir correção manual das informações geradas pela IA (caso necessário).
[Média] Histórico de doações feitas pelo feirante.

Módulo de Notificações e Relatórios
[Alta] Notificações para feirantes sobre necessidades específicas das ONGs.
[Média] Implementar dashboard de relatórios de doações e impacto para ONGs e administradores.

Chatbot de Suporte
[Alta] Desenvolver chatbot com respostas a dúvidas frequentes para feirantes e ONGs.
[Média] Treinar chatbot para oferecer suporte sobre como usar o app e tirar dúvidas sobre o processo de doação.
[Baixa] Otimizar o chatbot com base em feedbacks dos usuários e adaptar para novas perguntas comuns.


Requisitos Funcionais

1. Módulo de Cadastro e Login
O sistema deve permitir que feirantes e ONGs se cadastrem no aplicativo fornecendo informações básicas (nome, e-mail, telefone, etc.).
O sistema deve permitir que feirantes e ONGs façam login e logout com autenticação segura.

2. Módulo de Doação com IA para Feirantes
O sistema deve permitir que feirantes façam upload de imagens dos alimentos que desejam doar.
O sistema deve utilizar uma IA de reconhecimento de imagem para descrever automaticamente o tipo e a quantidade dos alimentos nas imagens enviadas.
O sistema deve permitir que os feirantes ajuste manualmente a descrição dos alimentos gerada pela IA, caso necessário.

3. Módulo de Gerenciamento de Estoque para ONGs
O sistema deve permitir que as ONGs visualizem doações disponíveis em tempo real.
O sistema deve permitir que as ONGs selecionem e solicitem os alimentos necessários, atualizando o status das doações.
O sistema deve fornecer às ONGs uma função de gerenciamento de estoque para acompanhar as datas de validade dos alimentos recebidos e registrar as distribuições.

4. Notificações
O sistema deve enviar notificações aos feirantes sobre os tipos de alimentos mais necessários, baseando-se nas solicitações das ONGs.
O sistema deve notificar as ONGs quando novas doações de alimentos estiverem disponíveis, permitindo que solicitem rapidamente.

5. Chatbot de Suporte
O sistema deve fornecer um chatbot que responda a dúvidas frequentes de feirantes e ONGs sobre o uso do aplicativo.
O chatbot deve fornecer orientações sobre como realizar doações, gerenciar estoque e resolver problemas de uso do aplicativo.

6. Relatórios e Histórico
O sistema deve permitir que os feirantes acessem o histórico de doações, com dados sobre as quantidades doadas e ONGs atendidas.
O sistema deve gerar relatórios de impacto social, incluindo a quantidade de alimentos doados, regiões atendidas e número de pessoas beneficiadas, para acesso das ONGs e administradores.

7. Gestão de Usuários (Administrador)
O sistema deve permitir que o administrador gerencie o cadastro de feirantes e ONGs, podendo aprovar, editar ou remover contas conforme necessário.
O sistema deve permitir que o administrador modere e treine o chatbot para melhorar suas respostas e adaptar-se a novas perguntas frequentes.


Requisitos Não Funcionais

1. Usabilidade
O sistema deve ter uma interface intuitiva e fácil de usar, especialmente para feirantes, que terão um tempo limitado para realizar doações.
O chatbot deve responder de forma clara e objetiva, garantindo uma experiência de suporte simples.

2. Desempenho
O sistema deve processar e descrever imagens de alimentos em até 5 segundos para que o processo de doação seja rápido e eficiente.
O sistema deve ter alta disponibilidade e ser capaz de lidar com múltiplos acessos simultâneos, especialmente em horários de pico.

3. Segurança
O sistema deve implementar autenticação segura para o login de feirantes e ONGs.
O sistema deve proteger os dados de doadores e ONGs em conformidade com a LGPD, garantindo que informações pessoais estejam seguras e só sejam usadas para os fins propostos.

4. Escalabilidade
O sistema deve ser escalável para suportar um número crescente de feirantes, ONGs e doações conforme a base de usuários cresce.

5. Compatibilidade
O sistema deve ser compatível com dispositivos móveis (iOS e Android) e navegadores mais comuns para garantir acesso fácil aos usuários.

6. Manutenibilidade
O sistema deve ser construído de maneira modular para permitir futuras atualizações e manutenções sem impactar o funcionamento global.
O chatbot deve ser configurável e fácil de treinar para que administradores possam adaptá-lo a novas demandas dos usuários.



