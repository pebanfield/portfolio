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

<h1 class="projectHeader">BBC News Player</h1>
  
<div class="projectDetails">    
  <p><img alt="BBC News Player" src="${resourceUrl}/images/bbcNewsPlayer2.jpg"></img><br/>The BBC News Player project involved rebuilding an earlier version of the media player codebase. For this project the extremely popular player was completely overhauled to run within a new Flash runtime supporting ActionScript 3 called AVM2. A new user experience design with new controls and features was also introduced.
  <br/><br/>During this project my role was to lead the media player team for development and refactoring. I also attended numerous stake holder meetings and helped the product team communicate project time frames to BBC News management. As this project introduced the first client build of a new codebase, this was an extremely challenging project. The BBC News player was already an established application with millions of daily users and so quality expectations were extremely high.</p>
  <br/><br/><p><img alt="BBC News Player" src="${resourceUrl}/images/bbcNewsPlayer1.jpg"></img><br/>The BBC News Player carousel.</p>
</div>

