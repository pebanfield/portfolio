<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
    <%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<spring:eval expression="@applicationProps['application.version']" var="applicationVersion"/>
<spring:url value="/resources-{applicationVersion}" var="resourceUrl">
    <spring:param name="applicationVersion" value="${applicationVersion}"/>
</spring:url>
  <div id="homeContent">

		<div class="projects">
		<h3>Projects 2012</h3>
		<hr	class="proj"/>
		<h4><a href="./nowtv">NowTV - powered by Sky</a></h4>
			<p>High Volume VOD Streaming on Sony PS3</p>

			<ul	class="link">
					<li>Application design</li>
					<li>OOP Javascript</li>
					<li>QUnit Unit Testing</li>
					</ul>
		<hr	class="proj"/>
		<h4>Amazon Instant Video</h4>
			<p>Streaming Analytics Implementation</p>

			<ul	class="link">
					<li>Integration of Amazon Analytics</li>
					<li>OOP Javascript</li>
					<li>HTML/CSS</li>
					<li>QUnit Unit Testing</li>
					<li>Streaming playback testing</li>
					<li>Jenkins build automation</li>
					</ul>
		<h3>Projects 2011</h3>
		<hr	class="proj"/>
			<h4><a href="./hds">BBC Adobe HDS Integration</a></h4>
			<p>Enhancement for the BBC iPlayer for broadcast scale streaming events.</p>

			<ul	class="link">
			        <li>ActionScript 3</li>
			        <li>Restful web services</li>
					<li>Integration of broadcast scale streaming library</li>
					<li>Project Planning &amp; Technical Specifications</li>
					<li>HTML/Javascript</li>
					</ul>
			<h4><a href="./iplayer">BBC iPlayer v3</a></h4>

			<ul	class="link">
					<li>Rebuild of EMP v2 for AS3 and Pure MVC</li>
					<li>Project Planning &amp; Technical Specifications</li>
					<li>UX&D</li>
                    <li>HTML/Javascript</li>
					</ul>
			<h4><a href="./newsplayer">BBC News Media Player v3</a></h4>
			<p>This project involved a complete redesign and rearchitecture of the BBC Embedded Media Player.</p>

			<ul	class="link">
					<li>Rebuild of EMP v2 for AS3 and Pure MVC</li>
					<li>Project Planning &amp; Technical Specifications</li>
                    <li>HTML/Javascript</li>
					</ul>
		<h3>Projects 2010</h3>
		<hr	class="proj"/>
		<h4>ITV Player &amp; Akamai HD</h4>
			<p>This integration project involved the enhancement of ITV player for broadcast scale streaming events.</p>

			<ul	class="link">
					<li>Integration of broadcast scale streaming library</li>
					<li>Project Planning &amp; Technical Specifications</li>

					</ul>
			<h4>BBC iPlayer &amp; Akamai HD</h4>
			<p>Integration of the Akamai HD platform for increased World Cup streaming capacity.
            </p>

			<ul	class="link">
					<li>Integration of broadcast scale streaming library</li>
					<li>Project Planning &amp; Technical Specifications</li>
					<li>Pure MVC architecture</li>
					<li>Streaming security</li>
					<li>Proprietary reporting</li>

					</ul>
					<br/>
		<h3>Projects 2009</h3>
			<hr	class="proj"/>
			<h4>BBC Future Media Technology Prototyping</h4>
			<p>Flash development &amp; interaction design for the 10ft experience.</p>

			<ul	class="link">
					<li>AS3 architecture and development.</li>
					<li>User Experience design</li><li>Interaction Design</li>

					</ul>
			
			<h4>Sky News Player</h4>
			<p>The Sky News video player includes a broad range of standard online video player features.
            </p>

			<ul	class="link">
					<li>AS3 architecture and development.</li>
					<li>Technical Project Management</li>
					<li>Helped with QA strategy and sprint planning.</li>
					<li>Prototyping &amp; design</li>

					</ul>
					<br/>
		<h3>Projects 2008</h3>
		<hr	class="proj"/>	
			<h4>Miniweb Interactive TV Prototyping</h4>
			<p>Protoyping and design work for the "lean-back" experience.</p>

			<ul	class="link">
					<li>AS3 architecture and development.</li>
					<li>User Experience design</li><li>Flash and Photoshop graphics production </li>

					</ul>
			<h4>Disney Internet Rich Media Ads Framework</h4>
			<p>A Rich Media and video streaming VAST compliant advertising framework.</p>

			<ul	class="link">
					<li>AS3 architecture and development.</li>
					<li>Contributed to concepting and product design.</li>
					<li>Helped with QA strategy and sprint planning.</li>
					<li>Sample application development.</li>
					<li>Product support for Disney BUs</li>

					</ul>
					<br/>
			
			<h3>Projects 2007</h3>
			<hr	class="proj"/>
			<h4>Disney Internet Media Player Framework</h4>
			<p>The MPF initiative at Disney Internet Group provided a unified framework for Disney Rich Media applications. </p>

			<ul	class="link">
					<li>Design and development of AS3 component framework for video applications.</li>
					<li>Architecture and core video functionality.</li>
					<li>Prototypes and sample applications.</li>
					<li>Flex Unit test suite.</li></ul>
			
			
			<h4>Halo 3 Promotional Site</h4>

			<p>The Halo 3 video game promotional site was served to over 5 million unique visitors :</p>
			<ul	class="link">
					<li>ActionScript 3 programming and architecture.</li>
					<li>participated in SCRUM based sprint planning. </li>
					<li>Interaction design</li>
					<li>Custom AS3 videoplayer</li>
					<li>ASP.NET & HTML/Javascript/CSS</li>
					</ul>

		</div>
	</div>
