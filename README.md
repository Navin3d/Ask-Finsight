# Ask-Finsight
This is an Alexa Skill Kit Application performs Backend call and reads users notifications.

```bash
@echo off
set MAVEN_HOME=C:\apache-maven-3.8.6
set PATH=%MAVEN_HOME%\bin;%PATH%
mvn %*
```
```bash
import java.io.File;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class FileNameComparator {
    public static void main(String[] args) {
        // Define the paths to the directories
        String excelDirectoryPath = "path/to/excel/directory";
        String csvDirectoryPath = "path/to/csv/directory";

        // Extract system names and versions from both directories
        Set<String> excelEntries = extractEntriesFromDirectory(excelDirectoryPath, "excel");
        Set<String> csvEntries = extractEntriesFromDirectory(csvDirectoryPath, "csv");

        // Identify missing or additional files
        identifyDifferences(excelEntries, csvEntries);
    }

    private static Set<String> extractEntriesFromDirectory(String directoryPath, String fileType) {
        Set<String> entries = new HashSet<>();
        File directory = new File(directoryPath);

        if (directory.exists() && directory.isDirectory()) {
            File[] files = directory.listFiles();
            Pattern pattern;

            if ("excel".equals(fileType)) {
                // Pattern to match Excel file names
                pattern = Pattern.compile("Rule-Template-(.*?)-(.*?)-(\\d+)(?:[^.]*?)?\\.xls$");
            } else {
                // Pattern to match CSV file names
                pattern = Pattern.compile("(.*?)-(.*?)-[^-]*-(\\d+)\\.csv$");
            }

            if (files != null) {
                for (File file : files) {
                    if (file.isFile()) {
                        String fileName = file.getName();
                        Matcher matcher = pattern.matcher(fileName);

                        if (matcher.matches()) {
                            String systemNames = matcher.group(1) + "-" + matcher.group(2);
                            String version = matcher.group(3);
                            String entry = systemNames + "-" + version;
                            entries.add(entry);
                        }
                    }
                }
            }
        }
        return entries;
    }

    private static void identifyDifferences(Set<String> excelEntries, Set<String> csvEntries) {
        // Find missing CSVs (entries in Excel but not in CSV)
        Set<String> missingInCsv = new HashSet<>(excelEntries);
        missingInCsv.removeAll(csvEntries);

        // Find additional CSVs (entries in CSV but not in Excel)
        Set<String> additionalInCsv = new HashSet<>(csvEntries);
        additionalInCsv.removeAll(excelEntries);

        System.out.println("Missing CSV files for the following entries:");
        for (String entry : missingInCsv) {
            System.out.println(entry);
        }

        System.out.println("Additional CSV files for the following entries:");
        for (String entry : additionalInCsv) {
            System.out.println(entry);
        }
    }
}

```
