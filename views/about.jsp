<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
    <%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>
    <div class="about">
    <p><img src="${resourceUrl}/images/me.jpg"></img><span class="highlight">Ibeam Studio Limited</span> is a software engineering consultancy specializing in <span class="highlight">Rich Client</span> application development and design. <span class="highlight">Peter Emonds-Banfield</span> is the principal engineer 
    and brings over 10 years of industry experience.</p> 
    <p>Peter holds a <span class="highlight">M.Sc. Eng.</span>, from the <a href="http://www.hcde.washington.edu/" target="_blank">University of Washington HCDE</a> (Human Centered Design &amp; Engineering).</p>
    
    <p>Expertise includes work in programming &amp; software architecture, UX&amp;D, prototyping and product design, test automation, release & build process, project planning, and team leadership. Peter has completed numerous projects for highly successful brands such as <span class="highlight">Microsoft &amp; MSN, Disney Internet Group, ESPN,
    BSkyB, BBC, Akamai and Amazon.</span></p> 
  
    </div>
