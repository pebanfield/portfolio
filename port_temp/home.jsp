<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ page session="false" %>
<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>

<div id="homeContent">
   <div id="contentLeft"> 
    <div class="intro">
     <p><b>This is the portfolio of Peter Emonds-Banfield. I am an Object Oriented programmer specializing in Rich Client Application development. </b><br/><br/>
     I have recently returned to the Seattle area after 5 years working in London, U.K. Ibeam Studio was my limited company based in Britiain. I am currently looking for locally based permanent or contract work opportunities. 
     <br/><br/>My technical expertise is focused within the following areas : </p>
     <ul>
      <li>Application Design</li>
      <li>OOP Javascript</li>
      <li>Streaming Video</li>
      <li>HTML5</li>
      <li>UX&D</li>
      <li>Desktop &amp; Mobile</li>
      <li>Embedded applications</li>
     </ul>
     <blockquote>"We shape our tools and then our tools shape us."<br/><br/><i> - Marshall McLuhan</i></blockquote>
    </div>
   </div>
   <div id="dividerContainer">
     <div id="divider"></div>
   </div>
   <div id="contentRight">
    <div class="item">
      <h2><a href="./nowtv">Featured Project : NowTV on PS3!</a></h2>
      <a href="./nowtv"><img src="${resourceUrl}/images/nowtv.jpg" class="highlight"></a>
      <p><a href="http://www.nowtv.com" target="_new">NowTV</a> is a Sky powered Video On Demand service and Netflix competitor. This <a href="http://en.wikipedia.org/wiki/Single-page_application" target="_new" >single-page</a> JavaScript application is built to run on the PS3 gaming console. <a href="./nowtv">Read More&#46;&#46;&#46;</a></p>
     
    </div>

</div>