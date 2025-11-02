#!/bin/bash

# This script deploys the Google Apps Script project to the specified Google account.

# Set the project ID and script ID
PROJECT_ID="your_project_id"
SCRIPT_ID="your_script_id"

# Authenticate with Google Cloud
gcloud auth login

# Deploy the Apps Script project
clasp push

# Open the Apps Script project in the browser
clasp open

echo "Deployment completed successfully."