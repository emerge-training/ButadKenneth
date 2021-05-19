let AppAPIClient = function() {
	JkWidgetWebJSONAPIClientWithGui.call(this);
	this.widgetDefaultErrorHandler = null;
};

AppAPIClient.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetWebJSONAPIClientWithGui.prototype);
AppAPIClient.prototype.constructor = AppAPIClient;
AppAPIClient.prototype._t = {
	"JkWebJsonJSONAPIClient" : true,
	"AppAPIClient" : true,
	"JkWidgetWebJSONAPIClientWithGui" : true
};
AppAPIClient.prototype._tobj = AppAPIClient;

AppAPIClient.NEW = function() {
	var v = new AppAPIClient;
	return v.CTOR_AppAPIClient();
};

AppAPIClient.prototype.CTOR_AppAPIClient = function() {
	this.widgetDefaultErrorHandler = null;
	if(JkWidgetWebJSONAPIClientWithGui.prototype.CTOR_JkWidgetWebJSONAPIClientWithGui.call(this) == null) {
		return null;
	}
	return this;
};

AppAPIClient.getInstance = function() {
	return AppAPIClient.instance;
};

AppAPIClient.create = function(context, parentWidget) {
	if(!(context != null)) {
		return null;
	}
	AppAPIClient.instance = AppAPIClient.NEW();
	AppAPIClient.instance.setApiUrl("http://ec2-13-228-75-243.ap-southeast-1.compute.amazonaws.com:30086");
	AppAPIClient.instance.setContext(context);
	if(parentWidget != null) {
		AppAPIClient.instance.setParentWidget(parentWidget);
	}
	return AppAPIClient.instance;
};

AppAPIClient.prototype.onError1 = function(error, callback) {
	if(!(callback != null)) {
		this.onDefaultErrorHandler(error);
		return;
	}
	JkWidgetWebJSONAPIClientWithGui.prototype.onError1.call(this, error, callback);
};

AppAPIClient.prototype.onDefaultErrorHandler = function(error) {
	var context = this.getContext();
	if(!(context != null)) {
		return;
	}
	if(!(error != null)) {
		return;
	}
	if(!(this.widgetDefaultErrorHandler != null)) {
		context.showErrorDialog((error.toString()), null);
		return;
	}
	this.widgetDefaultErrorHandler(error);
};

AppAPIClient.prototype.addTask = function(data, callback, errorCallback) {
	this.doPost("/task", data, callback, errorCallback);
};

AppAPIClient.prototype.updateTask = function(id, data, callback, errorCallback) {
	this.doPut("/task/" + (JkLangString.safeString(id)), data, callback, errorCallback);
};

AppAPIClient.prototype.deleteTask = function(id, callback, errorCallback) {
	this.doDelete("/task/" + (JkLangString.safeString(id)), callback, errorCallback);
};

AppAPIClient.prototype.getTasks = function(callback, errorCallback) {
	this.doGet("/tasks", callback, errorCallback);
};

AppAPIClient.prototype.getWidgetDefaultErrorHandler = function() {
	return this.widgetDefaultErrorHandler;
};

AppAPIClient.prototype.setWidgetDefaultErrorHandler = function(v) {
	this.widgetDefaultErrorHandler = v;
	return this;
};

AppAPIClient.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAPIClient"] === true;
};

AppAPIClient.instance = null;

let AppAddTaskTask = function() {
	JkJsonJSONObjectAdapter.call(this);
	this._id = null;
	this._name = null;
	this._description = null;
	this._timeStampAdded = null;
	this._timeStampLastUpdated = null;
};

AppAddTaskTask.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkJsonJSONObjectAdapter.prototype);
AppAddTaskTask.prototype.constructor = AppAddTaskTask;
AppAddTaskTask.prototype._t = {
	"AppAddTaskTask" : true,
	"JkJsonJSONObjectAdapter" : true,
	"JkJsonJSONObject" : true,
	"JkLangStringObject" : true
};
AppAddTaskTask.prototype._tobj = AppAddTaskTask;

AppAddTaskTask.NEW = function() {
	var v = new AppAddTaskTask;
	return v.CTOR_AppAddTaskTask();
};

AppAddTaskTask.prototype.CTOR_AppAddTaskTask = function() {
	this._timeStampLastUpdated = null;
	this._timeStampAdded = null;
	this._description = null;
	this._name = null;
	this._id = null;
	if(JkJsonJSONObjectAdapter.prototype.CTOR_JkJsonJSONObjectAdapter.call(this) == null) {
		return null;
	}
	return this;
};

AppAddTaskTask.prototype.setId = function(value) {
	this._id = value;
	return this;
};

AppAddTaskTask.prototype.getId = function() {
	return this._id;
};

AppAddTaskTask.prototype.setName = function(value) {
	this._name = value;
	return this;
};

AppAddTaskTask.prototype.getName = function() {
	return this._name;
};

AppAddTaskTask.prototype.setDescription = function(value) {
	this._description = value;
	return this;
};

AppAddTaskTask.prototype.getDescription = function() {
	return this._description;
};

AppAddTaskTask.prototype.setTimeStampAddedValue = function(value) {
	return this.setTimeStampAdded((JkLangLongInteger.asObject(value)));
};

AppAddTaskTask.prototype.getTimeStampAddedValue = function() {
	return JkLangLongInteger.asLong(this._timeStampAdded);
};

AppAddTaskTask.prototype.setTimeStampAdded = function(value) {
	this._timeStampAdded = value;
	return this;
};

AppAddTaskTask.prototype.getTimeStampAdded = function() {
	return this._timeStampAdded;
};

AppAddTaskTask.prototype.setTimeStampLastUpdatedValue = function(value) {
	return this.setTimeStampLastUpdated((JkLangLongInteger.asObject(value)));
};

AppAddTaskTask.prototype.getTimeStampLastUpdatedValue = function() {
	return JkLangLongInteger.asLong(this._timeStampLastUpdated);
};

AppAddTaskTask.prototype.setTimeStampLastUpdated = function(value) {
	this._timeStampLastUpdated = value;
	return this;
};

AppAddTaskTask.prototype.getTimeStampLastUpdated = function() {
	return this._timeStampLastUpdated;
};

AppAddTaskTask.prototype.toJsonObject = function() {
	var v = JkLangDynamicMap.NEW();
	if(this._id != null) {
		v.setObject("id", (this.asJsonValue(this._id)));
	}
	if(this._name != null) {
		v.setObject("name", (this.asJsonValue(this._name)));
	}
	if(this._description != null) {
		v.setObject("description", (this.asJsonValue(this._description)));
	}
	if(this._timeStampAdded != null) {
		v.setObject("timeStampAdded", (this.asJsonValue(this._timeStampAdded)));
	}
	if(this._timeStampLastUpdated != null) {
		v.setObject("timeStampLastUpdated", (this.asJsonValue(this._timeStampLastUpdated)));
	}
	return v;
};

AppAddTaskTask.prototype.fromJsonObject = function(o1) {
	var v = (function(o) {
		if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
			return o;
		}
		return null;
	}.bind(this))(o1);
	if(!(v != null)) {
		return false;
	}
	this._id = v.getString("id", null);
	this._name = v.getString("name", null);
	this._description = v.getString("description", null);
	if(v.get("timeStampAdded") != null) {
		this._timeStampAdded = JkLangLongInteger.asObject((v.getLongInteger("timeStampAdded", 0)));
	}
	if(v.get("timeStampLastUpdated") != null) {
		this._timeStampLastUpdated = JkLangLongInteger.asObject((v.getLongInteger("timeStampLastUpdated", 0)));
	}
	return true;
};

AppAddTaskTask.prototype.fromJsonString = function(o) {
	return this.fromJsonObject((JkJsonJSONParser.parse(o)));
};

AppAddTaskTask.prototype.toJsonString = function() {
	return JkJsonJSONEncoder.encode((this.toJsonObject()), true, false);
};

AppAddTaskTask.prototype.toString = function() {
	return this.toJsonString();
};

AppAddTaskTask.forJsonString = function(o) {
	var v = AppAddTaskTask.NEW();
	if(!v.fromJsonString(o)) {
		return null;
	}
	return v;
};

AppAddTaskTask.forJsonObject = function(o) {
	var v = AppAddTaskTask.NEW();
	if(!v.fromJsonObject(o)) {
		return null;
	}
	return v;
};

AppAddTaskTask.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddTaskTask"] === true;
};

let AppAddTask = function() {
	JkWidgetLayerWidget.call(this);
	this.vbox = null;
	this.id = null;
	this.name = null;
	this.description = null;
};

AppAddTask.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppAddTask.prototype.constructor = AppAddTask;
AppAddTask.prototype._t = {
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetWidgetWithLayout" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetContainerWidget" : true,
	"AppAddTask" : true
};
AppAddTask.prototype._tobj = AppAddTask;

AppAddTask.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppAddTask;
	return v.CTOR_AppAddTask_JkUiGuiApplicationContext(context);
};

AppAddTask.prototype.CTOR_AppAddTask_JkUiGuiApplicationContext = function(context) {
	this.description = null;
	this.name = null;
	this.id = null;
	this.vbox = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppAddTask.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	var addbtn = JkWidgetCommonButtonWidget.forText(this.context, "Add", (function() {
		var admin = AppAddTaskTask.NEW();
		admin.setId((this.id.getWidgetText()));
		admin.setName((this.name.getWidgetText()));
		admin.setDescription((this.description.getWidgetText()));
		AppAPIClient.getInstance().addTask((admin.toDynamicMap()), (function(res1) {
			this.context.showMessageDialog("Notice", "Added Succefully", null);
			this.id.setWidgetText("");
			this.name.setWidgetText("");
			this.description.setWidgetText("");
		}.bind(this)), (function(err1) {
			this.context.showMessageDialog("Notice", "Failed to Add New Task", null);
		}.bind(this)));
	}.bind(this)));
	var viewbtn = JkWidgetCommonButtonWidget.forText(this.context, "View Data", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppTaskList.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	addbtn.setWidgetBackgroundColor((JkGfxColor.instance("#008CBA")));
	addbtn.setWidgetTextColor((JkGfxColor.white()));
	addbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	viewbtn.setWidgetBackgroundColor((JkGfxColor.instance("#008CBA")));
	viewbtn.setWidgetTextColor((JkGfxColor.white()));
	viewbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.vbox.addWidget(addbtn);
	this.vbox.addWidget(viewbtn);
};

AppAddTask.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetCanvasWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget.setWidgetColor((JkGfxColor.instance("#f0f8ff")));
	this.addWidget(widget);
	var widget2 = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget3 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetMarginLeft(400);
	widget3.setWidgetMarginRight(400);
	this.vbox = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.vbox.setWidgetMargin((this.context.getHeightValue("5000um")));
	this.vbox.setWidgetSpacing((this.context.getHeightValue("2000um")));
	var widget4 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget4.setWidgetText("Add New Task");
	widget4.setWidgetTextColor((JkGfxColor.black()));
	widget4.setWidgetFontSize((this.context.getHeightValue("5mm")));
	widget4.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget4.setWidgetFontBold(true);
	this.vbox.addWidget(widget4);
	this.id = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.id.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.id.setWidgetPlaceholder("ID");
	this.id.setWidgetBackgroundColor((JkGfxColor.white()));
	this.id.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.id.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.id);
	this.name = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.name.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.name.setWidgetPlaceholder("Name");
	this.name.setWidgetBackgroundColor((JkGfxColor.white()));
	this.name.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.name.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.name);
	this.description = JkWidgetCommonTextInputWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.description.setWidgetType(JkWidgetCommonTextInputWidget.TYPE_NAME);
	this.description.setWidgetPlaceholder("Description");
	this.description.setWidgetBackgroundColor((JkGfxColor.white()));
	this.description.setWidgetFontSize((this.context.getHeightValue("3mm")));
	this.description.setWidgetPadding1((this.context.getHeightValue("2500um")));
	this.vbox.addWidget(this.description);
	widget3.addWidget1(this.vbox, 0.5, 0.5, true);
	widget2.addWidget(widget3);
	this.addWidget(widget2);
};

AppAddTask.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppAddTask"] === true;
};

let AppMainScreen = function() {
	JkWidgetScreenForWidget.call(this);
	this.navi = null;
};

AppMainScreen.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetScreenForWidget.prototype);
AppMainScreen.prototype.constructor = AppMainScreen;
AppMainScreen.prototype._t = {
	"JkUiScreen" : true,
	"JkUiScreenWithContext" : true,
	"AppMainScreen" : true,
	"JkWidgetScreenForWidget" : true
};
AppMainScreen.prototype._tobj = AppMainScreen;

AppMainScreen.NEW = function() {
	var v = new AppMainScreen;
	return v.CTOR_AppMainScreen();
};

AppMainScreen.prototype.CTOR_AppMainScreen = function() {
	this.navi = null;
	if(JkWidgetScreenForWidget.prototype.CTOR_JkWidgetScreenForWidget.call(this) == null) {
		return null;
	}
	return this;
};

AppMainScreen.prototype.initialize = function() {
	JkWidgetScreenForWidget.prototype.initialize.call(this);
	this.navi = JkWidgetCommonNavigationWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.navi.setWidgetEnableActionBar(false);
	this.setWidget(this.navi);
	AppAPIClient.create(this.context, this.navi);
	this.navi.pushWidget((AppAddTask.NEW_JkUiGuiApplicationContext(this.context)));
};

AppMainScreen.main = function(args) {
	var context = JkUiGuiApplicationContextForHTML.NEW();
	var resources = [];
	context.prepareResources(resources, (function() {
		var main = AppMainScreen.NEW();
		if(JkUiScreenWithContext.IS_INSTANCE && JkUiScreenWithContext.IS_INSTANCE(main)) {
			main.setContext(context);
		}
		main.initialize();
	}.bind(this)));
	return 0;
};

AppMainScreen.main();

AppMainScreen.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppMainScreen"] === true;
};

let AppTaskList = function() {
	JkWidgetLayerWidget.call(this);
	this.list = null;
	this.table = null;
};

AppTaskList.prototype = (function(o) { function F() {}; F.prototype = o; return(new F()); }) (JkWidgetLayerWidget.prototype);
AppTaskList.prototype.constructor = AppTaskList;
AppTaskList.prototype._t = {
	"AppTaskList" : true,
	"JkWidgetParentAwareWidget" : true,
	"JkWidgetHeightAwareWidget" : true,
	"JkWidgetWidget" : true,
	"JkWidgetLayerWidget" : true,
	"JkWidgetTitledWidget" : true,
	"JkWidgetContainerWidget" : true,
	"JkWidgetWidgetWithLayout" : true
};
AppTaskList.prototype._tobj = AppTaskList;

AppTaskList.NEW_JkUiGuiApplicationContext = function(context) {
	var v = new AppTaskList;
	return v.CTOR_AppTaskList_JkUiGuiApplicationContext(context);
};

AppTaskList.prototype.CTOR_AppTaskList_JkUiGuiApplicationContext = function(context) {
	this.table = null;
	this.list = null;
	if(JkWidgetLayerWidget.prototype.CTOR_JkWidgetLayerWidget_JkUiGuiApplicationContext.call(this, context) == null) {
		return null;
	}
	return this;
};

AppTaskList.prototype.initializeWidget = function() {
	JkWidgetLayerWidget.prototype.initializeWidget.call(this);
	this.table.addColumn("Name", "name", 2.0, 0);
	this.table.addColumn("Description", "description", 2.0, 0);
	this.table.addWidgetHeaderRow();
	AppAPIClient.getInstance().getTasks((function(response1) {
		var data = response1.getDynamicMap("data");
		if(!(data != null)) {
			return;
		}
		var records = data.getDynamicVector("records");
		if(!(records != null) || records.getSize() < 1) {
			this.table.addRow(["Nothing to view."], null, null);
		}
		else {
			var array = records.toVector();
			if(array != null) {
				var n = 0;
				var m = array.length;
				for(n = 0 ; n < m ; n++) {
					var record = (function(o) {
						if(JkLangDynamicMap.IS_INSTANCE && JkLangDynamicMap.IS_INSTANCE(o)) {
							return o;
						}
						return null;
					}.bind(this))(array[n]);
					if(record != null) {
						this.table.addRow([record.getString("name", null), record.getString("description", null)], null, null);
					}
				}
			}
		}
	}.bind(this)), (function(err1) {
		this.table.addRow(["Error"], null, null);
	}.bind(this)));
	var addbtn = JkWidgetCommonButtonWidget.forText(this.context, "New Task", (function() {
		JkWidgetCommonNavigationWidget.switchToContainer(this, (AppAddTask.NEW_JkUiGuiApplicationContext(this.context)));
	}.bind(this)));
	addbtn.setWidgetBackgroundColor((JkGfxColor.instance("#008CBA")));
	addbtn.setWidgetTextColor((JkGfxColor.white()));
	addbtn.setWidgetFontSize((this.context.getHeightValue("4mm")));
	this.list.addWidget(addbtn);
};

AppTaskList.prototype.getWidgetTitle = function() {
	return "Task list";
};

AppTaskList.prototype.createWidget = function() {
	JkWidgetLayerWidget.prototype.createWidget.call(this);
	var thisWidget = this;
	var widget = JkWidgetVerticalScrollerWidget.NEW_JkUiGuiApplicationContext(this.context);
	var widget2 = JkWidgetAlignWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget2.setWidgetMarginLeft(400);
	widget2.setWidgetMarginRight(400);
	this.list = JkWidgetVerticalBoxWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.list.setWidgetMargin((this.context.getHeightValue("5mm")));
	this.list.setWidgetSpacing((this.context.getHeightValue("5mm")));
	var widget3 = JkWidgetLabelWidget.NEW_JkUiGuiApplicationContext(this.context);
	widget3.setWidgetText("Task Data");
	widget3.setWidgetTextColor((JkGfxColor.black()));
	widget3.setWidgetFontSize((this.context.getHeightValue("5mm")));
	widget3.setWidgetTextAlign(JkWidgetLabelWidget.ALIGN_CENTER);
	widget3.setWidgetFontBold(true);
	this.list.addWidget(widget3);
	this.table = JkWidgetDatagridDataGridWidget.NEW_JkUiGuiApplicationContext(this.context);
	this.table.setWidgetCellPadding(2);
	this.list.addWidget(this.table);
	widget2.addWidget1(this.list, 0.5, 0.5, true);
	widget.addWidget(widget2);
	this.addWidget(widget);
};

AppTaskList.IS_INSTANCE = function(o) {
	return o != null && o._t != null && o._t["AppTaskList"] === true;
};
