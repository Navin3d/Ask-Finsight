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
Description:
As part of our strategic initiative, we are moving towards adopting GitLab as our primary CI/CD platform. TeamCity, currently in use, is planned to be decommissioned. This migration will consolidate our CI/CD processes within GitLab, enhancing automation, improving pipeline visibility, and reducing maintenance overhead associated with managing multiple CI/CD tools.

Background:
TeamCity has been our primary CI/CD tool, handling builds, tests, and releases. However, with the broader adoption of GitLab for source control and its robust CI/CD capabilities, it is imperative to transition fully to GitLab. This will not only streamline our workflows but also centralize our CI/CD efforts in a single platform, ensuring better integration, ease of use, and future scalability. As a result, TeamCity will be phased out.

Tasks:

Assessment & Planning:

Review existing CI/CD pipelines and processes in TeamCity.
Identify critical pipelines, dependencies, and custom scripts.
Plan the migration timeline, ensuring minimal disruption to ongoing projects.
Pipeline Migration:

Create equivalent pipelines in GitLab CI/CD for building, testing, and releasing artifacts.
Ensure all custom scripts and configurations are adapted for GitLab CI/CD.
Configure GitLab runners and ensure they have necessary access and resources.
Testing & Validation:

Perform comprehensive testing of the new GitLab CI/CD pipelines to ensure they replicate TeamCity's functionality.
Validate that release tags and artifacts are correctly managed and deployed into Artifactory.
Gather feedback from development teams on the new pipelines and make necessary adjustments.
Decommissioning TeamCity:

Gradually phase out TeamCity pipelines as their GitLab counterparts go live.
Ensure all historical data and configurations from TeamCity are archived or migrated, as necessary.
Officially decommission TeamCity after successful migration of all pipelines.
Documentation & Training:

Update documentation to reflect the migration and new CI/CD processes.
Provide training sessions or materials for teams on using GitLab CI/CD.
Communicate the migration plan and timelines to all stakeholders.
Acceptance Criteria:

All existing CI/CD pipelines are successfully migrated to GitLab CI/CD.
GitLab pipelines fully replicate the functionality and reliability of TeamCity.
Release tags and artifacts are correctly managed and deployed using GitLab CI/CD.
TeamCity is fully decommissioned without impact on active projects.
Documentation is updated, and teams are trained on the new CI/CD platform.

```
