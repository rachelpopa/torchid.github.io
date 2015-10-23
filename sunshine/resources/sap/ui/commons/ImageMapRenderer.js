/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global'],function(q){"use strict";var I={};I.render=function(i,o){var r=i;var a=sap.ui.getCore().getConfiguration().getAccessibility();var b=sap.ui.getCore().getLibraryResourceBundle("sap.ui.commons");r.write('<SPAN id="'+o.getId()+'-Descr" style="visibility: hidden; display: none; outline: none;">');r.writeEscaped(b.getText("IMAGEMAP_DSC"));r.write('</SPAN>');r.write("<map tabindex='-1'");r.writeControlData(o);r.writeAttributeEscaped("name",o.getName());if(o.getTooltip_AsString()){r.writeAttributeEscaped("title",o.getTooltip_AsString());}r.write(">");var A=o.getAreas();for(var c=0,l=A.length;c<l;c++){r.write("<area ");r.writeElementData(A[c]);r.write(' style="display: inline;"');if(a){r.writeAttribute("aria-describedby",o.getId()+"-Descr");}var s=A[c].getShape();var C=A[c].getCoords();var h=A[c].getHref();var d=A[c].getAlt();var t=A[c].getTooltip_AsString();if((s==="rect")||(s==="circle")||(s==="poly")){r.writeAttribute("shape",s);}else{r.writeAttribute("shape","default");}if(C){r.writeAttributeEscaped("coords",C);}if(h){r.writeAttributeEscaped("href",h);}if(d){r.writeAttributeEscaped("alt",d);}if(t){r.writeAttributeEscaped("title",t);}r.writeAttribute("tabIndex",0);r.write(">");}r.write("</map>");};return I;},true);
