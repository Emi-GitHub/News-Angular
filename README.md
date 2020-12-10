<h1>News portal</h1>

<b>API:</b> https://newsapi.org/ <br/>
<b>CREATE API KEY:</b> https://newsapi.org/account

1. Landing page with search
Landing page should initially display news from the top headlines end-point.
Display 20 of those results in 'top-headlines cards' and the rest (if there are more) after 'load more' button click at the bottom.
Each 'top headline card' should display title and description with an image if there is a url to the image in the response. User can then click on a 'READ FULL ARTICLE' button to read the article on a new page, 'Article'.

2. Article page
Article page should display:
Source, author, title, description, image, published at date and the content (if all of these have been provided by the endpoint).

3. Search and sorting
User should be able to search for a term (everything endpoint).
Search results should be displayed in the same way as the top headlines - in cards and user should also be able to read full article in articles page.
Once the user searches for the first term there should appear a 'sort by section' offering options to sort results by popularity or relevance or published date (Top headlines should not have sorting option).
User should be able to go back to home page displaying top headlines

<h3>Landing page</h3>
<img src="src/assets/github/landing-page.png" />

<h3>Article page</h3>
<img src="src/assets/github/article-page.png" />

<h3>Sort by section</h3>
<img src="src/assets/github/sort-page.png" />

<h3>Not found page</h3>
<img src="src/assets/github/not-found.png" />




