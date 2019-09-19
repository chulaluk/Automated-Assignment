# Automated-Assignment
 This is an assignment for writing automated regression test for Taskworld. This test covers login to system, create a project, create a tasklist, create a task, complete a task, and see detail of task.
    
## Getting Started
  The steps below will guide you the way to run this repository from the beginning.

### 1. clone repository
  open terminal and change directory to where you want.
```bash
git clone https://github.com/chulaluk/Automated-Assignment.git
```
  go to the cloned repository.
 ```bash
 cd Automated-Assignment
```
  
### Install Cypress
 ```bash
 npm install cypress --save-dev
```
This will install Cypress into this project.


## Running the tests
  make sure that you are in the project root then run the test by the following:
 ```bash
 ./node_modules/.bin/cypress open
```  
   Finally, the test runner will launch. Then click 'Run all specs' on the right side as screenshot below.
   
   <img width="796" alt="Runallspecs" src="https://user-images.githubusercontent.com/55397372/65214388-0139d500-dad4-11e9-9456-1032305676c3.png">
   
## Snapshots
  This screenshot presents when completed test running. 
  <img width="822" alt="testrun" src="https://user-images.githubusercontent.com/55397372/65214651-d9973c80-dad4-11e9-9e28-e54735fb7309.png">
  
  You can check each command’s snapshot by clicking on the test cases.
  <img width="827" alt="commandsnapshot" src="https://user-images.githubusercontent.com/55397372/65214809-883b7d00-dad5-11e9-9088-60b62ba765c2.png">
