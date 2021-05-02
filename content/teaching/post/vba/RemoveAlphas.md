---
# Course title, summary, and position.
linktitle: 
summary: 
weight: 2

# Page metadata.
title: VBA Script for removing alpha characters from a string of alphanumeric text
date: "Sys.Date()"
lastmod: "Sys.Date()"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  vba:
    name: 1. Remove alpha characters from alphanumeric text
    weight: 2
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


<div class="a"> <p style="font-family:consolas"> <font color = blue> Sub </font color>  RemoveAlphas()
<br>
<br> <font color = green> '' Remove alpha characters from a string </font color>
<br> &nbsp;&nbsp;&nbsp; <font color = blue> Dim </font color> intI <font color = blue> As Integer </font color> 
<br> &nbsp;&nbsp;&nbsp; Dim strNotNum <font color = blue> As String </font color>, strTemp <font color=blue> As String </font color>
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue>Set</font color> rngRR = Selection.SpecialCells(xlCellTypeConstants, _
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; xlTextValues)
<br> &nbsp;&nbsp;&nbsp; <font color = blue> For Each </font color> rngR <font color=blue> In </font color> rngRR
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; strTemp = ""
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> For </font color> intI = 1 <font color=blue>To</font color> Len(rngR.Value)
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue>If</font color> Mid(rngR.Value, intI, 1) <font color=blue>Like</font color> "[0-9]" <font color=blue> Then </font color>
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; strNotNum = Mid(rngR.Value, intI, 1)
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue>Else</font color>: strNotNum = " "
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> End If </font color>
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; strTemp = strTemp & strNotNum
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue> Next </font color> intI
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; rngR.Value = strTemp
<br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color=blue>Next</font color> rngR
<br>
<br> <font color=blue>End Sub</font color>
</p>

</div>
