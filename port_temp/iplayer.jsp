<%@ page import="java.util.*" %>
<%@ page import="com.ibeam.lichen.control.utils.Utils" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
    <%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>
<div id="singleProject">
<h1 class="projectHeader">BBC iPlayer</h1>
  
<div class="projectDetails">  
  <p><img alt="BBC iPlayer" src="${resourceUrl}/images/iPlayer_emp.jpg"></img><br/>This work involved leading a team to replace an earlier version of the BBC online player called iPlayer. This streaming media player is the most popular online media client in Britain and serves an average of more than 5 million streams per day across both browser based, desktop and varied embedded devices. My role was to manage and re-architect the award-winning client application. Sprint based development included a broad range of features including several streaming formats, CDN redundancy, subtitling, theme configuration, etc. A new user experience design was also introduced.<br/><br/>
  During the project we overhauled the entire codebase and moved from the previous AVM1 platform to the newer AVM2 runtime and AS3. We leveraged the Pure MVC micro-architecture and did unit testing and eventually ran continuous integration builds across multiple product configurations. I played a central role throughout as a programmer and technical manager. I also supported product management to communicate technical constraints and time frame estimates to stake holders.<br/><br/>Our new release included true dynamic streaming with a custom set of stream switching heuristics. This feature improved streaming quality and increased overall bandwidth consumption as users streamed more content at higher end bitrates. Thus usage metrics reflected a significant improvement to service. The general design was also improved and the refactored codebase cut the client application download size by roughly half of the original size. </p>
</div>	
</div>
