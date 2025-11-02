function doGet(e) {
  return ContentService.createTextOutput("Welcome to the Union Builder API");
}

function doPost(e) {
  var action = e.parameter.action;
  
  if (action === "createUnion") {
    return createUnion(e);
  } else if (action === "getUnions") {
    return getUnions();
  } else {
    return ContentService.createTextOutput("Invalid action");
  }
}

function createUnion(e) {
  var name = e.parameter.name;
  var description = e.parameter.description;
  
  if (!name || !description) {
    return ContentService.createTextOutput("Missing parameters");
  }
  
  var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();
  sheet.appendRow([name, description]);
  
  return ContentService.createTextOutput("Union created successfully");
}

function getUnions() {
  var sheet = SpreadsheetApp.openById("YOUR_SPREADSHEET_ID").getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  var unions = [];
  for (var i = 1; i < data.length; i++) {
    unions.push({ name: data[i][0], description: data[i][1] });
  }
  
  return ContentService.createTextOutput(JSON.stringify(unions)).setMimeType(ContentService.MimeType.JSON);
}