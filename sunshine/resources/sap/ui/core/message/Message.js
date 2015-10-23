/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2015 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/base/Object','./MessageProcessor'],function(q,O,l,M){"use strict";var a=O.extend("sap.ui.core.message.Message",{constructor:function(p){O.apply(this,arguments);this.id=p.id?p.id:q.sap.uid();this.message=p.message;this.description=p.description;this.descriptionUrl=p.descriptionUrl;this.type=p.type;this.code=p.code;this.target=p.target;this.processor=p.processor;this.persistent=p.persistent||false;this.technical=p.technical||false;}});a.prototype.getId=function(){return this.id;};a.prototype.setMessage=function(m){this.message=m;};a.prototype.getMessage=function(){return this.message;};a.prototype.setDescription=function(d){this.description=d;};a.prototype.getDescription=function(){return this.description;};a.prototype.getDescriptionUrl=function(){return this.descriptionUrl;};a.prototype.setDescriptionUrl=function(d){this.descriptionUrl=d;};a.prototype.setType=function(t){if(t in sap.ui.core.MessageType){this.type=t;}else{q.sap.log.error("MessageType must be of type sap.ui.core.MessageType");}};a.prototype.getType=function(){return this.type;};a.prototype.setTarget=function(t){this.target=t;};a.prototype.getTarget=function(){return this.target;};a.prototype.setMessageProcessor=function(m){if(m instanceof M){this.processor=m;}else{q.sap.log.error("MessageProcessor must be an instance of sap.ui.core.message.MessageProcessor");}};a.prototype.getMessageProcessor=function(){return this.processor;};a.prototype.setCode=function(c){this.code=c;};a.prototype.getCode=function(){return this.code;};a.prototype.setPersistent=function(p){this.persistent=p;};a.prototype.getPersistent=function(){return this.persistent;};a.prototype.setTechnical=function(t){this.technical=t;};a.prototype.getTechnical=function(){return this.technical;};return a;});