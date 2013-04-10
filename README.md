# repos.js

Show your Github repositories on your website with a little help from [jQuery](http://jquery.com/ "jQuery") and [Mustache.js](https://github.com/janl/mustache.js "Mustache.js").

## Usage

Source all of the necessary Javascript files and replace `USERNAME` with your actual Github username.

### New version

You can also change the script ID of your template and the element where the repos will be rendered:

    $(document).ready(function() {

      GithubRepos.init("USERNAME", {
        repoTemplate: $("#github-repos"),
        repoElement: $("#repo-list")
      });

    });


### Old version

*The old version is kept for reference purposes.*

**Javascript:**

    $(document).ready(function(){

      "use strict";
      getGithubRepositories("USERNAME");

    });

## License

**The MIT License (MIT)**

*Copyright (c) 2013 Ellen Gummesson*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
