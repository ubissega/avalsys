/* global bootstrap: false */

(function () {
  'use strict'



  //TRATAMENTO DE ARCOS OU LINKS DA PAGINA, CONFIRMADA E FUNCINANDO

      document.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); 
        // Evita o comportamento padrão do link
              // Verifica se href termina com ".html"
        if (this.getAttribute('href').endsWith('.html')) {
          // Deixa o comportamento padrão de navegação ocorrer
          window.location.href=this.getAttribute('href');
        }

        // Obtém o ID do artigo relacionado ao link clicado
        var targetId = this.getAttribute('href').substring(1);

        // Oculta todos os artigos
        document.querySelectorAll('article').forEach(function(article) {
          article.style.display = 'none';
        });

        // Exibe o artigo alvo
        document.getElementById(targetId).style.display = 'grid';
      });
    });


      









  // Tooltip and popover demos
  document.querySelectorAll('.tooltip-demo')
    .forEach(function (tooltip) {
      new bootstrap.Tooltip(tooltip, {
        selector: '[data-bs-toggle="tooltip"]'
      })
    })

  document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach(function (popover) {
      new bootstrap.Popover(popover)
    })

  document.querySelectorAll('.toast')
    .forEach(function (toastNode) {
      var toast = new bootstrap.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Disable empty links and submit buttons
  document.querySelectorAll('[href="#"], [type="submit"]')
    .forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault()
      })
    })

  function setActiveItem() {
    var hash = window.location.hash

    if (hash === '') {
      return
    }

    var link = document.querySelector('.bd-aside a[href="' + hash + '"]')

    if (!link) {
      return
    }

    var active = document.querySelector('.bd-aside .active')
    var parent = link.parentNode.parentNode.previousElementSibling

    link.classList.add('active')

    if (parent.classList.contains('collapsed')) {
      parent.click()
    }

    if (!active) {
      return
    }

    var expanded = active.parentNode.parentNode.previousElementSibling

    active.classList.remove('active')

    if (expanded && parent !== expanded) {
      expanded.click()
    }
  }

  setActiveItem()
  window.addEventListener('hashchange', setActiveItem)
})()
