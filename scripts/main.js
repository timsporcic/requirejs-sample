require.config({
  paths:{
    bootstrap:'lib/bootstrap.min',
    doT:'lib/doT.min',
    views:'templates/templates',
    datasource:'data/json-datasource'
  },
  shim:{
    'bootstrap':['jquery']
  }
});

require(['jquery', 'datasource', 'views', 'bootstrap', 'domReady!'],
    function ($, datasource, views) {

  $('#customer-rows').html(views.tablerow(datasource.list()));

  $('#customer-table').on('click', 'a.edit-customer', function (e) {
    e.preventDefault();
    var idx = $(this).data('id');
    $('#modal-body').html(views.dialog(datasource.get(idx)));
    $('#customer-modal').modal('show');
  });

  $('#customer-modal').on('click', 'a.save-customer', function (e) {
    e.preventDefault();
    datasource.update($('#customer-form').serialize());
    $('#customer-modal').modal('hide');
  });
});
