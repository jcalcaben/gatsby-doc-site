(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{POju:function(e,t,l){"use strict";var a=l("q1tI"),n=l.n(a),i=l("3uHE"),s=l("vrFN"),r=(l("FRsz"),function(e){var t=e.title,l=e.children,a=e.slug;return n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{title:t}),n.a.createElement(i.a,{title:t,slug:a},l))});t.a=r},RXBc:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),i=l("Wbzz"),s=l("ezAz"),r=l("9eSz"),d=l.n(r),c=function(){var e=s.data;return n.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},f=l("POju"),o=(l("Z2Ku"),l("L9s1"),l("f3/d"),l("SLSa")),u=function(e){var t=e.days,l=void 0===t?3:t,a=o.data.data,s=a.files.map((function(e){var t=e.file,a=e.fields,s=e.name,r=a&&a.gitLogLatestDate?parseInt(a.gitLogLatestDate,10):-1,d=t.fields.slug.includes("_includes"),c=t.frontmatter.title||s;return r>0&&r<l&&!d?n.a.createElement("li",{key:t.fields.slug},n.a.createElement(i.Link,{to:t.fields.slug},c),n.a.createElement("span",null," - ",r," day(s)")):null}));return console.log(a),n.a.createElement("div",null,n.a.createElement("h2",null,"What's new?"),n.a.createElement("ul",null,s))};t.default=function(){return n.a.createElement(f.a,{title:"Home",slug:"/"},n.a.createElement("h1",null,"Gatsby Documentation Site"),n.a.createElement("p",null,"Welcome to the Gatsby documentation site"),n.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},n.a.createElement(c,null)),n.a.createElement(u,{days:7}),n.a.createElement(i.Link,{to:"/page-2/"},"Go to page 2"))}},SLSa:function(e){e.exports=JSON.parse('{"data":{"data":{"files":[{"file":{"fields":{"slug":"/callouts/"},"frontmatter":{"title":"Callouts"}},"fields":null,"name":"callouts"},{"file":{"fields":{"slug":"/diagrams/"},"frontmatter":{"title":"Diagrams example"}},"fields":null,"name":"diagrams"},{"file":{"fields":{"slug":"/example/"},"frontmatter":{"title":""}},"fields":null,"name":"example"},{"file":{"fields":{"slug":"/hello/"},"frontmatter":{"title":"Hello World"}},"fields":null,"name":"hello"},{"file":{"fields":{"slug":"/import-mdx/"},"frontmatter":{"title":"Write and reuse"}},"fields":null,"name":"import-mdx"},{"file":{"fields":{"slug":"/normal-markdown/"},"frontmatter":{"title":""}},"fields":null,"name":"normal-markdown"},{"file":{"fields":{"slug":"/setup/"},"frontmatter":{"title":"Setup environment"}},"fields":null,"name":"setup"},{"file":{"fields":{"slug":"/variables/"},"frontmatter":{"title":"Setup global variables"}},"fields":null,"name":"variables"},{"file":{"fields":{"slug":"/workflow/"},"frontmatter":{"title":"Begin writing"}},"fields":null,"name":"workflow"},{"file":{"fields":{"slug":"/_includes/re-usable-content/"},"frontmatter":{"title":""}},"fields":null,"name":"re-usable-content"},{"file":{"fields":{"slug":"/cloud/cloud-architecture/"},"frontmatter":{"title":""}},"fields":null,"name":"cloud-architecture"},{"file":{"fields":{"slug":"/cloud/cloud-intro/"},"frontmatter":{"title":""}},"fields":null,"name":"cloud-intro"},{"file":{"fields":{"slug":"/cloud/cloud-table/"},"frontmatter":{"title":""}},"fields":null,"name":"cloud-table"},{"file":{"fields":{"slug":"/cloud/mermaid/"},"frontmatter":{"title":""}},"fields":null,"name":"mermaid"},{"file":{"fields":{"slug":"/navigation/navigation/"},"frontmatter":{"title":""}},"fields":null,"name":"navigation"},{"file":{"fields":{"slug":"/nested/page/"},"frontmatter":{"title":""}},"fields":null,"name":"page"}]}}}')},ezAz:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/gatsby-doc-site/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png","srcSet":"/gatsby-doc-site/static/6d91c86c0fde632ba4cd01062fd9ccfa/5db04/gatsby-astronaut.png 75w,\\n/gatsby-doc-site/static/6d91c86c0fde632ba4cd01062fd9ccfa/6d161/gatsby-astronaut.png 150w,\\n/gatsby-doc-site/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png 300w,\\n/gatsby-doc-site/static/6d91c86c0fde632ba4cd01062fd9ccfa/62b1f/gatsby-astronaut.png 450w,\\n/gatsby-doc-site/static/6d91c86c0fde632ba4cd01062fd9ccfa/2a4de/gatsby-astronaut.png 600w,\\n/gatsby-doc-site/static/6d91c86c0fde632ba4cd01062fd9ccfa/ee604/gatsby-astronaut.png 800w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-819bb3680d19d9dc4800.js.map