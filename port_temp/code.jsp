<%@ page session="false" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>Code Display</title>
	<script type="text/javascript" src="${resourceUrl}/js/highlighter/XRegExp.js"></script> <!-- XRegExp is bundled with the final shCore.js during build -->
	<script type="text/javascript" src="${resourceUrl}/js/highlighter/shCore.js"></script>
	<script type="text/javascript" src="${resourceUrl}/js/highlighter/shAutoloader.js"></script>
	<link type="text/css" rel="stylesheet" href="${resourceUrl}/css/highlighter/shCore.css"/>
	<link type="text/css" rel="Stylesheet" href="${resourceUrl}/css/highlighter/shThemeDefault.css" />
</head>

<body>

<div><script type='syntaxhighlighter' class="${param.style}"><![CDATA[ + ${param.code} + ]]></script></div>

<script type="text/javascript">
var resourceUrl = '${resourceUrl}/js/highlighter';

SyntaxHighlighter.autoloader(
	'applescript			' + resourceUrl + '/shBrushAppleScript.js',
	'actionscript3 as3		' + resourceUrl + '/shBrushAS3.js',
	'bash shell				' + resourceUrl + '/shBrushBash.js',
	'coldfusion cf			' + resourceUrl + '/shBrushColdFusion.js',
	'cpp c					' + resourceUrl + '/shBrushCpp.js',
	'c# c-sharp csharp		' + resourceUrl + '/shBrushCSharp.js',
	'css					' + resourceUrl + '/shBrushCss.js',
	'delphi pascal			' + resourceUrl + '/shBrushDelphi.js',
	'diff patch pas			' + resourceUrl + '/shBrushDiff.js',
	'erl erlang				' + resourceUrl + '/shBrushErlang.js',
	'groovy					' + resourceUrl + '/shBrushGroovy.js',
	'java					' + resourceUrl + '/shBrushJava.js',
	'jfx javafx				' + resourceUrl + '/shBrushJavaFX.js',
	'js jscript javascript	' + resourceUrl + '/shBrushJScript.js',
	'perl pl				' + resourceUrl + '/shBrushPerl.js',
	'php					' + resourceUrl + '/shBrushPhp.js',
	'text plain				' + resourceUrl + '/shBrushPlain.js',
	'py python				' + resourceUrl + '/shBrushPython.js',
	'ruby rails ror rb		' + resourceUrl + '/shBrushRuby.js',
	'scala					' + resourceUrl + '/shBrushScala.js',
	'sql					' + resourceUrl + '/shBrushSql.js',
	'vb vbnet				' + resourceUrl + '/shBrushVb.js',
	'xml xhtml xslt html	' + resourceUrl + '/shBrushXml.js'
);


SyntaxHighlighter.all();
</script>
</body>
</html>

