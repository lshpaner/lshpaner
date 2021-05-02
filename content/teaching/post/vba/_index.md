---
# Course title, summary, and position.
linktitle: VBA Macros
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 1

# Page metadata.
title: Visual Basic for Applications (VBA)
date: '`r format(Sys.Date(), "%B %d, %Y")`'
lastmod: '`r format(Sys.Date(), "%B %d, %Y")`'
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  vba:
    name: VBA Macros Overview
    weight: 1
---

>Helpful macros for a variety of business applications

VBA is the back-end programming language of Microsoft Excel and other Microsoft Office programs.

It is important to ensure that our Microsoft Excel package has the Developer Tab added onto it.

<img src="vba1.png">

This step is <u><b>NOT</b></u> mandatory for entering the visual basic editor, but is necessary if you are recording macros to automate various processes.

If you are just writing code (i.e. coding a function), you can enter the VBA environment simply by pressing <b> ALT + F11 </b> on your keyboard

1. Click on “File”
2. Click on “Options”
3. Click on “Customize Ribbon”
4. Make Sure there is a check mark next to “Developer”

<img src="vba2.png">

We want to ensure that we are looking at the correct VBA Project. The project name is the name of the Excel File that you are working within. In this case, it is called: “VBA Tutorial.xlsx”:

<img src="vba3.png">

You may select any sheet listed on the left-hand pane if you wish to insert a VBA script only pertaining to that sheet. However, if you wish to operate the script on the entire excel workbook, then you should select "ThisWorkbook" from that respective pane. 

In any event, VBA script is inserted into what is called a "module." So, to insert a module, simply click on "Insert" followed by "Module" from the top menu.

<img src="vba4.png">

Notice the Module now appears in the pane on the left-hand side. Moreover, you may now begin to write sub procedures in the empty space provided in the window on the right-hand side. You may write your own script here or copy and paste those that have already been provided to you.

<img src="vba5.png">