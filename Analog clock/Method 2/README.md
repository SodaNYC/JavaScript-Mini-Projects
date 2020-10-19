##Introduction

To solve the pesky "return to zero" problem, we can also edit the function by calculating how much degree the hour, minute and second arms will move each second rather than comment the transition property out. 

The advantage of this method is we can get the fancy transition animation.

The disadvantage of this method is since we are no longer relying on the date object to constantly update the time. Instead, we are handing that task to the browser. That means if the browser throttles the JavaScript, meaning slow it down or stops the JavaScript all together, we will lose track of time and the clock will be completely wrong.