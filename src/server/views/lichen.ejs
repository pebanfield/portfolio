<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
    <%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>
<script type="text/javascript" src="${resourceUrl}/js/mootools-lib.js"></script>
<script type="text/javascript">
         
   /**
   * ******* Main application Entry ***********
   * 
   * ******************************************
   */
   window.addEvent('domready', function()
   {
	   //  <a href="changeview?type=gitVCStype&method=/pebanfield/GITHUB_Display&pageNum=0&pageSize=10"> -->  
	   var test = $('launchBtn');
	   $('repoLoader').addEvent("submit", this._onViewRepo.bind(this));
	   
	   $('repoURL').addEvent("focus", this._onFocus.bind(this));
	   $('repoURL').addEvent("blur", this._onBlur.bind(this));
	   $('repoURL').set("value", instructionText);
	   
   });
   
   var instructionText = "Enter repo path here - example '/pebanfield/myreponame' ";
   var errorText = "Please enter a github repository path.";
   var githubUrl = "api.github.com/repos";
   
   var _onViewRepo = function(){
	   
	   event.preventDefault();
	  // location.href = "changeview?type=gitVCStype&method=/pebanfield/GITHUB_Display&pageNum=0&pageSize=10";
       var path = $("repoURL").value;
       
	   var httpCheck = path.search("http://");
	   var httpsCheck = path.search("https://");
	   var domainCheck = path.search(githubUrl);
	   
	   if(path == errorText){
		   $('repoURL').set("value", errorText);
		   $('repoURL').setStyle("color", "#ff0000");
		   return; 
	   }
	   //detect url of non supported domain
	   if(httpCheck != -1  && domainCheck == -1 || 
	      httpsCheck != -1 && domainCheck == -1){
		   $('repoURL').set("value", errorText);
		   $('repoURL').setStyle("color", "#ff0000");
		   return; 
	   }
	   
       var validateStr = this._validateRepoPath(path);
       
       validateStr = this._checkForLeadingSlash(validateStr);
       
       if(validateStr == instructionText){
    	   $('repoURL').set("value", errorText);
    	   $('repoURL').setStyle("color", "#ff0000");
       }else{
    	   
    	   $('repoURL').set("value", validateStr); // "/pebanfield/GITHUB_Display";
           $('repoLoader').submit();
       }
       
   };
   
   /*
   * Removes github url root to show just the repo path
   * as the service already concatenates domain
   */
   var _validateRepoPath = function(path){
	   
	   path = path.replace("https://", "");
	   path = path.replace(githubUrl, "");
       var slash = "/";
       if(path[0] != slash){
    	   slash.concat(path);
       }
       return path;
   };
   
   var _checkForLeadingSlash = function(path){
	   
	   var firstChar = path.charAt(0);
	   var slash  = "/";
	   
	   if(firstChar != slash){
		   path = slash.concat(path);
	   }
	   return path;
   };
   
   var _onFocus = function(){
	   
	   console.log("focus ");
	   console.log("instructionText = " + instructionText);
	   console.log("$(repoURL).value = " + $("repoURL").value);
	   if($("repoURL").value == instructionText ||
		  $("repoURL").value == errorText){
		   $('repoURL').set("value", "");
	   }
	   
   };
   
   var _onBlur = function(){
	   
	   $('repoURL').set("value", $("repoURL").value.replace(/\s/g, ""));
	   
	   if($("repoURL").value == ""){
		   $('repoURL').set("value", instructionText);
	   }
   };

</script>
<div id="homeContent">
   <div class="lichenLeft"> 
     <div class="launch">
       <h2 class="section">Lichen : Change View</h2>
      
       <img class="lcv" src="${resourceUrl}/images/lcv.jpg" ></img>
       
   
        <form id="repoLoader" action="changeview">
         <!--  Theme : <select name="theme">
         <option value="blueprint" selected="selected">blueprint</option>
         <option value="clarity">clarity</option>
         </select>
         window<input type="checkbox" name="window" value="new"/><br/>--> 
         <input type="text" name="method" id="repoURL" />
         <input type="submit" value="View Repo" id="launchBtn"/>
         <input type="hidden" value="1" name="pageNum"/>
         <input type="hidden" value="10" name="pageSize"/>
         <input type="hidden" value="gitVCStype" name="type"/>
        </form>
     
     </div>
    
   </div>
   <div class="lichenRight">
   <div id="install">
   
   <div class="gitExplore">
   <a href="https://github.com/explore" target="_new" ><img class="gitLogo" src="${resourceUrl}/images/social_github.jpeg"></img></a>
   <h3 class="section">QUICK LINKS</h3>
     <p><a href="https://github.com/explore" target="_new" >Explore</a> public github projects. </p>
     <p><b> - or - </b></p>
     <p><a href="changeview?type=gitVCStype&method=/pebanfield/GITHUB_Display&pageNum=1&pageSize=10" ><img class="gitSample" src="${resourceUrl}/images/github.jpg"></img></a><br/>View the <a href="changeview?type=gitVCStype&method=/pebanfield/GITHUB_Display&pageNum=1&pageSize=10">sample repository.</a></p>
   </div>
   <h3 class="learn">Learn More About the Project</h3> 
   <ul class="rationale">
     <li><a href="#what">How does it work?</a></li>
     <li><a href="#what">What is it?</a></li>
     <li><a href="#primary">Primary Use Cases</a></li>
     <li><a href="#design">The Design</a></li>
    </ul>
    </div>
   </div>
   
   <div class="lichenContent">
    <p>&nbsp;</p><p>&nbsp;</p>
    <h3><a name="what">How does it work?</a></h3>
    <ol>
      <li>Browse the open github projects available from the github explore page. </li>
      <li>Copy the repository path, example "/sample/project"</li>
      <li>Enter the path into the "View Repo" field and click the button.</li>
    </ol>
    
    <h3><a name="what">What is it?</a></h3>
    <p><img class="design" src="${resourceUrl}/images/lichen_rock.jpg" ></img>Changeview is a graphical version of the standard history view typically available for source control systems. Central to the design is an experimental data visualization for software change management metadata. The current version can be used to explore any Github hosted public repository.</p>
    <p>&nbsp;</p>
    <h3><a name="primary">Primary Use Cases</a></h3>
    <p>The Changeview design considered three primary use case scenarios;</p>
      <ol>
        <li>isolating software regressions</li>
        <li>learning platform code & software systems</li>
        <li>observing project activity</li>
      </ol>
     <p>The application design attempts to accommodate both software engineers and software managers and presents a range of changes visually. As a programmer, my intention was to improve the history view for performing source control related tasks important for programmers.</p>
    <h3>Effective Source Control Practices</h3>
    <p>There is much discussion around programming best practice and software development methodology, e.g., <a href="http://en.wikipedia.org/wiki/Extreme_programming" target="_blank">extreme programming</a>. This does not typically include recommendations around how to use source control tools. For mid to large software projects with multiple team members source control is critical and deserves consideration.</p>
    <p>For many programmers using source control is an afterthought and the focus is on the end result - the code artifact and not the process. This often leads to a small number of large and poorly annotated commits. This is not the most effective approach to using source control and complicates the task of identifying regressions. </p>
    <p>The Changeview design works better where individual commits are "atomic" and relate specifically to single features, tasks, or bug fixes. A concise, but meaningful annotation is usually indicative of a more careful change whereas poorly labeled large commits are not fully leveraging source control. </p>
    <p>When combined with a more conscientious approach to committing changes, the Changeview visualizations may provide some useful insights. The visualized relationships between files might be useful for architectural analysis and may indicate how to further improve application design and modularity. This is a central aspect of this experimental project.</p>
    <h3><a name="design">The Design</a></h3>
    <h4> - Visual Pattern Matching</h4>
    <p><img class="design" src="${resourceUrl}/images/rangeScroller.jpg" ></img>The primary aim of the design was to improve productivity by leveraging users instinctive pattern recognition skills. Combined with domain knowledge and expertise visual pattern recognition can be a powerful mechanism. Special care must be taken, however, to present data visually in a way that is both intuitive and intentional without being misleading. This design is experimental and does take some risks in an effort to present something new.</p>
    <h4> - Not perfect but Not random</h4>
    <p>An effective data visualization allows for trends to "emerge" that are not immediately obvious when data is presented non visually. These apparent visual characteristics should be truthful, but there are often edge cases that unintentionally disrupt the design. </p>
    <p>It is important to note that this design does apply some visualization rules that are arbitrary in an effort to make the design work generally, but arbitrary rules are always applied consistently. A consistent display algorithm is key because without consistency the pattern recognition benefit would be lost.</p>
    <h4> - The Display Rules</h4>
    <p>When a repository is queried a standard historical dataset is displayed chronologically with the most recent revision displayed on the right hand side. Each revision or commit is rendered graphically according to a predetermined set of relative weightings. </p>
    <p>The weighting algorithm consists of a set of factored change properties, but could also be ordered with a more sophisticated approach (e.g., neural networks). The properties include file and revision metadata and values derived from the historical series (e.g., the total number of changes or authors for a given entry). There is a lifetime of detail and possibility here, but the project has focused on the visual design and so the weighting rules are relatively simple.</p>
    <p>The display logic orders the entries in each revision within a set of concentric circles at pre-specified positions like hours on an analog clock - the Changeview <i>concentric chart</i>. The goal of the visualization design is to depict entry relationships with traditional and intuitive Gestalt rules of composition. For example, entries with the highest relative importance are shown in the center of each revision glyph. Lessor valued entries are positioned on opposites sides and </p>
    <h4> - The Technical Design & Acknowledgements</h4>
    <p>I would like to give credit to the various open source tools leveraged for this project. </p>
    <p>This version of the application uses the <a href="http://developer.github.com/v3/git/" target="_blank" >github data API</a>. On the server it also uses the <a href="http://www.springsource.org/" target="_blank" >Spring Framework</a> and <a href="http://ehcache.org/" target="_blank" >eHcache</a> to transform the github schema and proxy and expire the repository cache. No repository data is persisted and exists only temporarily in application memory for an improved user experience.</p>
    <p>The client application uses <a href="http://www.createjs.com/#!/EaselJS" target="_blank" >easeljs</a> for HTML5 canvas drawing and <a href="http://www.createjs.com/#!/TweenJS" target="_blank" >tweenjs</a> for animation purposes. <a href="http://mootools.net/" target="_blank" >Mootools</a> and a <a href="http://trac.puremvc.org/PureMVC_JS/browser/branches/mootools" target="_blank">Mootools port of Pure MVC</a> are used for general application control logic and as a selector engine for DOM manipulation. The code view uses <a href="http://code.google.com/p/syntaxhighlighter/" target="_blank">syntaxhighlighter</a>.</p>
   </div>
</div>



