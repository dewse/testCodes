

function onEdit(event)
{ 
  var timezone = "GMT-5";
  var timestamp_format = "MM-dd-yyyy"; 
  var updateColName = "Ranks";
  var timeStampColName = "TStamp";  
const arrCol = ["Ranks","Ilvl","Legend","Back","Chest","Legs",
"Hands","Should","Head","Hds","Shld","Hnds","Lgs","Chst","Bck"];
  var arrLength = arrCol.length;
  var sheet = event.source.getSheetByName('Roster_Gear_Ranks'); 
  var actRng = event.source.getActiveRange();
  var editColumn = actRng.getColumn();
  var index = actRng.getRowIndex();
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
  var dateCol = headers[0].indexOf(timeStampColName);
  var cell = sheet.getRange(index, dateCol + 1);
  var date = Utilities.formatDate(new Date(), timezone, timestamp_format);
    cell.setValue(date);
  
  for (var i = 0; i < arrLength; i++) {  
  var updateCol = headers[0].indexOf(arrCol[i]); updateCol = updateCol+1;
  if (dateCol > -1 && index > 1 && editColumn == updateCol) { 
  cell()
  date()    
  }
 }
}