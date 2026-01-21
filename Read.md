
                                           #Question ans Section.#

**1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
Ans:
## getElementById:It targets a single element by its ID. It Returns A single element..
## getElementsByClassName:It targets all elements with a specific class.It returns a live HTMLCollection.
## querySelector:It uses CSS selectors to find the first match.It returns A single element.
## querySelectorAll:It Uses CSS selectors to find all matches.It returns a Static NodeLis and it supports .forEach().##

**2.How do you create and insert a new element into the DOM?**
Ans:
## const ul = document.getElementById("ul");
## const li = document.createElement('li');
## li.innerText = "New li Added";
## ul.appendChild(li);

**3.What is Event Bubbling and how does it work?**
Ans:
## Event Bubbling is the way events propagate (travel) in the HTML DOM. When an event happens on an element (like a click on a button), the event first runs on that specific element, and then it "bubbles up" to its parent, then the grandparent, and so on, until it reaches the window.##


**4.What is Event Delegation in JavaScript? Why is it useful?**
Ans:
## Event Delegation is a technique where instead of adding an event listener to every single child element, you add one listener to their parent. ##

**5.What is the difference between preventDefault() and stopPropagation() methods?**
Ans:
# #preventDefault(): Stops the default action of the browser. For example, it stops a link from opening a URL or a form from refreshing the page on submit. It does not stop the event from bubbling up.

# #stopPropagation(): Stops the event from bubbling. It prevents the event from traveling up to the parent elements. It does not stop the default browser behavior.

