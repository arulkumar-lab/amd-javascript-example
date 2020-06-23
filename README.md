# amd-javascript-example
<h2>AMD module with requireJS / jquery using gulp task and direct loading to HTML</h2>

```npm install```

<blockquote>
Windows CLI to bundle the dist folder

```r.js.cmd -o build.js```
</blockquote>

<blockquote>
Bundle the dist folder

```r.js -o build.js```
</blockquote>

Load global compressed file (i.e index.html)

```<script data-main="../dist/scripts/global" src="lib/require.js"></script>```

Load direct JS module (i.e index.html)

```<script data-main="./scripts/config" src="lib/require.js"></script>```

*Note: To enable debugging add <strong>debugger;</strong> or un-comment <strong>//debugger;</strong> from app.js.  

Reference:
https://requirejs.org/docs/optimization.html

![image](https://user-images.githubusercontent.com/56085499/85409178-66d45980-b55d-11ea-8fb0-a0b4164e7f8c.png)

