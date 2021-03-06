﻿### Greak Bible V1

- [x] Create simple UI for a single hardcoded Chapter (James 1)
	- [x] User Features:
		- [x] DisplayPassage
			- [x] DisplayEntryText
			- [x] DisplayEntryDetails
			- [x] DisplayEntryColors
	- [x] System Features:
		- [x] ParsePassageText
	- [x] Core:
		- [x] Passage Definitions
	- [x] Tasks
		- [x] Refactor User and System File Structure
			- [x] Move Data Interfaces to Core Folder
			- [x] Move ParsePassageText to System Folder
			- [x] Move SampleData to ParsePassageText_TestData
			- [x] Rename DisplayGreekText to DisplayPassageText
		- [x] Create Tests for ParsePassageText
			- [x] Move Tests to correct file: "Will load first word from Sample - James 1"
			- [x] Test that the codes are loaded
		- [x] Display Text on page
		- [x] Display Details on page as text
		- [x] Rename DisplayPassageText to DisplayPassage
		- [x] Display Verse Numbers

- [x] Allow User to select a book and chapter
	- [x] User Features:
		- [x] ChangePassage
	- [x] System Features:
		- [x] LoadPassageText
	- [x] Tasks
		- [x] Populate Book Names
		- [x] Populate Chapter Count when the Book is chosen
		- [x] Reset Chapter to 1 when the Book is chosen
			- [x] Change to Options binding
			- [x] BUG: jQueryMobile does not update select when the value has changed, trying selectOptions as workaround
		- [x] Load Passage after choosing chapter
		- [x] Apply jQueryMobile Template after repopulating
			- [x] Create RefreshJQM binding
		- [x] Divide Data into Chapters
		- [x] Download Chapter with Ajax


- [x] Publish
	- [x] Verify that App is Working Online
	- [x] Create Release Branch
	- [x] Write Blog Entry
	- [x] Screen Shots
	- [x] Publish Website
	- [x] Publish Blog about App
	- [x] Push to GitHub


### 5HourApp System V1

- [x] Show loading screen

	- [x] Minimal files for loading (all in html)
		- [x] Single script dependency
		- [x] Single style dependency
		- [x] Single image dependency

- [x] Enable Offline Mode

	- [x] Create AppManifest to allow offline 
	- [x] Load in iframe from online app, then switch over with prompt
		-  [X] download all resources

- [x] Show loading message when waiting for the chapter to download
- [x] Show error message if failed to download

### 5HourApp System V2

- [x] Include Yadda BDD testing

### 5HourApp System V3

- [x] Rename "System" features to "Support" features

	- [x] Redefine "System Features": Features that provide non-app specific functionality
	- [x] Define "Support Features": Features that provide underlying functionality for User features

- [x] Refactor App Loader

- [x] Refactor Testing Framework
	- [x] Use #test for testing 
		- [x] Put Testing on its own page
		- [x] load with pure javascript with no server processing
	- [x] Refactor Yadda test runner and QUnit library

- [x] Create Documentation for System Features in Developer's Notes


### Greek Bible V2

- [x] Focus on Chapter Choice after choosing Book

- [x] Refactor ViewModel Passage Data
	- [x] Set "deferEvaluation: true" on ko.computed which should initialize after viewModel constructor
	- [x] Move Passage data to DisplayPassage
		- [x] Change LoadPassage to ShowPassage
		- [x] Reload Last Passage (using localStorage)
	- [x] Show Book and Chapter from Display Passage instead of Choose Passage

- [x] Change "WebSite" folder to "www" folder

- [x] Improve rendering performance for passage
	- [x] Change to dust template for passage

- [x] Add _featureList.txt

- [x] Define a Feature: Choose 2 passages quickly and first is late loaded

- [x] Define and organize features

- [x] Define User Settings as mockable

- [x] !Separate System Project out of GreekBible to enable focus apart from system features

- [x] Complete all the defined features that have been implemented
	- [x] 001 - View Passage
	- [x] 002 - Choose Passage
		- [x] simple scenario
		- [x] other scenarios
		- [x] SOLVE RACE CONDITION: If the user chooses two passages quickly, it should display the last chosen passage
	- [x] 003 - View Entry Color Coding
		- [x] Same code same color
		- [x] Different Code different color

- [x] Finish rewriting the feature steps as feature unit tests
- [x] Remove the feature steps folder
- [x] Refactor Display Entry Color Coding
- [x] Fix "refresh" error

- [x] Publish as V2
	- [x] WebApp
		- [x] Verify Upload
	- [x] PhoneGap
	- [x] GitHub
	- [x] Blog
		- [x] Use Same Screen Shots

### Greek Bible V0.3

- [x] Delay loading of passage a split second to allow for loading... to display
- [x] Extend features: Add Verse to DisplayPassage and ChangePassage
	- [x] Show only one verse
		- [x] Add verse to ViewModel
		- [x] Modify tests to check for verse
		- [x] Pass tests
		- [x] Display verse choice on UI
	- [x] Show one verse with context (2 verses above and below)
		- [x] Show context from current chapter

- [x] Display Entry Popup
	- [x] Replace dust template with knockout to support click event
	- [x] Show details
	- [x] Remove extra spaces
	- [x] Show cross references
- [x] Fix spacing between words

- [x] Fix popup space at bottom of page

- [x] Navigate cross-references

- [x] Remove jQueryMobile and all unused resources
- [x] Tweak UI
- [x] FIX: Bug when choosing different verse in same chapter quickly

- [x] Publish
	- [x] Review summary & description
	- [x] Add Credits for license
	- [x] Make ScreenShots
	- [x] PhoneGap
	- [x] GitHub

### Greek Bible V1.0

- [ ] Bug List
	- [ ] Fix Font on older Android devices
	- [ ] About screen text is going off the edge of the screen on Kindle
	- [ ] Links to website are not allowed in InMobi publish
	- [ ] Clicking related words is hard to hit on kindle
	- [ ] Going back a verse from next chapter causes it to flash up verse 1 before moving to the last verse
	- [ ] Add more context verses on tablets

- [ ] Features
	- [ ] Add Google Analytics
	- [ ] Adjustable font size


---

- [ ] Show context from adjacent chapter

- [ ] Create Documentation for Every Feature
	- [ ] Create tool to extract Documentation from .feature files


- [ ] Publish
	- [ ] WebApp
		- [ ] Make ScreenShots
	- [ ] PhoneGap
	- [ ] GitHub
	- [ ] Blog


### 5HourApp System V3B

- [x] Enable PhoneGap

- [ ] Implement App Reporting

- [ ] Browser App Performance

	- [ ] Improve Performance
		- [ ] Add Device Metadata to enable web app features
		- [ ] Use CDN for External sources where possible

	- [ ] Refactor Offline App Caching

	- [ ] Change to external modules using RequireJS
