﻿- Create simple UI for a single hardcoded Chapter (James 1)
	- User Features:
		- DisplayPassageText
	- System Features:
		- X: ParsePassageText
	- Core:
		- Passage Interfaces
	- Tasks
		- Create Tests for ParsePassageText
			- Move Tests to correct file: "Will load first word from Sample - James 1"
			- Move SampleData to ParsePassageText_TestData
		- Create Tests for DisplayPassageText
		- Refactor User and System File Structure
			- Move Data Interfaces to Core Folder
			- Move ParsePassageText to System Folder
			- Move SampleData to System Folder

Future:
- Allow User to select a book and chapter
	- User Features:
		- ChangePassage
	- System Features:
		- LoadPassageText
