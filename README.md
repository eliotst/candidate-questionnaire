# candidate-questionnaire

React app for rendering candidate questionnaires from a Google sheet.

## Building

In order to build the application, execute the following:

```bash
> yarn install
> yarn build
```

## Installation

The JavaScript application is currently deployed to firebase at:

https://candidate-questionnaire.firebaseapp.com/main.js

To install the app into a page, it is necessary to add three elements to the HTML of your page.

### The content element

This element is a div with an `id` attribute of `content`. This element is where the questionnaire
will be inserted into the page.

```html
<div id="content"></div>
```

### The application script

You will need to insert a script tag that references the app code itself.

```html
<script src="https://candidate-questionnaire.firebaseapp.com/main.js"></script>
```

### The application configuration

In order to configure the app to find your Google sheet(s), it is necessary to add the configuration
as a `script` tag:

```html
<script>
window.CandidateQuestionnaire = {
  districtSpreadsheetMap: {
    "District 1 Name": "<Google Sheets ID>",
    "District 2 Name": "<Google Sheets ID>",
  },
  supportSearch: false
};
</script>
```
