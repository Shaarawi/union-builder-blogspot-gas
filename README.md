# Union Builder for Blogspot and Google Apps Script

## Overview
The Union Builder project integrates a Blogspot frontend with a Google Apps Script backend, utilizing a Google Spreadsheet for data storage. This application allows users to interact with a form on the Blogspot site, which communicates with the backend to store and retrieve data.

## Project Structure
```
union-builder-blogspot-gas
├── blogspot
│   ├── template.html          # Main HTML template for the Blogspot frontend
│   ├── snippets
│   │   └── form.html         # HTML form for user input
│   └── assets
│       ├── css
│       │   └── style.css     # CSS styles for the frontend
│       └── js
│           └── main.js       # JavaScript for client-side interactions
├── backend
│   ├── apps-script
│   │   ├── Code.gs           # Main Google Apps Script code
│   │   ├── RestApi.gs        # REST API endpoints for communication
│   │   └── appsscript.json   # Configuration for the Apps Script project
│   └── tests
│       └── test.gs           # Test scripts for backend functionality
├── spreadsheet
│   ├── template.csv          # Template for spreadsheet data structure
│   └── schema.md             # Documentation of the spreadsheet schema
├── scripts
│   └── deploy.sh             # Shell script for deploying the application
├── .gitignore                 # Files and directories to ignore in version control
└── README.md                  # Documentation for the project
```

## Getting Started
1. **Clone the Repository**: 
   Clone this repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Set Up Google Apps Script**:
   - Open the `backend/apps-script` folder in Google Apps Script.
   - Deploy the script as a web app to enable API access.

3. **Configure the Spreadsheet**:
   - Open the `spreadsheet/template.csv` file to define the data structure.
   - Use the `spreadsheet/schema.md` for guidance on the expected data types.

4. **Deploy the Frontend**:
   - Upload the contents of the `blogspot` folder to your Blogspot account.
   - Ensure that the paths to CSS and JavaScript files are correctly referenced in `template.html`.

5. **Testing**:
   - Run the test scripts located in `backend/tests/test.gs` to ensure the backend functions as expected.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.