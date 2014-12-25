<%@ page session="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>
<!DOCTYPE html>
<html>
    <head>
        <title>Lichen : Change View</title>
        <link rel="shortcut icon" href="${resourceUrl}/images/cv.ico" />
        <meta name="viewport" content="width=device-width; initial-scale=1.0, maximum-scale=1, user-scalable=0">
        <link type="text/css" rel="stylesheet" href="${resourceUrl}/css/cv.css" type="text/css"/>
        <script type="text/javascript" src="${resourceUrl}/js/mootools-lib.js"></script>
        <script type="text/javascript" src="${resourceUrl}/js/PureMVC_JS_2_0_1_Min.js"></script>
        <script type="text/javascript" src="${resourceUrl}/js/easeljs-0.4.2.min.js"></script>
        <script type="text/javascript" src="${resourceUrl}/js/tweenjs-0.2.0.min.js"></script>
        <script type="text/javascript" src="${resourceUrl}/js/cv.js"></script>
        
        <script type="text/javascript">
            
            /**
             * ******* Main application Entry ***********
             * 
             * ******************************************
             */
           window.addEvent('domready', function()
           {
        	   //TODO - write skinning logic
        	    var lineColor;
        	    var colors = 
                		[{stroke: "#8DEB59", fill: "#B3FA8C"},
                		 {stroke: "#0296E0", fill: "#1ED2FA"},
                		 {stroke: "#FA1B27", fill: "#FA525B"},
                		 {stroke: "#F7C00A", fill: "#FADF11"},
                         {stroke: "#FA6B1E", fill: "#FA8A4D"},
                         {stroke: "#952DF7", fill: "#C893FA"},];
        	    	
        	    lineColor = "#ffffff";
               	$$('body').setStyle('background', '#162433');
               	$('annotation').setStyle('color', '#fff');
                $('linkLayer').setStyle('color', '#fff');
                $('headerBG').setStyle('height', '1px');
                $('headerBG').setStyle('top', '49px');
                $('time').setStyle('color', '#fff');
                $('time').setStyle('border-color', '#fff');
                $('loading').setStyle('color', '#fff');
                $('loading').setStyle('visibility', 'visible');
               	
        	    
                mainView = new cv.view.MainView(document.id('root'), lineColor);
                resourceRoot = "${resourceUrl}";
                
                var repoDataProxy = mainView.facade.retrieveProxy(cv.model.RepoDataProxy.NAME);
                repoDataProxy.setColors(colors);
                	
                var srConfig = new cv.model.ServiceRequestConfig();
                srConfig.type = "<c:out value='${param.type}' />";
                //srConfig.domain = "192.168.182.85:8080";
                srConfig.domain = "";
                srConfig.method = "/repodata/revisions";
                srConfig.repoPath = "<c:out value='${param.method}' />";
                repoDataProxy.currentRepoPath = srConfig.repoPath;
                srConfig.fullPath = "${resourceUrl}/revisions.txt";
                //srConfig.fullPath = "<c:out value='${param.method}' />";
                srConfig.isSecure = false;
                srConfig.pageNum = '${param.pageNum}';
                srConfig.pageSize = '${param.pageSize}';
                srConfig.requestObj = srConfig;
                var sRequestor = new cv.model.ServiceRequestor(srConfig);

                mainView.facade.sendNotification(cv.model.CommandTypes.REQUEST_REV_DATA, {requestor: sRequestor});
            });

        </script>
    </head>
    <body>
    
        <div id="root">
         <script type="text/javascript"> $('root').setStyle('visibility', 'hidden'); </script>
        <div id="loading">Loading <br/><img src="${resourceUrl}/images/loading.gif" height="30" width="30"/></div>
        <div id="headerBG"></div>
          <div id="repoHeader">
             
            <div id="repoTitle"><img src="${resourceUrl}/images/cvLogo.png"></img>&nbsp;&nbsp;&nbsp;<span id="time" class="time"></span>&nbsp;&nbsp;&nbsp;<span id="annotation" class="annotation"></span></div>
             <div id="headerRight">
               <div id="revSelector">
                <div id="prevRev"><a id="previousBtn" class="prevBtn" href="#"></a></div>
                <div id="revNumDisplay"></div>
                <div id="nextRev"><a id="nextBtn" class="nextBtn" href="#"></a></div>
               </div>
             </div>
             
         </div>
       
         <div class="infoPanel">
            <div id="infoHorizontal" class="infoLeft"><span class="infoLabel">Author</span> : <span class="infoValue"  id="author"></span>&nbsp;&nbsp;<span class="infoLabel">Entries</span> : <span class="infoValue" id="entriesNum"></span>&nbsp;&nbsp;<span class="infoLabel">SHA key</span> : <span class="infoValue" id="identifier"></span></div>
         </div>
        
        <div class="footer">
          <div id="historyNavigator">
           <div id="leftSelector">
             <a id="prevPageBtn" href="#"></a>&nbsp;&nbsp;<a id="b_prevBtn" href="#"></a>
           </div>
           <div id="rightSelector">
              <a id="b_nextBtn" href="#"></a>&nbsp;&nbsp;<a id="nextPageBtn" href="#"></a>
           </div>
           <div id="rangeScrollerContainer">  
             <div id="revLinkLayer"></div>
             <canvas id="rangeScroller"></canvas>
           </div>
          </div> 
         </div>
         <div id="swipeZone"></div>
         <div id="linkLayer"></div>
         <div id="entryDetails">
           <div id="entryInfo">
              <h3 id="entryTitle"></h3>
              <hr id="entryLine"></hr>
              <div id="entryVisuals"></div>
             <dl class="eInfoList">
                <dt id="sLabel" class="eInfoItem">Status : <span class="eInfoValue" id="status"></span>&nbsp; Size : <span class="eInfoValue" id="size"></span></dt>
                <dt id="aLabel" class="eInfoItem">Authors : <span class="eInfoValue" id="authors"></span>&nbsp; Changes : <span class="eInfoValue" id="changes"></span></dt>
                <dt id="siLabel" class="eInfoItem">Significance : <span class="eInfoValue"  id="significance"></span></dt>
                <dt id="vLabel" class="eInfoItem"><a href="#" id="viewChanges" target="_blank">View Changes >></a></dt>
              </dl>
           </div>
           <div id="closeBtnContainer">
               <a href="#" id="closeBtn" onclick=""><span id="closeBtn">x</span></a>
             </div>
         </div>
         <div id="revGraphContainer">
            <canvas id="revGraph"></canvas>
         </div>
      </div>
      <div id="preload">
             <img src="${resourceUrl}/images/arrowRight_hover.png" width="1" height="1"/>
             <img src="${resourceUrl}/images/arrowLeft_hover.png" width="1" height="1"/>
             <img src="${resourceUrl}/images/pagePrevious_hover.png" width="1" height="1"/>
             <img src="${resourceUrl}/images/pagePrevious_disabled.png" width="1" height="1"/>
             <img src="${resourceUrl}/images/pageNext_hover.png" width="1" height="1"/>
             <img src="${resourceUrl}/images/pageNext_disabled.png" width="1" height="1"/>
             <img src="${resourceUrl}/images/loading.gif" width="1" height="1"/>
        </div>
    </body>
    <script type="text/javascript">
    
   
    </script>
</html>