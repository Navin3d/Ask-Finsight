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

    private static Set<String> getExcelFileParts(String folderPath) {
        Set<String> fileParts = new HashSet<>();
        File folder = new File(folderPath);
        File[] files = folder.listFiles((dir, name) -> name.endsWith(".xls") || name.endsWith(".xlsx"));

        if (files != null) {
            for (File file : files) {
                String name = file.getName();
                String[] parts = name.split("-");
                if (parts.length >= 4) {
                    // Join parts from index 2 to the second last part with underscore
                    StringBuilder relevantPartBuilder = new StringBuilder();
                    for (int i = 2; i < parts.length - 1; i++) {
                        if (i > 2) {
                            relevantPartBuilder.append("_");
                        }
                        relevantPartBuilder.append(parts[i]);
                    }
                    relevantPartBuilder.append("_").append(parts[parts.length - 1].replace(".xls", "").replace(".xlsx", ""));
                    String relevantPart = relevantPartBuilder.toString().toLowerCase();
                    fileParts.add(relevantPart);
                }
            }
        }

        return fileParts;
    }

    private static Set<String> getCsvFileParts(String folderPath) {
        Set<String> fileParts = new HashSet<>();
        File folder = new File(folderPath);
        File[] files = folder.listFiles((dir, name) -> name.endsWith(".csv"));

        if (files != null) {
            for (File file : files) {
                String name = file.getName();
                String[] parts = name.split("_");
                if (parts.length >= 4) {
                    String relevantPart = (parts[0] + "_" + parts[1] + "_" + parts[3].replace(".csv", "")).toLowerCase();
                    fileParts.add(relevantPart);
                }
            }
        }

        return fileParts;
    }

    private static void findAndPrintMismatches(Set<String> csvFileParts, Set<String> excelFileParts) {
        for (String csvPart : csvFileParts) {
            if (!excelFileParts.contains(csvPart)) {
                System.out.println("Mismatching CSV file: " + csvPart);
            }
        }
    }
}

```
