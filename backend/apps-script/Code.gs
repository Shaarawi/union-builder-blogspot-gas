function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('template')
      .setTitle('Union Builder');
}

function processForm(formData) {
  var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  sheet.appendRow([formData.name, formData.email, formData.message]);
  return { success: true, message: 'Form submitted successfully!' };
}