<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<tiles:importAttribute name="items"></tiles:importAttribute>
<tiles:putAttribute name="id"></tiles:putAttribute>
<div id="homeHeader">
 <div id="lichenLogo">
     &nbsp;<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20">
       <g>
        <title>IbeamLogo</title>
        <circle id="svg_1" r="40" cy="0" cx="0" stroke-width="5" stroke="#000000" fill="#5fbf00"/>
        <circle id="c1" r="4" cy="10" cx="10" stroke="#ffffff" fill="none"/>
        <circle id="c2" r="8" cy="10" cx="10" stroke="#ffffff" fill="none"/>
     </g>
     </svg>
     <img src="${resourceUrl}/images/ibeam_studio.gif">&nbsp;</img>
  </div>
  
    <div id="headerBg"></div>
    <div id="nav">
      <p> the page = ${id}</p>
     <ul id="navItems">
      
       <c:forEach var="item" items="${items}">
         <c:choose>
           
           <c:when test="${item.value  == id}">
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
