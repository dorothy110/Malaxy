This is Baolu. My main job is data design and data collection.
I collect and crawl data from web pages, clean up dirty data, and use sql to store in the database mysql. Designed the relationships and variables between tables to help the team link the database in the django framework and solve the data related questions of the team members (such as what data they need to retrieve, what comments to add, and what data format they want to use).



Thanks for your last time code submission feedback:

![image-20221214024037202](/Users/Dorothy/Library/Application Support/typora-user-images/image-20221214024037202.png)



Below is more things I did after last code submission:

1. We would like to make user experience more smoothly. To avoid using VPN to login to database everytime(since we used ischool's free server),  we migrate some to SQLite, and after test, it works. You could also see my work in db.sqlite3.

![image-20221214003753761](/Users/Dorothy/Library/Application Support/typora-user-images/image-20221214003753761.png)



2. I updated more data to our project.(Section, Grade and Course tables)

Plus scraping tool I recommended is "WaybackMachine". (I saw the feedback from our last time code submission that you are interested in): 

![image-20221214001840314](/Users/Dorothy/Library/Application Support/typora-user-images/image-20221214001840314.png)

For example:

First create a site map:

![image-20221213153208566](/Users/Dorothy/Library/Application Support/typora-user-images/image-20221213153208566.png)

Go to the content that we want to scrape:

![image-20221214001119100](/Users/Dorothy/Library/Application Support/typora-user-images/image-20221214001119100.png)

Select those element we want, we could choose element/ text to scrape:

![image-20221213153825517](/Users/Dorothy/Library/Application Support/typora-user-images/image-20221213153825517.png)

3. In this time I also attached my personal draft code for cleaning

I cleaned the data in this MalaxyDataCleanningDraft.ipynb after every crawl. The raw data is not in a uniform format each time, there is no fixed cleaning procedure.  But I share this file and hope it can support any details of my work.
