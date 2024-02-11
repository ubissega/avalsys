/*
CRIAR ELEMENTOS PARA PADINAS DINAMICAMICAMENTE DE ACORDO COM AS INFORMAÇÕES DA BASE DE DADOS
*/

(function () {
  'use strict'

    // body...
      // Array para armazenar informações sobre as cadeiras e notas
    const cursos = [];

    // Função para adicionar uma cadeira e nota ao array
    function adicionarCadeiraENota(nome,estencao,periodo) {
        const curso = {
            nome_curso:nome,
            estencao_curso:estencao,
            periodo_curso:periodo
        };

        cursos.push(curso);
    }

    // Exemplo de uso da função para adicionar cadeiras e notas
    adicionarCadeiraENota('Tecnologias de informacao', 'FENG');
    adicionarCadeiraENota('Civil', 'FENG','Pos-laboral');
    adicionarCadeiraENota('Electrica', 'FENG','Laboral');

            // Array para armazenar informações sobre as cadeiras e notas
    const frequencias = [];

    // Função para adicionar uma cadeira e nota ao array
    function adicionarFrequenciaDosCursos(curso,nome,cordenador) {
        const frequencia = {
          curso_frequencia:curso,
          nome_frequencia:nome,
          cordenador_frequencia:cordenador
        };

        frequencias.push(frequencia);
    }

    // Exemplo de uso da função para adicionar cadeiras e notas
    adicionarFrequenciaDosCursos('Tecnologias de informacao', 'Primeiro ano','Mohammad');
    adicionarFrequenciaDosCursos('Tecnologias de informacao', 'Segundo ano','Nyamisse');
    adicionarFrequenciaDosCursos('Tecnologias de informacao', 'Terceiro ano','Nyacasse');
    adicionarFrequenciaDosCursos('Tecnologias de informacao', 'Quarto ano','Nyacasse');


            // Array para armazenar informações sobre as cadeiras e notas
    const cadeiras = [];

    // Função para adicionar uma cadeira e nota ao array
    function adicionarCadeiras(curso,nome_frequencia,semestre,nome,credito,docente) {
        const cadeira = {
          curso:curso,
          nome_frequencia:nome_frequencia,
          semestre:semestre,
          nome:nome,
          credito:credito,
          docente:docente
        };

        cadeiras.push(cadeira);
    }

    // Exemplo de uso da função para adicionar cadeiras e notas
    adicionarCadeiras('Tecnologias de informacao', 'Primeiro ano','primeiro','DIAC','Vasco');
    adicionarCadeiras('Tecnologias de informacao', 'Segundo ano','segundo','EDA','Lorgat');
    adicionarCadeiras('Tecnologias de informacao', 'Segundo ano','segundo','WEB','Watson');
    adicionarCadeiras('Tecnologias de informacao', 'Segundo ano','segundo','TI','Bento');

    // Exibindo o array resultante
    console.log(cursos);
    console.log(frequencias);
    console.log(cadeiras.nome);
        // Dados estruturados com nomes de avôs, pais, filhos e netos
    const dadosFamilia = [
      {
        nome: 'Primeiro ano',
        filhos: [
          {
            nome: 'Semestre 1',
            netos: [
              {
                nome: 'DIAC',
                bisnetos: ['Neto Joaquim']
              },
              {
                nome: 'EDA',
                bisnetos: ['Neta Sofia']
              }
            ]
          },
          {
            nome: 'Semetsre 2',
            netos: [
              {
                nome: 'WWW',
                bisnetos: ['Neto Lucas']
              },
              {
                nome: 'Filha Maria',
                bisnetos: ['Neta Isabel']
              }
            ]
          }
        ]

      },
      {
        nome: 'Segundo ano',
        filhos: [
          {
            nome: 'Semestre 2',
            netos: [
              {
                nome: 'DIAC',
                bisnetos: ['Neto Joaquim']
              },
              {
                nome: 'EDA',
                bisnetos: ['Neta Sofia']
              }
            ]
          },
          {
            nome: 'Semetsre 2',
            netos: [
              {
                nome: 'WWW',
                bisnetos: ['Neto Lucas']
              },
              {
                nome: 'Filha Maria',
                bisnetos: ['Neta Isabel']
              }
            ]
          }
        ]
        
      }
      // Adicione mais objetos conforme necessário
    ];
  
    export {dadosFamilia};

})()