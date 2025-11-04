function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('template')
      .setTitle('Union Builder');
}

/**
 * POST handler: expects JSON { name, flat_No, mobile }
 */
function doPost(e) {
  try {
    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data.name = e.parameter.name;
      data.flat_No = e.parameter.flat_No;
      data.mobile = e.parameter.mobile;
    }

    var ssId = 'REPLACE_WITH_SPREADSHEET_ID';
    var ss = SpreadsheetApp.openById(ssId);
    var sheet = ss.getSheetByName('Responses');
    if (!sheet) {
      sheet = ss.insertSheet('Responses');
      sheet.appendRow(['Timestamp', 'name', 'flat_No', 'mobile']);
    }

    sheet.appendRow([new Date(), data.name || '', data.flat_No || '', data.mobile || '']);

    var output = { status: 'success', message: 'Saved' };
    return ContentService
      .createTextOutput(JSON.stringify(output))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    var outputErr = { status: 'error', message: err.toString() };
    return ContentService
      .createTextOutput(JSON.stringify(outputErr))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function processForm(formData) {
  var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  sheet.appendRow([formData.name, formData.email, formData.message]);
  return { success: true, message: 'Form submitted successfully!' };
}