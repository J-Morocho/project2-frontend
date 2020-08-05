# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Incomplete
|Day 5| Final Touches and Present | Incomplete

## Project Description

The front end of this application will contain two option fields that a user can interact with. Theses will allow the user to look for events that are going on in a specific Borough or they can query for a certain event type. Once the user submits a request for events they will be listed out within a CSS Grid. The information for each event will be placed in a card and displayed. The cards also contain a button that allows us to add that event to a user's events list. There will also be an events list page where we can look at the events that a specific user will be attending. If a user does not wish to attend an event they picked out they can remove it from their events list.


## User Story

- User lands on homepage and selects event Borough and/or event type
- Results are displayed within a grid on the page. The user is able to click on these cards
- The user will be able to add an event to their events list
- Using the nav bar the user can navigate to their events list
- The user will be prompted to enter a name. Once a name is entered, the events list for that particular user will be displayed
- From that list the user can choose to remove it from the list


## Google Sheet

- [Google Sheet](https://docs.google.com/spreadsheets/d/1DRhpnHYU-LVnRYKSALXm_xbMCZ3FsTs6Zl-VJ1MU49E/edit#gid=0)

## Wireframes
 
- [Mobile](https://res.cloudinary.com/jcloud3zf/image/upload/v1596216790/project2-api/p2-mobile_ih9xem.png)
- [Desktop](https://res.cloudinary.com/jcloud3zf/image/upload/v1596221033/project2-api/p2-desktop_vwoklx.png)


## Time/Priority Matrix 

- [Time Matrix Frontend](https://res.cloudinary.com/jcloud3zf/image/upload/v1596281780/project2-api/P2-frontend_adpkvs.png)


#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Hamburger | H | 2hr | 0.5hr | 1hr|
| Regular Nav | H | 1hr | 0.5hr | 0.5hr|
| Adding input boxes and link to jQuery | H | 1.5hr| 1.5hr | 1.5hr |
| Creating container for query results| M | 3hr | 1hr | 1hr|
| Show event list for user | H | 3 | 3.5hr| 3.5hr| 
| Working with API/ Event handlers | H | 5hrs| 5hr | 5hr |
| Responsive | H | 3hr | -hr | -hr|
| Displaying data from backend| H | 5hr | 5hr | 5hr|
| Total | H | 23hrs| 17hrs | -hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Page redirect | L | 3hr | .5hr | .5hr|
| Get database data using fetch | L | 1hr | -hr | -hr|
| Materialize | H | 4hr | -hr | -hr|
| Total | H | 12hrs| -hrs | -hrs |

## Additional Libraries  
jQuery : Interaction with DOM elements

## Code Snippet


```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
