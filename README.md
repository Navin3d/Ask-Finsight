# Ask-Finsight
This is an Alexa Skill Kit Application performs Backend call and reads users notifications.

```bash
@echo off
set MAVEN_HOME=C:\apache-maven-3.8.6
set PATH=%MAVEN_HOME%\bin;%PATH%
mvn %*
```
```bash
- mvn versions:set -DnewVersion=1.0.1-SNAPSHOT
  - mvn release:prepare -DreleaseVersion=1.0.1 -DdevelopmentVersion=1.0.2-SNAPSHOT
  - mvn release:perform
```
```bash
Title:
Migrate Project from Ant to Maven

Description:
We need to migrate the current build system for the project from Ant to Maven. The migration will allow us to leverage Maven's dependency management, standardized project structure, and build lifecycle. This migration is crucial for improving our build process, simplifying dependency management, and aligning with best practices.

Background:
The project is currently using Ant as its build tool. While Ant provides flexibility, it lacks some of the more modern features that Maven offers, such as transitive dependency management and a standardized project structure. The migration to Maven will help us streamline our build processes and ensure better consistency across projects.

Tasks:

Analyze the current Ant build scripts to understand the build process and dependencies.
Set up a basic Maven structure for the project.
Migrate all build tasks from Ant to the Maven build lifecycle (e.g., compilation, testing, packaging).
Configure Maven to handle all dependencies, including any custom or third-party libraries.
Update any CI/CD pipelines or build scripts to use Maven instead of Ant.
Test the Maven build to ensure it replicates the Ant build process accurately.
Document the migration process and update any relevant documentation.
Acceptance Criteria:

The project builds successfully using Maven without errors.
All dependencies are correctly managed by Maven.
The Maven build replicates the functionality of the previous Ant build, including any custom build tasks.
The CI/CD pipeline is updated and runs successfully using Maven.
Documentation is updated to reflect the changes in the build process.
```
