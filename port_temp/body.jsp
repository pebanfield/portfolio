<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>
