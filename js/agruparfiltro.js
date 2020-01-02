const agruparFiltros = function ($el) {
    const ID_DEPARTAMENTO = vtxctx.departmentyId || false;
    const naoExibirMarca = ["3093", "3535", "3787", "3717", "3906", "5389", "5391"]

    // remove os totais nos filtros
    $el.find('li a').each(function () {
      $(this).text($(this).text().split('(')[0])
    })

    $('ul.productClusterSearchableIds li').remove()

    // agrupa os filtros
    $el.find('h3,h4,h5').each(function (i) {
      const $_filtroAtual = $(this)
      const $_filtroValores = $(this).next()
      const _grupoNome = $_filtroAtual.text()
      const _grupoId = lcLibs.uteis.limpaCaracteres(
        _grupoNome.toLocaleLowerCase())
      const $_filtroGrupo = $('<div>', {'class': 'filtro__grupo ' + _grupoId})

      $_filtroAtual.find('span').remove()
      $_filtroAtual.append($('<a>', {
        'class': 'filtro__grupo__header__botao',
        'data-toggle': 'collapse',
        'role': 'button',
        'data-target': '#' + _grupoId,
      }))

      $_filtroAtual.parent().append($_filtroGrupo)

      if ($_filtroValores.find('li').length === 0) {
        $_filtroAtual.remove()
        $_filtroValores.remove()
      } else {

        $_filtroValores.wrap($('<div>', {'class': 'filtro__grupo__valores', 'id': _grupoId}))
        $_filtroAtual.wrap($('<div>', {'class': 'filtro__grupo__header'}))
        $_filtroGrupo.append($_filtroAtual.parents('.filtro__grupo__header'))
        $_filtroGrupo.append($_filtroValores.parents('.filtro__grupo__valores'))
      }
    })

    $('.filtro__grupo__header__botao').each(function (i, $el) {
      var target = '#' + lcLibs.uteis.limpaCaracteres(
        $(this).attr('data-target').replace('#', ''))

      if (P_DEPARTAMENTO) {

        $(target).collapse('hide')
      }

      $(this).on('click', function () {

        $(target).collapse('toggle')

      })
    })

    if(naoExibirMarca.indexOf(ID_DEPARTAMENTO) >= 0) {
      console.log("entrou no if não exibir marca");
      $(".filtro__grupo.marca").remove();
    }

    $el.addClass('pronto')

  }