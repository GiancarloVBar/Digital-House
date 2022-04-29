console.log('teste do git\n')

/**
 * 1) a partir do terminal, acessar a pasta com os arquivos e usar o comando
 *      git init (pelo git bash)
 *      # esse comando gerou um repositório local na pasta onde estão os arquivos
 *      # esse repositório local ainda está vazio
 *      # precisa indicar quais arquivos deseja adicionar
 * 
 * 2) 'commits' são pequenos pacotes em que os arquivos serão armazenados
 *      # é o histórico de mudanças do projeto
 * 
 * 3) terminal: git congig user.name "meu-usuário"
 *              git config user.email "meu email"
 *      # agora o repositório sabe quem é você
 * 
 * git init
 * Initialized empty Git repository in E:/zzDigitalHouse - JS/git-aula/.git/
 * 
 * 4) git add meu_diretorio (arquivo especifico)
 *    git add . (para todos os arquivos)
 * 
 * 5) git commit -m "mensagem para explicar"
 * 
 * 6) caso faça mudança de um arquivo que já esteja em um commit e usar 'git status',
 * verá que o arquivo modificado, apesar de fazer parte do repositório, necessita ser
 * adicionado novamente.
 *      utilize 'git add' para atualizar o arquivo no repositório. Em seguida, utilize o commit
 *      para marcar essa alteração na linha do tempo do projeto
 * 
 * 7) Subindo arquivos
 *      'git push origin master' - levar do repositório local para o remoto
 *          1st - criar a branch (nome: master/main/produção): 'git branch -M main'
 *          2nd - 'git remote add origin https://github.com/GiancarloDevFS/git-aula.git'
 *          3rd - realizar o push 'git push -u origin main'
 * 
 * 8) Baixando arquivos
 *      'git clone' + URL de onde irá baixar (.git)
 *      Trazer atualização para a máquina:
 *      'git pull origin master' - irá baixar apenas os atualizados
 *      
 *  
 * 
 */