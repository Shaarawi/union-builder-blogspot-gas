# Schema for the Union Builder Spreadsheet

## Overview
This document outlines the schema for the spreadsheet used in the Union Builder project. The spreadsheet serves as the backend data store, capturing user inputs and other relevant information.

## Structure
The spreadsheet consists of the following columns:

1. **ID**: 
   - Type: Integer
   - Description: A unique identifier for each entry.

2. **Name**: 
   - Type: String
   - Description: The name of the user or entity submitting the form.

3. **Email**: 
   - Type: String
   - Description: The email address of the user, used for communication.

4. **Union Type**: 
   - Type: String
   - Description: The type of union the user is interested in (e.g., labor, trade).

5. **Date Joined**: 
   - Type: Date
   - Description: The date when the user joined the union.

6. **Status**: 
   - Type: String
   - Description: The current status of the user within the union (e.g., active, inactive).

## Data Types
- **Integer**: Whole numbers without decimal points.
- **String**: A sequence of characters, typically used for text.
- **Date**: A date value, formatted as YYYY-MM-DD.

## Example Row
| ID | Name        | Email               | Union Type | Date Joined | Status  |
|----|-------------|---------------------|------------|-------------|---------|
| 1  | John Doe   | john.doe@example.com| Labor      | 2023-01-15  | Active  |

## Notes
- Ensure that the ID column is unique for each entry.
- Validate email addresses to ensure they are in the correct format.
- The Date Joined should be recorded in the specified format to maintain consistency.