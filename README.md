# Creating a Robust React App Structure

## Introduction
Ever dreamt of a React app that chuckles at bugs and scoffs at spaghetti code? Let’s embark on a journey to create a React app so robust it could survive an apocalypse of bad coding practices.

## Initial Chaos
In those novice days, my code resembled a wild creature — functional, yet utterly chaotic. The project structure, if you could call it that, was a disorganized mess. It sufficed for my humble beginnings, but as the project grew, so did the complexity, and chaos ensued.

With each expansion of the project, finding a specific piece of code became a quest akin to searching for a needle in a haystack, only to realize that the needle was a variable aptly named ‘needle’ buried somewhere deep in the code.

## The Solution: Organized Project Structure
Take the time to learn how to structure your React project before your codebase transforms into an unsolvable mystery novel.

How a project should look like:
```bash
src
|
+-- assets            
|
+-- components        
|
+-- config           
|
+-- features          
|
+-- hooks             
|
+-- lib               
|
+-- providers         
|
+-- routes            
|
+-- stores            
|
+-- test              
|
+-- types             
|
+-- utils           
```

- **components**: Shared components that grace the entire kingdom
- **config**: The vault of global configurations, env variables, and secrets
- **features**: Feature based modules
- **hooks**: Mystical hooks, shared across the entire realm
- **libs**: Re-exporting different libraries preconfigured for the application
- **providers**: Keepers of the application’s life force, the providers
- **routes**: Routes configuration
- **stores**: Global state stores
- **test**: The arena of trials, where utilities and mock servers prove their mettle
- **types**: Base types used across the application
- **utils**: Shared utility functions


## Index File
The index file
Everything from a feature should be exported from the index.ts file which behaves as the public API of the feature.

Notice the index file for each component folder. ⤴

You should import stuff from other features only by using:
```javascript
import {AwesomeComponent} from "@/features/awesome-feature"

//and not

import {AwesomeComponent} from "@/features/awesome-feature/components/AwesomeComponent
```
I included the useFetch hook file as i find it more useful creating such hook

you ll find several errors to fix them :

you need to install axios package if you prefer using axios to fetch data , you can copy the command below

```bash
npm install axios
```

secondly you need to add your own ```TOKEN_HEADER``` in your .env file , if you are using NextJS you have to name your env variable to ```NEXT_PUBLIC_TOKEN_HEADER```

```javascript
// if you are using Next JS replace with NEXT_PUBLIC_TOKEN_HEADER
const header = process.env.TOKEN_HEADER; ```
```
## last part (optional) : 
at Fetch type Props  replace endPoint prop with all possible endpoints for better interaction with code

```javascript
type Fetch = {
  endPoint: 'login'|'sign-up'|'posts/create' // depends on the project your are working on
  method: string;
  body?: any;
  TokenInclude?: boolean;
  token?: string;
};
```

