cv={};cv.utils={};cv.model={};cv.view={};cv.commands={};/**
 * src/com/ibeam/cv/utils
 *
 * @class CodeStyleMap.js - Returns a code highlight css sytle name based on the supplied
 * file extension.
 *
 * @extends
 *
 * @author pebanfield
 *
 *
 */
cv.utils.CodeStyleMap = new Class({
	
	styleMap: [],
	resourceMap: [],
	
	initialize: function(){
		
		this.styleMap['scpt'] = {name:'applescript', resource:'shBrushAppleScript.js'};
		this.styleMap['as'] = {name:'actionscript3', resource:'shBrushAS3.js'};
		this.styleMap['sh'] = {name:'bash', resource:'shBrushBash.js'};
		this.styleMap['cfm'] = {name:'coldfusion', resource:'shBrushColdFusion.js'};
		this.styleMap['cpp'] = {name:'cpp', resource:'shBrushCpp.js'};
		this.styleMap['cs'] = {name:'c#', resource:'shBrushCSharp.js'};
		this.styleMap['css'] = {name:'css', resource:'shBrushCss.js'};
		this.styleMap['pas'] = {name:'delphi', resource:'shBrushDelphi.js'};
		this.styleMap['diff'] = {name:'diff', resource:'shBrushDiff.js'};
		this.styleMap['erl'] = {name:'erl', resource:'shBrushErlang.js'};
		this.styleMap['groovy'] = {name:'groovy', resource:'shBrushGroovy.js'};
		this.styleMap['java'] = {name:'java', resource:'shBrushJava.js'};
		this.styleMap['jfx'] = {name:'jfx', resource:'shBrushJavaFX.js'};
		this.styleMap['js'] = {name:'js', resource:'shBrushJScript.js'};
		this.styleMap['perl'] = {name:'pl', resource:'shBrushPerl.js'};
		this.styleMap['php'] = {name:'php', resource:'shBrushPhp.js'};
		this.styleMap['txt'] = {name:'text', resource:'shBrushPlain.js'};
		this.styleMap['py'] = {name:'py', resource:'shBrushPython.js'};
		this.styleMap['rb'] = {name:'ruby', resource:'shBrushRuby.js'};
		this.styleMap['scl'] = {name:'scala', resource:'shBrushScala.js'};
		this.styleMap['sql'] = {name:'sql', resource:'shBrushSql.js'};
		this.styleMap['vb'] = {name:'vb', resource:'shBrushVb.js'};
		this.styleMap['xml'] = {name:'xml', resource:'shBrushXml.js'};
		
	},
	
	getStyleByExtension: function(extension){
		
		try{
			return this.styleMap[extension].name;
		}catch(e){
			return 'text';
		}
		
	},
	
	getResourceByExtension: function(extension){
		
		try{
			return this.styleMap[extension].resource;
		}catch(e){
			return 'shBrushPlain.js';
		}
	}
	
});
	/**
 * src/com/ibeam/cv/utils
 *
 * @class DateParser.js - parses date string format from github.
 *
 * @extends
 *
 * @author pebanfield
 *
 *
 */
cv.utils.DateParser = new Class({});

cv.utils.DateParser.parse = function(dateStr){
    
	var dateArray = dateStr.split("T");
	
	var ymd = dateArray[0];
	var ymdArray = ymd.split("-");
	var year = ymdArray[0];
	var month = ymdArray[1];
	var day = ymdArray[2];
	
	var time = dateArray[1].split("-")[0];
	
	return {ymd: ymd, year: year, month: month, day: day, time: time};
};

cv.utils.DateParser.getGregorianDay = function(dateStr){
	
	var dateObj = cv.utils.DateParser.parse(dateStr);
	
	var date = new Date();
	date.setFullYear(Number(dateObj.year));
	date.setMonth(Number(dateObj.month-1));
	date.setDate(Number(dateObj.day));
	
	var week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
	
	return week[date.getDay()];
};

cv.utils.DateParser.getGregorianMonth = function(dateStr){
	
	var dateObj = cv.utils.DateParser.parse(dateStr);
	
	var date = new Date();
	date.setFullYear(Number(dateObj.year));
	date.setMonth(Number(dateObj.month-1));
	date.setDate(Number(dateObj.day));
	
	var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var index = Number(date.getMonth());

	return monthArray[index];
};

cv.utils.DateParser.dateIsDifferent = function(dateStr1, dateStr2){
	
	try{
	    var dateObj1 = cv.utils.DateParser.parse(dateStr1);
	    var dateObj2 = cv.utils.DateParser.parse(dateStr2);
	}catch(e){
		return true;
	}
	
	if(dateObj1.year != dateObj2.year){
		return true;
	}
	else if(dateObj1.month != dateObj2.month){
		return true;
	}
	else if(dateObj1.day != dateObj2.day){
		return true;
	}
	else{
		return false;
	}
};



/**
 * src/com/ibeam/cv/utils
 *
 * @class Logger.js -
 *
 * @extends
 *
 * @author pebanfield
 *
 * 11:42:07 PM2011
 *
 */
cv.utils.Logger = new Class({});

cv.utils.Logger.log = function(msg){
    if (window.console) {
        console.log(msg);
    }
};/**
 * src/com/ibeam/cv/utils
 *
 * @class Translate.js - coordinate manipulation util.
 *
 * @extends
 *
 * @author pebanfield
 *
 *
 */
cv.utils.Translate = new Class({});

cv.utils.Translate.localToGlobal = function(x, y){

   var stageX = Window.getSize().x/2;
   var stageY = Window.getSize().y/2;
    	
   x += stageX;
   y += stageY;
    	
   return {x: x, y: y};
    
};
    /**
 * src/com/ibeam/cv/model
 *
 * @class ConfigProxy.js - Stores configuration settings data. Seems pointless
 * to abstract this into a settings file as javascript requires no
 * compilation.
 *
 * @extends Proxy
 *
 * @author pebanfield
 *
 * 11:01:47 AM2011
 *
 */
cv.model.ConfigProxy = new Class({

    Extends: Proxy,

    //serviceDomain: "192.168.0.6:9089",
    serviceDomain: "localhost:9089",
    revisionsMethod: "/lichen/repodata/revisions",
    pageNum: null,
    pageSize: 7,
    viewportWidth: 1000,
    lineColor: "#000",
    requestObj: null,
    requestor: null,

    initialize: function(){
        this.parent(cv.model.ConfigProxy.NAME);
    }

});

cv.model.ConfigProxy.NAME = "ConfigProxy";




/**
 * src/com/ibeam/cv/model
 *
 * @class Entry.js -
 *
 * @extends
 *
 * @author pebanfield
 *
 * 4:44:00 PM2011
 *
 */
cv.model.Entry = new Class({

    revision: null,
    path: null,
    name: null,
    size: null,
    significance: null,
    status: null,
    author: null,
    type: null,
    kind: null,
    uuid: null,
    patch: null,
    raw_url: null,
    commit_date: null,
    commit_time: null,
    commit_revision: null,

    //SVN specific?
    sizeHistory: null,
    authorHistory: null,
    pathHistory: null,
    updateTimeHistory: null,
    revisionHistory: null,
    uuidHistory: null

});


/**
 * src/com/ibeam/cv/model
 *
 * @class RepoDataProxy.js - Stores revision history data accessed
 *  via the SVN JSON service.
 *
 * @extends Proxy
 *
 * @author pebanfield
 *
 * 11:01:47 AM2011
 *
 */
cv.model.RepoDataProxy = new Class({

    Extends: Proxy,
    Implements: Events,

    LARGE_PAGE_LENGTH : 10,
    SMALL_PAGE_LENGTH : 7,
    
    cvsType: null,
    activeRevisionIndex: -1,
    visualPageTotal: 0,
    truePageTotal: 0,
    currentPage: null,
    currentPageNum: 1,
    currentPageSize: 10,
    activePageIndex: -1,
    _cursorIndex: 0,
    repoLocation: "file:///Users/pebanfield/SVNrep/ChangeView",
    currentRepoPath: null,
    codeStyleMap: null,
    viewportWidth: 0,
    
    _revisions: [],
    _glyphs: [],
    _authors: [],
    _activeRevision: null,
    _repoRootPath: null,
    _colors: null,
    _colorIndex: -1,
    _currentAuthor: "",
    _containsLatest: false,
    _containsFirst: false,

    initialize: function(){

        this.parent(cv.model.RepoDataProxy.NAME);
        this.codeStyleMap = new cv.utils.CodeStyleMap();
    },

    getActiveRevision: function(){

        return this._activeRevision;
    },

    setActiveRevision: function(index){

        this.activeRevisionIndex = index;
        this._activeRevision = this.currentPage[this.activeRevisionIndex];
        this.fireEvent(cv.model.EventTypes.ACTIVE_REV_CHANGE, this._activeRevision);
    },

    setRepoRootPath: function(path){

        this._repoRootPath = path;
        this.fireEvent(cv.model.EventTypes.REPO_TITLE_CHANGE, this._repoRootPath);
    },
    
    setColors: function(colors){
    	
    	this._colors = colors;
    },

    getRepoPath: function(){

        return this._repoRootPath;
    },

    addPage: function(revisions, isLatest, isFirst){

    	cv.utils.Logger.log("ADD PAGE");
    	cv.utils.Logger.log("revisions.length = " + revisions.length);
    	cv.utils.Logger.log("isLatest = " + isLatest);
    	cv.utils.Logger.log("isFirst = " + isFirst);
    	//generate glyphs
    	revisions = this._addRevisionGlyphs(revisions);
    	//add page to total revisions
    	this._revisions = this._revisions.concat(revisions);
    	//calculate current page width
    	this.visualPageTotal = this._revisions.length / this.LARGE_PAGE_LENGTH;
    	this.truePageTotal = this._revisions.length / this.LARGE_PAGE_LENGTH;
    	
    	//determine cursor position based on page width
    	if(this._revisions.length < this.currentPageSize){
    		this._cursorIndex=0;
    	}else{
    		this._cursorIndex = this._revisions.length - (this.currentPageSize * this.currentPageNum);
    	}
        this.currentPage = this._getCurrentPage();
    	
        //reset revision index based on page width
    	if(this.activeRevisionIndex == -1){
    		
    		if(this._revisions.length < this.currentPageSize){
    			this.activeRevisionIndex = this._revisions.length-1;
    		}else{
    			this.activeRevisionIndex = this.currentPageSize-1;
    		}
    		
    		this.setActiveRevision(this.activeRevisionIndex);
    		this.facade.sendNotification(cv.model.CommandTypes.APP_READY);
    	}
    	
    	this.fireEvent(cv.model.EventTypes.REVISIONS_LOADED);
    	
    	//check state of paging - first, latest, or mid
    	this._containsLatest = isLatest;
    	this._containsFirst = isFirst;
    	if(this._containsLatest){
    		this.facade.sendNotification(cv.model.NotificationTypes.PAGE_CHANGED, "latest");
    	}else if(this._containsFirst){
    		this.facade.sendNotification(cv.model.NotificationTypes.PAGE_CHANGED, "first");
    	}else{
    		this.facade.sendNotification(cv.model.NotificationTypes.PAGE_CHANGED, "mid");
    	}
    	
    	//TODO - fix this
    	this.activePageIndex++;
    	
    },
    
    //moving toward the most recent commit in repo
    nextPage: function(){
    	
    	cv.utils.Logger.log("nextPage");
    	cv.utils.Logger.log("this.activePageIndex = " + this.activePageIndex);
    	cv.utils.Logger.log("this.truePageTotal = " + this.truePageTotal);
    	if(this.activePageIndex == 1 && this._containsLatest){ 
    			
    		this.facade.sendNotification(cv.model.NotificationTypes.PAGE_CHANGED, "latest");
    	}else{
    		this.facade.sendNotification(cv.model.NotificationTypes.PAGE_CHANGED, "mid");
    	}
    	this.activePageIndex--;	
    	this._cursorIndex = 0;
    	this._currentPage = this._getCurrentPage();	
    	
    },
    
    //moving toward the first commit in repo
    previousPage: function(){
    	
    	cv.utils.Logger.log("previousPage");
    	cv.utils.Logger.log("this.activePageIndex = " + this.activePageIndex);
    	cv.utils.Logger.log("this.truePageTotal = " + this.truePageTotal);
    	
    	if(this.activePageIndex < this.truePageTotal-1){
    	    
    	    this._cursorIndex = this.currentPageSize-1;
    	    this.currentPage = this._getCurrentPage();
    	    this.activePageIndex++;
    	    
    	} 
    	else if(this.activePageIndex == this.truePageTotal-1){
    		
			if(!this._containsFirst){
				
				mainView.facade.sendNotification(cv.model.CommandTypes.REQUEST_REV_DATA, 
                                                 {requestor: null, pageNum: (this.truePageTotal + 1)});
			}else{
				this.facade.sendNotification(cv.model.NotificationTypes.PAGE_CHANGED, "first");
			}
    			
    	}
    },
    
    //TODO - page size should be dynamic rather than statically fixed at large and small sizes
    resetPageSize: function(size){
    	
    	if(this.currentPageSize == this.LARGE_PAGE_LENGTH && this.activeRevisionIndex > 6){
    		this._cursorIndex += 3;
    	}else if(this.currentPageSize == this.LARGE_PAGE_LENGTH && this.activeRevisionIndex < 4){
    		this._cursorIndex = 0;
    		this.currentPageSize = size;
    	}else if(this.currentPageSize == this.SMALL_PAGE_LENGTH){
    		this._cursorIndex = 0;
    		this.currentPageSize = size;
    	}
    	this.currentPage = this._getCurrentPage();
    	this.currentPageSize = size;
    	this.activeRevisionIndex = this._getNewActiveIndex();
    },
    
    _getCurrentPage: function(){

    	var page = [];
    	for(var i=this._cursorIndex; i<this._cursorIndex+this.currentPageSize; i++){
    		
    		if(i > this._revisions.length-1)break;
    		page.push(this._revisions[i]);
    	}
        return page;
    },
    
    _addRevisionGlyphs: function(revisions){

        for(var i=0; i<revisions.length; i++){
        	
        	    //add the author color
        	    if(!this._authors[revisions[i].author]){
        	    	
        	    	if(this._colorIndex == this._colors.length-1){
     	    		    this._colorIndex = 0;
     	    	    }else{
     	    		    this._colorIndex++;
     	    	    }
        	    	this._authors[revisions[i].author] = {stroke: this._colors[this._colorIndex].stroke,
        	    			                              fill: this._colors[this._colorIndex].fill};
        	    }
        	    
        	    revisions[i].stroke = this._authors[revisions[i].author].stroke;
    	    	revisions[i].fill = this._authors[revisions[i].author].fill;
	            var revGlyph =
	                new cv.view.RevisionGlyph(revisions[i], this.viewportWidth);
	            revisions[i].glyph = revGlyph;
        }

        return revisions;
    },
   
    _getNewActiveIndex: function(){
    	
    	for(var i=0; i<this.currentPage.length; i++){
    		if(this._activeRevision == this.currentPage[i]){
    			return i;
    		}
    	}
    	return this.currentPage.length-1;
    },
    
    getCurrentEntryByName: function(name){
    	
    	for(var i=0; i<this._activeRevision.entries.length; i++){
    		
    		var entry = this._activeRevision.entries[i];
    		if(name == entry.name){
    			return entry;
    			break;
    		}
    	}
    	return null;
    }

});

cv.model.RepoDataProxy.entriesAreSimilar = function(entry1, entry2) {
	
	//TODO - play with this  - split the path and look for matching packages
	if(entry1.path == entry2.path)
	{
		return true;
	}
	else
	{
		return false;
	}
};

cv.model.RepoDataProxy.NAME = "RepoDataProxy";
cv.model.RepoDataProxy.NUM_GLYPHS_TO_SHOW = 7;

/**
 * src/com/ibeam/cv/model
 *
 * @class Revision.js -
 *
 *
 * @author pebanfield
 *
 * 4:48:54 PM2011
 *
 */
cv.model.Revision = new Class({

    vcs: null,
    identifier: null,
    annotation: null,
    dateStr: null,
    commitTime: null,
    author: null,
    stroke: null,
    fill: null,
    entries: null,
    treeURL: null,
    glyph: null,
});

/**
 * src/com/ibeam/cv/model
 *
 * @class ServiceRequestConfig.js - defines required request
 * parameters for NetRequestor.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 4:35:28 PM2011
 *
 */

cv.model.ServiceRequestConfig = new Class({

    type: null,
    domain: null,
    method: null,
    repoPath: null,
    pageNum: null,
    pageSize: null,
    args: null,
    isSecure: null,
    
    getArgs: function(){
    	
    	return "repoType=" + this.type + 
    		   "&repoPath="+ this.repoPath + 
    		   "&pageNum=" + this.pageNum +
    		   "&pageSize=" + this.pageSize;
        
    }

});

cv.model.AnalogPositions = new Object();

cv.model.AnalogPositions.ONE_O_CLOCK = 300 * Math.PI/180;
cv.model.AnalogPositions.TWO_O_CLOCK = 330 * Math.PI/180;
cv.model.AnalogPositions.THREE_O_CLOCK = 360 * Math.PI/180;
cv.model.AnalogPositions.FOUR_O_CLOCK = 30 * Math.PI/180;
cv.model.AnalogPositions.FIVE_O_CLOCK = 60 * Math.PI/180;
cv.model.AnalogPositions.SIX_O_CLOCK = 90 * Math.PI/180;
cv.model.AnalogPositions.SEVEN_O_CLOCK = 120 * Math.PI/180;
cv.model.AnalogPositions.EIGHT_O_CLOCK = 150 * Math.PI/180;
cv.model.AnalogPositions.NINE_O_CLOCK = 180 * Math.PI/180;
cv.model.AnalogPositions.TEN_O_CLOCK = 210 * Math.PI/180;
cv.model.AnalogPositions.ELEVEN_O_CLOCK = 240 * Math.PI/180;
cv.model.AnalogPositions.TWELVE_O_CLOCK = 270 * Math.PI/180;



/**
 * src/com/ibeam/cv/model/constants
 *
 * @class CommandTypes.js -
 *
 * @extends
 *
 * @author pebanfield
 *
 * 10:16:15 PM2011
 *
 */

cv.model.CommandTypes = new Object();

cv.model.CommandTypes.INITIALIZE_APP = "initializeApp";
cv.model.CommandTypes.REQUEST_REV_DATA = "requestRevData";
cv.model.CommandTypes.REQUEST_ENTRY_DATA = "requestEntryData";
cv.model.CommandTypes.APP_READY = "appReady";
cv.model.CommandTypes.AUTO_LOAD_CODE_STYLE = "autoLoadCodeStyle";


/**
 * src/com/ibeam/cv/model/constants
 *
 * @class EntityTypes.js -
 *
 * @extends
 *
 * @author pebanfield
 *
 * 4:25:38 PM2011
 *
 */
cv.model.EntityTypes = new Object();

cv.model.EntityTypes.FILE = "file";
cv.model.EntityTypes.DIRECTORY = "directory";/**
 * src/com/ibeam/cv/model/constants
 *
 * @class EntryTypes.js -
 *
 * @extends
 *
 * @author pebanfield
 *
 * 4:34:53 PM2011
 *
 */

cv.model.EntryTypes = new Object();

cv.model.EntryTypes.ADDED = "added";
cv.model.EntryTypes.MODIFIED = "modified";
cv.model.EntryTypes.DELETED = "deleted";/**
 * src/com/ibeam/cv/model/constants
 *
 * @class EventTypes.js -
 *
 * @extends
 *
 * @author pebanfield
 *
 * 3:43:22 PM2011
 *
 */
cv.model.EventTypes = new Object();

cv.model.EventTypes.REPO_TITLE_CHANGE = "repoTitleChange";
cv.model.EventTypes.ACTIVE_REV_CHANGE = "activeRevChange";
cv.model.EventTypes.REVISIONS_LOADED = "revisionsLoaded";
cv.model.EventTypes.CAROUSEL_SLIDE_COMPLETE = "carouselSlideComplete";
cv.model.EventTypes.NEXT_REVISION = "nextRevision";
cv.model.EventTypes.PREVIOUS_REVISION = "previousRevision";
cv.model.EventTypes.NEXT_PAGE = "nextPage";
cv.model.EventTypes.PREVIOUS_PAGE = "previousPage";
cv.model.EventTypes.SELECT_BY_INDEX = "selectByIndex";
cv.model.EventTypes.SLIDE_LEFT = "eventTypes.slideLeft";
cv.model.EventTypes.SLIDE_RIGHT = "eventTypes.slideRight";
cv.model.EventTypes.REVISION_RENDER_COMPLETE = "eventTypes.revisionRenderComplete";
cv.model.EventTypes.ENTRY_SELECTED = "eventTypes.entrySelected";
cv.model.EventTypes.WINDOW_CLOSE = "eventTypes.windowClose";
cv.model.EventTypes.RESIZE = "eventTypes.resize";
cv.model.EventTypes.REQUEST_STAGE_UPDATE = "eventTypes.requestStageUpdate";

/**
 * src/com/ibeam/cv/model/constants
 *
 * @class NotificationTypes.js -
 *
 * @extends
 *
 * @author pebanfield
 *
 * 3:43:22 PM2011
 *
 */
cv.model.NotificationTypes = new Object();
cv.model.NotificationTypes.CAROUSEL_SLIDE_COMPLETE = "carousel_slide_complete";
cv.model.NotificationTypes.SLIDE_LEFT = "notificationTypes.slideLeft";
cv.model.NotificationTypes.SLIDE_RIGHT = "notificationTypes.slideRight";
cv.model.NotificationTypes.PREVIOUS_REVISION = "notificationTypes.previousRevision";
cv.model.NotificationTypes.NEXT_REVISION = "notificationTypes.nextRevision";
cv.model.NotificationTypes.NEXT_PAGE = "notificationTypes.nextPage";
cv.model.NotificationTypes.PREVIOUS_PAGE = "notificationTypes.previousPage";
cv.model.NotificationTypes.PAGE_CHANGED = "notificationTypes.pageChanged";
cv.model.NotificationTypes.SELECT_BY_INDEX = "notificationTypes.selectByIndex";
cv.model.NotificationTypes.CHANGE_INDEX = "notificationTypes.changeIndex";
cv.model.NotificationTypes.CHANGE_RANGE_INDEX = "notificationTypes.changeRangeIndex";
cv.model.NotificationTypes.INDEX_CHANGED = "notificationTypes.indexChanged";
cv.model.NotificationTypes.IMMEDIATE_INDEX_UPDATE = "notificationTypes.immediateNextUpdate";
cv.model.NotificationTypes.GLYPH_RENDERING_COMPLETE = "glyphRenderingComplete";
cv.model.NotificationTypes.SHOW_ENTRY_INFO = "showEntryInfo";
cv.model.NotificationTypes.SET_MODAL_WINDOW_ACTIVE = "setModalWindowActive";
cv.model.NotificationTypes.RESIZE = "notifications.resize";
cv.model.NotificationTypes.REQUEST_STAGE_UPDATE = "requestStageUpdate";/**
 * src/com/ibeam/cv/model/constants
 *
 * @class VCSTypes.js - supported version control types.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 3:43:22 PM2011
 *
 */
cv.model.VCSTypes = new Object();

cv.model.VCSTypes.SVN = "svnVCStype";
cv.model.VCSTypes.GIT = "gitVCStype";
/**
 * src/com/ibeam/cv/model/utils
 *
 * @class DataParser.js -
 *
 * @extends
 *
 * @author pebanfield
 *
 * 3:26:50 PM2011
 *
 */
cv.model.DataParser = new Class({

});

cv.model.DataParser.parseRevisions = function(revData){

    var revisions = [];
    for(var i=0; i<revData.revisions.length; i++) {

        var revObj = revData.revisions[i];
        var revision = new cv.model.Revision();
        revision.vcs = cv.model.VCSTypes.GIT;
        revision.identifier = revObj.revision;
        revision.annotation = revObj.annotation;
        revision.dateStr = revObj.date;
        revision.commitTime = revObj.commitTime;
        revision.author = revObj.author;
        revision.entries = [];
        
        //handle merges with no commits
        if(revObj.entries.length == 0){
        	var entry = new cv.model.Entry();
            entry.size = 0;
            entry.significance = 0;
            entry.name = "Git merge";
            revision.entries.push(entry);
        }

        for(var j=0; j<revObj.entries.length; j++) {

            var entryObj = revObj.entries[j];
            var entry = new cv.model.Entry();
            entry.revision = entryObj.revision;
            entry.path = entryObj.path;
            entry.name = entryObj.name;
            entry.size = entryObj.size;
            entry.significance = entryObj.significance;
            entry.status = entryObj.status;
            entry.author = entryObj.author;
            entry.type = entryObj.type;
            entry.kind = entryObj.kind;
            entry.uuid = entryObj.uuid;
            entry.patch = entryObj.patch;
            entry.raw_url = entryObj.raw_url;
            entry.commit_date = entryObj.commit_date;
            entry.commit_time = entryObj.commit_time;
            entry.commit_revision = entryObj.commit_revision;
            entry.sizeHistory = entryObj.sizeHistory;
            entry.authorHistory = entryObj.authorHistory;
            entry.pathHistory = entryObj.pathHistory;
            entry.updateTimeHistory = entryObj.updateTimeHistory;
            entry.revisionHistory = entryObj.revisionHistory;
            entry.uuidHistory = entryObj.uuidHistory;
            revision.entries.push(entry);
        }

        revisions.push(revision);
    }
    revisions.reverse();
    return revisions;
};
/**
 * src/com/ibeam/gitview/model/utils
 *
 * @class GitDataParser.js - Parses data from Git for conversion into
 * client model objects.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 3:26:50 PM2011
 *
 */
cv.model.GitDataParser = new Class({

});

cv.model.GitDataParser.parseCommits = function(commitData){

    cv.utils.Logger.log("commitData " + commitData.length);
    var revisions = [];
    for(var i=0; i<commitData.length; i++) {

        var revision = new cv.model.Revision();
        revision.vcs = cv.model.VCSTypes.GIT;
        revision.author = commitData[i].author.name;
        revision.dateStr = commitData[i].committer.date;
        revision.identifier = commitData[i].sha;
        revision.annotation = commitData[i].message;
        revision.treeURL = commitData[i].tree.url;
        revisions.push(revision);
    }
    return revisions;
};

cv.model.GitDataParser.parseTrees = function(treeData){

    var entries = [];
    for(var i=0; i<treeData.tree.length; i++) {

        var entry = new cv.model.Entry();
        entry.path = treeData.tree[i].path;
        entry.kind =
            treeData.tree[i].type = "blob" ? cv.model.EntityTypes.FILE : cv.model.EntityTypes.DIRECTORY;
        entry.size = treeData.tree[i].size;
        entries.push(entry);
    }
    return entries;
};
/**
 * src/com/ibeam/cv/model/utils
 *
 * @class ServiceRequestor.js -
 *
 *
 * @author pebanfield
 *
 * 1:37:35 AM2011
 *
 */
cv.model.ServiceRequestor = new Class({

	configObj: null,
    type: null,
    domain: null,
    repoPath: null,
    httpMethod: null,
    args: null,
    pageNum: null,
    successHandler: null,
    failureHandler: null,
    _reqURL: null,
    _protocol: null,

     initialize: function(configObj){

    	 this.configObj = configObj;
         this.type = configObj.type;
         this.domain = configObj.domain;
         this.method = configObj.method;
         this.pageNum = configObj.pageNum;
         this.args = configObj.getArgs();
         this.generateUrl();
     },
     
     setPageNum: function(num){
    	 
    	 this.configObj.pageNum = num;
    	 this.args = this.configObj.getArgs();
     },
     
     generateUrl: function(){
    	 
         this.configObj.isSecure ? this._protocol = "https://" : this._protocol = "http://";
         
         /*
         if(this.configObj.fullPath){
        	 this._reqURL = this.configObj.fullPath;
         }else{
        	 this._reqURL =
                 this._protocol + this.domain + this.method;
         }
         */
         this._reqURL = this.method;
         if(this.args) this._reqURL += "?" + this.args;
     },

     send: function(){

    	 cv.utils.Logger.log("Sending service url = " + this._reqURL);
         var errorMsg = "Request Handlers must be assigned before calling send.";

         if(!this.successHandler || !this.failureHandler){
             throw new Error(errorMsg);
         }
         var requestOptions = {url: this._reqURL,
                               onSuccess: this.successHandler,
                               onFailure: this.failureHandler,
                               method: this.httpMethod};

         var jsonRequest =
                new Request.JSON(requestOptions).send();
     },

     setMethod: function(method){
         this.httpMethod = method;
     }

});

/**
 * src/com/ibeam/cv/view
 *
 * @class MainView.js - Parent viewComponent class for application.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 11:04:22 AM2011
 *
 */
cv.view.MainView = new Class({

	Implements: Events,
	
	_BIG_COMMIT_LENGTH: 6,
	_MAX_LICHEN_RADIUS: 40,
	
	_LINK_PADDING_X: -2,
	_LINK_PADDING_Y: -2,
	
    element: null,
    facade: null,
    
    _stage: null,
    _canvas: null,
    _swipeZone: null,
    _background: null,
    _startX: null,
    _currentLinks: [],
    _currentRevGlyph: null,
    lineColor: null,

    initialize: function(el, lineColor)
    {
        this.element = new Element(el, lineColor);
        this.lineColor = lineColor;
        
        this._swipeZone = document.getElementById("swipeZone");
        this._addEventListeners();
        
    	this._canvas = document.getElementById("revGraph");
    	
    	this._canvas.width = Window.getSize().x;
        this._canvas.height = Window.getSize().y;
        this._stage = new Stage(this._canvas);
        this._stage.enableMouseOver(0);
        
        this._positionLoader();
        
        window.addEvent('resize', this._onResizeHandler.bind(this));
        if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
            window.addEvent('focus', this._onFocus.bind(this));
        }
        //this._stage.onMouseUp = function(evt){console.log("mouseup");}; 
        //not working
        //this._stage.onClick = function(evt){console.log("click");}; 
        
        Ticker.addListener(this);
        
        this.facade = cv.ApplicationFacade.getInstance();
        this.facade.startup(this);
    },

    visible: function(isVisible) {
    	
    	if(isVisible){
    		$('root').setStyle('visibility', 'visible');
    	}else{
    		$('root').setStyle('visibility', 'hidden');
    	}
    	
    },
    
    showLoading: function(visible){
    	
    	if(visible){
    		$('loading').setStyle('visibility', 'visible');
    	}else{
    		$('loading').setStyle('visibility', 'hidden');
    	}
    	
    },
    
    displayLinks: function(revision){
    	
    	this._currentRevGlyph = revision.glyph;
    	var linkLayer = $("linkLayer");
    	var metadata = this._currentRevGlyph.getMetadata();
    	
    	for(var i=0; i<metadata.length; i++){
    		
    		var link = this._createLink(metadata[i]);
    		this._currentLinks.push({link: link, data: metadata[i]});
        	link = this._positionLink(metadata[i].radius, metadata[i].x, metadata[i].y, link);
        	linkLayer.adopt(link);
    	}
    	
    },
    
    clearLinks: function(){
    	
    	if(this._currentLinks.length < 1)return;
    	
    	for(var i=0; i<this._currentLinks.length; i++){
    		
    		this._currentLinks[i].link.dispose();
    		this._currentLinks[i].link.destroy();
    	}
    },
    
    _createLink: function(data){
    	
    	var styleName;
    	if(this._lineColor == "#000"){
    		styleName = 'entryLink';
    	}else{
    		styleName = 'darkEntryLink';
    	}
    	var scope = this;
    	var link = new Element('a', {
    	    href: '#',
    	    'class': styleName,
    	    html: data.name + " <span style='font-size:8px'>&#62;&#62;</span>",
    	    events: {
    	        click: function(target){
    	        	
    	        	scope.fireEvent(cv.model.EventTypes.ENTRY_SELECTED, data);
    	        }
    	    }
    	});
    	return link;
    },
    
    _positionLink: function(metaRadius, metaX, metaY, link){
    	
    	var stagePoint = cv.utils.Translate.localToGlobal(metaX, metaY);
    	
    	var linkY;
    	var linkX;
    	//keep text from overlapping on larger entries
    	if(metaRadius > this._MAX_LICHEN_RADIUS*0.5){
    		linkY = stagePoint.y + 6;
        	linkX = stagePoint.x + 6;
    	}else{
    		linkY = stagePoint.y + metaRadius + this._LINK_PADDING_Y;
        	linkX = stagePoint.x + metaRadius + this._LINK_PADDING_X;
    	}
    	
    	
    	link.setStyles({left: linkX, top: linkY});
    	return link;
    },
    
    _positionLoader: function(){
    	
    	$('loading').setStyle("top", Window.getSize().y/2 - 15);
        $('loading').setStyle("left", Window.getSize().x/2 - 50);
    },
    
    toElement: function() {
        return this.element;
    },
    
    setStage: function(stage){
    	this._stage = stage;
    },
    
    getStage: function(){
    	return this._stage;
    },
    
    tick: function() {
    	
    	this._stage.update();
    },
    
    _addEventListeners: function(){
    	
    	this._swipeZone.addEventListener("touchmove", 
                this._onTouchMove.bind(this), 
                true);
    	this._swipeZone.addEventListener("touchstart", 
                this._onTouchStart.bind(this), 
                true);
    	this._swipeZone.addEventListener("touchend", 
                this._onTouchEnd.bind(this), 
                true);
    	
    },
    
    _onTouchMove: function(evtObj){
    	
    	evtObj.preventDefault();
    	if (event.targetTouches.length > 0 & event.changedTouches.length == 1) {
    	    
    	    if(evtObj.touches.item(0).pageX > this._startX){
    		    this.fireEvent(cv.model.EventTypes.SLIDE_RIGHT);
    	    }else if(evtObj.touches.item(0).pageX < this._startX){
    		    this.fireEvent(cv.model.EventTypes.SLIDE_LEFT);
    	    }
    	    this._startX = -1;
    	}
    }, 
    
    _onTouchStart: /**
     * @param evtObj
     */
    function(evtObj){
    	
    	evtObj.preventDefault();
    	
    	this._startX = evtObj.touches.item(0).pageX;
    }, 
    
    _onTouchEnd: function(){
    	
    },
    
    _onResizeHandler: function(){
		
        for(var i=0; i<this._currentLinks.length; i++){
    		
        	var link = this._currentLinks[i].link;
        	var data = this._currentLinks[i].data;
        	this._positionLink(data.radius, data.x, data.y, link);

    	}
        this._positionLoader();
        this.fireEvent(cv.model.EventTypes.RESIZE);
	},
	
	_onFocus: function(){
		
		//cv.utils.Logger.log("focus");
		//fixes screen draw/blur bug in chrome where elements disappear
		if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
			//window.location.reload();
		}
	
	}
});





/**
 * src/com/ibeam/cv/view/components
 *
 * @class Bullseye.js - A background class providing visual continuity
 * for revision glyph groupings.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 10:47:55 PM2011
 *
 */
cv.view.Bullseye = new Class({

    diameter: null,
    _stage: null,
    _container: null,
    _stroke: null,

    _winWidth: function(){ return Window.getSize().x;},
    _winHeight: function(){ return Window.getSize().y;},

    initialize: function(stage, diameter, stroke){

    	this._stage = stage;
        this.diameter = diameter;
        this._stroke = stroke;
        this._draw();

        window.addEvent('resize', this._onResizeHandler.bind(this));
    },

    _onResizeHandler: function(){

       // Logger.log("RESIZE " + this.$canvas);
       this._stage.canvas.width = Window.getSize().x;
       this._stage.canvas.height = Window.getSize().y;
       for(var j=0; j<this._container.getNumChildren(); j++){
    	   this._container.getChildAt(j).graphics.clear();
    	   this._container.removeChildAt(j);
       }
       this._stage.removeChild(this._container);
       this._draw();
    },
    
    _draw: function() {

    	this._container = new Container();
        for(var i=0; i<cv.view.Bullseye.NUMBER_OF_CIRCLES; i++){

            var instanceRadius =
                (this.diameter*cv.view.Bullseye.DIAMETER_MULTIPLE)*(i+1);

            var circleX = this._winWidth()/2;
            var circleY = this._winHeight()/2;
            var circle = new Shape();
            circle.graphics.setStrokeStyle(0.2);
            circle.graphics.beginStroke(this._stroke);
            circle.graphics.drawCircle(0,0,instanceRadius);
            circle.alpha = 1;
            circle.x = circleX;
            circle.y = circleY;
            circle.compositeOperation = "lighter";
            
            this._container.addChild(circle); 
        }
        
        this._stage.addChild(this._container);
        this._stage.update();
    }
});

cv.view.Bullseye.NUMBER_OF_CIRCLES = 9;
cv.view.Bullseye.DIAMETER_MULTIPLE = 0.1;


/**
 * src/com/ibeam/cv/view/components
 *
 * @class EntryInfoPanel.js - View component providing Slick
 * access to revision info panel page elements.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 8:56:20 PM2011
 *
 */
cv.view.EntryInfoPanel = new Class({

	Implements: Events,
	
	_width: 230,
    _height: 100,
	_stage: null,
    _canvas: null,
    _entryVO: null,
    _sliceColor: null,
    
    //entry modification type
    _changeType: null,
    //pie chart slice value
    _percentageDifference: null,
    
    _PIE_CHART_RADIUS: null,
    _DEGREE_START: 270,
    
    //entry modification types
    _DELETE : 0,
    _ADD : 1,
    _MODIFY_ADD : 2,
    _MODIFY_SUBTRACT : 3,
    
    initialize: function(){

    	this._PIE_CHART_RADIUS = this._height * 0.3;
    },

    draw: function(repoPath, activeRevision, revGlyph, entryVO, data){

    	this._preRender(entryVO.name);
    	
    	this._entryVO = entryVO;
    		
    	$("entryTitle").set("text", entryVO.name);
    	$("status").set("text", entryVO.status);
    	$("size").set("text", entryVO.size);
    	$("significance").set("text", entryVO.significance);
    		
    	try {
    		$("authors").set("text", entryVO.authorHistory.length);
    		$("changes").set("text", entryVO.uuidHistory.length);
    	}catch(e){
        	cv.utils.Logger.log("EntryInfoPanel : " + e);
        }
    		
    	//$("viewChanges").set("href", "/code?code=" + 
    	//		encodeURIComponent(entryVO.patch) + "&style=brush: " + styleName);
    	$("viewChanges").set("href", "https://github.com" + repoPath + "/commit/" + activeRevision.identifier);
    	$("closeBtn").addEvent("click", this._onClose.bind(this));
    		
    	var point = cv.utils.Translate.localToGlobal(data.x, data.y);
    	var height = $("entryDetails").getStyle("height");
    	height = height.substring(0, height.length-2);
    	point.y = point.y - (height/2);
    		
    	//keep dialog from going off top of screen
    	if(point.y < 60){
    		point.y = 60;
    	}else if(point.y > Window.getSize().y - height - 150){
    		point.y = Window.getSize().y - height - 150;
    	}
    		
    	$("entryDetails").setStyles({visibility: "visible", top: point.y, left: point.x});
    		
    	this._renderVisuals(revGlyph);
    	this._stage.update();
    },
    
    _preRender: function(name){
    	
    	this._canvas = new Element("canvas");
    	this._width = $("entryVisuals").getStyle("width");
    	this._height = $("entryVisuals").getStyle("height");
    	this._width = this._width.substring(0, this._width.length-2);
    	this._height = this._height.substring(0, this._height.length-2);
    	this._canvas.setStyles({id: name, width: this._width, height: this._height});
    	this._stage = new Stage(this._canvas);
    	this._stage.enableMouseOver(0);
    	$("entryVisuals").grab(this._canvas);
    },
    
    _renderVisuals: function(revGlyph){
    	
		var metadata = revGlyph.getMetadata();
		cv.utils.Logger.log("metadata " + metadata.length);
		
		if(metadata.length > 1){
			this._renderGlyph(metadata);
		}
		
		this._determineChangeType();
		this._renderPieChart(revGlyph);

    },
    
    _renderGlyph: function(metadata){
    	
    	var revContainer = new Container();
        for(var j=0; j< metadata.length; j++){
			
        	var stroke = null;
        	if(metadata[j].name == this._entryVO.name){
        		stroke = "#000";
        	}
			var entryGlyph = 
				this._drawCircle(metadata[j].radius,
						         metadata[j].fillColor, stroke);
			entryGlyph.x = metadata[j].x * 0.4;
			entryGlyph.y = metadata[j].y * 0.4;
			revContainer.addChild(entryGlyph);
		}

		revContainer.scaleX = 0.3;
		revContainer.scaleY = 0.3;
		revContainer.alpha = 0.9;
		revContainer.x = this._width*0.75;
		revContainer.y = this._height/2;
		this._stage.addChild(revContainer);
    },
    
    _renderPieChart: function(revGlyph){
    	
    	var currentEntry = this._getCurrentEntry(revGlyph);
    	var revContainer = new Container();
    	
        var entryGlyph = 
			this._drawCircle(this._PIE_CHART_RADIUS,
					         currentEntry.fillColor);
		entryGlyph.x = 0;
		entryGlyph.y = 0;
		
		this._sliceColor = currentEntry.fillColor;
		
		revContainer.addChild(entryGlyph);
		revContainer.x = this._width*0.25;
		revContainer.y = this._height/2;
		
		switch(this._changeType){
	        
	        case this._ADD : 
	        	//TODO - add additional feedback
	        	break;
	        case this._DELETE : 
	        	//TODO - add additional feedback
	        	break;
	        case this._MODIFY_ADD : 
	        	var slice = this._drawPieSlice(true);
	    		revContainer.addChild(slice);
	        	break;
	        case this._MODIFY_SUBTRACT : 
	        	var slice = this._drawPieSlice(false);
	    		revContainer.addChild(slice);
	        	break;
     
       }
     
		this._stage.addChild(revContainer);
    },
    
    _determineChangeType: function(){
    	
    	var previousSize = this._entryVO.sizeHistory[this._entryVO.sizeHistory.length-2];
    	var newSize = this._entryVO.sizeHistory[this._entryVO.sizeHistory.length-1];
    	
    	var difference = newSize - previousSize;
    	
    	cv.utils.Logger.log("previousSize = " + previousSize);
    	cv.utils.Logger.log("newSize = " + newSize);
    	cv.utils.Logger.log("difference = " + difference);
    	cv.utils.Logger.log("this._entryVO.sizeHistory.length = " + this._entryVO.sizeHistory.length);

    	difference = Math.abs(difference);
    	this._percentageDifference = difference / previousSize;
    	
    	if(this._entryVO.sizeHistory.length == 1){ // NEW ENTRY 
    		this._changeType = this._ADD;
    	}
    	else if(newSize == 0){ // ENTRY DELETED
    		this._changeType = this._DELETE;	
    	}
    	else if(previousSize > newSize){ //FILE SIZE DECREASE
    		this._changeType = this._MODIFY_SUBTRACT;
    	}
    	else if(previousSize < newSize){ //FILE SIZE INCREASE
    		this._changeType = this._MODIFY_ADD;
    	}
    	
    	cv.utils.Logger.log("this._changeType = " + this._changeType);
    	
    },
    
    _drawPieSlice: function(isPositive){
    	
    	cv.utils.Logger.log("_drawPieSlice");
    	cv.utils.Logger.log("this._percentageDifference = " + this._percentageDifference);
    	
    	if(isPositive){
    		color = "#000";
    	}else{
    		color = "#ff0000";
    	}
    	var pieRatio = Math.round(this._percentageDifference * 360);
    	cv.utils.Logger.log("pieRatio = " + pieRatio);
    	
    	var slice = new Shape();
    	
    	slice = this._drawSliceLine(slice, this._DEGREE_START * Math.PI/180, color);
    	slice = this._drawSliceLine(slice, (this._DEGREE_START + pieRatio) * Math.PI/180, color);

    	slice.alpha = 0.5;
    	return slice;
    },
    
    _drawSliceLine: function(shape, startVector, color) {
    	
    	shape.graphics.setStrokeStyle(0.6).beginStroke(color);
		var startX = Math.round(this._PIE_CHART_RADIUS * Math.cos(startVector));
		var startY = Math.round(this._PIE_CHART_RADIUS * Math.sin(startVector));
		cv.utils.Logger.log("startX = " + startX);
		cv.utils.Logger.log("startY = " + startY);
		shape.graphics.moveTo(0,0).lineTo(startX,startY);
		shape.graphics.endStroke();
		
		return shape;
    },
    
    _getTintedColor: function(color, v) {
    	
        if (color.length >6) { color= color.substring(1,color.length)};
        var rgb = parseInt(color, 16); 
        var r = Math.abs(((rgb >> 16) & 0xFF)+v); if (r>255) r=r-(r-255);
        var g = Math.abs(((rgb >> 8) & 0xFF)+v); if (g>255) g=g-(g-255);
        var b = Math.abs((rgb & 0xFF)+v); if (b>255) b=b-(b-255);
        r = Number(r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r).toString(16); 
        if (r.length == 1) r = '0' + r;
        g = Number(g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g).toString(16); 
        if (g.length == 1) g = '0' + g;
        b = Number(b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b).toString(16); 
        if (b.length == 1) b = '0' + b;
        var hexStr = "#" + r + g + b;
        return hexStr;
    },
    
    _getCurrentEntry: function(revGlyph){
    	
    	var metadata = revGlyph.getMetadata();
    	for(var i=0; i<metadata.length; i++){
    		if(this._entryVO.name == metadata[i].name){
    			return metadata[i];
    		}
    	}
    	return null;
    },
    
    _onClose: function(){
    	
    	$("entryDetails").setStyle("visibility", "hidden");
    	if(this._canvas != null){
    		this._canvas.dispose();
        	this._canvas.destroy();
        	this._canvas = null;
        	this._stage = null;
    	}
    	
    	this.fireEvent(cv.model.EventTypes.WINDOW_CLOSE);
    },
    
    _drawCircle: function(radius, fill, stroke){
    	
    	cv.utils.Logger.log("drawing circle - radius = " + radius);
    	var circle = new Shape();
    	if(stroke){
    		circle.graphics.setStrokeStyle(4);
    		circle.graphics.beginStroke(stroke);
    	}
    	circle.graphics.beginFill(fill);
    	circle.graphics.drawCircle(0,0,radius);
    	circle.alpha = 1;
    	circle.compositeOperation = "source-over";
    	
    	return circle;
  }

});

/**
 * src/com/ibeam/cv/view/components
 *
 * @class RangeScroller.js - Displays a range of commits graphically. Provides
 * navigational buttons.
 *
 * @extends
 *
 * @author pebanfield
 *
 *
 */
cv.view.RangeScroller = new Class(/**
 * @author pebanfield
 *
 */
{
	
	Implements: Events,
	
	_THRESHOLD_WIDTH: 1100,
	_MAX_RANGE_WIDTH: 870,
	_MIN_RANGE_WIDTH: 609,
	
	_canvas: null,
	_stage: null,
	_width: null,
	_revisions: null,
	_lineColor: null,
	_activeIndex: null,
	
	_timeline: null,
	_timelineContainer: null,
	_historyDisplayContainer: null,
	
	_boundPageNext: null,
	_boundPagePrev: null,
	_boundRevNext: null,
	_boundRevPrev: null,
	
	initialize: function(width, lineColor){
		 
		this._lineColor = lineColor;
		
    	this._canvas = $("rangeScroller");
    	
    	this._boundRevNext = this._onNext.bind(this);
    	this._boundRevPrev = this._onPrevious.bind(this);
    	this._boundPageNext = this._onPageNext.bind(this);
    	this._boundPagePrev = this._onPagePrevious.bind(this);
    	
    	$("revLinkLayer").addEvent("click", this._onRevSelected.bind(this));
    	
    	$("b_nextBtn").addEvent("click", this._boundRevNext);
    	$("b_prevBtn").addEvent("click", this._boundRevPrev);
    	$("prevPageBtn").addEvent("click", this._boundPagePrev);
    	$("nextPageBtn").addEvent("click", this._boundPageNext);

    	this._width = width;
    	this._canvas.width = this._width;
        this._canvas.height = 240;
        
        this._stage = new Stage(this._canvas);
        this._stage.enableMouseOver(0);
        
        Ticker.addListener(this);
        this._draw();
	},
	
	_draw: function(){
		
		this._timelineContainer = new Container();
		this._timelineContainer.x = 0;
		this._timelineContainer.y = 140;
		
		var timelineConfig = {viewContainer: this._timelineContainer,
				              width: this._width,
				              color: this._lineColor};
		
		this._timeline = new cv.view.Timeline(timelineConfig);
		this._stage.addChild(this._timelineContainer);
		
	},
	
    redraw: function(redrawObj){
		
		this._revisions = redrawObj.currentPage;
		this._width = this._setWidth();
		this._clearTimeline();
		
		this._canvas.width = this._width;
		this._draw();
    	this._timeline.renderTimeline(this._revisions);
    	this._timeline.renderHistoryGlyphs(this._revisions);
    	this.setActive(redrawObj.currentIndex);
    	
    	this._stage.update();
	},
	
	update: function(activeRevisionIndex, revisions){
		
		this._activeIndex = activeRevisionIndex;
		this._revisions = revisions;
		
		this._timeline.renderTimeline(this._revisions);
	},
	
    setHistoryDisplay: function(revisions){
		
		this._revisions = revisions;
		this._timeline.renderHistoryGlyphs(this._revisions);
	},
	
	setActive: function(index){
		
		this._timeline.setActive(index);
	},
	
	disableRevNext: function(){
		$("b_nextBtn").removeEvent("click", this._boundRevNext);
		$("b_nextBtn").setStyle("opacity", "0.4");
	},
	
	disableRevPrev: function(){
		$("b_prevBtn").removeEvent("click", this._boundRevPrev);
		$("b_prevBtn").setStyle("opacity", "0.4");
	},
	
	enableRevNext: function(){
		$("b_nextBtn").addEvent("click", this._boundRevNext);
		$("b_nextBtn").setStyle("opacity", "1");
	},
	
	enableRevPrev: function(){
		$("b_prevBtn").addEvent("click", this._boundRevPrev);
		$("b_prevBtn").setStyle("opacity", "1");
	},
	
	disablePagePrevious: function(){
		$("prevPageBtn").removeEvent("click", this._boundPagePrev);
		$("prevPageBtn").setStyle("opacity", "0.4");
	},
	
	disablePageNext: function(){
		$("nextPageBtn").removeEvent("click", this._boundPageNext);
		$("nextPageBtn").setStyle("opacity", "0.4");
	},
	
	activatePaging: function(){
		$("nextPageBtn").addEvent("click", this._boundPageNext);
		$("prevPageBtn").addEvent("click", this._boundPagePrev);
		$("nextPageBtn").setStyle("opacity", "1");
		$("prevPageBtn").setStyle("opacity", "1");
	},
	
	_clearTimeline: function(){
		
		this._timeline.clear();
    	this._stage.removeChild(this._timelineContainer);
    	this._timelineContainer = null;
	},
	
    _setWidth: function(){
		
		var width = Window.getSize().x;
		
		if(width > this._THRESHOLD_WIDTH){
    		width = this._MAX_RANGE_WIDTH;
    	}else{
    		width = this._MIN_RANGE_WIDTH;
    	}
		return width;
	},
	
	/*
	 * Select the correct icon index based
	 * on mouse click client x. 
	 */
	_onRevSelected: function(event){
		
		var relativeXdiff = Window.getSize().x - event.target.clientWidth;
		var relativeX = event.client.x - relativeXdiff/2;
		var selectedIndex = Math.floor(relativeX / this._timeline.REV_WIDTH);
		this.fireEvent(cv.model.EventTypes.SELECT_BY_INDEX, selectedIndex);
	},
	
	_onNext: function(){
		this.fireEvent(cv.model.EventTypes.NEXT_REVISION);
	},
	
	_onPrevious: function(){
		this.fireEvent(cv.model.EventTypes.PREVIOUS_REVISION);
	},
	
	_onPageNext: function(){
		cv.utils.Logger.log("_onPageNext");
		this.fireEvent(cv.model.EventTypes.NEXT_PAGE);
	},
	
	_onPagePrevious: function(){
		this.fireEvent(cv.model.EventTypes.PREVIOUS_PAGE);
	},
	
	tick: function() {
		
		this._stage.update();
    }

});/**
 * src/com/ibeam/cv/view/components
 *
 * @class RevisionGraph.js - Manages layout and animation logic.
 * Updates RevGlyphManager with revision data.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 10:38:26 AM2011
 *
 */
cv.view.RevisionGraph = new Class({

	Implements: Events,
	
	_DEPTH: 500,
	_SLIDE_TIMER_INTERVAL: 25,
	
    _revGlyphCarousel: null,
    _revGlyphContainer: null,
    _revSelector: null,
    _revSelectorContainer: null,
    _stage: null,
    
    _revisions: null,
    _periodicalID: null,
    _activeRevisionIndex: 0,
    
    _viewportWidth: 0,
    _windowWidth: 0,
    
	_isAnimating: false,
	_slideInitialised: false,

    initialize: function(stage, viewportWidth){

    	this._viewportWidth = viewportWidth;
    	this._windowWidth = Window.getSize().x;
        this._stage = stage;

        window.addEvent('resize', this._onResizeHandler.bind(this));
    },

    update: function(activeRevisionIndex, revisions){

    	this._activeRevisionIndex = activeRevisionIndex;
    	this._revisions = revisions;
    	
    	if(!this._revGlyphContainer){
    		
    		//REVISION GLYPHS
    		this._revGlyphContainer = new Container();
    		this._stage.addChild(this._revGlyphContainer);
    		
    		//CAROUSEL
    		this._revGlyphCarousel =
                new cv.view.RevisionGlyphCarousel(this._revGlyphContainer);
            this._revGlyphCarousel.addEvent(cv.model.EventTypes.CAROUSEL_SLIDE_COMPLETE,
                    this._onCarouselSlideComplete.bind(this));
            
            //REVISION SELECTOR
            this._revSelectorContainer = new Container();
            this._revSelector = new cv.view.RevisionSelector(this._revSelectorContainer);
            
            this._revSelector.update(this._revisions[activeRevisionIndex].identifier);
            this._revSelector.addEvent(cv.model.EventTypes.PREVIOUS_REVISION,
                    this._onSelectPrevious.bind(this));
            this._revSelector.addEvent(cv.model.EventTypes.NEXT_REVISION,
                    this._onSelectNext.bind(this));
            
            this._stage.addChild(this._revSelectorContainer);
            
    	}
    	this._revGlyphCarousel.draw(activeRevisionIndex, this._revisions);
    	this.fireEvent(cv.model.EventTypes.REVISION_RENDER_COMPLETE);
    },
   
    changeActiveIndex: function(activeRevisionIndex){
    	
    	this._activeRevisionIndex = activeRevisionIndex;
    	this._revGlyphCarousel.draw(activeRevisionIndex);
    	this._revSelector.update(this._revisions[activeRevisionIndex].identifier);
    },
    
    redraw: function(data){
    	
    	this._revisions = data.currentPage;
    	this._activeRevisionIndex = data.currentIndex;
    	this._revGlyphCarousel.draw(this._activeRevisionIndex, this._revisions);
    },
    
    slideLeft: function(){
    	
    	this._revGlyphCarousel.slideLeft();
    },
    
    slideRight: function(){
    	
    	this._revGlyphCarousel.slideRight();
    },
    
    _onCarouselSlideComplete: function() {
    	
    	this.fireEvent(cv.model.EventTypes.CAROUSEL_SLIDE_COMPLETE);
    },
    
    _onSelectPrevious: function(){
    	
    	this.fireEvent(cv.model.EventTypes.PREVIOUS_REVISION);
    },
    
    _onSelectNext: function(){
    	
    	this.fireEvent(cv.model.EventTypes.NEXT_REVISION);
    },
    
    _onResizeHandler: function(){
    	
    	if(this._windowWidth == Window.getSize().x)return;
    	
    	this._windowWidth = Window.getSize().x;
    	//strange race condition on android webkit and tilt
    	try{
    	    this._revGlyphCarousel.repositionGlyphs();
    	    this.fireEvent(cv.model.EventTypes.REQUEST_STAGE_UPDATE);
    	}catch(e){};
    },
     
});



/**
 * src/com/ibeam/cv/view/components
 *
 * @class RevisionInfoPanel.js - View component providing Slick
 * access to revision info panel page elements.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 8:56:20 PM2011
 *
 */
cv.view.RevisionInfoPanel = new Class({
	
    initialize: function(){

    },

    setRepoPathTitle: function(title){

        title = title.toUpperCase();
        //$("repoTitle").appendText(title);
    },

    update: function(revision){

    	try{
    		$("annotation").set('text','"' + revision.annotation + '"');
            $("identifier").set('text',revision.identifier);
            $("entriesNum").set('text',revision.entries.length);
            $("author").set('text',revision.author);
           // var dayStr = cv.utils.DateParser.getGregorianDay(revision.dateStr);
           // var monthStr = cv.utils.DateParser.getGregorianMonth(revision.dateStr);
            var timeObj = cv.utils.DateParser.parse(revision.dateStr);
           // var dateStr = dayStr + " " + monthStr + " " + timeObj.day + " " + timeObj.year + " - " + timeObj.time;
            $("time").set('html',"&nbsp;" + timeObj.time + "&nbsp;");
    	}catch(e){
    		cv.utils.Logger.log("RevInfoPanel : " + e);
    	}
        
    }

});


cv.view.RevisionSelector = new Class({
	
	Implements: Events,
	_container: null,
	_revNumDisplay: null,
	
	initialize: function(container){

        this._container = container;
	    
	    var prevBtn = $("previousBtn");
	    prevBtn.addEvent("click", this._onPreviousClick.bind(this));
	    
	    var nextBtn = $("nextBtn");
	    nextBtn.addEvent("click", this._onNextClick.bind(this));
	    
	    this._revNumDisplay = $("revNumDisplay");
	    
    },
    
    update: function(revStr){
    	
    	this._revNumDisplay.innerText = revStr.slice(0,4) + "...";
    },
    
    _onPreviousClick: function(){
    	cv.utils.Logger.log("click");
    	this.fireEvent(cv.model.EventTypes.PREVIOUS_REVISION);
    }, 
    
    _onNextClick: function(){
    	cv.utils.Logger.log("click2");
    	this.fireEvent(cv.model.EventTypes.NEXT_REVISION);
    },
    
    _onImgLoaded: function(e){
    	cv.utils.Logger.log(e);
    }
});/**
 * src/com/ibeam/cv/view/components/glyphs
 *
 * @class EntryGlyph.js - Circular view control representing
 * a single revision entry with labels and visual elements
 * indicating entry properties.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 10:18:50 AM2011
 *
 */
cv.view.EntryGlyph = new Class({

	id: null,
    canvas: null,
    _parentContainer: null,
    _circle: null,
    _entryShadow: null,
    _entryVO: null,
    _title: null,
    
    _padding: 4,
    
    _winWidth: function(){ return Window.getSize().x;},
    _winHeight: function(){ return Window.getSize().y;},
    
    _bgWidth: 0,
    _radius: 0,
    _ringRadius: 0,
    _offSet: 18,
    _angle: -1,
    _centerPositionType: "",
    _stroke: null,
    _fill: null,


    initialize: function(parentContainer, properties){

    	//cv.utils.Logger.log("EntryGlyph : initialize " + properties.radius);
        
    	this._entryVO = properties.entryVO;
        this.id = this._entryVO .id;
        this._bgWidth = properties.bgWidth;
        this._radius = properties.radius;
        this._ringRadius = properties.ringRadius - this._offSet; 
        this._angle = properties.angle;
        this._stroke = properties.stroke;
        this._fill = properties.fill;
        this._parentContainer = parentContainer;
        this._draw();
    },
    
    cloneShape: function(){
    	
    	var shape = this._drawCircle(this._radius, this._stroke, this._fill, 1, true);
    	shape = this._positionEntryGlyph(shape);
    	return shape;
    },
    
    getMetadata: function(){
    	
    	return {name: this._entryVO.name,
    		    x: this._x , 
    		    y: this._y, 
    		    radius: this._radius, 
    		    strokeColor: this._stroke,
    		    fillColor: this._fill};
    		    
    },

    _draw: function(){

    	this._circle = this._drawCircle(this._radius, this._stroke, this._fill, 1, true);
    	 
        this._positionEntryGlyph(this._circle, 0);
        	 
        this._parentContainer.addChild(this._circle); 
        
    },
    
    _drawCircle: function(radius, stroke, fill, alpha, hasStroke){
    	
    	var circle = new Shape();
    	
    	if(hasStroke){
    		circle.graphics.setStrokeStyle(6);
    		circle.graphics.beginStroke(stroke);
    	}
    	if(fill != null){
    		circle.graphics.beginFill(fill);
    	}
    	circle.graphics.drawCircle(0,0,radius);
    	circle.alpha = alpha;
    	circle.compositeOperation = "source-over";
    	
    	return circle;
    },
    
    _positionEntryGlyph: function(shape, offset){
    	
    	if(this._angle == 0){
    		
       	    shape.x = 0 + offset;
       	    shape.y = 0 + offset;
        }else{
        	var vector = 
            	this._getPositionVector(this._angle, this._ringRadius);
        	shape.x = vector.x + offset;
        	shape.y = vector.y + offset;
        }
    	this._x = shape.x;
    	this._y = shape.y;
    },
    
    _getPositionVector: function(angle, radius) {
		
		//point on circle = centerX + radius * Math cos/sin angle	
    	var vector = new Object();
		if(angle > -1){
			vector.x = Math.round(radius * Math.cos(angle));
			vector.y = Math.round(radius * Math.sin(angle));
		}else{
			vector.x = 0;
			vector.y = 0;
		}
		return vector;
	},
	
	setActive: function() {
		
		cv.utils.Logger.log("SETTING ACTIVE");
		this._entryShadow = this._drawCircle(this._radius, "#162433", "#162433", 0.8, false);
		
		this._entryShadow.shadow = new Shadow(this._fill, 0, 0, 80);
		this._positionEntryGlyph(this._entryShadow, 0);
		this._parentContainer.addChildAt(this._entryShadow, 0);
		
    	this._parentContainer.addChild(this._title);
    },
    
    clearActive: function() {
		
    	this._parentContainer.removeChild(this._entryShadow);
    	this._parentContainer.removeChild(this._title);
    }

});

/**
 * src/com/ibeam/cv/view/components/glyphs
 *
 * @class GlyphRenderer.js - Determines the position of the the
 * entry glyphs according to weighting rules. The positions are 
 * set as positions on an analog clock and use geometric
 * angles. 
 *
 * @extends
 *
 * @author pebanfield
 *
 * 10:18:50 AM2011
 *
 */
cv.view.GlyphRenderer = new Class({});

cv.view.GlyphRenderer.sortEntries = function(entries, rings){
	
	if(entries == null || entries.length < 1){
		cv.utils.Logger.log("Error : null entries object"); 
		return;
	}else{
		cv.utils.Logger.log("entries.length = " + entries.length);
	}
	
	var topsignificance = entries[0].significance;

	var CENTER_TOTAL = 3; //3 * 120 degrees
	var FIRST_RING_TOTAL = 9; //12 * 30 degrees
	var SECOND_RING_TOTAL = 6; //24 * 15 degrees
	var ENTRY_DISPLAY_MAX = CENTER_TOTAL + FIRST_RING_TOTAL + SECOND_RING_TOTAL;
	
	//3 * 120 degrees
    var centerThreshold = topsignificance / CENTER_TOTAL;
    //12 * 30 degrees
    var firstThreshold = topsignificance / FIRST_RING_TOTAL;
    //24 * 15 degrees
    var secondThreshold = topsignificance / SECOND_RING_TOTAL;

    var length;
    if(entries.length > ENTRY_DISPLAY_MAX){
    	length = ENTRY_DISPLAY_MAX;
    }else{
    	length = entries.length;
    }
    for (var i=0; i<length; i++){
    	
	    var ring;
	    var entry = entries[i];
	    
	    if(entry.significance >= centerThreshold && rings["CENTER_RING"].entries.length < CENTER_TOTAL)
	    {
		    ring = rings["CENTER_RING"];
	    }
	    else if(entry.significance >= firstThreshold && rings["FIRST_RING"].entries.length < FIRST_RING_TOTAL)
	    {
		    ring = rings["FIRST_RING"];
	    }
	    else if(entry.significance >= secondThreshold && rings["SECOND_RING"].entries.length < SECOND_RING_TOTAL)
	    {
		    ring = rings["SECOND_RING"];
	    }
	    else
	    {
		    ring = rings["THIRD_RING"];
	    }	
	    ring.entries.push(entry);
	    
	    alphabetizePath = function(a, b){
	    	
	    	if(a.path == b.path){
	    		return 0;
	    	}else{
	    		return (a.path < b.path) ? -1 : 1;
	    	}
	    };
	    
	    ring.entries.sort(alphabetizePath);
    }

};

cv.view.GlyphRenderer.setCenterAngles = function(entries, firstRingEntries, ring){
	
	if(ring.entries.length == 2){
		if(firstRingEntries > 1){
			if(cv.model.RepoDataProxy.entriesAreSimilar(entries[0], entries[1])){
			
				if(cv.model.RepoDataProxy.entriesAreSimilar(firstRingEntries[0], firstRingEntries[firstRingEntries.length-1])){
					//8 & 12
					ring.entries[0].angle = cv.model.AnalogPositions.TWELVE_O_CLOCK;
					ring.entries[1].angle = cv.model.AnalogPositions.EIGHT_O_CLOCK;
					return cv.view.GlyphRenderer.TWELVE_AND_EIGHT;
				}else{
					//12 & 4
					ring.entries[0].angle = cv.model.AnalogPositions.TWELVE_O_CLOCK;
					ring.entries[1].angle = cv.model.AnalogPositions.FOUR_O_CLOCK;
					return cv.view.GlyphRenderer.TWELVE_AND_FOUR;
				}
			}else{
				//9 & 3
				ring.entries[0].angle = cv.model.AnalogPositions.NINE_O_CLOCK;
				ring.entries[1].angle = cv.model.AnalogPositions.THREE_O_CLOCK;
				return cv.view.GlyphRenderer.NINE_AND_THREE;
			}
			//one or less entries in next outer ring
		}else{
			//12 & 4
			ring.entries[0].angle = cv.model.AnalogPositions.TWELVE_O_CLOCK;
			ring.entries[1].angle = cv.model.AnalogPositions.FOUR_O_CLOCK;
			return cv.view.GlyphRenderer.TWELVE_AND_FOUR;
		}
		
	}else{
		//place 3 entries at 4,8, and 12
		ring.entries[0].angle = cv.model.AnalogPositions.FOUR_O_CLOCK;
		ring.entries[1].angle = cv.model.AnalogPositions.EIGHT_O_CLOCK;
		ring.entries[2].angle = cv.model.AnalogPositions.TWELVE_O_CLOCK;
		return cv.view.GlyphRenderer.ALL_THREE;
	}

};

cv.view.GlyphRenderer.setFirstRingAngles = function(entries, centerRingEntries, ring, centerPositionType){
	
	var positionOrderFrom1 = [cv.model.AnalogPositions.ONE_O_CLOCK,
	                          cv.model.AnalogPositions.TWO_O_CLOCK,
	                          cv.model.AnalogPositions.THREE_O_CLOCK,
	                          cv.model.AnalogPositions.EIGHT_O_CLOCK,
	                          cv.model.AnalogPositions.NINE_O_CLOCK,
	                          cv.model.AnalogPositions.ELEVEN_O_CLOCK,
	                          cv.model.AnalogPositions.TEN_O_CLOCK,
	                          cv.model.AnalogPositions.TWELVE_O_CLOCK,
	                          cv.model.AnalogPositions.FOUR_O_CLOCK];
	
	var positionOrderFrom11 = [cv.model.AnalogPositions.ELEVEN_O_CLOCK,
	                          cv.model.AnalogPositions.TEN_O_CLOCK,
	                          cv.model.AnalogPositions.NINE_O_CLOCK,
	                          cv.model.AnalogPositions.FOUR_O_CLOCK,
	                          cv.model.AnalogPositions.ONE_O_CLOCK,
	                          cv.model.AnalogPositions.TWO_O_CLOCK,
	                          cv.model.AnalogPositions.THREE_O_CLOCK,
	                          cv.model.AnalogPositions.TWELVE_O_CLOCK,
	                          cv.model.AnalogPositions.EIGHT_O_CLOCK];
	
	if(entries.length > 0){
		var isSimilar = cv.model.RepoDataProxy.entriesAreSimilar(entries[0], centerRingEntries[0]);
	}
		
	if(centerPositionType == cv.view.GlyphRenderer.SINGLE_CENTER){
		
		cv.view.GlyphRenderer.setAnglesPerOrder(positionOrderFrom1, ring);
	}
	else if(centerPositionType == cv.view.GlyphRenderer.NINE_AND_THREE){
		
		cv.view.GlyphRenderer.setAnglesPerOrder(positionOrderFrom11, ring);
	}
	else if(centerPositionType == cv.view.GlyphRenderer.TWELVE_AND_EIGHT && isSimilar){
		
		cv.view.GlyphRenderer.setAnglesPerOrder(positionOrderFrom1, ring);
	}
	else if(centerPositionType == cv.view.GlyphRenderer.TWELVE_AND_EIGHT && !isSimilar){
		
		cv.view.GlyphRenderer.setAnglesPerOrder(positionOrderFrom1, ring);
	}
	else if(centerPositionType == cv.view.GlyphRenderer.TWELVE_AND_FOUR && isSimilar){
		
		cv.view.GlyphRenderer.setAnglesPerOrder(positionOrderFrom1, ring);
	}
	else if(centerPositionType == cv.view.GlyphRenderer.TWELVE_AND_FOUR && !isSimilar){
		
		cv.view.GlyphRenderer.setAnglesPerOrder(positionOrderFrom11, ring);
	}
	else if(centerPositionType == cv.view.GlyphRenderer.ALL_THREE){
		
		cv.view.GlyphRenderer.setAnglesPerOrder(positionOrderFrom1, ring);
	}
};

cv.view.GlyphRenderer.setAnglesPerOrder = function(orderArray, ring){
	
	for(var j in ring.entries){
		ring.entries[j].angle = orderArray[j];
	}
};

cv.view.GlyphRenderer.setOuterRingAngles = function(ring){
	
	var positionOrderFrom1 = [cv.model.AnalogPositions.TEN_O_CLOCK,
	                          cv.model.AnalogPositions.NINE_O_CLOCK,
	                          cv.model.AnalogPositions.EIGHT_O_CLOCK,
	                          cv.model.AnalogPositions.TWO_O_CLOCK,
	                          cv.model.AnalogPositions.THREE_O_CLOCK,
	                          cv.model.AnalogPositions.FOUR_O_CLOCK];
	
	cv.view.GlyphRenderer.setAnglesPerOrder(positionOrderFrom1, ring);
};

cv.view.GlyphRenderer.SINGLE_CENTER = "singleCenter";
cv.view.GlyphRenderer.NINE_AND_THREE = "nineAndThree";
cv.view.GlyphRenderer.TWELVE_AND_FOUR = "twelveAndFour";
cv.view.GlyphRenderer.TWELVE_AND_EIGHT = "twelveAndEight";
cv.view.GlyphRenderer.ALL_THREE = "allThree";

/**
 * src/com/ibeam/cv/view/components/glyphs
 *
 * @class Glyph.js - Responsible for Glyph creation from a collection of
 * entries. Manages sub collections of entries for layout logic. Utilizes glyph
 * render for layout rules.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 10:16:46 AM2011
 *
 */
cv.view.RevisionGlyph = new Class({
	
    viewContainer: null,

	allEntryGlyphs : [],

    _MAX_LICHEN_RADIUS: 40,
    _MIN_LICHEN_RADIUS: 14,

    _number: null,
	_anchorIndex : null,
    _positionIndex : null,
	_curvePosition : null,
	_isAnimating : null,
	
	_active : false,
	_viewportWidth : 0,
	_centerPositionType : "",
	
	_revision : null,
	_rings : null,
	_addedCount : 0,

    initialize: function(revision, viewportWidth){

    	this._revision = revision;
        this.viewContainer = new Container();
        this._viewportWidth = viewportWidth;
        
        this._draw();
    },

    _draw: function(){

    	this._buildRings();
    	cv.view.GlyphRenderer.sortEntries(this._revision.entries, this._rings);
    	this._applyLayoutRules();
    	
    },
    
    _applyLayoutRules: function(){
    	
    	//cv.utils.Logger.log("apply layout rules");
    	
    	//CENTER RING
		this._rings["CENTER_RING"].container = new Container();
		this.viewContainer.addChild(this._rings["CENTER_RING"].container);
		
		if(this._rings["CENTER_RING"].entries.length == 1){
			this._centerPositionType = cv.view.GlyphRenderer.SINGLE_CENTER;
			this._rings["CENTER_RING"].entries[0].angle = 0;
			this._createEntryGlyphs(this._rings["CENTER_RING"]);
		}else{
			this._centerPositionType = 
				cv.view.GlyphRenderer.setCenterAngles(this._revision.entries,
						                              this._rings["FIRST_RING"].entries,
						                              this._rings["CENTER_RING"]);
			this._createEntryGlyphs(this._rings["CENTER_RING"]);
		}
		
		//FIRST RING
		if(this._rings["FIRST_RING"].entries.length > 0){
			
			this._positionRingEntries("FIRST_RING");
		}
		
		//SECOND RING
		if(this._rings["SECOND_RING"].entries.length > 0){
			
			this._positionRingEntries("SECOND_RING");
		}
		
		//THIRD RING
		if(this._rings["THIRD_RING"].entries.length > 0){
			
			this._positionRingEntries("THIRD_RING");
		}
    },
    
    _positionRingEntries: function(ringName){
    	
    	this._rings[ringName].container = new Container();
		
    	if(ringName == "FIRST_RING"){
    		cv.view.GlyphRenderer.setFirstRingAngles(this._revision.entries,
                                                     this._rings["CENTER_RING"].entries,
                                                     this._rings["FIRST_RING"],
                                                     this._centerPositionType);
    	}else{
    		cv.view.GlyphRenderer.setOuterRingAngles(this._rings[ringName]);
    	}
		this._createEntryGlyphs(this._rings[ringName]);
		this.viewContainer.addChild(this._rings[ringName].container);
		
		
    },
    
    _createEntryGlyphs: function(ring){
    
       for(var i=0; i<ring.entries.length; i++){

    	   var entryVO = ring.entries[i];
    	   
    	   var radius = entryVO.size/100 + this._MIN_LICHEN_RADIUS;
    	   if(radius>this._MAX_LICHEN_RADIUS)radius = this._MAX_LICHEN_RADIUS;
 
    	   var entryGlyph = new cv.view.EntryGlyph(ring.container, 
    			                              {entryVO: entryVO, 
    		                                  bgWidth:radius*2, 
    		                                  radius:radius,
    		                                  ringRadius:ring.radius,
    		                                  angle:entryVO.angle,
    		                                  stroke:this._revision.stroke,
    		                                  fill:this._revision.fill});
    	   
    	   
    	   ring.glyphs.push(entryGlyph); 
    	   this.allEntryGlyphs.push(entryGlyph);
       }
    	
    },
    
    _buildRings: function(){
    	
    	this._rings = [];
    	
    	this._rings["CENTER_RING"] = 
    	    {type: "CENTER_RING", 
    	     entries: [],
    	     glyphs: [],
    	     radius: this._viewportWidth*0.12};
    	
    	this._rings["FIRST_RING"] = 
	        {type: "FIRST_RING", 
	         entries: [],
	         glyphs: [],
	         radius: this._viewportWidth*0.22};
    	
    	this._rings["SECOND_RING"] = 
            {type: "SECOND_RING", 
             entries: [],
             glyphs: [],
             radius: this._viewportWidth*0.32};
    	
    	this._rings["THIRD_RING"] = 
            {type: "THIRD_RING", 
             entries: [],
             glyphs: [],
             radius: this._viewportWidth*0.42};
    },
     
     _clearEntries: function(){
    	 
    	 for(var i in this._rings){
     		
     		if (this._rings.hasOwnProperty(i)){
     			for(var j=0; j<this._rings[i].glyphs.length; j++){
         			
         			var glyph = this._rings[i].glyphs[j];
         			var context = glyph.canvas.getContext('2d');
         			context.clearRect(0, 0, this._winWidth(), this._winHeight());
         		}
     		}
     	}
     },
   
     getMetadata: function() {
    	 
    	 var metadata = [];
    	 var cGlyphs = this._rings["CENTER_RING"].glyphs;
    	 for(var i=0; i<cGlyphs.length; i++){
    		 metadata.push(cGlyphs[i].getMetadata());
    	 }
    	 var fGlyphs = this._rings["FIRST_RING"].glyphs;
    	 for(var j=0; j<fGlyphs.length; j++){
    		 metadata.push(fGlyphs[j].getMetadata());
    	 }
    	 var sGlyphs = this._rings["SECOND_RING"].glyphs;
    	 for(var j=0; j<sGlyphs.length; j++){
    		 metadata.push(sGlyphs[j].getMetadata());
    	 }
    	 var tGlyphs = this._rings["THIRD_RING"].glyphs;
    	 for(var j=0; j<tGlyphs.length; j++){
    		 metadata.push(tGlyphs[j].getMetadata());
    	 }
    	 return metadata;
     },
     
     setActive: function() {
    	 
    	 for(var i in this._rings){
    		 
    		 if (this._rings.hasOwnProperty(i)){
      			for(var j=0; j<this._rings[i].glyphs.length; j++){
          			
          			var glyph = this._rings[i].glyphs[j];
          			glyph.setActive();
          		}
      		}
    	 }
     }, 
     
     clearActive: function() {
    	 
         for(var i in this._rings){
    		 
    		 if (this._rings.hasOwnProperty(i)){
      			for(var j=0; j<this._rings[i].glyphs.length; j++){
          			
          			var glyph = this._rings[i].glyphs[j];
          			glyph.clearActive();
          		}
      		}
    	 }
     }

});/**
 * src/com/ibeam/cv/view/components/glyphs
 *
 * @class RevisionGlyphCarousel.js - Provides managed access to glyph collections.
 * Responsible for glyph layout and adding/removing glyphs.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 10:15:14 AM2011
 *
 */
cv.view.RevisionGlyphCarousel = new Class({

	Implements: Events,
	
    _revisions: null,
    _container: null,
    
	_activeRevision: 0,
	_activeIndex: -1,
	
	_positionGlyphs: [],
	_positionAnchors: null,
	_currentPositionStruct: null,
	_startPositionStruct: null,
	_endPositionStruct: null,
	
	_numPositions: 5,
	_completeCount: 0,
	_tweenCount: 0,
	
	_slideLeft: null,
	_slideRight: null,
	
	_winWidth: function(){ return Window.getSize().x;},
    _winHeight: function(){ return Window.getSize().y;},
	
    initialize: function(container){

        this._container = container;
    },
    
    draw: function(activeRevisionIndex, revisions){
   	
    	//clear previous
    	if(this._container.getNumChildren() > 0){
    		this._resetView();
    	}
    	if(revisions){
    		this._revisions = revisions;
    	}
		if(this._positionAnchors){
			this._clearPositionAnchors();
		}
		//draw
		this._positionAnchors = [];
    	this._generatePositionAnchors();
    	this._generatePositionStructures();
    	
    	this._layoutGlyphs(activeRevisionIndex, false);
    	
    	if(this._activeIndex != activeRevisionIndex){
    		this._activeIndex = activeRevisionIndex;
    		this._revisions[this._activeIndex].glyph.setActive();
    	}
    	
    },
    
    repositionGlyphs: function(){
    	
    	this._clearPositionAnchors();
    	this._generatePositionAnchors();
    	
        for(var i=0; i<this._numPositions; i++){
    		
    		var pos = this._currentPositionStruct[i];
    		
    		try{
    			if(this._activeIndex+pos.offset > this._revisions.length-1 || 
    			   this._activeIndex+pos.offset	< 0){
    				break;
    			}
    			var glyph = this._revisions[this._activeIndex+pos.offset].glyph.viewContainer;
    		    glyph.x = this._positionAnchors[pos.name].x;
        		glyph.y = this._positionAnchors[pos.name].y;
        		this._positionAnchors[pos.name].glyph = glyph;
    		}catch(e){ 
    			cv.utils.Logger.log("bailing out because " + e);
    			break; 
    		} //hack for cleaner code	

    	}
    	
    },
    
    slideLeft: function(){
    	
    	if(this._activeIndex > -1){
    		this._revisions[this._activeIndex].glyph.clearActive();
    	}
    	this._tweenGlyph(this._fromLeft);	 
    },
    
    slideRight: function(){
    	
    	if(this._activeIndex > -1){
    		this._revisions[this._activeIndex].glyph.clearActive();
    	}
    	this._tweenGlyph(this._fromRight);
    },
    
    _layoutGlyphs: function(startIndex){
    	
    	if(startIndex < 2){
    		this._currentPositionStruct = this._endPositionStruct;
    	}else{
    		this._currentPositionStruct = this._startPositionStruct;
    	}
    	
    	for(var i=0; i<this._numPositions; i++){
    		
    		var pos = this._currentPositionStruct[i];
    		
    		try{
    		    var glyph = this._positionGlyph(pos.name,
			                                    this._revisions[startIndex+pos.offset].glyph.viewContainer);
    		}catch(e){ 
    			//cv.utils.Logger.log("bailing out because " + e);
    			break; 
    		} //hack for cleaner code	
    		
    		this._positionAnchors[pos.name].glyph = glyph;
        	this._container.addChild(glyph);

    	}
	},
	
	_positionGlyph: function(position, glyph){
		
		glyph.x = this._positionAnchors[position].x;
		glyph.y = this._positionAnchors[position].y;
		glyph.alpha = this._positionAnchors[position].alpha;
		glyph.scaleX = this._positionAnchors[position].scale;
		glyph.scaleY = this._positionAnchors[position].scale;
		
		return glyph;
	},
	
	_generatePositionAnchors: function(){
		
		//bottom left
		this._positionAnchors["start"] = 
		    {x: this._winWidth()*0.05, y: this._winHeight()*0.5, alpha: 0.4, scale: 0.2, glyph: null};
		//mid left
		this._positionAnchors["leftMid"] = 
		    {x: this._winWidth()*0.20, y: this._winHeight()*0.5, alpha: 0.4, scale: 0.6, glyph: null};
		//center
		this._positionAnchors["center"] = 
		    {x: this._winWidth()/2, y: this._winHeight()/2, alpha: 0.6, scale: 1, glyph: null};
		//mid right
		this._positionAnchors["rightMid"] = 
		    {x: this._winWidth()*0.80, y: this._winHeight()*0.5, alpha: 0.4, scale: 0.6, glyph: null};
		//top right
		this._positionAnchors["end"] = 
		    {x: this._winWidth()*0.95, y: this._winHeight()*0.5, alpha: 0.4, scale: 0.2, glyph: null};

	},
	
	_clearPositionAnchors: function(){
		
		this._positionAnchors["start"] = null;
		this._positionAnchors["leftMid"] = null;
		this._positionAnchors["center"] = null;
		this._positionAnchors["rightMid"] = null;
		this._positionAnchors["end"] = null;
	},
	
	_generatePositionStructures: function(){
		
		this._startPositionStruct = [{name:"center", offset: 0}, 
		                             {name:"leftMid", offset: -1}, 
		                             {name:"start", offset: -2}, 
		                             {name: "rightMid", offset: +1}, 
		                             {name: "end", offset: +2}];
		
		this._endPositionStruct = [{name:"center", offset: 0}, 
		                             {name:"rightMid", offset: +1}, 
		                             {name:"end", offset: +2}, 
		                             {name: "leftMid", offset: -1}, 
		                             {name: "start", offset: -2}];
		
		this._fromLeft = ["end", "rightMid", "center", "leftMid", "start"];
		this._fromRight = ["start", "leftMid", "center", "rightMid", "end"];
	},
    
    _tweenGlyph: function(slideArray){
    	
    	var start = this._determineStart(slideArray[0]);
    	
    	for(var i=start; i<this._container.getNumChildren(); i++){
     		
    		if(this._positionAnchors[slideArray[i]].glyph != null && 
         	   slideArray.length>i+1){
         		
         		this._tweenCount++;
         	    var tween = Tween.get(this._positionAnchors[slideArray[i]].glyph, {loop:false,useTicks:false})
         	    .to({x:this._positionAnchors[slideArray[i+1]].x, 
         		     y:this._positionAnchors[slideArray[i+1]].y,
         		     alpha:this._positionAnchors[slideArray[i+1]].alpha,
         		     scaleX:this._positionAnchors[slideArray[i+1]].scale,
         		     scaleY:this._positionAnchors[slideArray[i+1]].scale}, 
         		     400, Ease.circOut).call(this._onAnimationComplete.bind(this));
         	    
         	}
     	}
    },
    
    /*
     * handle start/end of array edge cases
     * where carousel has empty positions.
     */
    _determineStart: function(startPos){
    	
    	var start=0;
    	
    	if(this._activeIndex == 0 && startPos == "start"){
    		start=2;
    	}else if(this._activeIndex == 1 && startPos == "start"){
    		start=1;
    	}else if(this._activeIndex == 2 && startPos == "start"){
    		start=0;
    	}else if(this._activeIndex == 3 && startPos == "start"){
    		start=0;
    	}else if(this._activeIndex == this._revisions.length-2 && startPos == "end"){
    		start=1;
    	}	
    	return start;
    },
    
    _onAnimationComplete: function(){
    	
    	this._completeCount++;
    	if(this._completeCount == this._tweenCount){
    		
    		this._resetView();
        	this.fireEvent(cv.model.EventTypes.CAROUSEL_SLIDE_COMPLETE);
    	}
    },
    
    _resetView: function(){
    	
    	this._revisions[this._activeIndex].glyph.clearActive();
    	this._clearGlyphs();
		this._completeCount = 0;
		this._tweenCount = 0;
    },
    
    _clearGlyphs: function(){
		
		var length = this._container.getNumChildren();
		for(var i=0; i<length; i++){
			this._container.removeChildAt(0);
		}
	},

});/* src/com/ibeam/cv/view/components
 *
 * @class Timeline.js - Shows dates, lines and brackets of each revision on a 
 * horizonal plane.
 *
 * @extends
 *
 * @author pebanfield
 *
 *
 */
cv.view.Timeline = new Class({
	
	REV_WIDTH: 87,
	_REV_HEIGHT: 22,
	_BRACKET_HEIGHT: 40,
	
	width: null,
	_length: 0,
	_color: "#000",
	
	_container: null,
	_dividers: null,
	_revisions: null,
	
	_glyphContainer: null,
	_glyphIcons: [],
	_activeContainer: null,
	_activeTime: null,
	_preciseTime: null,
	activeIndex: null,
	
	
	initialize: function(config){
		
		this._container = config.viewContainer;
		this.width = config.width;
		this._color = config.color;
		this._draw();
	}, 
	
	_draw: function(){
		
		this._renderBracket();
	},
	
	_renderBracket: function(){
		
		var bracket = new Shape();
		bracket.graphics.setStrokeStyle(0.6).beginStroke(this._color);
		bracket.graphics.moveTo(0,0).lineTo(0,this._BRACKET_HEIGHT).lineTo(this.width,
				                                         this._BRACKET_HEIGHT).lineTo(this.width, 0);
		bracket.graphics.endStroke();
		this._container.addChild(bracket);
	},
	
	_renderDividers: function(length){
		
        this._dividers = new Shape();
		
		this._dividers.graphics.setStrokeStyle(0.3).beginStroke(this._color);

		for(var i=1; i<length; i++){
			this._dividers.graphics.moveTo(this.REV_WIDTH*i,this._BRACKET_HEIGHT - this._REV_HEIGHT);
			this._dividers.graphics.lineTo(this.REV_WIDTH*i,this._BRACKET_HEIGHT);
		}
		
		this._dividers.graphics.endStroke();
		this._container.addChild(this._dividers);
	},
	
	setActive: function(index) {
		
		if(!this._activeContainer){
			
			this._initActiveContainer();
		}
		
		var timeObj = cv.utils.DateParser.parse(this._revisions[index].dateStr);
		var dayStr = cv.utils.DateParser.getGregorianDay(this._revisions[index].dateStr);
		var monthStr = cv.utils.DateParser.getGregorianMonth(this._revisions[index].dateStr);
		var dateStr = dayStr + " " + monthStr + " " + timeObj.day + "\n" + timeObj.year;
		
		this._activeTime.initialize(dateStr, "12px Arial", this._color);
		this._preciseTime.initialize(timeObj.time, "12px Arial", this._color);
		
		this._activeContainer.x = this.REV_WIDTH*index + 4;
		this._activeContainer.y = -76;
		
		if(this.activeIndex != null){
			
			this._glyphContainer.getChildAt(this.activeIndex).shadow = null;
			this._glyphContainer.getChildAt(this.activeIndex).alpha = 0.9;
		}
		
		this.activeIndex = index;
		var rev = this._revisions[this.activeIndex];
		var revGlyph = rev.glyph;
		var metadata = revGlyph.getMetadata();
		this._glyphContainer.getChildAt(this.activeIndex).shadow = new Shadow(metadata[0].fillColor, 2, 2, 20);
		this._glyphContainer.getChildAt(this.activeIndex).alpha = 1;
		
		this._container.addChild(this._activeContainer);
	},
	
	_initActiveContainer: function(){
		
		this._activeContainer = new Container();
		
		this._activeTime = new Text("", "12px Arial", this._color);
		this._activeTime.textBaseline = "top";
		
		this._preciseTime = new Text("", "12px Arial", this._color);
		this._preciseTime.textBaseline = "top";
		this._preciseTime.y = 100;
		
		var highlightLine = new Shape();
		highlightLine.graphics.setStrokeStyle(0.8).beginStroke(this._color);
		highlightLine.graphics.moveTo(-4,70);
		highlightLine.graphics.lineTo(-4, 150);
		highlightLine.graphics.endStroke();
		
		this._activeContainer.addChild(this._preciseTime);
		this._activeContainer.addChild(this._activeTime);
		this._activeContainer.addChild(highlightLine);
	},
	
	renderTimeline: function(revisions){
		
		this._revisions = revisions;
		
		for(var j=0; j<this._revisions.length; j++){
			
			var timeObj = cv.utils.DateParser.parse(this._revisions[j].dateStr);
			var timeArray = timeObj.time.split(":");
			var timeStr = timeArray[0] + ":" + timeArray[1];
			
			var time = new Text(timeStr, "12px Arial", this._color);
			time.textBaseline = "top"; 
			time.x = this.REV_WIDTH*j + 4;
			time.y = 24;
			this._container.addChild(time);
			
			if(j == 0 || cv.utils.DateParser.dateIsDifferent(this._revisions[j-1].dateStr, this._revisions[j].dateStr)){
				
				var dayStr = cv.utils.DateParser.getGregorianDay(this._revisions[j].dateStr);
				var monthStr = cv.utils.DateParser.getGregorianMonth(this._revisions[j].dateStr);
				var dateTitle = dayStr + " " + monthStr + " " + timeObj.day;
				
				var day = new Text(dateTitle, "12px Arial", this._color);
				day.textBaseline = "top"; 
				day.x = this.REV_WIDTH*j + 4;
				day.y = 42;
				this._container.addChild(day);
			} 
		}

		this._renderDividers(this._revisions.length);
	},
	
	renderHistoryGlyphs: function(revisions){
		
		if(this._glyphContainer){
			this._clearGlyphs();
		}
		this._glyphContainer = new Container();
		this._revisions = revisions;
		
		for(var i=0; i<revisions.length; i++){
			
			var revGlyph = revisions[i].glyph;
			var metadata = revGlyph.getMetadata();
			var revContainer = new Container();
			for(var j=0; j< metadata.length; j++){
				
				var entryGlyph = 
					this._drawCircle(metadata[j].radius,
							         metadata[j].stroke,
							         metadata[j].fillColor);
				entryGlyph.x = metadata[j].x * 0.4;
				entryGlyph.y = metadata[j].y * 0.4;
				revContainer.addChild(entryGlyph);
				
			}

			revContainer.scaleX = 0.3;
			revContainer.scaleY = 0.3;
			revContainer.alpha = 0.7;
			
			revContainer.x = i*this.REV_WIDTH + (this.REV_WIDTH/2);
			revContainer.y = -12;
			this._glyphContainer.addChild(revContainer);
		}
		this._container.addChild(this._glyphContainer);
		
	},
	
	clear: function(){
		
		for(var i=0; i<this._container.getNumChildren(); i++){
			var child = this._container.removeChildAt(i); 
			child = null;
		}
	},
	
	_clearGlyphs: function(){
		
		for(var i=0; i<this._glyphContainer.getNumChildren(); i++){
			var child = this._glyphContainer.removeChildAt(i); 
			child = null;
		}
	},
	
	_drawCircle: function(radius, stroke, fill){
	    	
	    	var circle = new Shape();
	    	circle.graphics.setStrokeStyle(3);
    		circle.graphics.beginStroke("#ffffff");
	    	circle.graphics.beginFill(fill);
	    	circle.graphics.drawCircle(0,0,radius);
	    	circle.alpha = 0.6;
	    	circle.compositeOperation = "source-over";
	    	
	    	return circle;
	  }
	
});
	/**
 * src/com/ibeam/cv/view/mediators
 *
 * @class ApplicationMediator.js - Provides mediation for app level logic
 * such as key event handling and data binding. Handles keyboard input.
 *
 * @extends Mediator
 *
 * @author pebanfield
 *
 * 11:03:07 AM2011
 *
 */
cv.view.ApplicationMediator = new Class({

    Extends: Mediator,
    keyboard: null,
    self: null,
    
    //TODO - refactor - think about media queries & layout management
	_THRESHOLD_WIDTH: 1100,
	_LARGE_RANGE_SCROLLER_WIDTH : 870,
    _SMALL_RANGE_SCROLLER_WIDTH : 609,

	listControlLength: null,
    
    _configProxy: null,
    _repoDataProxy: null,
    
    _isSliding: false,
    _newActiveRevIndex: null,
    _revisionGlyphs: null,
    _activeRevisionGlyph: null,
    _appIsActive: true,
    _numAnimatorsCompleted: 0,
    

    initialize: function(viewComponent){

        this.parent(cv.view.ApplicationMediator.NAME, viewComponent);
        this._configProxy = this.facade.retrieveProxy(cv.model.ConfigProxy.NAME);
        this._repoDataProxy = this.facade.retrieveProxy(cv.model.RepoDataProxy.NAME);
        this.viewComponent.addEvent(cv.model.EventTypes.SLIDE_RIGHT,
    	        this._onArrowLeft.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.SLIDE_LEFT,
    	        this._onArrowRight.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.ENTRY_SELECTED,
    	        this._onEntrySelected.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.RESIZE,
    	        this._onResize.bind(this));
        
        this.listControlLength = this._getRangeScrollerLength();
    },
    
    listNotificationInterests: function(){
    	
    	return [cv.model.NotificationTypes.GLYPH_RENDERING_COMPLETE,
    	        cv.model.NotificationTypes.CAROUSEL_SLIDE_COMPLETE,
    	        cv.model.NotificationTypes.NEXT_REVISION,
    	        cv.model.NotificationTypes.PREVIOUS_REVISION,
    	        cv.model.NotificationTypes.NEXT_PAGE,
    	        cv.model.NotificationTypes.PREVIOUS_PAGE,
    	        cv.model.NotificationTypes.SELECT_BY_INDEX,
    	        cv.model.NotificationTypes.SET_MODAL_WINDOW_ACTIVE,
    	        cv.model.NotificationTypes.INDEX_CHANGED,
    	        cv.model.NotificationTypes.REQUEST_STAGE_UPDATE];
    },
    
    handleNotification: function(notification){
    	
    		
    	switch(notification.name){
    	
    	    case cv.model.NotificationTypes.GLYPH_RENDERING_COMPLETE :
    	    	
    	    	if(!this._appIsActive)return;
    	    	this._displayLinks();
    	    	this.viewComponent.showLoading(false);
    	    	this.viewComponent.tick();
    	    	Ticker.setPaused(true);
    	    	this.viewComponent.visible(true);
    	    	break;
    	    case cv.model.NotificationTypes.CAROUSEL_SLIDE_COMPLETE :
    	    	
    	    	if(!this._appIsActive)return;
    	    	this._isSliding = false;
    	    	this._repoDataProxy.setActiveRevision(this._newActiveRevIndex);
    	    	this._displayLinks();
    	    	Ticker.setPaused(true);
    	    	break;
    	    case cv.model.NotificationTypes.NEXT_REVISION :
    	    	
    	    	if(!this._appIsActive)return;
    	    	if(this._isSliding)return;
    	    	this._selectNext();
    	    	break;
    	    case cv.model.NotificationTypes.PREVIOUS_REVISION :
    	    	
    	    	if(!this._appIsActive)return;
    	    	if(this._isSliding)return;
    	    	this._selectPrevious();
    	    	break;
    	    case cv.model.NotificationTypes.NEXT_PAGE : 
    	    	
    	    	this.viewComponent.visible(false);
    	    	this.viewComponent.showLoading(true);
    	    	this._repoDataProxy.nextPage();
    	    	this.viewComponent.clearLinks();
    	    	break;
    	    case cv.model.NotificationTypes.PREVIOUS_PAGE :
    	    	
    	    	this.viewComponent.visible(false);
    	    	this.viewComponent.showLoading(true);
    	    	this._repoDataProxy.previousPage();
    	    	this.viewComponent.clearLinks();
    	    	break;
    	    case cv.model.NotificationTypes.SELECT_BY_INDEX :
    	    	
    	    	if(!this._appIsActive)return;
    	    	
    	    	this._numAnimatorsCompleted = 0;
    	    	this.viewComponent.clearLinks();
    	    	this._newActiveRevIndex = notification.getBody();
    	    	Ticker.setPaused(false);
        		this.facade.sendNotification(cv.model.NotificationTypes.CHANGE_INDEX, this._newActiveRevIndex);
				break;
    	    case cv.model.NotificationTypes.SET_MODAL_WINDOW_ACTIVE :
    	    	
    	    	this._appIsActive = notification.getBody();
    	    	break;
    	    case cv.model.NotificationTypes.INDEX_CHANGED : 
    	    	
    	    	this._numAnimatorsCompleted++;
    	    	if(this._numAnimatorsCompleted > 1){
    	    		
    	    		this.viewComponent.tick();
    	    		Ticker.setPaused(true);
    	    		this._repoDataProxy.setActiveRevision(this._newActiveRevIndex);
    	    		this._displayLinks();
    	    		this._numAnimatorsCompleted = 0;
    	    	}
    	    	break;
    	    case cv.model.NotificationTypes.REQUEST_STAGE_UPDATE :
    	    	
    	    	this.viewComponent.tick();
    	    	break;
    	    default : 
    	    	cv.utils.Logger.log("App Mediator : unhandled notification");
    	}
    },
   
    setKeyboard: function(kb){

        this.keyboard = kb;
        this.keyboard.addEvents({
            'left': this._onArrowLeft.bind(this),
            'right': this._onArrowRight.bind(this),
            'up': this._onArrowUp.bind(this),
            'down': this._onArrowDown.bind(this)
        });
        this.keyboard.activate();

    },

    _requestData: function(){

    	cv.utils.Logger.log("requestData");
        //TODO - pass object
        //this.facade.sendNotification(CommandTypes.REQUEST_REV_DATA, requestor);
    },
    
    _displayLinks: function(){
    	
    	var index = this._repoDataProxy.activeRevisionIndex;
    	var activeRevision = this._repoDataProxy.currentPage[index];
    	this.viewComponent.displayLinks(activeRevision);
    },
    
    _selectNext: function(){
    	
    	//cv.utils.Logger.log("_selectNext " + this._repoDataProxy.activeRevisionIndex);
    	if(this._repoDataProxy.activeRevisionIndex < this._repoDataProxy.currentPage.length-1){
    		
    		Ticker.setPaused(false);
    		this.viewComponent.clearLinks();
    		this._newActiveRevIndex = this._repoDataProxy.activeRevisionIndex+1;
    		this.facade.sendNotification(cv.model.NotificationTypes.SLIDE_LEFT);
    		this.facade.sendNotification(cv.model.NotificationTypes.CHANGE_RANGE_INDEX, this._newActiveRevIndex);
			this._isSliding = true;
		}
    },
    
    _selectPrevious: function(){
    	
    	//cv.utils.Logger.log("_selectPrevious " + this._repoDataProxy.activeRevisionIndex);
    	if(this._repoDataProxy.activeRevisionIndex > 0){
    		
    		Ticker.setPaused(false);
    		this.viewComponent.clearLinks();
    		this._newActiveRevIndex = this._repoDataProxy.activeRevisionIndex-1;
    		this.facade.sendNotification(cv.model.NotificationTypes.SLIDE_RIGHT);
    		this.facade.sendNotification(cv.model.NotificationTypes.CHANGE_RANGE_INDEX, this._newActiveRevIndex);
			this._isSliding = true;
		}
    },
    
    _onArrowLeft: function(){
        //cv.utils.Logger.log('arrowLeft');
        if(this._isSliding || !this._appIsActive)return;
        this._selectPrevious();
    },

    _onArrowRight: function(){
    	//cv.utils.Logger.log('arrowRight');
    	if(this._isSliding || !this._appIsActive)return;
    	this._selectNext();
    },

    _onArrowUp: function(){
    	cv.utils.Logger.log('arrowUp');
    },

    _onArrowDown: function(){
    	cv.utils.Logger.log('arrowDown');
    },
    
    _onEntrySelected: function(eventObj){
    	
    	this.facade.sendNotification(cv.model.NotificationTypes.SHOW_ENTRY_INFO, 
    			{revGlyph: this._repoDataProxy.currentPage[this._repoDataProxy.activeRevisionIndex].glyph,
    		     entryVO: this._repoDataProxy.getCurrentEntryByName(eventObj.name), 
    		     data: eventObj});
    }, 
    
    _requestPage: function(pageNum){

        mainView.facade.sendNotification(cv.model.CommandTypes.REQUEST_REV_DATA, null, pageNum);
    },
    
    _onResize: function(){
    
    	var length = this._getRangeScrollerLength();
    	
    	if(this.listControlLength != length){
    		
    		this.listControlLength = length;
    		this._repoDataProxy.resetPageSize(this.listControlLength);
    		
    		var resizeConfig = {currentPage: this._repoDataProxy.currentPage,
    				            currentIndex: this._repoDataProxy.activeRevisionIndex};
    		this.facade.sendNotification(cv.model.NotificationTypes.RESIZE, resizeConfig);
    	}
    	
    },
    
    _getPageState: function(index){
    	
    	if(index == 0){
    		
    	}
    	
    },

	_getRangeScrollerLength: function(){
		
		var width = Window.getSize().x;
		var length;
		if(width > this._THRESHOLD_WIDTH){
			length = this._repoDataProxy.LARGE_PAGE_LENGTH;
		}else{
			length = this._repoDataProxy.SMALL_PAGE_LENGTH;
		}
		return length;
	},
	
	getRangeScrollerWidth: function(){
		
		if(this.listControlLength == this._repoDataProxy.LARGE_PAGE_LENGTH){
			return this._LARGE_RANGE_SCROLLER_WIDTH;
		}else{
			return this._SMALL_RANGE_SCROLLER_WIDTH;
		}
	},
	
});

cv.view.ApplicationMediator.NAME = "ApplicationMediator";


/**
 * src/com/ibeam/cv/view/mediators
 *
 * @class EntryInfoMediator.js - listens to data changes and
 * updates rev info panel accordingly.
 *
 * @extends
 *
 * @author pebanfield
 *
 */
cv.view.EntryInfoMediator = new Class({

    Extends: Mediator,
    
    _repoDataProxy: null,
    _entryVO: null,

    initialize: function(viewComponent){

        this.parent(cv.view.EntryInfoMediator.NAME, viewComponent);
        this.viewComponent.addEvent(cv.model.EventTypes.WINDOW_CLOSE,
    	        this._onWindowClose.bind(this));
        this._repoDataProxy = 
        	this.facade.retrieveProxy(cv.model.RepoDataProxy.NAME);
    },
    
    listNotificationInterests: function(){
    	
    	return [cv.model.NotificationTypes.SHOW_ENTRY_INFO];
    },
    
    handleNotification: function(notification){
    	
    	switch(notification.name){
    	
    	    case cv.model.NotificationTypes.SHOW_ENTRY_INFO : 
    	    	
    	    	this._entryVO = notification.getBody().entryVO;
    	    	var revGlyph = notification.getBody().revGlyph;
    	    	
    	    	var fileExtension = this._entryVO.name.split(".")[1];
    	    	//var resourceUrl = this._repoDataProxy.codeStyleMap.getResourceByExtension(fileExtension);
    	    	
    			//var style = this._repoDataProxy.codeStyleMap.getStyleByExtension(fileExtension);
    	    	
    	    	
    	    	this.viewComponent.draw(this._repoDataProxy.currentRepoPath, this._repoDataProxy.getActiveRevision(),
    	    			                              revGlyph, this._entryVO, notification.getBody().data);
    	    	this.facade.sendNotification(cv.model.NotificationTypes.SET_MODAL_WINDOW_ACTIVE, false);
    	    	
    	    	/*
    	    	SyntaxHighlighter.defaults['toolbar'] = false;
    	    	var codeStyleUrl = style + ' ' + resourceRoot + '/js/highlighter/' + resourceUrl;
    	    	cv.utils.Logger.log(codeStyleUrl);
    	    	SyntaxHighlighter.autoloader(codeStyleUrl);
    	    	
    	    	Asset.javascript(resourceRoot + "/js/highlighter" + resourceUrl, {
    	    	    id: resourceUrl,
    	    	    onLoad: this._onStyleScriptLoaded.bind(this)
    	    	});
    	    	SyntaxHighlighter.all();
    	    	*/
    	    	
    	    	break;
    	    default : 
    	    	
    	    	cv.utils.Logger.log("EntryInfoMediator : unhandled notification");
    	    	break;
    	}
    	
    },
    
    _onWindowClose: function(){
    	
    	this.facade.sendNotification(cv.model.NotificationTypes.SET_MODAL_WINDOW_ACTIVE, true);
    },
    
    _onStyleScriptLoaded: function(){
    	
    	cv.utils.Logger.log("script loaded");

    	
    }

});

cv.view.EntryInfoMediator.NAME = "EntryInfoMediator";

/**
 * src/com/ibeam/cv/view/mediators
 *
 * @class RangeScrollerMediator.js - Provides mediation for the RangeScoller 
 * component. Updates RangeScroller activeIndex and loads new range data.
 *
 * @extends Mediator
 *
 * @author pebanfield
 *
 *
 */
cv.view.RangeScrollerMediator = new Class({

    Extends: Mediator,
    
    _repoDataProxy: null,
    _rendered: false,
    
    initialize: function(viewComponent){
    	
    	this.parent(cv.view.RangeScrollerMediator.NAME, viewComponent);
    },
    
    setData: function(data){

        this._repoDataProxy = data;
        this._repoDataProxy.addEvent(cv.model.EventTypes.REVISIONS_LOADED,
                this._onRevisionsLoaded.bind(this));
        this._repoDataProxy.addEvent(cv.model.EventTypes.ACTIVE_REV_CHANGE,
    	        this._onActiveRevChanged.bind(this));
        
        this.viewComponent.addEvent(cv.model.EventTypes.PREVIOUS_REVISION,
                this._onSelectPrevious.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.NEXT_REVISION,
                this._onSelectNext.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.NEXT_PAGE,
    	        this._onSelectNextPage.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.PREVIOUS_PAGE,
    	        this._onSelectPreviousPage.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.SELECT_BY_INDEX,
    	        this._onSelectByIndex.bind(this));
       
    },
    
    listNotificationInterests: function(){
    	
    	return [cv.model.NotificationTypes.CHANGE_INDEX,
    	        cv.model.NotificationTypes.CHANGE_RANGE_INDEX,
    	        cv.model.NotificationTypes.GLYPH_RENDERING_COMPLETE,
    	        cv.model.NotificationTypes.RESIZE,
    	        cv.model.NotificationTypes.PAGE_CHANGED];
    },
    
    handleNotification: function(notification){
    	
    	switch(notification.name){
    	
    	    case cv.model.NotificationTypes.GLYPH_RENDERING_COMPLETE :
    	    	
    	    	cv.utils.Logger.log("RangeScroller - Render complete");
    	    	this.viewComponent.setHistoryDisplay(this._repoDataProxy.currentPage);
    	    	if(this._rendered){
    	    		var resizeConfig = {currentPage: this._repoDataProxy.currentPage,
				            currentIndex: this._repoDataProxy.activeRevisionIndex};
    	    		this.viewComponent.redraw(resizeConfig);
    	    	}
    	    	this._rendered = true;
    	    	break;
    	    case cv.model.NotificationTypes.CHANGE_RANGE_INDEX : 
    	    	
    	    	this.viewComponent.enableStageUpdate = true;
    	    	this.viewComponent.setActive(notification.getBody());
    	    	break;
    	    case cv.model.NotificationTypes.CHANGE_INDEX :
    	    	
    	    	this.viewComponent.enableStageUpdate = true;
    	    	var newIndex = notification.getBody();
    	    	this.viewComponent.setActive(newIndex);
    	    	this.viewComponent.tick();
    	    	this.facade.sendNotification(cv.model.NotificationTypes.INDEX_CHANGED);
    	    	break;
    	    case cv.model.NotificationTypes.RESIZE : 
    	    	
    	    	this.viewComponent.redraw(notification.getBody());
    	    	break;
    	    case cv.model.NotificationTypes.PAGE_CHANGED : 
    	    	
    	    	switch( notification.getBody() ){
    	    	
    	    	    //TODO - fix bugs
    	    	    case "latest" : 
    	    	    	cv.utils.Logger.log("RangeScrollerMed : latest state");
    	    	    	this.viewComponent.disablePageNext();
    	    	    	this.viewComponent.disableRevNext();
    	    	    	break;
    	    	    case "first" :
    	    	    	cv.utils.Logger.log("RangeScrollerMed : first state");
    	    	    	this.viewComponent.disablePagePrevious();
    	    	    	this.viewComponent.disableRevPrev();
    	    	    	break;
    	    	    case "mid" : 
    	    	    	cv.utils.Logger.log("RangeScrollerMed : mid state");
    	    	    	this.viewComponent.activatePaging();
    	    	    	this.viewComponent.enableRevNext();
    	    	    	this.viewComponent.enableRevPrev();
    	    	    	break;
    	    	}
    	    	
    	    	break;
    	    default : 
    	    	cv.utils.Logger.log("RangeScroller Mediator : unhandled notification");
    	}
    },
    
    
    _onRevisionsLoaded: function(){
    	
    	this.viewComponent.update(this._repoDataProxy.activeRevisionIndex,
                this._repoDataProxy.currentPage);
    	this.viewComponent.setActive(this._repoDataProxy.activeRevisionIndex);
    	this.viewComponent.tick();
    },
    
    _onActiveRevChanged: function(){
    	
    },
    
    _onSelectNext: function(){
    	this.facade.sendNotification(cv.model.NotificationTypes.NEXT_REVISION);
    },
    
    _onSelectPrevious: function(){
    	this.facade.sendNotification(cv.model.NotificationTypes.PREVIOUS_REVISION);
    },
    
    _onSelectNextPage: function(){
    	cv.utils.Logger.log("selecting next page");
    	this.facade.sendNotification(cv.model.NotificationTypes.NEXT_PAGE);
    },
    
    _onSelectPreviousPage: function(){
    	this.facade.sendNotification(cv.model.NotificationTypes.PREVIOUS_PAGE);
    }, 
    
    _onSelectByIndex: function(index){
    	
    	this.facade.sendNotification(cv.model.NotificationTypes.SELECT_BY_INDEX, index);
    }
   

});

cv.view.RangeScrollerMediator.NAME = "RangeScrollerMediator";

        /**
 * src/com/ibeam/cv/view/mediators
 *
 * @class RevisionGraphMediator.js - Listens to data changes and updates
 * graph carousel accordingly. Listens to key driven notifications.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 10:24:49 AM2011
 *
 */
cv.view.RevisionGraphMediator = new Class({

    Extends: Mediator,
    _repoDataProxy: null,

    initialize: function(viewComponent){

        this.parent(cv.view.RevisionGraphMediator.NAME, viewComponent);
    },

    setData: function(data){

        this._repoDataProxy = data;
        this._repoDataProxy.addEvent(cv.model.EventTypes.REVISIONS_LOADED,
                this._onRevisionsLoaded.bind(this));
        
        this.viewComponent.addEvent(cv.model.EventTypes.CAROUSEL_SLIDE_COMPLETE,
                this._onCarouselSlideComplete.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.PREVIOUS_REVISION,
                this._onSelectPrevious.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.NEXT_REVISION,
                this._onSelectNext.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.REVISION_RENDER_COMPLETE,
        		this._onRenderComplete.bind(this));
        this.viewComponent.addEvent(cv.model.EventTypes.REQUEST_STAGE_UPDATE,
        		this._onStageUpdateRequest.bind(this));
    },
    
    listNotificationInterests: function(){
    	return [cv.model.NotificationTypes.SLIDE_LEFT,
    	        cv.model.NotificationTypes.SLIDE_RIGHT,
    	        cv.model.NotificationTypes.CHANGE_INDEX,
    	        cv.model.NotificationTypes.RESIZE];
    },
    
    handleNotification: function(notification){
    	
    	switch(notification.name){
    	
    	    case cv.model.NotificationTypes.SLIDE_LEFT :
    	    	
    	    	this.viewComponent.slideLeft();
    	    	break;
            case cv.model.NotificationTypes.SLIDE_RIGHT :
            	
    	    	this.viewComponent.slideRight();
    	    	break;
            case cv.model.NotificationTypes.CHANGE_INDEX : 
            	
            	this.viewComponent.changeActiveIndex(notification.getBody());
            	this.facade.sendNotification(cv.model.NotificationTypes.INDEX_CHANGED);
            	break;
            case cv.model.NotificationTypes.RESIZE : 
            	this.viewComponent.redraw(notification.getBody());
            	break;
    	    default : 
    	    	cv.utils.Logger.log("RevisionGraphMediator : unhandled notification");
    	}
    },

    _onRevisionsLoaded: function(){

    	this.viewComponent.update(this._repoDataProxy.activeRevisionIndex,
        		                  this._repoDataProxy.currentPage);
        this._repoDataProxy.addEvent(cv.model.EventTypes.ACTIVE_REV_CHANGE,
                this._onActiveRevChanged.bind(this));
    },
    
    _onActiveRevChanged: function() {
    	
    	this.viewComponent.changeActiveIndex(this._repoDataProxy.activeRevisionIndex);
    },
    
    _onCarouselSlideComplete: function(){
    	
    	this.facade.sendNotification(cv.model.NotificationTypes.CAROUSEL_SLIDE_COMPLETE);
    },
    
    _onSelectPrevious: function(){
    	this.facade.sendNotification(cv.model.NotificationTypes.PREVIOUS_REVISION);
    },
    
    _onSelectNext: function(){
    	this.facade.sendNotification(cv.model.NotificationTypes.NEXT_REVISION);
    },
    
    _onRenderComplete: function(){
    	
    	this.facade.sendNotification(cv.model.NotificationTypes.GLYPH_RENDERING_COMPLETE);
    },
    
    _onStageUpdateRequest: function(){
    	
    	this.facade.sendNotification(cv.model.NotificationTypes.REQUEST_STAGE_UPDATE);
    }
    
});

cv.view.RevisionGraphMediator.NAME = "RevisionGraphMediator";

/**
 * src/com/ibeam/cv/view/mediators
 *
 * @class RevisionInfoMediator.js - listens to data changes and
 * updates rev info panel accordingly.
 *
 * @extends
 *
 * @author pebanfield
 *
 * 12:39:16 AM2011
 *
 */
cv.view.RevisionInfoMediator = new Class({

    Extends: Mediator,
    _repoDataProxy: null,

    initialize: function(viewComponent){

        this.parent(cv.view.RevisionInfoMediator.NAME, viewComponent);
    },

    setData: function(data){

        this._repoDataProxy = data;
        this._repoDataProxy.addEvent(cv.model.EventTypes.REPO_TITLE_CHANGE,
                                    this.onRepoTitleChanged.bind(this));
        this._repoDataProxy.addEvent(cv.model.EventTypes.ACTIVE_REV_CHANGE,
                                    this.onActiveRevChanged.bind(this));
    },

    onActiveRevChanged: function(evtObj){

        this.viewComponent.update(evtObj);
    },

    onRepoTitleChanged: function(evtObj){

        this.getViewComponent().setRepoPathTitle(evtObj);
    }
});

cv.view.RevisionInfoMediator.NAME = "RevisionInfoMediator";

/**
 * src/com/ibeam/cv
 *
 * @class ApplicationFacade.js - The concrete PureMVC facade singleton. 
 *  An abstraction providing access to Model, View and Controller utilities.  
 *  
 * @extends Facade
 * 
 * @author pebanfield
 *
 * 11:05:19 AM2011
 * 
 */
cv.ApplicationFacade = new Class({

    Extends: Facade,

    initializeController: function()
    {
		this.parent();
		this.registerCommand(cv.model.CommandTypes.INITIALIZE_APP, 
				 cv.commands.InitAppCommand);
    },

    startup: function(viewComponent)
    {
    	this.sendNotification(cv.model.CommandTypes.INITIALIZE_APP, viewComponent);
    }
});

cv.ApplicationFacade.getInstance = function()
{
    if (Facade.instance == undefined)
    {
		Facade.instance = new cv.ApplicationFacade();
    }
    return Facade.instance;
};




/**
 * src/com/ibeam/cv/commands/data
 *
 * @class RequestRevDataCommand.js - Performs a JSON request on a remote
 * restful service. Both GITHUB and Lichen SVN service types are supported.
 * This command handles request success and failure and updates appropriate
 * proxy objects. Two separate request utility classes encapsulate request
 * signature differences.
 *
 * @extends SimpleCommand
 *
 * @author pebanfield
 *
 * 1:41:50 PM2011
 *
 */

cv.commands.RequestRevDataCommand = new Class({

    Extends: SimpleCommand,

    execute: function(notification){

        var configProxy = this.facade.retrieveProxy(cv.model.ConfigProxy.NAME);
        var repoDataProxy = this.facade.retrieveProxy(cv.model.RepoDataProxy.NAME);

        repoDataProxy.activeRevisionIndex = -1;
        
        var noteObj = notification.getBody();
        
        if(notification.getBody().requestor){
        	
        	 configProxy.requestor = notification.getBody().requestor;
             repoDataProxy.cvsType = configProxy.requestor.type;
             configProxy.requestor.setMethod('GET');
        }
        
        if(notification.getBody().pageNum != undefined){
        	configProxy.requestor.setPageNum(notification.getBody().pageNum);
        	configProxy.requestor.generateUrl();
        }
        configProxy.requestor.successHandler = this.successHandler;
        configProxy.requestor.failureHandler = this.failureHandler;

        try {
        	configProxy.requestor.send();
        }catch(e){
            cv.utils.Logger.log(e.message);
        }
    },

    successHandler:function(result){

         var rdProxy = mainView.facade.retrieveProxy(cv.model.RepoDataProxy.NAME);
         
         rdProxy.repoLocation = result.repoLocation;
         rdProxy.setRepoRootPath(result.repoRootPath);
         var isLatest = result.isLatest;
         var isFirst = result.isFirst;
         rdProxy.addPage(cv.model.DataParser.parseRevisions(result), isLatest, isFirst);

        /* if(rdProxy.cvsType == VCSTypes.SVN){
             rdProxy.setRevisions(SVNDataParser.parseRevisions(result));
         }
         else if(rdProxy.cvsType == VCSTypes.GIT){
             rdProxy.setRevisions(GitDataParser.parseCommits(result));
             this.facade.sendNotification(CommandTypes.REQUEST_ENTRY_DATA,
                                          this.$requestor);
         }
*/
         //rdProxy.setActiveRevision(rdProxy.getRevisions().length-1);
    },

    failureHandler:function(result){
        cv.utils.Logger.log("JSON Request failed = " + result);
    }


});

/**
 * src/com/ibeam/cv/commands/initialization
 *
 * @class ShowAppCommand.js - 
 *
 * @extends SimpleCommand
 *
 * @author pebanfield
 *
 * 10:37:05 AM2011
 *
 */
cv.commands.AppReadyCommand = new Class({

    Extends: SimpleCommand,

    execute: function(notification)
    {
       var appMediator = 
    	   this.facade.retrieveMediator(cv.view.ApplicationMediator.NAME);
       var mainView = appMediator.viewComponent;
       mainView.visible(true);

    }
});/**
 * src/com/ibeam/cv/commands/initialization
 *
 * @class InitAppCommand.js - Application initialization logic divided into
 * child commands. The MacroCommand base class provides easy application
 * configuration.
 *
 * @extends MacroCommand
 *
 * @author pebanfield
 *
 * 10:37:05 AM2011
 *
 */
cv.commands.InitAppCommand = new Class({

    Extends: MacroCommand,

    initializeMacroCommand: function()
    {
        this.addSubCommand(cv.commands.RegisterCommand);
        this.addSubCommand(cv.commands.InitModelCommand);
        this.addSubCommand(cv.commands.InitAppControlCommand);
        this.addSubCommand(cv.commands.InitViewCommand);
    }
});


/**
 * src/com/ibeam/cv/commands/initialization
 *
 * @class InitAppControlCommand.js - Initializes AppMediator
 * instance.
 *
 * @extends SimpleCommand
 *
 * @author pebanfield
 *
 * 10:37:05 AM2011
 *
 */
cv.commands.InitAppControlCommand = new Class({

    Extends: SimpleCommand,

    execute: function(notification)
    {
        var mainView = notification.getBody();

        var appMediator = new cv.view.ApplicationMediator(mainView);
        var keyboard = new Keyboard({
            defaultEventType: 'keyup'
        });
        appMediator.setKeyboard(keyboard);
        this.facade.registerMediator(appMediator);

    }
});

/**
 * src/com/ibeam/cv/commands/initialization
 *
 * @class InitModelCommand.js - Initializes the RepoDataProxy &
 *  utility delegate for accessing SVN Repository JSON service.
 *
 * @extends SimpleCommand
 *
 * @author pebanfield
 *
 * 10:37:05 AM2011
 *
 */
cv.commands.InitModelCommand = new Class({

    Extends: SimpleCommand,

    execute: function(notification){
        //TODO - set JSON delegate
        this.facade.registerProxy(new cv.model.RepoDataProxy());
        this.facade.registerProxy(new cv.model.ConfigProxy());
    }
});



/**
 * src/com/ibeam/cv/commands/initialization
 *
 * @class InitViewCommand.js - Application initialization logic divided into
 * child commands. The MacroCommand base class provides easy application
 * configuration.
 *
 * @extends MacroCommand
 *
 * @author pebanfield
 *
 * 10:37:05 AM2011
 *
 */
cv.commands.InitViewCommand = new Class({

    Extends: SimpleCommand,

    execute: function(notification){

    	var rdProxy =
            this.facade.retrieveProxy(cv.model.RepoDataProxy.NAME);
        var configProxy = 
        	this.facade.retrieveProxy(cv.model.ConfigProxy.NAME);
        
        var appMediator = 
        	this.facade.retrieveMediator(cv.view.ApplicationMediator.NAME);
        var mainView = appMediator.viewComponent;
        
        configProxy.lineColor = mainView.lineColor;
        
        //TODO - refactor - messy
        rdProxy.currentPageSize = appMediator.listControlLength;
        rdProxy.viewportWidth = configProxy.viewportWidth;
        
        if(mainView.getStage()){
            
            var background = new cv.view.Bullseye(mainView.getStage(), 1000, configProxy.lineColor);
            
            var revInfoPanel = new cv.view.RevisionInfoPanel();
            var revInfoMediator = new cv.view.RevisionInfoMediator(revInfoPanel);
            revInfoMediator.setData(rdProxy);

            var revGraph = 
            	new cv.view.RevisionGraph(mainView.getStage(), 
            			                  configProxy.viewportWidth);
            var revGraphMediator = 
            	new cv.view.RevisionGraphMediator(revGraph);
            revGraphMediator.setData(rdProxy); 
            this.facade.registerMediator(revGraphMediator);
           
            var rangeScroller = 
            	new cv.view.RangeScroller(appMediator.getRangeScrollerWidth(), configProxy.lineColor);
            var rangeScrollerMediator = 
            	new cv.view.RangeScrollerMediator(rangeScroller);
            rangeScrollerMediator.setData(rdProxy);
            this.facade.registerMediator(rangeScrollerMediator);
            
            var entryInfoPanel = 
            	new cv.view.EntryInfoPanel(configProxy.lineColor);
            var entryInfoMediator = 
            	new cv.view.EntryInfoMediator(entryInfoPanel);
            this.facade.registerMediator(entryInfoMediator);
           
        }
        else{
            $('root').appendText("Sorry - this application requires HTML5 support.");
        } 
    }
});

/**
 * src/com/ibeam/cv/commands/initialization
 *
 * @class RegisterCommand.js - 
 *  
 * @extends 
 * 
 * @author pebanfield
 *
 * 9:29:08 PM2011
 * 
 */
cv.commands.RegisterCommand = new Class({

    Extends: SimpleCommand,

    execute: function(notification)
    {
		this.facade.registerCommand(cv.model.CommandTypes.REQUEST_REV_DATA, 
			 cv.commands.RequestRevDataCommand);
		this.facade.registerCommand(cv.model.CommandTypes.APP_READY, 
				 cv.commands.AppReadyCommand);
		this.facade.registerCommand(cv.model.CommandTypes.AUTO_LOAD_CODE_STYLE, 
				 cv.commands.InitCodeViewCommand);
    }
});