---
# Course title, summary, and position.
linktitle: An Example Course
summary: Learn how to use Academic's docs layout for publishing online courses, software documentation, and tutorials.
weight: 3

# Page metadata.
title: VBA - script for converting formulas in an excel workbook to values across all worksheets
date: "`r Sys.Date()`"
lastmod: "`r Sys.Date()`"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  vba:
    name: 2. Convert formulas to values across all worksheets
    weight: 3
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

<div class="a"> <p style="font-family:consolas"> <font color = blue> Sub </font color>  ConvertFormulasToValuesAllWorksheets()
<br>
<br> &nbsp;&nbsp;&nbsp;<font color = blue> Dim</font color> ws <font color=blue> As</font color>  Worksheet, rng  </font color> <font color=blue> As </font color> Range
<br> &nbsp;&nbsp;&nbsp; <font color=blue> For Each </font color> ws <font color=blue> In </font color> ActiveWorkbook.Worksheets
<br> &nbsp;&nbsp;&nbsp; <font color=blue> For Each </font color> rng <font color=blue> In </font color> ws.UsedRange
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> If </font color> rng.HasFormula <font color=blue> Then </font color>
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rng.Formula = rng.Value
<br> &nbsp;&nbsp;&nbsp; <font color=blue> End If </font color>
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> Next </font color> rng
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> Next </font color> ws
<br>
<br> <font color = blue> End Sub </font color> 

</p>

</div>
