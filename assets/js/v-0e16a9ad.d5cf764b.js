"use strict";(self.webpackChunkabcjs=self.webpackChunkabcjs||[]).push([[411],{6315:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a={key:"v-0e16a9ad",path:"/upgrading/release-notes.html",title:"Release Notes",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Notes for Version 6.0.0",slug:"notes-for-version-6-0-0",children:[]},{level:2,title:"Notes for Version 5.9.0",slug:"notes-for-version-5-9-0",children:[]},{level:2,title:"Special note for Version 5.8.0:",slug:"special-note-for-version-5-8-0",children:[]},{level:2,title:"Special notes for Version 5.0.0:",slug:"special-notes-for-version-5-0-0",children:[]},{level:2,title:"Special notes for Version 4.0.0:",slug:"special-notes-for-version-4-0-0",children:[]},{level:2,title:"Special notes for Version 3.3.0:",slug:"special-notes-for-version-3-3-0",children:[]},{level:2,title:"Special note for Version 3.2.0:",slug:"special-note-for-version-3-2-0",children:[]},{level:2,title:"Special notes for Version 3.0:",slug:"special-notes-for-version-3-0",children:[]},{level:2,title:"API Changes for Version 3.0",slug:"api-changes-for-version-3-0",children:[]},{level:2,title:"API Changes for Version 3.0 Beta",slug:"api-changes-for-version-3-0-beta",children:[]},{level:2,title:"API Changes for Version 1.11",slug:"api-changes-for-version-1-11",children:[]},{level:2,title:"API Changes for Version 1.3",slug:"api-changes-for-version-1-3",children:[]},{level:2,title:"API Changes for Version 1.1",slug:"api-changes-for-version-1-1",children:[]}],filePathRelative:"upgrading/release-notes.md",git:{updatedTime:1614534873e3,contributors:[{name:"Paul Rosen",email:"paul@paulrosen.net",commits:5}]}}},700:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var a=n(6252);const i=(0,a._)("h1",{id:"release-notes",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#release-notes","aria-hidden":"true"},"#"),(0,a.Uk)(" Release Notes")],-1),s=(0,a.Uk)("Full release notes can be found in the "),o={href:"https://github.com/paulrosen/abcjs/blob/main/RELEASE.md",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Uk)("RELEASE.md"),l=(0,a.Uk)(" file."),d=(0,a.uE)('<h2 id="notes-for-version-6-0-0" tabindex="-1"><a class="header-anchor" href="#notes-for-version-6-0-0" aria-hidden="true">#</a> Notes for Version 6.0.0</h2><p>There has been a large change in the underlying SVG output. It should look exactly the same, but it will take up much less space. Also a number of inconsistencies in the way classes are applied has been fixed. If you are just using the library to output standard notation, you probably won&#39;t notice any difference. However, if you are querying the SVG directly, or setting CSS that targets elements, then you will need to retest.</p><p>There has been a change to the data that comes back from the click listener. This includes information if the user has dragged a note.</p><p>There are some minor improvements to the spacing of elements. That may slightly change how the music is laid out.</p><p>There have been many improvements to the audio quality. More improvements are coming, too!</p><h2 id="notes-for-version-5-9-0" tabindex="-1"><a class="header-anchor" href="#notes-for-version-5-9-0" aria-hidden="true">#</a> Notes for Version 5.9.0</h2><p>This is a beta version of the new synth method. It is likely there will be some changes to the API in the short run but hopefully not too much.</p><p>Please try this out and report any issues that you have.</p><h2 id="special-note-for-version-5-8-0" tabindex="-1"><a class="header-anchor" href="#special-note-for-version-5-8-0" aria-hidden="true">#</a> <strong>Special note for Version 5.8.0:</strong></h2>',9),h=(0,a.Uk)("A new method for creating synth sound is included as a "),c=(0,a._)("strong",null,"beta",-1),u=(0,a.Uk)(" release in this release. See "),p=(0,a.Uk)("Synth Documentation"),b=(0,a.Uk)(" for details in how to use it. That means that the current method of creating sound using midi.js will be deprecated at some point in the future. It will be supported in its current form as long as possible. The new synth is much smaller and faster and appears less buggy. It does not work on IE 11 or older browsers, however, so it might not yet be appropriate for your site."),f=(0,a.uE)('<h2 id="special-notes-for-version-5-0-0" tabindex="-1"><a class="header-anchor" href="#special-notes-for-version-5-0-0" aria-hidden="true">#</a> Special notes for Version 5.0.0:</h2><ul><li>The dependency on the Raphael library has been removed! This has made the minimized package 90K smaller, and has increased the speed of generating the SVG image by about 6 times!</li></ul><p>For the most common use of creating either the sheet music or the audio, there isn&#39;t any change.</p><p>However, if you use the animation callback in the audio to manipulate the notes, then be aware that, instead of receiving elements that are wrapped in a Raphael object, you now receive the actual SVG element. For the most common example of the animation functionality, the following was recommended to change the color of notes:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>element.attr({ fill: color });\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>That should be changed to:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>element.setAttribute(&quot;fill&quot;, color);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>If you do specific manipulation of the SVG, you will need to retest your code. The generated SVG, while it looks the same on the page, has changed somewhat. The selectors you use may return different results.</li></ul><h2 id="special-notes-for-version-4-0-0" tabindex="-1"><a class="header-anchor" href="#special-notes-for-version-4-0-0" aria-hidden="true">#</a> Special notes for Version 4.0.0:</h2><ul><li><p><strong>BREAKING CHANGE</strong>: The names of all the classes that are generated are now prefixed with <code>abcjs-</code>. Any code that searched for particular class names before will have to be adjusted.</p></li><li><p>The parameters have been combined into one set of parameters, instead of three sets like previous versions. The old way of calling the parameters will still work, but you are encouraged to use the new, simplified approach going forward.</p></li></ul><h2 id="special-notes-for-version-3-3-0" tabindex="-1"><a class="header-anchor" href="#special-notes-for-version-3-3-0" aria-hidden="true">#</a> Special notes for Version 3.3.0:</h2><ul><li><p>The build process has switched over to webpack. The minimization is now done with UglifyJS. This shouldn&#39;t cause any side effects.</p></li><li><p>The &quot;editor&quot; version of the library has been rolled into the &quot;basic&quot; version. There is only the &quot;basic&quot; and &quot;midi&quot; versions now, since the editor code doesn&#39;t add much to the size.</p></li><li><p>The npm version has a new export called &quot;signature&quot; that gives your javascript code some version information.</p></li><li><p>The documentation has all been moved to the <code>/docs</code> folder.</p></li><li><p>The examples have all been moved to the <code>/examples</code> folder.</p></li></ul><h2 id="special-note-for-version-3-2-0" tabindex="-1"><a class="header-anchor" href="#special-note-for-version-3-2-0" aria-hidden="true">#</a> Special note for Version 3.2.0:</h2><p>abcjs is proud to announce that it can now be installed with <code>npm</code>. Instead of including the minimized files on your page, you can use the library by doing the following in your project:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save abcjs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Note that the minimized versions will still be maintained, so you can still copy the minimized file to your project.</p><h2 id="special-notes-for-version-3-0" tabindex="-1"><a class="header-anchor" href="#special-notes-for-version-3-0" aria-hidden="true">#</a> Special notes for Version 3.0:</h2>',17),m=(0,a.Uk)("In-browser "),g={href:"/docs/upgrading/midi.md",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("MIDI"),w=(0,a.Uk)(" is now supported. There are some extra dependencies when using that feature. Downloadable MIDI is still supported with no extra dependencies."),y=(0,a.uE)('<h2 id="api-changes-for-version-3-0" tabindex="-1"><a class="header-anchor" href="#api-changes-for-version-3-0" aria-hidden="true">#</a> API Changes for Version 3.0</h2><ul><li>Added viewPortHorizontal and scrollHorizontal to the renderParams.</li><li>Add class &quot;slur&quot; to slurs and ties.</li><li>Add &quot;hint measure&quot;</li><li>Allow scrolling in the animation.</li><li>Handle %%titlecaps directive.</li><li>Add curly brace to indicate piano part (with inspiration from Anthony P. Pancerella).</li><li>Add invisible marker to the top of each system so that it can be found easily.</li><li>Add an option to put each line in a separate svg so that browsers will paginate correctly.</li></ul><h2 id="api-changes-for-version-3-0-beta" tabindex="-1"><a class="header-anchor" href="#api-changes-for-version-3-0-beta" aria-hidden="true">#</a> API Changes for Version 3.0 Beta</h2><ul><li><p>The default MIDI program has been changed to &quot;0&quot;.</p></li><li><p>There are a number of new MIDI parameters.</p></li></ul><h2 id="api-changes-for-version-1-11" tabindex="-1"><a class="header-anchor" href="#api-changes-for-version-1-11" aria-hidden="true">#</a> API Changes for Version 1.11</h2><p>&quot;Bouncing Ball&quot; cursor:</p><pre><code>ABCJS.startAnimation(paper, tune, options)\n\tpaper: the output div that the music is in.\n\ttune: the tune object returned by renderAbc.\n\toptions: a hash containing the following:\n\t\thideFinishedMeasures: true or false [ false is the default ]\n\t\tshowCursor: true or false [ false is the default ]\n\t\tbpm: number of beats per minute [ the default is whatever is in the Q: field ]\n</code></pre><p><code>renderABC()</code> now returns the object that was created by the process. This allows further processing.</p><p><code>highlight()</code> and <code>unhighlight()</code> now can be passed an optional class name and color.</p><p>Descriptive classes to all SVG elements: If you include <code>{ add_classes: true }</code> in the rendering params, then a set of classes are applied to each SVG element so they can be manipulated with css.</p><h2 id="api-changes-for-version-1-3" tabindex="-1"><a class="header-anchor" href="#api-changes-for-version-1-3" aria-hidden="true">#</a> API Changes for Version 1.3</h2><p>There is a new public entry point that is designed for those who want some information about what is in a tunebook before processing it.</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>// Tunebook is the contents of the text file containing one or more\n// ABC-formatted tunes, plus global header info, and inter-tune text.\nvar book = new ABCJS.TuneBook(tunebook);\n\nvar fileHeader = book.header;\nvar numberOfTunes = book.tunes.length;\n\nfor (var i = 0; i &lt; numberOfTunes; i++) {\n    var title = book.tunes[i].title;\n    var tuneAndHeader = book.tunes[i].abc;\n    var justTheTune = book.tunes[i].pure;\n    var id = book.tunes[i].id;\n}\n\nvar tune = book.getTuneById(id);\ntune = book.getTuneByTitle(title);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>The variable <code>book</code> contains:</p><table><thead><tr><th>Member</th><th>Description</th></tr></thead><tbody><tr><td>book.header</td><td>This is all of the text that appears before the first tune starts in the file.</td></tr><tr><td>book.tunes.length</td><td>This is how many tunes are in that file.</td></tr><tr><td>book.tunes[i].title</td><td>This is the first title found for the particular tune. White space is trimmed from both the beginning and end.</td></tr><tr><td>book.tunes[i].abc</td><td>This is the particular tune with the global header information added to it. This is what should be passed to the parser in most cases.</td></tr><tr><td>book.tunes[i].pure</td><td>This is the particular tune without the header.</td></tr><tr><td>book.tunes[i].id</td><td>This is the id (that is, the text on the X: line). White space is trimmed from both the beginning and end.</td></tr><tr><td>book.getTuneById</td><td>This will find the FIRST tune in the tune book with the id.</td></tr><tr><td>book.getTuneByTitle</td><td>This will find the FIRST tune in the tune book with the title.</td></tr></tbody></table><h2 id="api-changes-for-version-1-1" tabindex="-1"><a class="header-anchor" href="#api-changes-for-version-1-1" aria-hidden="true">#</a> API Changes for Version 1.1</h2><p>IMPORTANT: Version 1.1 has removed all globals and any side effects of ABCJS except for this single global:</p><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre class="language-JavaScript"><code>window.ABCJS\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>This means that you will have to modify your pages to use the new syntax. All of the old entry points are still available with a slightly different name. Here is a list of all recommended entry points:</p><table><thead><tr><th>New name</th><th>Old name</th></tr></thead><tbody><tr><td>ABCJS.numberOfTunes</td><td>numberOfTunes</td></tr><tr><td>ABCJS.renderAbc</td><td>renderABC</td></tr><tr><td>ABCJS.renderMidi</td><td>renderMidi</td></tr><tr><td>ABCJS.Editor</td><td>ABCEditor</td></tr><tr><td>ABCJS.plugin</td><td>abc_plugin</td></tr></tbody></table>',20),T={},k=(0,n(3744).Z)(T,[["render",function(e,t){const n=(0,a.up)("OutboundLink"),T=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,[s,(0,a._)("a",o,[r,(0,a.Wm)(n)]),l]),d,(0,a._)("p",null,[h,c,u,(0,a.Wm)(T,{to:"/upgrading/synth.html"},{default:(0,a.w5)((()=>[p])),_:1}),b]),f,(0,a._)("p",null,[m,(0,a._)("a",g,[v,(0,a.Wm)(n)]),w]),y],64)}]])}}]);