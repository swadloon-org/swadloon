import 'google-apps-script';

const greeter = (person: string) => {
  return `Hello, ${person}!`;
};

let user = 'Grant';
Logger.log(greeter(user));

function listDriveFiles() {
  const files = DriveApp.getFiles();

  try {
    while (files.hasNext()) {
      const file = files.next();
      Logger.log(file.getName());
    }
    Logger.log('No more file found');
  } catch (error) {
    Logger.log(error);
  }
}

/**
 * Creates a Google Doc and sends an email to the current user with a link to the doc.
 */
function createAndSendDocument() {
  // Create a new Google Doc named 'Hello, world!'
  var doc = DocumentApp.create('Hello, world!');

  // Access the body of the document, then add a paragraph.
  doc.getBody().appendParagraph('This document was created by Google Apps Script.');

  // Get the URL of the document.
  var url = doc.getUrl();

  // Get the email address of the active user - that's you.
  var email = Session.getActiveUser().getEmail();

  // Get the name of the document to use as an email subject line.
  var subject = doc.getName();

  // Append a new string to the "url" variable to use as an email body.
  var body = 'Link to your doc: ' + url;

  // Send yourself an email with a link to the document.
  GmailApp.sendEmail(email, subject, body);
}
