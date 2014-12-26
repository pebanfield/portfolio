<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
    <%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>
<div id="homeContent">
   <div id="contentLeft"> 
    <div class="about">
     <p>I've recently returned to Seattle, Washington after 4.5 years working abroad in London, UK.  I am currently looking for contract or permanent work.</p>
    </div>
   </div>
   <div id="dividerContainer">
     <div id="divider"></div>
   </div>
   
   <div id="contentRight">
   <div class="contact">
     <dl class="contactList">
      <dt class="contactItem"><span class="highlight">email : </span>pebanfield at gmail dot com</dt>
      <dt class="contactItem"><span class="highlight">mobile : </span>available following email contact</dt>
      <dt class="contactItem">Based in Seattle, Washington</dt>
    </dl>
   </div>
  </div>
</div>
