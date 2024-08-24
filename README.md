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
import java.io.File;
import java.io.IOException;
import java.nio.file.*;

public class MainToTestClassCopier {
    public static void main(String[] args) {
        String project1MainDir = "project1/src/main/java";
        String project2TestDir = "project2/src/test/java";
        String project1TestDir = "project1/src/test/java";

        try {
            // Walk through all files in the main source directory recursively
            Files.walk(Paths.get(project1MainDir))
                .filter(Files::isRegularFile) // Ensure we are only processing files
                .forEach(mainFile -> {
                    Path relativePath = Paths.get(project1MainDir).relativize(mainFile);
                    String mainFileName = mainFile.getFileName().toString();
                    String testFileName = mainFileName.replace(".java", "Test.java");

                    // Construct the test class path in project2 based on the relative path
                    Path testFilePathInProject2 = Paths.get(project2TestDir, relativePath.toString().replace(mainFileName, testFileName));

                    // Construct the destination path in project1
                    Path destinationTestFilePathInProject1 = Paths.get(project1TestDir, relativePath.toString().replace(mainFileName, testFileName));

                    if (Files.exists(testFilePathInProject2)) {
                        try {
                            // Ensure the destination directory exists
                            Files.createDirectories(destinationTestFilePathInProject1.getParent());
                            
                            // Copy the file, replacing it if it already exists
                            Files.copy(testFilePathInProject2, destinationTestFilePathInProject1, StandardCopyOption.REPLACE_EXISTING);
                            System.out.println("Copied: " + testFilePathInProject2 + " to " + destinationTestFilePathInProject1);
                        } catch (IOException e) {
                            System.err.println("Failed to copy " + testFilePathInProject2 + ": " + e.getMessage());
                        }
                    }
                });
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

```
