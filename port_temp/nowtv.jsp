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

<h1 class="projectHeader">Now TV : Powered by Sky</h1>
 
 <div class="projectDetails">
    <p><img alt="Now TV App" src="${resourceUrl}/images/nowTV_app.jpg"></img><br/>The Now TV streaming media application was developed for <a href="http://www.sky.com/" target="_blank">British Sky Broadcasting</a> on the proprietary Sony Europe platforms libjscript and UxBridge. libjscript is an unmanaged C++ component exposing a javascript API. It leverages Microsoft Smooth Streaming and PlayReady DRM for dynamic streaming and content protection.
    <br/><br/>The NowTV application is 'single page', AJAX style JavaScript application. The heavily data-driven design is integrated with a Java based REST service and manages a complex range of application states. Application development covered a broad range of standard video features including media browsing, authentication, user personalisation, purchase and Live and VOD playback.</p>
    <br/><br/><p><img alt="Now TV Team" src="${resourceUrl}/images/NowTV_Team.jpg"></img><br/>The Now TV project is a competitor for NetFlix in the U.K. The product is being developed simultaneously for multiple platforms and devices including; Web, IOS, Android, XBox 360, Sony PS3, Roku, connected TVs and cable set top box devices. A single Java based REST services API provided content and session data and streaming platform access for the entire range of client application builds. <br/><br/>We developed our own Java based mock service and custom continuous integration framework for unit testing our Javascript client modules. This CI framework leveraged a Jenkins build server and NodeJS and client test utilities. Our team practiced Agile SCRUM for two week product iterations and employed XP style pairing sessions and code reviews.</p>
</div>

</div>

