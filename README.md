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

public class FolderComparison {

    public static void main(String[] args) {
        // Define the paths to the two folders
        String excelFolderPath = "path/to/excel/folder";
        String csvFolderPath = "path/to/csv/folder";

        // Get the sets of relevant parts of the filenames
        Set<String> excelFileParts = getExcelFileParts(excelFolderPath);
        Set<String> csvFileParts = getCsvFileParts(csvFolderPath);

        // Find and print the mismatching CSV filenames
        findAndPrintMismatches(csvFileParts, excelFileParts);
    }

    rivate static Set<String> getExcelFileParts(String folderPath) {
        Set<String> fileParts = new HashSet<>();
        File folder = new File(folderPath);
        File[] files = folder.listFiles((dir, name) -> name.endsWith(".xls") || name.endsWith(".xlsx"));

        if (files != null) {
            for (File file : files) {
                String name = file.getName();
                String relevantPart = extractRelevantPartFromExcel(name);
                if (relevantPart != null) {
                    fileParts.add(relevantPart);
                }
            }
        }

        return fileParts;
    }

    private static String extractRelevantPartFromExcel(String fileName) {
        String baseName = fileName.replace(".xls", "").replace(".xlsx", "");
        int lastSeparatorIndex = Math.max(baseName.lastIndexOf('-'), baseName.lastIndexOf('_'));
        if (lastSeparatorIndex != -1) {
            String version = baseName.substring(lastSeparatorIndex + 1);
            String sourceSystems = baseName.substring(0, lastSeparatorIndex).replaceFirst("^Rules-Template-", "");
            return (sourceSystems + "_" + version).toLowerCase();
        }
        return null;
    }

    private static Set<String> getCsvFileParts(String folderPath) {
        Set<String> fileParts = new HashSet<>();
        File folder = new File(folderPath);
        File[] files = folder.listFiles((dir, name) -> name.endsWith(".csv"));

        if (files != null) {
            for (File file : files) {
                String name = file.getName();
                String relevantPart = extractRelevantPartFromCsv(name);
                if (relevantPart != null) {
                    fileParts.add(relevantPart);
                }
            }
        }

        return fileParts;
    }

    private static String extractRelevantPartFromCsv(String fileName) {
        String baseName = fileName.replace(".csv", "");
        String[] parts = baseName.split("_");
        if (parts.length >= 4) {
            return (parts[0] + "_" + parts[1] + "_" + parts[3]).toLowerCase();
        }
        return null;
    }

    private static void findAndPrintMismatches(Set<String> csvFileParts, Set<String> excelFileParts) {
        for (String csvPart : csvFileParts) {
            if (!excelFileParts.contains(csvPart)) {
                System.out.println("Mismatching CSV file: " + csvPart);
            }
        }
    }
```
