# Reflection on the automation exercise

##### In terms of the different testing categories that describe the scope of the test, how would you describe the type of test you have just written?

I have just written Automated UI tests, because I am performing tests that interact directly with the user interface to check that the actions that the user will perform in the web browser have the result we expect.


##### Outline the possibilities of automating these specific test cases in different scopes, together with a short summary of the pros and cons of each of them.

The different scopes can be the next ones:

- **Unit tests** to check that the different functions of our code work correctly. The **pros** would be mainly that they are tests that have a very low time cost, and make the maintenance of the code and the incorporation of new functionalities easier. They also make the debugging process easier because each unit test tests a small portion of the code. The main **con** I see is that they require a lot of time to perform all the unit tests.


- **Integration tests** to check the functionality of the different components of a project, and the interaction between them. The main **advantage** of integration testing is that the application is tested to verify that it satisfies the standards set by the customer, therefore, the correct performance of these tests is an indicator that the customer will be satisfied. The **cons** of integration tests are that it becomes more difficult to detect errors, and that these tests require a longer execution time, partly because of the dependencies with other modules.


- **Performance tests** to measure the performance of a project. The main **advantages** of performance tests is that they allow you to measure the speed, accuracy and stability of the project, which allows you to detect failures very easily. The main **disadvantage** of performance testing is the time and resources that need to be invested in it.