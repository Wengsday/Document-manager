# Document-manager

# How to Run Frontend Application 

1. Checkout the repository 
2. Install Yarn if you do not have it already 
3. Yarn Install 
4. Yarn Start 

# How to Run Backend Application 

1. Open the Zip Folder, I suggest unzipping it to the main root of your user on both MacOS or Windows as zsh/Powershell both can have root path dependency mapping problems if the folder is elsewhere 
2. To mitigate dependency mapping, this build already has the dependencies fetched within. However, to be on the safe side, I still recommend running npm install 
3. Install npm if you do not have it already. This project generated configs are derived from npm so using yarn on top may cause conflicts. Feel free to try get it working with Yarn if you wish. 
4. npm install 
5. Next you need to setup your postgres configurations. 
6. Install pg (postgres) via npm if you have not done so already. 
7. On the app.module.ts file, please put in the "username: {your-postgres-username}" and "password: {your-postgres-password}" replacing the generic placeholders that are both simply 'postgres'. 
8. run psql -U -{your-postgres-username} on your terminal. You may be prompted to enter your password. 
9. On the psql command line type, sans quotation marks, "CREATE DATABASE document_service;" 
10. On the psql command line type, sans quotation marks, "\l" which will show all your local DB's to make sure document_service has been created. 
11. Exit psql with \q 
12. On the terminal, execute "npm run start" which will start your server. 

# How to get Frontend Connected to Backend on Browser 

As we all know, CORS from localhost -> localhost is a nightmare, especially since Chrome does not support cross-domain to local host. 
The backend service enables cors but unfortunately this still does not solve the local host problem. 

1. I recommend this plugin to enable this -> https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf
2. Install the plugin 
3. On the plugin itself, once you click into it, there is a toggle to turn it off/on. Please turn it on. 
4. On the Plugin, there is the feature to test CORS directly. Run the tests to make sure the necessary HTTP Requests are bypassing CORS. 
5. Refresh Frontend and the CORS issues should be solved. If there are still issues, on the plugin there are options that you can toggle on, which allow for all cross-origin transactions to be completed. Toggle them all on. 
6. Now, Frontend should be able to do HTTP requests to the backend when both are running locally. 

Frontend defaults to running on Port:3000 and Backend defaults to running on Port:4000. Postgres defaults to 5432. Ensure these ports are free before running. 

# How to setup S3 

No need, the tokens are hardcoded and access is programmatic. In a real life scenario, they would be hosted on a secrets.yaml or on the infra platform level, but for the sake of this exercise I've hardcoded the credentials. I could have put them in a .env file but ultimately since it's visible and hardcoded there anyway, it makes no difference. 

# How to use App 

Play around! 

The list of objects is empty because I cleared the bucket out after testing. But, create a new object on the tab and it will appear on your list. Press the arrow to delete it, and the download button to download. 

Please do not try to upload something weird like a .bat file. It will 100% break. 


# Why Frontend-Backend Architecture and not NextJS? 

The first question you may want to ask is why create two repos instead of one. The answer is that from a product perspective, there are likely to be more than one client that needs to access documents. 
Let's use payments an example -> Who would want to access documents pertaining to a merchant? KYC/CDD Compliance certainly will. Then, merchants need to be able to manage their own documents through their portal. Customer Support/BackOffice
will need to manage them for other reasons. This frontend portal is just one client usecase. If we go the nextJS route, we will end up having multiple clients directly integrating to S3 rather than just one backend that many clients can consume. 

# Why a DB? 

Imagine you have an admin user who can see every single "object" that is in the S3 bucket. Everytime the client loads, a request will be made to fetch those objects in a list. As the product scales, we could have tens of thousands and beyond of objects that will end up rendering a huge amount of memory. The DB servces as a reference for traversal. Rather than have all of the objects directly loaded to the client, we load the references to them alongside the metadata stored on the DB so that a user can still access every document possible via download but without having the overlay of huge memory useage. 

The second reason is that a Document will always have corresponding data that is unable to be stored on S3. Think of created_by for example. S3 supports created_by but only at an S3 user level. It is not scalable to create an AWS account for every single user of the application. The DB serves as an intermediary wrapper between S3 and data surrounding the document itself. 

# What is this missing? 

Quite a lot, unfortunately, due to time constraints. 

-Patch endpoint exists on the backend but Frontend doesn't use it to update a bucket object. 
-No OAuth or AuthZ. Too much scope for this task. 
-Testing is missing on the frontend. 
-Testing exists on the backend E2E but is missing on the individual service/client levels. 
-frontend code really needs a refactor, putting HTTP requests into helper function files. Time constraints prevented this. 
-Frontend is relying on useStates, scalability problem again. Look into Redux/Redux toolkit. 
-the delete endpoint is a post on the backend, because axios is treating delete very strangely. 
-only supports images and pdfs. 
-Error handling needs refinement, custom Exception objects to be thrown by backend with proper HTTP Code handling. 
