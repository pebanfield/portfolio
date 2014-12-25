<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ page session="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>
<tiles:importAttribute name="items"></tiles:importAttribute>
<tiles:importAttribute name="page"></tiles:importAttribute>
<!DOCTYPE html 
      PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
      "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" 
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink">

<head>
<meta name="viewport" content="width=device-width; initial-scale=1.0, maximum-scale=1, user-scalable=0">
<meta http-equiv="X-UA-Compatible" content="IE=9">
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
 <title><tiles:insertAttribute name="title" ignore="true" /></title>
 <link rel="shortcut icon" href="${resourceUrl}/images/ibeam.ico" />
 <link rel="stylesheet" href="${resourceUrl}/css/home.css" type="text/css"/>
</head>
<body>
 <div id="contentContainer">
    <div id="homeHeader">
    
      <div id="lichenLogo"><a href="."><img src="${resourceUrl}/images/ibeamHeaderLogo.gif" /></a></div>
      <div id="headerBg"></div>
      <div id="nav">
       <ul id="navItems">
        <c:forEach var="item" items="${items}">
          <c:choose>
           <c:when test="${item.value == page}">
           <li><a class="activeNav" href="${item.link}">${item.value}</a></li>
           </c:when> 
           <c:otherwise>
             <li><a class="nav" href="${item.link}">${item.value}</a></li>
           </c:otherwise>
         </c:choose>
         <c:if test="${item.link  != '.'}"> 
         <li>|</li>
         </c:if>
         </c:forEach>
        </ul>
       </div>
    </div>
    <tiles:insertAttribute name="body" />
    <tiles:insertAttribute name="footer" />
 </div> 
</body>
</html>
