---
# Course title, summary, and position.
linktitle: An Example Course
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 4

# Page metadata.
title: VBA - script for deleteing all hidden rows and columns and converting formulas in an excel workbook to values across all worksheets
date: "2018-09-09T00:00:00Z"
lastmod: "2018-09-09T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  vba:
    name: 3. Delete hidden rows, columns, and convert all worksheets to values
    weight: 4
---

Copy the following code into the VBA Environment in excel:

<br>

<html>

<style>
p.indent {
    text-indent: 30px;
}

div.a {
  line-height:130%;
}


</style>

<div class="a"> <p style="font-family:consolas"> <font color = blue> Sub </font color>  DeleteHidden_ConvertToValuesAllWorksheets()
<br>
<br> &nbsp;&nbsp;&nbsp;<font color = blue> Dim</font color> ws <font color=blue> As</font color>  Worksheet, rng  </font color> <font color=blue> As </font color> Range
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> For Each </font color> ws <font color=blue> In </font color> ActiveWorkbook.Worksheets
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color=blue> For Each </font color> rng <font color=blue> In </font color> ws.UsedRange
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> If </font color> rng.HasFormula <font color=blue> Then </font color>
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rng.Formula = rng.Value
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> End If </font color>
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> Next </font color> rng
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> Next </font color> ws
<br>
<br> <font color=green> ' delete all Hidden rows-columns in all sheets </font color>

<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> Dim </font color> r <font color=blue> As Long </font color>, c  <font color=blue> As Long </font color>, x  <font color=blue> As Long </font color>
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Application.ScreenUpdating = <font color=blue> False </font color>
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color=blue> For Each </font color> ws <font color=blue> In </font color> Sheets

<br> r = ws.Cells.Find(What:="*", SearchOrder:=xlByRows, SearchDirection:=xlPrevious).Row
<br> c = ws.Cells.Find(What:="*", SearchOrder:=xlByColumns, SearchDirection:=xlPrevious).Column

<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> For </font color> x = r <font color=blue> To </font color> 1 <font color=blue> Step </font color> -1
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> If </font color> ws.Rows(x).Hidden = <font color=blue> True </font color>  <font color=blue> Then </font color> ws.Rows(x).Delete
<br> <font color=blue> Next </font color>
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> For </font color> x = c <font color=blue> To </font color> 1 <font color=blue> Step </font color> -1
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color=blue> If </font color> ws.Columns(x).Hidden = <font color=blue> True </font color>  <font color=blue> Then </font color> ws.Columns(x).Delete

<br> <font color=blue> Next </font color>

<br> <font color=blue> Next </font color>

<br> Application.ScreenUpdating = <font color=blue> True </font color>
<br>
<br> <font color = blue> End Sub </font color> 
</p>

</div>
