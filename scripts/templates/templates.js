define(['doT',
        'text!templates/table-row.html',
        'text!templates/dialog.html'],
        function(doT, tablerowText, dialogText){

  return {
    tablerow: doT.template(tablerowText),
    dialog: doT.template(dialogText)
  };
});